# Steps to Calculate the South Atlantic Anomaly Timeseries Using IGRF-14 Coefficients

Below is a conceptual workflow outlining how to compute the surface area of the region where the total geomagnetic field strength is equal to or below 32,000 nT (the South Atlantic Anomaly threshold) for each epoch covered by the IGRF-14 model.

## Prerequisites

1. **Coefficients and Software**:  
   - Acquire the IGRF-14 Gauss coefficients. These are provided as text and spreadsheet files.
   - Install or prepare one of the available software tools/libraries:
     - **Geomag 7.0 Software** (Windows/Linux)
     - **Python 3.7 Package** provided by IGRF authors
     - **Fortran Program** from British Geological Survey
     - **GitHub repository** with Python code and Gauss coefficients from the IGRF candidate evaluation
     
   The Python package or the Geomag 7.0 software is often the easiest route for scripting and automation.

2. **Familiarity With Coordinate Systems**:
   - The IGRF field is computed in geocentric coordinates. Typically, we approximate calculations at Earth’s surface (using Earth’s mean radius ~6371.2 km).
   - You’ll need to define a latitude-longitude grid over which to compute the field.

## Step-by-Step Workflow

1. **Set Up Your Grid**:
   - Define a global grid of latitude and longitude points. For example:
     - Latitude: from -90° to +90° in small increments (e.g., 1° increments)
     - Longitude: from -180° to +180° in similar increments
   - A finer grid (e.g., 0.5° or even 0.25°) will give more accurate area calculations but require more computation time.

2. **Load the IGRF-14 Coefficients**:
   - Use the provided IGRF-14 coefficients (Gauss coefficients \( g_n^m \) and \( h_n^m \)) for the epoch of interest.
   - The IGRF-14 model provides main field values every 5 years from 1900 to 2020, plus a predictive set for 2025 and secular variation (SV) terms to interpolate between these 5-year steps.

3. **Interpolate for Intermediate Years** (If Needed):
   - If you want annual or even finer resolution, use the secular variation coefficients to interpolate the field coefficients between epochs.
   - For a given year \( t \) between two model epochs \( t_0 \) and \( t_0+5 \):
     \[
     g_n^m(t) = g_n^m(t_0) + \dot{g}_n^m (t - t_0)
     \]
     and similarly for \( h_n^m(t) \).
   
4. **Compute the Magnetic Field**:
   - For each point on your grid (latitude \(\phi\), longitude \(\lambda\)), and for each chosen year:
     - Use the IGRF software or Python package function to compute the magnetic field vector (\(B_r, B_\theta, B_\phi\)) or directly get (\(B_x, B_y, B_z\)).
     - Compute the total field strength:
       \[
       B = \sqrt{B_x^2 + B_y^2 + B_z^2} \quad \text{(in nT)}
       \]

5. **Identify the South Atlantic Anomaly Region**:
   - Determine which grid points have \( B \leq 32,000 \) nT.
   - Mark these grid points as part of the SAA region for that particular time.

6. **Calculate the Area**:
   - Each latitude-longitude cell on the Earth’s surface represents an area. For a given grid spacing \(\Delta \phi\) (latitude increment) and \(\Delta \lambda\) (longitude increment):
     - Convert these increments to radians.
     - The area of a cell (approximately) on a sphere:
       \[
       \text{Area of cell} \approx R^2 \Delta \phi_r \Delta \lambda_r \cos(\phi_r)
       \]
       where:
       - \(R\) is Earth’s mean radius (≈6371.2 km),
       - \(\phi_r\), \(\Delta \phi_r\), and \(\Delta \lambda_r\) are in radians,
       - \(\cos(\phi_r)\) accounts for the decrease in longitudinal cell size as you move toward the poles.
   
   - Sum the areas of all cells that meet the \(B \leq 32,000\) nT criterion to get the total SAA area at that epoch.

7. **Repeat for the Full Time Range**:
   - Perform these calculations for each IGRF epoch: 1900.0, 1905.0, ... up to 2020.0 and 2025.0.
   - If you want annual steps (or any other interval) between these epochs, use the secular variation to interpolate coefficients and repeat the field computation and area summation.

8. **Generate the Timeseries**:
   - Store the computed SAA area for each year or epoch in a data structure (e.g., a CSV file or array).
   - Plot the area against time to visualize how the SAA region changes over the full time range of the IGRF-14 model.

9. **Validation and Refinement**:
   - Check your results against known studies or smaller test grids.
   - Adjust the grid resolution for better accuracy if needed.
   - Consider Earth’s elliptical shape or more detailed geoid models if higher precision is required.

## Tools and Commands

- **Using the Python Package**:  
  Install the Python IGRF package (if available) and use a provided function (e.g., `igrf13.igrf_value(...)` in older versions, updated accordingly for IGRF-14) to get field components at desired coordinates and times.
  
- **Using Geomag 7.0**:  
  Run command-line tools or use API calls (if available) to compute field values at each grid point.

## Summary

In essence, the procedure is:
1. Set up a spatial grid.
2. For each time step:
   - Load or interpolate IGRF coefficients.
   - Compute the magnetic field and total intensity at each grid point.
   - Identify regions below the 32,000 nT threshold.
   - Sum the area of these regions.
3. Compile these results into a timeseries.

By following these steps, you will obtain a timeseries of the SAA’s spatial extent over the period covered by IGRF-14.
