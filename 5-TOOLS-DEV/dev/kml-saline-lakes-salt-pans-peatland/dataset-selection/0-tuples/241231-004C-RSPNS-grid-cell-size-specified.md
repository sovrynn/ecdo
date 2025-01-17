# How is the Grid Cell Size Known?

## 1. **Spatial Resolution**
- The dataset uses a resolution of **15 arc-seconds**.
  - This refers to the angular size of each grid cell in geographic coordinates (latitude and longitude).
  - **1 degree = 60 minutes; 1 minute = 60 seconds**; therefore:
    - **15 arc-seconds = 1/240th of a degree**.

---

## 2. **Grid Cell Dimensions at the Equator**
- At the equator, **1 degree of latitude or longitude = ~111 km**.
  - Therefore:
    - 1 arc-second = **~30.87 meters**.
    - 15 arc-seconds = **~463 meters**.
  - Each grid cell at the equator is roughly **463 m × 463 m**.

---

## 3. **Variation by Latitude**
- The size of grid cells varies with latitude due to the Earth's curvature:
  - **Latitude (north-south)**: The size remains constant (~463 meters) because lines of latitude are evenly spaced.
  - **Longitude (east-west)**: The size decreases as you move away from the equator, since longitude lines converge at the poles.
    - Example:
      - At 45° latitude: ~463 m (north-south) × ~328 m (east-west).
      - Near the poles: The east-west dimension approaches zero.

---

## 4. **Is the Size Specified for Each Grid Cell?**
No, the dataset does not specify the physical size of each grid cell individually. Instead:
- The spatial resolution (**15 arc-seconds**) and the coordinate reference system (**GCS_WGS_1984**) are defined globally for the dataset.
- Users can calculate grid cell sizes based on latitude if precise dimensions are needed.

---

## 5. **How to Determine Grid Cell Sizes**
To calculate the size of a grid cell:
1. **North-South Extent (Latitude)**:
   - Always ~463 meters, regardless of location, because latitude lines are evenly spaced.
2. **East-West Extent (Longitude)**:
   - Calculate based on latitude:
     - \( \text{Cell Width} = \cos(\text{latitude}) \times \text{cell size at equator} \).
     - Example:
       - At 45° latitude: \( \cos(45°) \times 463 \, \text{m} = ~328 \, \text{m} \).

---

## Summary
- **Grid cell size** is determined by the spatial resolution (**15 arc-seconds**) and the coordinate system (**GCS_WGS_1984**).
- **North-south size** is constant (~463 m).
- **East-west size** decreases with latitude due to Earth's curvature.
- Grid cell sizes are not explicitly stored in the dataset but can be calculated using spatial resolution and latitude.

Let me know if you’d like a step-by-step example of these calculations!
