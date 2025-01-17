# Explanation of GLWD v2 Data: Absolute Area, Relative Area, and Extent per Pixel

## 1. **Absolute Area vs. Relative Area**
### Absolute Area (hectares × 10)
- Each grid cell (~500 m × 500 m) represents a geographical area.
- The **absolute area dataset** provides the **amount of that grid cell occupied by a specific wetland type in hectares**, multiplied by 10 for precision.
  - Example:
    - If the value for "Freshwater lake" in a grid cell is `15`, it means **1.5 hectares** of that cell is covered by the "Freshwater lake" type.
    - A value of `100` means **10 hectares**.
  - Multiplication by 10 avoids the need for decimals, simplifying storage and processing.

### Relative Area (percent of pixel)
- The **relative area dataset** shows the **percentage of the grid cell** covered by each wetland type.
  - Example:
    - If the "Freshwater lake" in a grid cell is `50%`, it means half of the cell is covered by that type.
    - All percentages across wetland types in a cell can sum up to 100% or less.

---

## 2. **Extent Per Pixel in Absolute Area**
- A **pixel** corresponds to one grid cell (~500 m × 500 m).
- **Extent in absolute area** refers to the size of the area occupied by a specific wetland type in a single grid cell, expressed in hectares × 10.
  - If a grid cell spans ~25 hectares:
    - A value of `100` for a wetland type indicates it occupies **10 hectares** of that 25-hectare grid cell.
    - A value of `50` indicates it occupies **5 hectares**.

---

## 3. **Datasets Overview**
The data is split into three distinct types, each focusing on different representations of wetland extent:

### (a) **Absolute Area Dataset (`_ha_x10`)**
- Provides the **area covered by each wetland class** in hectares (multiplied by 10).
- Grids available for:
  - Each wetland type (`01...33`).
  - Drylands (`00`).

### (b) **Relative Area Dataset (`_pct`)**
- Provides the **percentage of the grid cell area** covered by each wetland class.
- Grids available for:
  - Each wetland type (`01...33`).
  - Drylands (`00`).

### (c) **Combined Layers**
- **Total wetland area** (`_area_ha_x10`): Sum of all wetland types in hectares × 10 for each grid cell.
- **Total wetland area percentage** (`_area_pct`): Sum of percentages of all wetland types for each grid cell.
- **Dominant wetland class** (`_main_class`): The wetland type occupying the largest area in the grid cell.
- **Dominant class where wetlands dominate (>50%)** (`_main_class_50pct`): The dominant wetland type only in grid cells where wetlands cover more than 50% of the area.

---

## 4. **Why Two Representations?**
- **Absolute area**:
  - Useful for calculations involving actual land coverage (e.g., estimating the total hectares of "Freshwater lake" globally).
- **Relative area**:
  - Useful for spatial analyses where the proportion of coverage within a cell matters more (e.g., comparing the prominence of wetland types within a specific area).

---

## 5. **Key Points to Remember**
- **Absolute area**: Values are in hectares × 10 for precision (e.g., `15 = 1.5 hectares`).
- **Relative area**: Values are percentages of the total grid cell area.
- **Extent per pixel**: Refers to the part of the grid cell occupied by a specific wetland type, expressed in either hectares or percentages.
- **Data granularity**: The grid cell (~500 m × 500 m) is the spatial unit of the dataset.

This structure provides both precise and proportional representations of wetland types to support diverse analytical needs.
