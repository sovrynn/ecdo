# Author: Tunde Olarinoye
# Institute: University of Freiburg, Germany
# Email: tunde.olarinoye@hydmod.uni-freiburg.de

Sys.setenv(language = "en")

##======================================
##    Function to write data to csv   ==
##======================================
fileIO.timeFormat <- "%d.%m.%Y"

basePath ='./'

dir.create(paste0(basePath, "WoKaS_Dynamic_Datasets"))

fileIO.destDir <- paste0(basePath,'WoKaS_Dynamic_Datasets')

fileIO.writeSpringData <- function(data, metaData, filename=NULL,  destDir = fileIO.destDir){
	
	if(is.null(filename)) filename = paste0(metaData$newID,"@",metaData$name,'.csv')
	filepath <- gsub('//','/',paste0(destDir,'/',filename))
	dir.create(dirname(filepath), showWarnings = FALSE)
	
	con <- file(paste0(destDir,'/',filename),'w')
	timestamp <- Sys.time()
	attr(timestamp, "tzone") <- "UTC"
	cat(file=con,sprintf("#DataType      :\tspring discharge data\n"))
	cat(file=con,sprintf("#DataSource    :\t%s\t(%s)\n",metaData$source, metaData$sourceUrl))
	cat(file=con,sprintf("#ID            :\t%s\n",metaData$id))
	cat(file=con,sprintf("#Name          :\t%s\n",metaData$name))
	cat(file=con,sprintf("#LAT\tLON      :\t%s\t%s\n",round(metaData$LAT,2),round(metaData$LON,2)))
	cat(file=con,sprintf("#Time format   :\t%s\n",fileIO.timeFormat))
	cat(file=con,sprintf("#Discharge unit:\t%s\n",metaData$unit))
	cat(file=con,sprintf("#Timestamp(UTC):\t%s\n",format(timestamp,"%d.%m.%Y %H:%M:%S")))
	# data$Date <- format(data$Date, fileIO.timeFormat)
	names(data)<-gsub("^D|date$","Timestamp",names(data))
	write.table(data, file = con, sep='\t', dec='.', row.names=FALSE, quote=FALSE)
	close(con)
}


##======================================
##    Function to download datasets   ==
##======================================

sourceModule <- paste0(basePath, 'sourceModules/')

# define data sources
fileIO.sources <- c("GKD_Bavaria.r","UDO_Baden.R","EAUFrance.R","eHYD_Austria.R","EPA_Ireland.R","arso_Slovenia.R","USGS.R","NRFA_UK.R")
Germany = c("GKD_Bavaria.r","UDO_Baden.R")
France = "EAUFrance.R"
Austria = "eHYD_Austria.R"
Ireland = "EPA_Ireland.R"
Slovenia = "arso_Slovenia.R"
US = "USGS.R"
UK = "NRFA_UK.R"

fileIO.runDownload <- function(country = NULL, dataSource){
  
  if(is.null(country)){
    dataSource = fileIO.sources
    for (i in 1:length(dataSource)) {
      cat(sprintf("-> processing data from %s \n", unlist(strsplit(dataSource[i], "[.]"))[1]))
      source(paste0(sourceModule, dataSource[i]))
    }
  }else{
    dataSource = country
    for(i in 1:length(dataSource)){
      cat(sprintf("-> processing data from %s \n", unlist(strsplit(dataSource[i], "[.]"))[1]))
      source(paste0(sourceModule, dataSource[i]))
    }
  }
  cat('-> Datasets download completed :)\n')
}


##========================================================================
##    check for package(s) required for download routine and install    ==
##========================================================================

fileIO.packageRequire <- function(package, repos=NULL){
  if(is.null(repos)) repos='https://cran.r-project.org/'
  if(package %in% rownames(installed.packages()) == FALSE) install.packages(package, repos)
  else cat(sprintf('-> %s already installed\n', package))
}