# R code for downloading spring (karst) discharge observations from 
# Landesanstalt für Umwelt Baden-Wuerttemberg online data portal of USGS, Germany
# Author: Tunde Olarinoye
# Institute: University of Freiburg, Germany
# Email: tunde.olarinoye@hydmod.uni-freiburg.de

Sys.setenv(language="en")

# require packages
library(XML)
library(rgdal)
library(httr)
library(readxl)

# set directory
basePath ='./'
sourceModule <- paste0(basePath, 'sourceModules/')
source(paste0(sourceModule,'fileIO.r'))

##==========================================================
##                        SECTION 1                       ==                             
##    Load the UDO LUBW web link and download datasets    ==
##==========================================================
# url link to LUBW data service page
baseUrl <- "http://udo.lubw.baden-wuerttemberg.de/public/pages/selector/index.xhtml"

#permaLink for pre-selected karst springs
permaLink <- "https://udo.lubw.baden-wuerttemberg.de/public/q/jL5YC"  
rawLines <- readLines(permaLink)
stnPreselected <- rawLines[grep("values", rawLines)]

# get links containing springs name and id
idLink <- gsub("[\\]|[\"]","",(unlist(lapply(stnPreselected, FUN = function(x){unlist(strsplit(x,"values"))[-1]}))))

# get spring ids
id <- gsub("[:[]", "", unlist(lapply(idLink, FUN = function(x){unlist(strsplit(x,","))[1]})))

# get spring names
name <- unlist(lapply(idLink, FUN = function(x){unlist(strsplit(x,","))[3]}))

# cerate dataframe for ids and names
stationInfo <- data.frame(id, name)

# get WoKaS identifier for spring locations
wokasRDS <- readRDS(paste0(sourceModule, "station_info.rds"))
stationInfo <- merge(stationInfo, wokasRDS, by.x = "id", by.y = "Local_database_ID")

# url for data download
dUrl <- "https://udo.lubw.baden-wuerttemberg.de/public/actions/tableResult/displayExcelTableResult.xhtml?timestamp="
content_type = "application/x-www-form-urlencoded; charset=UTF-8"

# extract timestamp require for download from the permaLink
# its important to update permaLink when new springs are added from the web source
stampLine <- rawLines[grep("timestamp",rawLines)][1]
timeStamp <- gsub("\'", "", unlist(strsplit(unlist(strsplit(stampLine,"?timestamp="))[2], ","))[1])

# download link
dLink <- paste0(dUrl,timeStamp)
getData <- GET(dLink)

if(getData$status!=200){
  cat("download error")
}

# create folder to download datasets
outfolder <- paste0(basePath,"tmp_UDO")
dir.create(outfolder)

# download data
download.file(dLink, destfile = paste0(outfolder,"/allsprings.xlsx"), mode = "wb", quiet = FALSE )

##==========================================================================
##                                SECTION 2                               ==                             
##    Refine datasets: Reproject coordinates, subset and Homogenization   ==
##==========================================================================

# read downloaded csv file
tableData <- read_excel(paste0(outfolder,"/allsprings.xlsx"), skip=1, col_names=c("id","name","lon_GK","lat_GK","gemeinde","komponente","Date","Q","unit","zustandige"))

# reformat date
tableData$date <- format(tableData$Date, "%d.%m.%Y %H:%M:%S")

# convert discharge to m^3/s
tableData$discharge <- as.numeric(tableData$Q)/1000

# add projection information (actually this convert the data.frame to a variable of class "SpatialPoints")
GK <- data.frame(tableData$lon_GK, tableData$lat_GK)
names(GK) <- c("lon_GK", "lat_GK")
coordinates(GK) <- c("lon_GK", "lat_GK")

# defining WGS 84/UTM Zone 32
proj4string(GK) <- CRS("+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs ")

# transform coordinates to  epsg:4326 WGS84
WGS84 <- as.data.frame(spTransform(GK, CRS("+proj=longlat +datum=WGS84 +ellps=WGS84 +towgs84=0,0,0")))
names(WGS84) <- c("lon_wgs84","lat_wgs84")

# combine data frames
tableData <- cbind(tableData,WGS84)

# get station ids of datasets downloaded
ids <- unique(tableData$id)

# for each id 
for(i in 1:length(ids)){
  # subset dataset
  springFill <- subset(tableData, id==ids[i])
  springData <- subset(tableData, id==ids[i], select = c("date","discharge"))
  
  # get spring's WoKaS id and spring name from stationInfo
  wokasMeta <- subset(stationInfo, id == ids[i])
  
  # write file to csv
  metaData <- list(id = wokasMeta$id,
                   newID = wokasMeta$Location.Identifier,
                   name = wokasMeta$Name,
                   source = "Landesanstalt für Umwelt, Baden-Württemberg",
                   sourceUrl = "http://udo.lubw.baden-wuerttemberg.de/public/",
                   LAT = as.numeric(springFill[1,14]),
                   LON = as.numeric(springFill[1,13]),
                   unit = "m^3/s")
  fileIO.writeSpringData(springData, metaData)
}

# delete outfolder tmp dir
unlink(outfolder, recursive = T)

