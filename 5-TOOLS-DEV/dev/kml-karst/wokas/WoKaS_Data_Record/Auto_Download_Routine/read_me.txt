Instructions for running the R codes to download karst spring discharge datasets on windows

Copy/save the Auto_Download_Routine folder to preferred location on  your computer, this location will be set as your work directory to run the R code. For examples, if you copy/save Auto_Download_Routine folder to "D:/Auto_Download_Routine", your work directory will be "D:/Auto_Download_Routine" or if you copy/save the folder to "C:/Users/Hydro/Desktop/Auto_Download_Routine", your work directory will be "C:/Users/Hydro/Desktop/Auto_Download_Routine".
The Auto_Download_Routine folder contains a sub-folder named "sourceModules", a R file with name "download.R" and this read_me.txt file. The "sourceModules" folder contains ".R", ".csv", ".txt" and ".rds" files which should not be changed. The "download.R" file in the main Auto_Download_Routine folder is linked to the required scripts in the "sourceModules" folder for the download procedure.
A stable internet connection is required and computer shouldn't be shut down or put to sleep mode when the download is running. Depending on the internet connection, it takes 2 to 2.5 hours to complete download of all (over 200) datasets. 

Before running the "download.R" file, R program must be installed on your computer. Follow the instructions below to install R and run the R code:

• Install R program
- Download and install R (version: R-3.5.0 or latest version) for your operating system from https://cran.r-project.org

• Run R codes
  From the several ways to run R code, three (3) options are provided below:
- R graphical user interface
  The R graphical user interface (Rgui) application can be found in the R program installation path "C:\Program Files\R\R-3.5.2\bin\x64". From the Rgui, import the "download.R", check if the work directory is correct, type and run "getwd()" in the Rgui editor to get the present work directory, if directory is wrong, type and run "setwd("Wokas folder path")" to set to coreect work directory. When work directory is set, run "download.R" file.

- Rstudio
  Download R studio from https://www.rstudio.com, Rstudio is also avaiable as part of Anaconda distribution (https://www.anaconda.com). Import the "download.R" to Rstudio code editor and set work directory as described previously. When work directory is set, run the download sript.

- Windows command prompt
  To run R script from windows command prompt:
  1. Add the R program file path (for my computer is "C:\Program Files\R\R-3.5.2\bin") to System variables path
     Control Panel > System and Security > System > Advanced system settings > Advanced > Environment Variables (go to System variables, select 'Path' and click on 'Edit') > Edit environment variable (click 'New' and type in R program file path e.g "C:\Program Files\R\R-3.5.2\bin", click 'Ok')
  2. Open Windows Command Prompt (cmd) and type 'R', it will show information about the R program if the path was successfully added
  3. From Windows cmd, go to the directory for Wokas file (check if the file directory contains necessary files; sourceModule sub-folder, download.R and read_me.txt)
  4. In the Windows cmd, type "Rscript download.R" then press [enter] to start running

A message "All datasets download and processing have been completed" will appear at the end of the download process. The downloaded discharge datasets are save in the sub-folder named "data" created during the download process.

###########################################################################################

Downloading French karst spring discharge data from www.hydro.eaufrance.fr
Users are required to register on www.hydro.eaufrance.fr and request for a personalised login details to have access to data download from Banque Hydro.
After successful registration and receipt of the login details, replaced the pre-filled username and password details below with your new login details. This information are extracted by the R code for the data download.

Note that the pre-filled login information below is only for test/trial purpose. 

Username = AUNIV022
Password = HYDRO1

The automatic download routine codes provide direct download access of karst spring discharge observation for the following sources: Banque Hydro, France;  eHYD Bundesministerium Nachhaltigkeit und Tourismus, Austria; GKD_Bavaria, Germany; Landesanstalt für Umwelt, Baden-Württemberg, Germany; Environmental Protection Agency (EPA), Ireland; Agencija Republike Slovenije Za Okolje (ARSO), Slovenia; UK National River Flow Archive, UK and USGS NAtional Water Information System, US.
When datasets downloaded from Banque Hydro - France, eHYD Bundesministerium Nachhaltigkeit und Tourismus - Austria, Landesanstalt für Umwelt, Baden-Württemberg - Germany and UK National River Flow Archive - UK are used, users should provided reference to the appropriate database(s).
##########################################################################################

For questions, contact Tunde Olarinoye; 
Email: tunde.olarinoye@hydmod.uni-freiburg.de
Twitter: @tundeham 



