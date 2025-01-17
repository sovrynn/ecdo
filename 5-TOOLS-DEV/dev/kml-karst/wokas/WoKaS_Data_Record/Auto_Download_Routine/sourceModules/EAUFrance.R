# R code for downloading spring (karst) discharge 
# observations from BANQUE HYDRO online data portal, France
# Author: Tunde Olarinoye
# Institute: University of Freiburg, Germany
# Email: tunde.olarinoye@hydmod.uni-freiburg.de

Sys.setenv(language = "en")

# required packages
library(XML)
library(httr)
library(rgdal)

# set directory
basePath ='./'
sourceModule <- paste0(basePath, 'sourceModules/')
source(paste0(sourceModule,'fileIO.R'))

##==========================================================================
##                              SECTION 1:                                ==  
##  DOWNLOAD KARST SPRINGS DISCHARGE FROM FRANCE BANQUE HYDRO DATABASE    ==  
##==========================================================================
# web link for login to Baque Hydro database
loginUrl <- "http://www.hydro.eaufrance.fr/indexd.php"
content_type <- "text/html; charset=iso-8859-1"

# extract login details from read_me.txt file
read_username <- grep("Username", readLines(paste0(basePath, "read_me.txt")), value = TRUE)
user <- unlist(strsplit(read_username, "= "))[2]
read_password <- grep("Password", readLines(paste0(basePath, "read_me.txt")), value = TRUE)
pass <- unlist(strsplit(read_password, "= "))[2]

# login url query
login_query <- list(connect=1,username=user,password=pass,btnCnx="Ok")

# send http POST request to login
logIn <- POST(loginUrl,content_type=content_type,body=login_query,encode="form")
Sys.sleep(3)

# springs gauge stations
wokasRDS <- readRDS(paste0(sourceModule,"/station_info.rds"))
stationInfo <- subset(wokasRDS, ISO == "FR" & Source_type == "O" )

# web link to search guage station(s)
searchUrl <- "http://www.hydro.eaufrance.fr/selection.php?consulte=rechercher"
r <- GET(searchUrl)

# web link to search and select guage station(s) 
selectUrl <- "http://www.hydro.eaufrance.fr/selection.php"

# create folder to download datasets
outfolder <- paste0(basePath,"tmp_EAU")
dir.create(outfolder)

# for each guage station
for(i in 1:nrow(stationInfo)){
  # delete all pending files already on home page
  del_file <- GET(paste0(loginUrl, "?cmd=supprimertous"))
  
  # select station id
  id <- as.character(stationInfo$Local_database_ID[i])
  
  # search for guage station
  search_query <- list(cmd="filtrer",consulte="rechercher",code_station=id,cours_d_eau="",commune="",departement="",bassin_hydrographique="",station_en_service=1,station_hydrologique=1,btnValider="Nouvelle+Recherche")
  
  # send http POST to search station
  search_station <- POST(selectUrl,content_type=content_type,body=search_query,encode="form")
  
  # generate url query to select station
  select_query <- list(cmd="filtrer",consulte="rechercher",code_station=id,cours_d_eau="",commune="",departement="",bassin_hydrographique="",station_en_service=1,station_hydrologique=1,station=id,btnValider="Exporter")
  names(select_query)[10] <- "station[]"
  
  # send http POST request to select station(s)
  select_station <- POST(selectUrl,content_type=content_type,body=select_query,encode="form")
  
  # web link to export observation dataset(s)
  exportUrl <- "http://www.hydro.eaufrance.fr/presentation/export_proc.php"
  
  # export url query
  export_query <- list(categorie="exporter",station=id,format=2,format_decimal="gb",procedure="QTVAR")
  names(export_query)[2] <- "station[]"
  
  # send http POST request for export
  export_proc <- POST(exportUrl,content_type=content_type,body=export_query,encode="form")
  
  # date query for requested dataset(s)
  start_date <- "01/10/1953"
  end_date <- format(Sys.Date(),"%d/%m/%Y")
  date_query <- list(procedure="qtvar",affichage=2,echelle=1,date1=start_date,heure1="00:00",date2=end_date,heure2="23:59",precision=05,btnValider="Valider")
  
  # send http POST request for requested date
  export_data <- POST(exportUrl,content_type=content_type,body=date_query,encode="form")
  
  # one minute wait
  Sys.sleep(60)
  
  # The exported zip file is sent to the main page, send http GET query to reload loginUrl to download the file 
  # wait till the reloaded login page indicates that the zip file is ready for download, maximum waiting time is 2 minutes
  # the zip file is ready for download when the word "REALISE" is identified on the source page
  # for every 2 seconds in 2 minutes
  for(tryCount in 1:60){
    cat(".")
    # send http GET request to reload home page
    login_page <- GET(loginUrl)
    
    # read home page source code
    source_page <- capture.output(htmlParse(content(login_page, "text", encoding = "iso-8859-1")))
    
    # try capture the word "REALISE"
    file_ready <- grep("REALISE", source_page)
    
    # if "REALISE" is captured
    if(length(file_ready) > 0){
      cat("file download in progress")
      
      # extract the additional link identified by "tmp" from source page for the url to download the zip file
      catch_tmp <- unlist(strsplit(source_page[grep('href="tmp/', source_page)], '"'))[3]
      
      # generate download link
      downloadUrl <- paste0("http://www.hydro.eaufrance.fr/",catch_tmp)
      
      # create file name
      stationName <- gsub("/","",as.character(stationInfo$Name[i]))
      fileName <- paste0(id,"@",stationName, ".zip")
      
      # download file to dir
      download.file(downloadUrl, destfile = paste0(outfolder,"/", fileName), mode = "wb", quiet = F)
      
      # delete file from home page after download
      del_file <- GET(paste0(loginUrl, "?cmd=supprimertous"))
      
      break
    }
    Sys.sleep(2)
  }
  # if "REALISE" is not found after 2 minutes
  if(length(file_ready) < 1){
    cat("download timeout :(\n")
    
  }
}
# log out from Banque Hydro website
logOut <- GET("http://www.hydro.eaufrance.fr/indexd.php?disconnect=1")

