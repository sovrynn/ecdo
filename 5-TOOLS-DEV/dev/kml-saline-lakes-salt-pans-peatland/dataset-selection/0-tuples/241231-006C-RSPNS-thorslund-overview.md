# Data Structure in the Global Salinity Dataset

## 1. **Data Organization**
- **Categories**:
  - Rivers (surface water).
  - Lakes/Reservoirs (surface water).
  - Groundwater.
- **Measurements**:
  - Focus on **electrical conductivity (EC)**, a widely used salinity indicator.
- **Temporal Span**: Data from **1980–2019**.
- **Spatial Coverage**: Global, with monitoring stations across continents and countries.

---

## 2. **Measurement Locations**
- **Rivers**: 34,494 monitoring locations.
- **Lakes/Reservoirs**: 10,609 monitoring locations.
- **Groundwater**: 208,550 monitoring locations.
- **Station Criteria**:
  - For rivers/lakes: At least **30 measurements** within the study period.
  - For groundwater: Depth information required but no minimum measurement count.

---

## 3. **Data Components**
- **Database Files**:
  - Each water type (rivers, lakes, groundwater) has:
    - A main database (`_database.csv`) with raw EC measurements and metadata.
    - A summary file (`_summary.csv`) providing statistical summaries (mean, max, min, etc.).
- **Metadata**:
  - Includes location coordinates, sampling dates, measurement frequency, and source information.
- **Variable Units**:
  - EC measured in µS/cm.
  - Converted Total Dissolved Solids (TDS) data included for some groundwater measurements.
- **Coastal Information**:
  - Locations within 10 km of the coastline are flagged for coastal salinity studies.

---

## 4. **Data Sources**
- **Global Datasets**:
  - GLORICH database and other large-scale water quality datasets.
- **Regional Datasets**:
  - Provided by governmental and environmental agencies (e.g., USGS, European Waterbase).
- **Local/Individual Datasets**:
  - River basin and aquifer-specific monitoring data.
- **Converted Data**:
  - TDS values converted to EC using regional conversion factors when necessary.

---

## 5. **Spatial and Temporal Harmonization**
- **Spatial**:
  - Coordinates converted to **WGS 1984** (decimal degrees).
  - Coastal proximity analyzed (stations flagged as coastal if within 10 km of the coastline).
- **Temporal**:
  - Multiple daily measurements averaged into daily means.
  - Data organized by decade for analysis (1980s, 1990s, 2000–2019).

---

# Compiling a Global List of Saltwater Bodies

## 1. **Filter for High EC Values**
- Use a threshold EC value (e.g., >1,500 µS/cm, or based on your definition of saline/brackish water).
- Focus on rivers, lakes, and groundwater locations exceeding this value.

## 2. **Identify Coastal Proximity**
- Filter stations flagged as **coastal locations** (within 10 km of the coastline) for brackish/saltwater analysis.

## 3. **Aggregate by Water Type**
- Separate results by categories: rivers, lakes/reservoirs, and groundwater.
- Use the `_summary.csv` files for quick insights into high EC values and patterns.

## 4. **Generate a Location Map**
- Use the coordinates of filtered high-EC locations to create a global spatial map.

## 5. **Validate Saltwater Classification**
- Cross-reference flagged locations with known saline or brackish water bodies.
- Incorporate TDS-to-EC conversions for consistency.

## 6. **Export the List**
- Export filtered stations as a CSV or GIS-compatible format for further use.

This approach allows for systematic identification of saline or brackish water bodies worldwide from the dataset.
