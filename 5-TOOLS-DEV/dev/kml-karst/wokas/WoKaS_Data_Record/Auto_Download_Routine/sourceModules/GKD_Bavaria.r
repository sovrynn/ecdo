
# required packages
library("XML")
library("rgdal")
library("httr")
library("pdftools")

Sys.setenv(LANGUAGE="en")

basePath ='./'
sourceModule <- paste0(basePath, 'sourceModules/')
source(paste0(sourceModule,'fileIO.R'))

# create folder to download datasets
outfolder <- paste0(basePath,"tmp_GKD")
dir.create(outfolder)

##============================================
##                  SECTION 1               ==
##    Download spring discharge datasets    ==
##============================================
# load table data from gwk website
baseUrl <- "https://www.gkd.bayern.de/de/grundwasser/quellschuettung//tabellen"

# springs gauge stations
wokasRDS <- readRDS(paste0(sourceModule,"/station_info.rds"))
stationInfo <- subset(wokasRDS, ISO == "DE" & Research_group == "GKD" )

# for every karst index
#for(i in 1:length(karstIndices)){
for(i in 1:nrow(stationInfo)){  
  
	selectedId <- stationInfo$Local_database_ID[i]

	# url needed for the data request
	dlReqUrl <- "https://www.gkd.bayern.de/de/downloadcenter/enqueue_download" 
	
	# url needed for the data download
	dlBaseUrl <- "https://www.gkd.bayern.de/de/downloadcenter/download?token="
	content_type = "application/x-www-form-urlencoded; charset=UTF-8"
	body = list(zr="gesamt",begin="01.07.2018",email="",ende="23.07.2018",wertart="tmw",f="",
				t=sprintf('{"%s":["grundwasser.quelle"]}',selectedId))
	
	# send a http POST (server then starts to prepare the download and returns a "deep link"
	# in this case the additional header information 'X-Requested-With' = 'XMLHttpRequest' is critical
	r <- POST(dlReqUrl, content_type = content_type, body = body, encode="form", add_headers('X-Requested-With' = 'XMLHttpRequest'))
	
	if(r$status!=200){
		cat("problem while requesting download :(")
		next
	}
	
	# extract deep link from the servers response to the POST
	dlDeeplink <- gsub('"}?','',strsplit(content(r,'text'),'deeplink":')[[1]][2])
	
	# paste the download link together
	dlUrl <- paste0(dlBaseUrl, dlDeeplink) 	

	# send a http GET until the response page contains a link which can be identified by '>hier</a>'
	cat("wait for download")
	for(tryCount in 1:20){
		cat('.')
		r <- GET(dlUrl)
		x <- strsplit(content(r,'text'), "'>hier</a>")[[1]]
		if(length(x)>1) break
		Sys.sleep(2)
	}
	
	if(length(x)<2){
		cat("download timeout :(\n")
		next
	}
	cat("-> download")

	tmpFileArchive <- paste0(outfolder,'/temp.zip')
	# get the file (url to the file is dlUrl pasted together with '&dl=1')
	download.file(paste0(dlUrl,'&dl=1'), tmpFileArchive, mode="wb", quiet=F)

	cat(" -> processing")
##==========================================================
##                      SECTION 2:                        ==  
##  Unzip downloaded file, re-format and homogenisation   ==  
##==========================================================
	# get the names of files within the archive
	fileNames <- unzip(tmpFileArchive, list=TRUE)[,'Name']
	
	# filter theses names and only continue with file names ending with 'csv'
	fileNames <- fileNames[grep('csv$',fileNames)]

	# extract id, start and end for each file 
	fileInfos <- NULL
	for(f in fileNames){
		f_last <- gsub('.*/','',f)
		x <- unlist(strsplit(f_last, '_'))
		if(length(x)==3) next
		id = x[1]
		if(length(x)==4){
			start = as.Date(x[2], "%d.%m.%Y")
			end = as.Date(x[3], "%d.%m.%Y")
		}else{
			start = as.Date(NA)
			end = as.Date(x[4], "%d.%m.%Y")
		}
		fileInfos <- rbind(fileInfos, data.frame(id=id, start=start, end=end, filename=f))
	}
	# order files by end date
	fileInfos <- fileInfos[order(fileInfos$end),] 

	# loop over all files and combine their data
	springData <- NULL
	for( j in 1:nrow(fileInfos)){
		tmpFileCsv <- unzip(tmpFileArchive, as.character(fileInfos$filename[j]), junkpaths=TRUE, exdir=dirname(tmpFileArchive))
		con <- file(tmpFileCsv,'r')
		line <- '-'
		while(line !='') line <- readLines(con,n=1)
		
		dat <- try(read.table(con, sep=';', header=TRUE, dec=','),silent=TRUE)
		
		close(con)
		if (class(dat) == "try-error"){
		  # remove the temporary csv file
		  file.remove(tmpFileCsv) 
		  next
		}
		# extract coordinates from file
		if (class(dat) != "try-error"){
		  
		  coord_skip <- grep('Rechtswert',readLines(tmpFileCsv))
		  
		  if(coord_skip==0){
		    WGS84 <- data.frame(lon_GK=NA,lat_GK=NA)
		  
		    }else{
		    coord <- read.csv(tmpFileCsv, header=F, sep=';', skip=coord_skip-1, nrows=1, col.names=c('lon','lat','projection'), colClasses=c('character','character','character'))
		    
		    # get coordinate in EPSG 31468 projection
		    lon <- as.numeric(gsub('[^0-9.]','',coord$lon)); lat <- as.numeric(gsub('[^0-9.]','',coord$lat))
		    GK <- data.frame(lon_GK=as.numeric(lon),lat_GK=as.numeric(lat))
		    
		    # add projection information (actually this converst the data.frame to a variable of class "SpatialPoints")
		    coordinates(GK) <- c("lon_GK", "lat_GK")
		    proj4string(GK) <- CRS("+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs") # Defining Gauss-Krueger zone 4
		    
		    # transform coordinates from Gauss-Kruger Zone 4 to WGS84
		    WGS84 <- spTransform(GK, CRS("+proj=longlat +datum=WGS84 +ellps=WGS84 +towgs84=0,0,0"))
		  }
		  
		}
		
		names(dat) <- c('date','discharge','qualityState')
		dat$date <- format(as.Date(dat$date),'%d.%m.%Y')
		
		# convert discharge unit to m^3/s
		dat$discharge <- dat$discharge*0.001
		
		springData <- rbind(springData, dat)
		
	}
	file.remove(tmpFileArchive) # remove the temporary zip archive csv file
	
	cat(" -> write file")
	
	metaData <- list(id = selectedId,
	                 newID = stationInfo$Location.Identifier[i],
	                 name = stationInfo$Name[i],
	                 source = "GKD_Bavaria",
	                 sourceUrl = "https://www.gkd.bayern.de/de/grundwasser/quellschuettung//tabellen",
	                 LAT=WGS84$lat_GK,
	                 LON=WGS84$lon_GK,
	                 unit='m^3/s')

	fileIO.writeSpringData(springData[,c('date','discharge')], metaData)
	
	cat(" -> done :)\n")
}
# delete dir
unlink(outfolder, recursive = T)

## -- end
 