##==========================================================
##                        SECTION 2:                      ==  
##  Unzip downloaded file, re-format and homogenisation   ==  
##==========================================================
# list all ".zip" files
zipList <- list.files(outfolder, pattern = ".zip")

# path to all ".zip" files
zipPath <- paste0(outfolder,"/",zipList)

# get the names of files within the archive
unzippedList <- vector(mode = "character", length = 0L)

# get summary of unzip report
zipOut <- NULL

# for every ".zip" file in the zip directory
for (i in 1:length(zipPath)){
  
  # give the directory and name of the output folder
  unzipFolder <- paste0(outfolder, "/", gsub(".zip", "", zipList[i]))
  
  # create the output folder
  dir.create(unzipFolder)
  
  # unzip into the output folder created
  zipOut[i] <- tryCatch({unzip(zipPath[i], exdir = unzipFolder, overwrite = T)},
                        
                        # see if ".zip" extraction process gives an error
                        error = function(error_message){
                          message(paste0(zipPath[i],": file extracting error"))
                          message("Here is the execution error from R")
                          message(error_message)
                          return("Execution error")
                        },
                        
                        # see if ".zip" extraction process gives a warning
                        warning = function(warning_message){
                          message(paste0(zipPath[i],": can not open file as zip archive"))
                          message("Here is warning message from R")
                          message(warning_message)
                          return("Can not open zip archive")
                        },
                        
                        # see processed ".zip" file
                        finally = {
                          message()
                          message(paste0(zipPath[i],": file processed"))
                        }
  )
  # get a list of the unzipped file(s)
  unzipped <- list.files(path = unzipFolder, pattern =".csv", full.names = T)
  
  # create a complete list of unzipped files
  unzippedList <- c(unzippedList, unzipped)
  
  # remove zip archive file paths
  file.remove(zipPath[i])
}

# for every extracted csv file
for(i in 1:length(unzippedList)){
  
  # read csv file
  skip_no <- grep("Date",readLines(unzippedList[i]))
  
  if(length(skip_no) == 0){
    
    # delete directory
    unlink(paste0(outfolder,unlist(strsplit(unzippedList[i], "/"))[3]), recursive = T)
    next
  }
  table_data <- read.table(unzippedList[i], sep = ";", dec = ".", skip = skip_no-1, header=T, col.names = c("date","discharge","Validit?","Continuit?","X"))
  
  # format date column
  table_data$date <- gsub("/", ".", table_data$date)
  
  # select date and discharge columns
  springData <- table_data[,c("date","discharge")]
  
  # create metadata list
  stripName <- tail(unlist(strsplit(unzippedList[i], "/")),2)[1]
  eauID <- unlist(strsplit(stripName,"@"))[1]
  wokasMeta <- subset(stationInfo, Local_database_ID == eauID)
  
  metaData <- list(id = as.character(eauID),
                   newID = wokasMeta$Location.Identifier,
                   name = wokasMeta$Name,
                   source = "Banque Hydro France",
                   sourceUrl = "http://www.hydro.eaufrance.fr/indexd.php?connect=1",
                   LAT = as.numeric(wokasMeta$Latitude),
                   LON = as.numeric(wokasMeta$Longitude),
                   unit = "m^3/s")
  
  fileIO.writeSpringData(springData, metaData)
  
  # delete directory
  unlink(paste0(outfolder,unlist(strsplit(unzippedList[i], "/"))[3]), recursive = T)
  
}

# addtional report for zipped files
# "Can not open zip archive" means zip file is empty
zippedRep <- data.frame(zipList, zipOut)

# delete outfolder tmp dir
unlink(outfolder, recursive = T)
# --end
