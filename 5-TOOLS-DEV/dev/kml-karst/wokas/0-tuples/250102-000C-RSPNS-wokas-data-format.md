# WoKaS Data Repository Structure

## Repository Contents
The WoKaS data repository is organized into a single zip archive called **"WoKaS_Data_Record"**, containing:
1. **Read_me File**: A text file with guidance for users.
2. **Four Subfolders**:
   - **WoKaS_Hydrograph_Metafile**
   - **WoKaS_Hydrograph_Datasets**
   - **Auto_Download_Routine**
   - **WoKaS_Summary_Plot**

---

## Subfolder Details

### 1. WoKaS_Hydrograph_Metafile
- Contains an Excel file named **"WoKaS_Metafile"** summarizing dataset attributes:
  - **Country**: ISO-2 code
  - **WoKaS Identifier**: Unique ID for each dataset
  - **Spring’s Name**
  - **Local Gauge Station Identifier**: Origin database ID
  - **Coordinates**: WGS 84 format
  - **Observation Length**: Measured in years
  - **Quality Flags**
  - **Dataset Source and Type**: Online or offline access
- Additional information about superficial flow effects (if applicable).
- Terminology explained in the **read_me** file.

### 2. WoKaS_Hydrograph_Datasets
- Over 400 CSV files of spring discharge measurements in cubic meters per second (m³/s).
- Metadata in headers includes:
  - **Source**: Dataset origin
  - **Spring Name**
  - **Gauge Station Identifier**
  - **Coordinates**
  - **Measurement Time Format**
- **Static Datasets**: Non-updated; sourced from research partners and publications.
- **Dynamic Datasets**: Periodically updated; obtainable via the Auto_Download_Routine.

### 3. Auto_Download_Routine
- Contains R scripts for downloading updated datasets from online hydrological databases.
- Newly downloaded datasets are saved in a folder named **WoKaS_Dynamic_Datasets**, created during execution.
- Maintained and updated scripts are hosted on [GitHub](https://github.com/KarstHub/WoKaS).

### 4. WoKaS_Summary_Plot
- Contains a PDF file named **"WoKaS_Summary_Plot"**, with hydrograph plots for all datasets.
- Plot names correspond to dataset names in **WoKaS_Hydrograph_Datasets**.

---

## Dataset Naming Convention
- Format: `ISO-2 Code - Serial Number @ Spring Name`
- Example: **FR-0050@Cent-Fonts**
  - **FR**: ISO-2 code for France.
  - **0050**: WoKaS serial number.
  - **Cent-Fonts**: Spring name.

This structure ensures clarity, ease of access, and user-friendly organization for both static and dynamic karst spring discharge datasets.
