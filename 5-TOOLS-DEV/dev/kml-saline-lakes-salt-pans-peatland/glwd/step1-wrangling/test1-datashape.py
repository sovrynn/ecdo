import rasterio
from rasterio.plot import show
import numpy as np
import sys

# Check if the user provided an input argument
if len(sys.argv) < 2:
    print("Usage: python script_name.py <tif_file_path>")
    sys.exit(1)

# Read the TIF file path from the first input argument
tif_path = sys.argv[1]

# Open the TIF file
with rasterio.open(tif_path) as src:
    data = src.read(1)  # Read the first band
    transform = src.transform  # Affine transform for georeferencing
    profile = src.profile  # Metadata (e.g., CRS, resolution)

    width = src.width  # Number of columns
    height = src.height  # Number of rows
    # Top-left corner (origin)
    min_lon, max_lat = transform * (0, 0)
    
    # Bottom-right corner
    max_lon, min_lat = transform * (width, height)

    data_format = src.dtypes  # Data types of each band
    num_bands = src.count  # Number of bands
    descriptions = src.descriptions  # Descriptions of each band (if available)
    nodata_value = src.nodata  # NoData value for the raster (if defined)

print(f"Number of bands: {num_bands}")
print("Data types per band:", data_format)
print(f"NoData value: {nodata_value}")

# Check descriptions
for idx, desc in enumerate(descriptions, start=1):
    print(f"Band {idx} description: {desc}")

# # Example: Check the range of values for each band
# for band_idx in range(1, num_bands + 1):
#     band_data = src.read(band_idx)
#     print(f"Band {band_idx} value range: {band_data.min()} to {band_data.max()}")


print(f"Longitude range: {min_lon} to {max_lon}")
print(f"Latitude range: {min_lat} to {max_lat}")

print("Original Shape:", data.shape)
