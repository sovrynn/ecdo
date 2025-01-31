#!/usr/bin/env python3

import os
import sys
import csv
import shutil
import random
from datetime import datetime

def main():
    # --------------------------------------------------------------------------
    # 1) Parse command-line arguments
    # --------------------------------------------------------------------------
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_dir> <output_dir>")
        sys.exit(1)
    
    input_dir = sys.argv[1]
    output_dir = sys.argv[2]
    
    # Ensure the output directory exists
    os.makedirs(output_dir, exist_ok=True)

    # Create or ensure the "data-filtered-out" directory exists
    filtered_out_dir = "data-filtered-out"
    os.makedirs(filtered_out_dir, exist_ok=True)

    # --------------------------------------------------------------------------
    # 2) Find and shuffle all .csv files in the input directory
    # --------------------------------------------------------------------------
    all_files = os.listdir(input_dir)
    csv_files = [f for f in all_files if f.lower().endswith(".csv")]

    total_files = len(csv_files)
    if total_files == 0:
        print(f"No CSV files found in '{input_dir}'. Exiting.")
        return

    # Shuffle the list to process the files in a random order
    random.shuffle(csv_files)

    # --------------------------------------------------------------------------
    # 3) Criteria constants
    # --------------------------------------------------------------------------
    REQUIRED_COLUMNS = {"PRCP", "TMAX", "TMIN", "SNOW", "DATE"}
    EARLIEST_REQUIRED_DATE = datetime(1950, 1, 1)
    EARLIEST_REQUIRED_DATE = datetime(1960, 1, 1)
    EARLIEST_REQUIRED_DATE = datetime(1980, 1, 1)
    LATEST_REQUIRED_DATE = datetime(2024, 12, 31)
    
    # --------------------------------------------------------------------------
    # 4) Process each CSV file in random order
    # --------------------------------------------------------------------------
    for i, csv_filename in enumerate(csv_files, start=1):
        # Progress indicator
        print(f"Processing file {i} of {total_files}: {csv_filename}")

        input_path = os.path.join(input_dir, csv_filename)
        output_path = os.path.join(output_dir, csv_filename)
        filtered_out_path = os.path.join(filtered_out_dir, csv_filename)

        # ----------------------------------------------------------------------
        # a) Before processing, skip if file is already in output or in filtered_out
        # ----------------------------------------------------------------------
        if os.path.exists(output_path):
            print("  -> File already exists in output directory. Skipping.")
            continue

        if os.path.exists(filtered_out_path):
            print("  -> File already exists in 'data-filtered-out'. Skipping.")
            continue
        
        # ----------------------------------------------------------------------
        # b) Read and check criteria
        # ----------------------------------------------------------------------
        try:
            with open(input_path, mode='r', newline='', encoding='utf-8') as f:
                reader = csv.reader(f)
                
                # 1) Read header and verify required columns
                header = next(reader, None)
                if not header:
                    print("  -> No header found or empty file. Skipping.")
                    # If it fails, copy to filtered_out
                    shutil.copy2(input_path, filtered_out_path)
                    continue
                
                # Convert header to a set of unquoted column names
                header = [col.strip('"') for col in header]
                header_set = set(header)
                
                if not REQUIRED_COLUMNS.issubset(header_set):
                    print("  -> Missing one or more required columns. Skipping.")
                    # If it fails, copy to filtered_out
                    shutil.copy2(input_path, filtered_out_path)
                    continue
                
                # 2) Identify the index for the DATE column
                date_index = header.index("DATE")
                
                # 3) Find earliest and latest date in the file
                min_date_found = None
                max_date_found = None
                
                for row in reader:
                    if len(row) <= date_index:
                        # Row doesn't have enough columns (malformed?)
                        continue
                    
                    date_str = row[date_index].strip()
                    try:
                        current_date = datetime.strptime(date_str, "%Y-%m-%d")
                    except ValueError:
                        # If we can't parse a line's date, ignore that line
                        continue
                    
                    if min_date_found is None or current_date < min_date_found:
                        min_date_found = current_date
                    if max_date_found is None or current_date > max_date_found:
                        max_date_found = current_date
                
                # 4) Check date range
                if not min_date_found or not max_date_found:
                    print("  -> No valid dates found. Skipping.")
                    shutil.copy2(input_path, filtered_out_path)
                    continue
                
                if (min_date_found <= EARLIEST_REQUIRED_DATE 
                        and max_date_found >= LATEST_REQUIRED_DATE):
                    # Meets criteria - copy file
                    shutil.copy2(input_path, output_path)
                    print("  -> File meets criteria and has been copied.")
                else:
                    # If fails criteria, copy to filtered out
                    print("  -> Date range does not meet criteria. Skipping.")
                    shutil.copy2(input_path, filtered_out_path)
        
        except Exception as e:
            print(f"  -> Error reading file: {e}")
            # If there's an error, copy to filtered_out so it's not retried
            shutil.copy2(input_path, filtered_out_path)
            continue

    print("Done processing files.")

if __name__ == "__main__":
    main()
