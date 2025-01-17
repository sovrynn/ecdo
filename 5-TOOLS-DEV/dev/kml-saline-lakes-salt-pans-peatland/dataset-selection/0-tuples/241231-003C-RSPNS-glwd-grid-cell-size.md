# Explanation of Grid Cell Sizes and Hectares

## 1. **Are All Grid Cells the Same Size?**
No, not all grid cells are the same size because the Earth is spherical, and the grid cells are defined using a **geographic coordinate system** (15 arc-seconds).

- **Grid cell dimensions**:
  - At the equator, each grid cell is approximately **500 m × 500 m**.
- **Variation by latitude**:
  - As you move away from the equator toward the poles, the grid cells become smaller in their east-west dimensions due to the curvature of the Earth (longitude lines converge).
  - Near the poles, grid cells are more rectangular than square.

This effect is called **latitude distortion** and is common in gridded datasets using geographic (unprojected) coordinate systems.

---

## 2. **What is a Hectare?**
A **hectare (ha)** is a unit of area measurement commonly used in land management, agriculture, and environmental studies.

- **Definition**:
  - 1 hectare = **10,000 square meters** (or **0.01 square kilometers**).
- **Comparison to familiar units**:
  - 1 hectare ≈ **2.47 acres** (commonly used in the U.S.).
  - A square with sides of **100 meters** has an area of **1 hectare**.

---

## 3. **How Hectares Relate to Grid Cells**
- At the equator, a grid cell (~500 m × 500 m) covers an area of approximately **25 hectares**.
- The exact area of a grid cell varies with latitude because grid cells become smaller near the poles.

### **Absolute Area Values in the Dataset**
- The dataset provides absolute area values in **hectares multiplied by 10**:
  - A value of `15` means **1.5 hectares** of the grid cell is occupied by a specific wetland type.
  - A value of `100` means **10 hectares**.

---

## 4. **Why Use Hectares?**
- Hectares are a practical unit for representing land area at regional and global scales.
- They simplify calculations for large datasets, such as estimating the total area of wetlands globally or regionally.

---

## Summary
- **Grid cells vary in size**: ~500 m × 500 m at the equator, smaller toward the poles.
- **1 hectare** = 10,000 square meters, ≈ 2.47 acres.
- **Absolute area values** are expressed as hectares × 10 for precision in the dataset.

This structure allows for detailed spatial analysis of wetlands and drylands across the globe.
