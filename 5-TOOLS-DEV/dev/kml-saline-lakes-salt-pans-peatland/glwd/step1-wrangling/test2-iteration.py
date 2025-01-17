import rasterio
import numpy as np
import sys

# Check if the user provided an input argument
if len(sys.argv) < 2:
    print("Usage: python script_name.py <tif_file_path>")
    sys.exit(1)

# Read the TIF file path from the first input argument
tif_path = sys.argv[1]

with rasterio.open(tif_path) as src:
    # Read the first band
    data = src.read(1)
    transform = src.transform  # Affine transform for georeferencing
    
    # Get raster dimensions
    width = src.width   # Number of columns
    height = src.height # Number of rows

    # Loop through each row and column
    for row in range(height):
        for col in range(width):
            # Pixel value in first band
            pixel_value = data[row, col]

            # Top-left corner of this pixel
            x_min, y_max = transform * (col, row)

            # Bottom-right corner of this pixel
            x_max, y_min = transform * (col + 1, row + 1)

            # If the raster is in geographic CRS: x ~ longitude, y ~ latitude
            # So each pixel’s bounding box in lon/lat would be:
            #
            #   top-left: (x_min, y_max)
            #   bottom-right: (x_max, y_min)
            #
            # You could also compute pixel center if desired:
            # center_x = x_min + (x_max - x_min) / 2
            # center_y = y_max + (y_min - y_max) / 2

            # Do something with pixel_value and its bounding box...
            # For demonstration, just print them out (might be huge in practice):
            print(f"Row={row}, Col={col}: Value={pixel_value}, "
                  f"Top-left=({x_min}, {y_max}), Bottom-right=({x_max}, {y_min})")
