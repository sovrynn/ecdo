# R code for downloading spring (karst) discharge observations from HydroNet
# online data portal of Environmental Protection Agency of Ireland
# Author: Tunde Olarinoye
# Institute: University of Freiburg, Germany
# Email: tunde.olarinoye@hydmod.uni-freiburg.de

Sys.setenv(language = "en")

# required library
library(XML)
library(httr)
library(RHTMLForms)
library(jsonlite)

# set base dir
basePath ='./'
sourceModule <- paste0(basePath, 'sourceModules/')
source(paste0(sourceModule,'fileIO.R'))

##==============================================================
##                          SECTION 1                         ==
##    Get springs metadata, url links and download datasets   ==
##==============================================================
# url link for all monitoring stations meta information
metaUrl <- "http://www.epa.ie/Hydronet/output/internet/layers/20/index.json"

# Transform information from JSON to data frame
data.df <- data.frame(fromJSON(metaUrl))

# Select only spring stations with flow records
springs <- subset(data.df, subset = data.df$L1_river_name == "SPRING" & data.df$L1_DATA_AVAILABLE == "Water Level and Flow")

# Select columns with the springs important meta information 
meta <- c("metadata_station_name","metadata_station_no","metadata_station_id" ,"L1_WTO_OBJECT","metadata_station_longitude","metadata_station_latitude","L1_station_status","metadata_catchment_name","L1_CATCHMENT_SIZE")
springs_meta <- subset(springs, select = meta)

# link containing the href string for downoading dataset
x_links <- "http://www.epa.ie/Hydronet/output/internet/stations/index.json"
links.df <- data.frame(fromJSON(x_links))

# get all "href" links for all meta stations
href <- NULL

# for every "href" associated with a meta station number..
for (i in 1:nrow(springs_meta)){
  
  # extract the "href"
  href[i] <- unlist(strsplit(links.df$X_links.href[grep(springs_meta$metadata_station_no[i], links.df$X_links.href)],"/"))[3]
  
} # ignore warning messages

# meta station number and name to save dataset
staNum <- springs_meta$metadata_station_no
staNam <- springs_meta$metadata_station_name

# get data download link for all meta stations using the extracted href
dUrls <- sprintf("http://www.epa.ie/Hydronet/output/internet/stations/%s/%s/Q/complete_15min.zip", href, staNum)

# create directory to downlaod ".zip" files
outfolder <- paste0(basePath,"tmp_EPA")
dir.create(outfolder)

# for each meta staion download link..
for (i in 1:length(dUrls)){
  
  # send a GET request for download page
  rGet <- GET(dUrls[i])
  
  # check page response status for download error
  if(rGet$status !=200){
    cat("problem while downloading data from", dUrls[i])
    next
  }
  
  # download spring discharge dataset
  download.file(dUrls[i], destfile = paste0(outfolder, "/", staNum[i],"@", staNam[i], ".zip"), mode = "wb", quiet = T)
}

##==================================================
##                    SECTION 2                   ==
##    Refine datasets: Unzip and Homogenization   ==
##==================================================
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
  unzipped <- list.files(path = unzipFolder, full.names = T)
  
  # create a complete list of unzipped files
  unzippedList <- c(unzippedList, unzipped)
  
  # remove zip archive file paths
  file.remove(zipPath[i])
  
  # for every extracted csv file
  for(i in 1:length(unzippedList)){
    
    # count number of rows to skip
    skip_no <- grep("#Timestamp",readLines(unzippedList[i]))
    if(skip_no==0){
      next
    }
    
    # read csv file
    springData <- read.csv(unzippedList[i], sep=";", header=F, skip = skip_no, col.names = c("date","discharge","Quality.Code.Name"))
    
    #change date format
    times <- as.character(springData$date)
    Y <- lapply(times,function(x){unlist(strsplit(x,"-"))[1]})
    m <- lapply(times,function(x){unlist(strsplit(x,"-"))[2]})
    d <- lapply(lapply(times,function(x){unlist(strsplit(x,"-"))[3]}), function(x){unlist(strsplit(x," "))[1]})
    hms <- lapply(lapply(times,function(x){unlist(strsplit(x,"-"))[3]}), function(x){unlist(strsplit(x," "))[2]})
    springData$date <- paste0(d,".",m,".",Y," ",hms)
    
    # create name to save csv file
    stripID <- tail(unlist(strsplit(unlist(strsplit(unzippedList[i], "@"))[1], "/")),1)
    wokasRDS <- readRDS(paste0(sourceModule,"/station_info.rds"))
    stationInfo <- subset(wokasRDS, ISO == "IE" & Source_type == "O" )
    wokasMeta <- subset(stationInfo, Local_database_ID == stripID)
    
    metaData <- list(id = as.character(stripID),
                     newID = wokasMeta$Location.Identifier,
                     name = wokasMeta$Name,
                     source = "Environmental Protection Agency (EPA) Ireland",
                     sourceUrl = "http://www.epa.ie/",
                     LAT = as.numeric(wokasMeta$Latitude),
                     LON = as.numeric(wokasMeta$Longitude),
                     unit = "m^3/s")
    
    fileIO.writeSpringData(springData[,c("date","discharge")], metaData)
  }
  
}

# addtional report for zipped files
# "Can not open zip archive" means zip file is empty
zippedRep <- data.frame(zipList, zipOut)

# delete temp directory
unlink(outfolder, recursive = T)

##--end

