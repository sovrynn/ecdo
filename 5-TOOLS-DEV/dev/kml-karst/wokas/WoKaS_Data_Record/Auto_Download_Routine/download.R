# Author: Tunde Olarinoye
# Institute: University of Freiburg, Germany
# Email: tunde.olarinoye@hydmod.uni-freiburg.de

Sys.setenv(language = "en")

# set dir
basePath = "./"
sourceModule <- paste0(basePath, 'sourceModules/')
source(paste0(sourceModule,'fileIO.R'))

# creates output folder
dataOut <- paste0(basePath,'data')
dir.create(dataOut)

# install required packages
fileIO.packageRequire('yaml')
fileIO.packageRequire('XML')
fileIO.packageRequire('httr')
fileIO.packageRequire('rgdal')
fileIO.packageRequire('jsonlite')
fileIO.packageRequire('curl')
if("RHTMLForms" %in% rownames(installed.packages()) == FALSE) {install.packages(paste0(sourceModule,"RHTMLForms_0.6-0.tar.gz"), repos = NULL, type = "source")}


# download datasets
# to download all online dataset, run fileIO.runDowload()
# to download dataset from specific country, run fileIO.runDownload("country's name")
# list of country names download is possible: Germany, France, Austria, Ireland, Slovenia, US, UK

# download datasets
fileIO.runDownload()
