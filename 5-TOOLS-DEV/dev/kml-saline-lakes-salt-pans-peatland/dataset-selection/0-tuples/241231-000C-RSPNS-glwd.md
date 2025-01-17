# GLWD v2 Data Structure

## 1. **Grid-Based Spatial Structure**
- The data is spread across a global grid with a resolution of **15 arc-seconds** (~500 m at the equator).
- Each grid cell represents a specific geographical area and contains values describing the properties of that area.
- The data is **not object-based** (no individual "lake objects" with attributes); it is raster-based, with attributes spread spatially over the grid.

---

## 2. **Attributes Stored per Grid Cell**
Each grid cell contains numerical values encoding the following types of information:

- **Absolute area**:
  - The extent of each wetland type within the grid cell, measured in hectares × 10.
- **Relative area**:
  - The proportion of the grid cell covered by a specific wetland type, expressed as a percentage of the grid cell's total area.
- **Dominant class**:
  - The wetland type (or "dryland") that dominates the grid cell based on area coverage.

---

## 3. **Separate Layers for Each Attribute**
The dataset is organized into separate raster layers for each wetland class and attribute. Examples include:

- A grid for "Freshwater lake" (ID: 01) showing its extent in hectares per cell.
- A grid for "Mangrove" (ID: 28) showing its coverage as a percentage of each cell.
- Combined layers summarizing all wetland classes, such as:
  - Total wetland area per cell.
  - Dominant wetland class within a cell.

---

## 4. **No Explicit Objects**
- There are no explicit "objects" like individual lakes or rivers with associated metadata.
- Information is spatially distributed and encoded in the grid cells.
- To analyze specific features (e.g., a particular lake), the relevant grid cells overlapping the feature's location must be extracted.

---

## Summary of Structure
- **Type**: Raster-based, gridded data.
- **Spatial Unit**: Each grid cell (~500 m resolution).
- **Data Format**: Separate layers for each wetland type and attribute.
- **No Explicit Water Body Objects**: Information is stored spatially rather than as discrete features with attributes.

This structure is designed for large-scale, global applications such as hydrological modeling, ecosystem studies, and conservation planning.
