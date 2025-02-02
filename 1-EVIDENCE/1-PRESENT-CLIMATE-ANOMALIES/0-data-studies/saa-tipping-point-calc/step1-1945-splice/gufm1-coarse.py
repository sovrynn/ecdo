import os
import numpy as np
import pymagglobal
import math

# Initialize the gufm1 model
model = pymagglobal.Model("gufm1")


def spherical_cell_area(lat_min, lat_max, lon_min, lon_max, R=6371.0):
    """
    Approximates the area of a lat-lon box on a sphere of radius R.
    lat_min, lat_max, lon_min, lon_max in degrees
    Returns area in square kilometers.
    """
    # Convert degrees to radians
    lat_min_rad = math.radians(lat_min)
    lat_max_rad = math.radians(lat_max)
    lon_min_rad = math.radians(lon_min)
    lon_max_rad = math.radians(lon_max)

    # Calculate delta longitude and difference in sin(lat)
    delta_lon = lon_max_rad - lon_min_rad
    delta_sin_lat = math.sin(lat_max_rad) - math.sin(lat_min_rad)

    # Area formula
    area = (R**2) * abs(delta_lon) * abs(delta_sin_lat)
    return area

def get_total_field_value(lat, lon, year):

    # Earth radius (default for surface evaluations)
    radius = 6371.2

    # Build a "grid" array: shape (4, number_of_points)
    # grid[0]: colatitude (90 - latitude)
    # grid[1]: longitude
    # grid[2]: radius in km
    # grid[3]: year
    grid = np.array([
        [90.0 - lat],    # colatitude in degrees
        [lon],           # longitude in degrees
        [radius],        # radius in km
        [year]           # epoch in years
    ], dtype=float)

    # Evaluate the field in the NEZ system (north, east, down)
    # Returned array has shape (3, number_of_points)
    B = pymagglobal.field(grid, model, field_type='nez')

    # Extract the components for our single evaluation point
    n_comp, e_comp, z_comp = B[:, 0]

    # Compute the total field as sqrt(n^2 + e^2 + z^2)
    t_comp = np.sqrt(n_comp**2 + e_comp**2 + z_comp**2)

    return t_comp

def main():
    # Ensure output directory exists
    os.makedirs("output-gufm1", exist_ok=True)
    
    # Dictionary to hold cumulative cell area sums per year
    yearly_area_sums = {}

    # Loop over each year
    # (If you want exactly 1590..1944 inclusive, use range(1590, 1945))
    for year in range(1590, 1591):
        cell_coords = []
        cell_area_sum = 0.0

        # --- Single-degree bounding boxes, latitude -90 to 90 ---
        for lat in range(-90, 90):  # lat = -90, -89, ..., 89
            lat_min = lat
            lat_max = lat + 1
            mid_lat = lat + 0.5
            
            # Longitude from -180 to 180
            for lon in range(-180, 180):  # lon = -180, -179, ..., 179
                lon_min = lon
                lon_max = lon + 1
                mid_lon = lon + 0.5

                val = get_total_field_value(mid_lat, mid_lon, year)

                print(f'Processing lat/lon {mid_lat} {mid_lon} at bounding box LAT [{lat_min}, {lat_max}] LON [{lon_min}, {lon_max}]')
                
                # If total field value is <= 32000, record midpoint and area
                if val is not None and val <= 32000:
                    cell_coords.append((mid_lat, mid_lon))
                    cell_area_sum += spherical_cell_area(lat_min, lat_max, lon_min, lon_max)

        # --- Write out the coordinates for this year ---
        output_filename = f"output-gufm1/{year}.txt"
        with open(output_filename, "w", encoding="utf-8") as outf:
            for (lt, ln) in cell_coords:
                outf.write(f"{lt} {ln}\n")

        # Save the area sum in a dictionary for writing later
        yearly_area_sums[year] = cell_area_sum

    # --- Write out the timeseries of cumulative cell areas ---
    timeseries_filename = "output-gufm1/timeseries.txt"
    with open(timeseries_filename, "w", encoding="utf-8") as tsf:
        for year in sorted(yearly_area_sums.keys()):
            tsf.write(f"{year} {yearly_area_sums[year]}\n")


# If you want to run this script directly, uncomment the following:
if __name__ == "__main__":
    main()
