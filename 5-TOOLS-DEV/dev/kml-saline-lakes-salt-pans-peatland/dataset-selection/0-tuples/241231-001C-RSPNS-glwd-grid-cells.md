# Detailed Explanation of GLWD v2 Data Structure

## 1. **Grid Cell as the Smallest Unit of Granularity**
- The **grid cell** is the smallest spatial unit of the dataset, representing an area of approximately **500 m × 500 m** at the equator (15 arc-second resolution).
- Each grid cell contains information about one or more wetland types and their respective extents within the cell.

---

## 2. **Percentages Within a Grid Cell**
- For each wetland type, a **percentage value** (or relative area) specifies how much of that grid cell is covered by that type.
  - Example:
    - **Freshwater lake**: 40%
    - **Mangrove**: 10%
    - **Dryland**: 50%
- Percentages allow for fractional representation of different wetland types coexisting within a single cell.

---

## 3. **Mutual Exclusivity of Categories**
- The categories are **not mutually exclusive** at the cell level.
  - A single grid cell can contain multiple wetland types.
  - Example:
    - 30% **Riverine, seasonally flooded, forested**.
    - 20% **Palustrine, regularly flooded, non-forested**.
    - 50% **Dryland**.
- Each category represents its specific feature independently, so their percentages within a cell can sum up to 100% or less.

---

## 4. **Combined Layers to Avoid Double-Counting**
To handle overlapping wetland types and simplify analysis:
- **Total wetland area**:
  - Summing all wetland percentages in the cell to provide the total wetland coverage.
- **Dominant class**:
  - Identifies the single wetland type occupying the largest percentage of the cell.

---

## Summary of Relationships
1. **Grid cell**: Smallest spatial unit (~500 m × 500 m).
2. **Attributes per cell**: Wetland types are represented as percentages, allowing for fractional coverage.
3. **Non-mutual exclusivity**: Multiple wetland types can coexist in a single cell.
4. **Combined layers**: Provide summaries like total wetland area and dominant class to avoid double-counting.

This structure allows for detailed representation and analysis of wetlands while accommodating the complexity of overlapping features.
