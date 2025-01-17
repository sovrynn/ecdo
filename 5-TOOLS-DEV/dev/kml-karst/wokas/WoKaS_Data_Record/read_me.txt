#####################################################################################################################################	
	World Karst Spring hydrograph (WoKaS) database for research and management of the world’s fastest-flowing groundwater
#####################################################################################################################################

								DATA RECORDS GUIDE
WoKaS database is a compilation of karst spring discharge observations across the globe. The database consists of spring hydrographs of over 400 karst springs in 35 countries.

This folder "WoKaS_Data_Record" contains four sub-folders: 

1. Auto_Download_Routine
   Part of WoKaS datasets were sourced from online databases on national and states hydrological agencies. This sub folder contains the R code to automatically download karst spring 
   discharge information from these databases. The code process the requested datasets and write final output to a csv file including the meta information. Frequently updated version
   of the code can be found on https://github.com/KarstHub/WoKaS.
	

2. WoKaS_Hydrograph_Datasets
   The sub folder contains the karst spring hydrograph datasets in csv files (tab separator). Each file consists of eight header lines with provide basic meta information of the spring.
   All discharge records are in cubic metres per second. Two versions of datasets (A and B) are provided for some spring locations when discharge records have differing temporal resolutions for the
   same location. The version "A" is the higher temporal resolution dataset while "B" is the lower one. For example, if a spring WoKaS ID "AA-0001" has two set of discharge records in daily and monthly
   temporal resolution, dataset "AA-0001(A)" would be the daily discharge record while "AA-0001(B) is the monthly discharge record.

3. WoKaS_Hydrograph_Metafile
   It contains a ".xlsx" and ".txt" file which provide comprehensive meta information of the datasets. The meta information in a column-wise arrangement include: (1) Country’s name in two-letter ISO 3166-1 alpha-2 codes format standard, (2) WoKaS ID which is uniquely assigned ID to WokaS datasets, 
   (3) Name of the spring, (4) Local_database_ID which is identifier of the datasets obtained from online databases of national and states hydrological agencies, (5) Longitude in decimal degrees,
   (6) Latitude in decimal degrees, (7) Start date of discharge records, (8) End date of discharge records, (9) Observation period in years, (10) Catchment area in km2 - defined as topographic catchment boundary within which the spring is located, this information is provided when available,
   (11) Koeppen-Geiger climate classification, (12) Source of spring discharge records, (13) Accuracy of discharge record - criteria for classification defined in WoKaS data descriptor manuscript, 
   (14) Source_type - "O" for dataset obtained from online sources and "F" for those obatained from offline sources such as research collaborators and digitised data and (15) Additional information - provides supplementary comments about the spring location when it is available.

4. WoKaS_Summary_Plot
   The sub-folder includes the hydrograh plots of the over 400 karst spring discharge observations in a single pdf file.
 
###############################################################
For additional information, contact Tunde Olarinoye; 
Email: tunde.olarinoye@hydmod.uni-freiburg.de
Twitter: @tundeham 



