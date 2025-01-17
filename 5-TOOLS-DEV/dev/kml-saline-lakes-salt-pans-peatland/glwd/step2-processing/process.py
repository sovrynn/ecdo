#!/usr/bin/env python3

import os
import sys
import math
import random
import rasterio
import numpy as np

# ------------------------------------------------------------------------
# Constants / Configuration
# ------------------------------------------------------------------------
COMPRESSION_RATIO = 100  # <-- Adjust as needed
COMPRESSION_RATIO = 300

# ------------------------------------------------------------------------
# Helper Functions
# ------------------------------------------------------------------------
def zero_pad(num, width):
    """
    Returns the string representation of `num` zero-padded to length `width`.
    E.g., zero_pad(7, 3) -> '007'
    """
    return str(num).zfill(width)

def block_latlon_bounds(row_block_idx, col_block_idx, cr, transform):
    """
    Given the block indices (row_block_idx, col_block_idx), compression ratio `cr`,
    and a rasterio `transform`, return (min_lat, max_lat, min_lon, max_lon).

    row_block_idx, col_block_idx: which block (in row and column) we are processing
    cr: COMPRESSION_RATIO (int)
    transform: affine transform from the dataset
    """
    # The pixel coordinates in the full raster for this block
    min_row_pixel = row_block_idx * cr
    max_row_pixel = (row_block_idx + 1) * cr - 1
    min_col_pixel = col_block_idx * cr
    max_col_pixel = (col_block_idx + 1) * cr - 1

    # Corner pixel coordinates for the block
    corners_px = [
        (min_col_pixel, min_row_pixel),
        (min_col_pixel, max_row_pixel),
        (max_col_pixel, min_row_pixel),
        (max_col_pixel, max_row_pixel),
    ]

    # Transform pixel coords -> (x, y)
    # Note: Typically x ~ longitude, y ~ latitude (if dataset is in geographic CRS)
    corners_xy = [transform * (px[0], px[1]) for px in corners_px]

    # corners_xy is a list of (x, y) pairs
    xs = [pt[0] for pt in corners_xy]
    ys = [pt[1] for pt in corners_xy]

    min_lon, max_lon = min(xs), max(xs)
    min_lat, max_lat = min(ys), max(ys)

    return min_lat, max_lat, min_lon, max_lon

def compute_boolean_value(block_data):
    """
    Given a 2D NumPy array of the first band data for this block,
    return 1 if there are any positive values (not including 255), else 0.
    """
    # Exclude no-data (255) and check if any remaining values > 0
    # Create a mask that is True if data != 255 and data > 0
    mask = (block_data != 255) & (block_data > 0)
    return 1 if np.any(mask) else 0

# ------------------------------------------------------------------------
# Main Script
# ------------------------------------------------------------------------
def main():
    if len(sys.argv) < 3:
        print("Usage: python script.py <relative_input_tif> <relative_output_dir>")
        sys.exit(1)
    
    # Parse input arguments
    tif_path = sys.argv[1]      # e.g., "data/my_image.tif"
    output_dir = sys.argv[2]    # e.g., "outputs/"
    
    # Open the TIF file with rasterio
    with rasterio.open(tif_path) as dataset:
        # Read first band only for boolean checks
        band1 = dataset.read(1)
        
        # Basic info
        rows, cols = band1.shape
        print(f"Raster shape: {rows} rows x {cols} cols")
        
        # Check that COMPRESSION_RATIO divides rows and cols cleanly
        if (rows % COMPRESSION_RATIO) != 0 or (cols % COMPRESSION_RATIO) != 0:
            raise ValueError(f"COMPRESSION_RATIO={COMPRESSION_RATIO} does not evenly divide "
                             f"rows={rows} or cols={cols}.")
        else:
            print(f"Confirmed that COMPRESSION_RATIO={COMPRESSION_RATIO} evenly divides both dimensions.")
        
        row_block_count = rows // COMPRESSION_RATIO
        col_block_count = cols // COMPRESSION_RATIO
        total_blocks = row_block_count * col_block_count
        
        print(f"Number of blocks (rows x cols): {row_block_count} x {col_block_count} = {total_blocks} total")
        
        # Determine zero-padding widths for row and column IDs
        row_id_width = len(str(row_block_count - 1))  # e.g. if row_block_count=500, width=3
        col_id_width = len(str(col_block_count - 1))
        
        # Create output directory if it doesn't exist
        os.makedirs(output_dir, exist_ok=True)
        
        # Prepare lists of block indices
        block_rows = list(range(row_block_count))
        random.shuffle(block_rows)  # shuffle row blocks

        # Process blocks
        for row_block_idx in block_rows:
            block_cols = list(range(col_block_count))
            random.shuffle(block_cols)  # shuffle col blocks within this row
            
            # Check if we've already created all files
            existing_files_count = len([f for f in os.listdir(output_dir) if f.endswith(".txt")])
            if existing_files_count == total_blocks:
                print("All block files already exist. Terminating.")
                sys.exit(0)
            
            for col_block_idx in block_cols:
                
                # Prepare the output filename
                row_str = zero_pad(row_block_idx, row_id_width)
                col_str = zero_pad(col_block_idx, col_id_width)
                out_filename = f"{row_str}-{col_str}.txt"
                out_filepath = os.path.join(output_dir, out_filename)
                
                # If this file already exists, skip
                if os.path.exists(out_filepath):
                    # Print progress
                    print(f"[SKIP] {out_filename} already exists. "
                          f"Progress: {existing_files_count}/{total_blocks}")
                    continue
                
                # Compute bounding lat/lons
                min_lat, max_lat, min_lon, max_lon = block_latlon_bounds(
                    row_block_idx, col_block_idx, COMPRESSION_RATIO, dataset.transform
                )
                
                # Calculate midpoint lat/lon
                mid_lat = (min_lat + max_lat) / 2.0
                mid_lon = (min_lon + max_lon) / 2.0
                
                # Extract block data for band1
                # Slicing: band1[row_start:row_end+1, col_start:col_end+1]
                row_start = row_block_idx * COMPRESSION_RATIO
                row_end   = (row_block_idx + 1) * COMPRESSION_RATIO
                col_start = col_block_idx * COMPRESSION_RATIO
                col_end   = (col_block_idx + 1) * COMPRESSION_RATIO
                block_data = band1[row_start:row_end, col_start:col_end]
                
                # Compute boolean
                bool_val = compute_boolean_value(block_data)
                
                # Write output file
                with open(out_filepath, "w") as f:
                    f.write(f"{min_lat} {max_lat}\n")
                    f.write(f"{min_lon} {max_lon}\n")
                    f.write(f"{mid_lat} {mid_lon}\n")
                    f.write(f"{bool_val}\n")
                
                # Print progress
                new_count = existing_files_count + 1  # We just created one file
                print(f"[OK] Created {out_filename}. Progress: {new_count}/{total_blocks}.")

        print("Processing complete. No more blocks to process.")

if __name__ == "__main__":
    main()
