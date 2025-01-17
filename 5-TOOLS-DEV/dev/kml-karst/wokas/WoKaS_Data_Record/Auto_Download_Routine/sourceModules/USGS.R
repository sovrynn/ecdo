# R code for downloading spring (karst) discharge observations from 
# National Water Information System online data portal of USGS, United States
# Author: Tunde Olarinoye
# Institute: University of Freiburg, Germany
# Email: tunde.olarinoye@hydmod.uni-freiburg.de

Sys.setenv(LANGUAGE="en")

# required library
library(XML)
library(httr)
library(RHTMLForms)

# set base dir
basePath ='./'
sourceModule <- paste0(basePath, 'sourceModules/')
source(paste0(sourceModule,'fileIO.R'))

##========================================================================
##                                SECTION 1                             ==                             
##    Load the USGS web link and send GET request to download dataset   ==
##========================================================================
# NWIS url link fro data search
baseUrl <- "https://waterdata.usgs.gov/nwis/uv?referred_module=gw&search_criteria=site_tp_cd&submitted_form=introduction"

# url to download all spring discharge observations from NWIS,link is cut into two parts to insert the date query string
dUrl_1 <- "https://waterdata.usgs.gov/nwis/uv?referred_module=gw&site_tp_cd=SP&index_pmcode_00060=1&group_key=NONE&sitefile_output_format=html_table&column_name=agency_cd&column_name=site_no&column_name=station_nm&column_name=dec_lat_va&column_name=dec_long_va&column_name=alt_va&column_name=drain_area_va&range_selection=date_range&begin_date=1950-10-01&" ## insert query string here end_date=2018-11-16 
dUrl_2 <- "&format=rdb&date_format=MM/DD/YYYY&rdb_compression=file&list_of_search_criteria=site_tp_cd%2Crealtime_parameter_selection"

# link to prompt the download and save page,link is cut into two parts to insert the date query
getData_1 <- "https://nwis.waterdata.usgs.gov/usa/nwis/uv/?referred_module=gw&site_tp_cd=SP&index_pmcode_00060=1&group_key=NONE&sitefile_output_format=html_table&column_name=agency_cd&column_name=site_no&column_name=station_nm&column_name=dec_lat_va&column_name=dec_long_va&column_name=alt_va&column_name=drain_area_va&range_selection=date_range&begin_date=1950-10-01&"  ## insert query string here end_date=2018-11-16
getData_2 <- "&format=rdb&date_format=MM/DD/YYYY&rdb_compression=file&list_of_search_criteria=site_tp_cd%2Crealtime_parameter_selection"

# date query string
qstring <- "end_date=" 
today <- Sys.Date()

# combine dUrls and query strings
dUrl <- paste0(dUrl_1, qstring, today, dUrl_2)
getData <- paste0(getData_1,qstring,today,getData_2)

# create folder to download datasets
outfolder <- paste0(basePath,"tmp_USGS")
dir.create(outfolder)

# save dataset to file, all NWIS spring discharge datasets are save as a txt file
curl::curl_download(getData, destfile=paste0(outfolder, "/", "all_USGS_spring.txt"), quiet=F)

##==================================================================
##                              SECTION 2                         ==
##    Subset karst spring discharge dataset from the downloaded   ==
##                    dataset and homogenization                  ==
##==================================================================
# Import metadata txt file containing IDs and names of karst springs in US
# The shapefile of all springs in the US has been initially downloaded and overlaid
# on WoKAM karst map to select springs that are located within karst features

wokasRDS <- readRDS(paste0(sourceModule,"/station_info.rds"))
stationInfo <- subset(wokasRDS, ISO == "US" & Source_type == "O" )

# karst spring site ID number
stationID <- stationInfo$Local_database_ID

# karst spring site name
stationName <- stationInfo$Name

# Read the txt file containing dataset of all spring discharges downloaded earlier
allSpringDis <- read.table(paste0(outfolder,"/all_USGS_spring.txt"), header=TRUE, sep="\t", fill=T, stringsAsFactors = F)

# for each karst site ID found in downloaded file
for(i in 1:length(stationID)){
  
  # Subset datasets of karst spring discharge using site ID of karst springs 
  springData <- tryCatch({subset(allSpringDis, site_no == stationID[i])},
                         
                         # see if subsetting gives an error
                         error = function(error_message){
                           message(paste0(stationID[i],": error processing subset"))
                           message("Here is the error message from R")
                           message(error_message)
                         },
                         
                         # see if subsetting gives a warning
                         warning = function(warning_message){
                           message(paste0(stationID[i],": subset not found in file"))
                           message("Here is warning message from R")
                           message(warning_message)
                         },
                         
                         # see processed subset
                         finally = {
                           message()
                           message(paste0(stationID[i],": file processed"))
                         }
                    )
  # move to next loop
  if(nrow(springData)==0){
    next
  }
  
  #change date format to homogenise with format of WoKaSH database
  times <- as.character(springData$datetime)
  m <- lapply(times,function(x){unlist(strsplit(x,"/"))[1]})
  d <- lapply(times,function(x){unlist(strsplit(x,"/"))[2]})
  Y <- lapply(times,function(x){unlist(strsplit(x,"/"))[3]})
  springData$datetime <- paste0(d,".",m,".",Y)
  
  # convert discharge values from cubic feet per seconds to cubic meter per seconds
  conv = 0.0283168  # 1 cubic feet per seconds equals 0.0283168 cubic metres per seconds
  springData$X122057_00060 <- as.numeric(as.character(springData$X122057_00060)) * conv
  
  # rename columns
  names(springData) <- c("agnecy","site_no","date","tz_cd","discharge","data qualification")
  
  # get station coordinates
  wokasMeta <- subset(stationInfo, Local_database_ID==springData[3,2])
  
  # create metadata list
  metaData <- list(id = as.character(wokasMeta$Local_database_ID),
                   newID = wokasMeta$Location.Identifier,
                   name = wokasMeta$Name,
                   source = "USGS National Water Information System",
                   sourceUrl = "https://waterdata.usgs.gov/nwis/",
                   LAT = as.numeric(wokasMeta$Latitude),
                   LON = as.numeric(wokasMeta$Longitude),
                   unit = "m^3/s")
  
  fileIO.writeSpringData(springData[,c("date","discharge")], metaData)
  
}
# delete dir
unlink(outfolder, recursive = T)

# Note that the warning message "cannot open file 'D:/webQuery/data/USGS/425435091281101@US-0088@Big Spring 
# Fish Hatchery near Elkader, IA NADP/NTN.csv': No such file or directory" occurs when a site ID e.g 425435091281101
# is not included in the downloaded discharge dataset txt file

##-- end

