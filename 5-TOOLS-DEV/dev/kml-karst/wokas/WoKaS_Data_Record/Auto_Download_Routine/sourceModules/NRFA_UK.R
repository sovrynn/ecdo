# R code for downloading spring (karst) discharge observations from 
# National River Flow Archive (NRFA) online data portal of Centre for Ecology and Hydrology, UK
# Author: Tunde Olarinoye
# Institute: University of Freiburg, Germany
# Email: tunde.olarinoye@hydmod.uni-freiburg.de

Sys.setenv(language = "en")

# required library
library(XML)
library(httr)
set_config( config( ssl_verifypeer = 0L ) )

# set directory
basePath ='./'
sourceModule <- paste0(basePath, 'sourceModules/')
source(paste0(sourceModule,'fileIO.R'))

##====================================================
##                    SECTION 1:                    ==  
##  DOWNLOAD DISCHARGE FLOW OBSERVATION FROM NRFA   ==  
##====================================================
# web link to select gauga station
baseUrl <- "https://nrfa.ceh.ac.uk/data/station/download?stn=%s&dt=gdf"
content_type <- "text/html; charset=utf-8"

# guage station info
wokasRDS <- readRDS((paste0(sourceModule, "station_info.rds")))
stationInfo <- subset(wokasRDS, ISO == "GB" & Source_type == "O")

# download url for gauge stations
dUrls <- sprintf(baseUrl, stationInfo$Local_database_ID)

# create folder to download datasets
outfolder <- paste0(basePath,"NRFA")
dir.create(outfolder)

# for every gauge station
for (i in 1:length(dUrls)) {
  
  # send a GET request for download page
  r <- GET(dUrls[i])
  
  # send POST request to retreive content 
  body <- list(db="nrfa_public", stn=stationInfo$Local_database_ID[i], dt="gdf")
  dLink <- POST(sprintf("https://nrfaapps.ceh.ac.uk/nrfa/data/tsData/%s_gdf.csv",stationInfo$Local_database_ID[i]), content_type=content_type, body = body, encode = "form")
    
  # write content to csv
  cat(stationInfo$Local_database_ID[i],"\n", "-> download\n")
  rContent <- suppressWarnings(content(dLink))
  write.csv(rContent, paste0(outfolder,"/", stationInfo$Local_database_ID[i], ".csv"), row.names = F)
  
##==========================================================
##                        SECTION 2:                      ==  
##  Unzip downloaded file, re-format and homogenisation   ==  
##==========================================================
  
  # read csv, skip comment lines
  skip_no <- grep("last",readLines(paste0(outfolder,"/", stationInfo$Local_database_ID[i],".csv")))
  
  if(length(skip_no) == 0)
    next
  
  tableData <- read.csv(paste0(outfolder,"/", stationInfo$Local_database_ID[i],".csv"), sep=",", header=F, skip=skip_no, col.names=c("date", "discharge", "code"))
  
  # extract discharge data
  springData <- tableData[,c("date","discharge")]
  springData$date <- format(as.Date(springData$date), "%d.%m.%Y")
  
  # extract station meta info
  metaInfo <- read.csv(paste0(outfolder,"/", stationInfo$Local_database_ID[i],".csv"), sep=",", header=F)
  
  # create meta data list
  metaData <- list(id = as.character(metaInfo$V3[4]),
                   newID = stationInfo$Location.Identifier[i],
                   name = stationInfo$Name[i],
                   source = "UK National River Flow Archive",
                   sourceUrl = "https://nrfa.ceh.ac.uk/",
                   LAT = as.numeric(stationInfo$Latitude[i]),
                   LON = as.numeric(stationInfo$Longitude[i]),
                   unit = "m^3/s")
  
  # write file to disk
  cat(stationInfo$Local_database_ID[i], "-> write file\n")
  fileIO.writeSpringData(springData, metaData)
}

# delete outfolder tmp dir
unlink(outfolder, recursive = T)

cat("-> download from NRFA done :)\n")
# --end

