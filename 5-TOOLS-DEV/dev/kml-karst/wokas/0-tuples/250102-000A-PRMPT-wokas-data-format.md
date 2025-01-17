Can you summarize how this data is structured

Data repository organisation

WoKaS is a compilation of volumetric karst spring discharge observation datasets from different sources (see subsection data acquisition). The data repository23 holds a single packaged zip archive named “WoKaS_Data_Record”, which contains a “read_me” text file that provides guide information for users and four subfolders: WoKaS_Hydrograph_Metafile, WoKaS_Hydrograph_Datasets, Auto_Download_Routine and WoKaS_Summary_Plot. The contents of the files and subfolders contained in the zip archive are described below:

    (A)

    WoKaS_Hydrograph_Metafile contains a xlsx file “WoKaS_Metafile” which provides a summary of all WoKaS datasets attributes. The file includes information on the dataset’s country’s name, assigned WoKaS identifier, spring’s name, local gauge station identifier which is the assigned identifier in the database of origin of dataset, spring’s coordinates, spring’s discharge observation length (years), quality flags (as described in subsection accuracy and quality of datasets), dataset’s source name and the source type which indicates online or offline accessibility of the datasets (see subsection data acquisition and Table 1). Discharge observation measured at gauge stations located farther downstream of the spring’s outlet are usually influenced by superficial flow. When information about the influence of superficial flow is available, it is provided in the “Additional information” section of the metafile. A more comprehensive explanation of the used terms and content of the metafile is provided in the “read_me” document file included in the zip file archive.
    (B)

    WoKaS_Hydrograph_Datasets includes over 400 CSV files of karst spring discharge measurements in cubic metres per second (m3/s). Headers providing meta-information such as the source of the dataset, spring’s name, local gauge station identifier, location coordinates in WGS 84 as well as measurement time format are appended to the csv files. The discharge observations provided in the data repository23 can be static or dynamic. Datasets obtained from research partners, collaborators and publications are static because they are not updated periodically. Conversely, datasets from hydrological databases (see subsection hydrological agencies) are dynamic and periodically updated through the individual agencies. For users who want the updated datasets, they can be obtained directly from the source online database via an automatic download routine (see below). As described in the Methods sections, for some sources (Banque Hydro, eHYD, LUBW and NRFA), complete datasets at higher temporal resolution are only obtainable through the automatic download routine (see information in “Additional information” column of the metafile).
    (C)

    Auto_Download_Routine includes the R script files for downloading the dynamic datasets from the hydrological agencies online databases. The R codes allow the user to access and download the most recent version of the discharge datasets in their original temporal resolution from the online databases of the hydrological agencies. The downloaded datasets from the different online databases are standardised, having same format as described in “B” above. The newly downloaded version of the dynamic datasets are saved in WoKaS_Dynamic_Datasets folder, which is automatically created while the download routine code is run. In case of changes within the hydrological databases online access link system, the R codes might stop working. However, the R code will be frequently maintained and an updated version will be available on GitHub (https://github.com/KarstHub/WoKaS).
    (D)

    WoKaS_Summary_Plot subfolder contains a pdf file also named “WoKaS_Summary_Plot which includes the hydrograph plots of all the spring discharge datasets. The name of each plot is the name of the corresponding dataset contained in the WoKaS_Hydrograph_Datasets subfolder.

Datasets naming convention

The naming convention used for the datasets is a combination of the International Organisation for Standardisation Alpha-2 (ISO 2) country’s code, and a four-digit serial number followed by the spring’s name. The ISO 2 code and four-digit serial number are separated by a hyphen “-” and an “@” sign between the serial number and the spring’s name. For example, a dataset with the name “FR-0050@Cent-Fonts” means:

‘FR’ = ISO-2 country’s code for France

‘0050’ = WoKaS database assigned serial number

‘Cent-Fonts’ = Name of the spring.