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

    # --------------------------------------------------------------------------
    # 2) Find and shuffle all .csv files in the input directory
    # --------------------------------------------------------------------------
    all_files = os.listdir(input_dir)
    csv_files = [f for f in all_files if f.lower().endswith(".csv")]

    total_files = len(csv_files)
    if total_files == 0:
        print(f"No CSV files found in '{input_dir}'. Exiting.")
        return

    # Shuffle the list to process the files in random order
    random.shuffle(csv_files)

    # --------------------------------------------------------------------------
    # 3) Criteria constants
    # --------------------------------------------------------------------------
    REQUIRED_COLUMNS = {"PRCP", "TMAX", "TMIN", "SNOW", "DATE"}
    EARLIEST_REQUIRED_DATE = datetime(1950, 1, 1)
    LATEST_REQUIRED_DATE = datetime(2024, 12, 31)
    
    # --------------------------------------------------------------------------
    # 4) Process each CSV file in random order
    # --------------------------------------------------------------------------
    for i, csv_filename in enumerate(csv_files, start=1):
        # Progress indicator
        print(f"Processing file {i} of {total_files}: {csv_filename}")

        input_path = os.path.join(input_dir, csv_filename)
        output_path = os.path.join(output_dir, csv_filename)
        
        # Check if output file already exists
        if os.path.exists(output_path):
            print(f"  -> File already exists in output directory. Skipping.")
            continue
        
        # Read the file and check criteria
        try:
            with open(input_path, mode='r', newline='', encoding='utf-8') as f:
                reader = csv.reader(f)
                
                # --------------------------------------------------------------
                # a) Read header and verify required columns
                # --------------------------------------------------------------
                header = next(reader, None)
                if not header:
                    print(f"  -> No header found or empty file. Skipping.")
                    continue
                
                # Convert header to a set of unquoted column names (if needed)
                header = [col.strip('"') for col in header]
                header_set = set(header)
                
                # Check for required columns
                if not REQUIRED_COLUMNS.issubset(header_set):
                    print(f"  -> Missing one or more required columns. Skipping.")
                    continue
                
                # Identify the index for the DATE column
                date_index = header.index("DATE")
                
                # --------------------------------------------------------------
                # b) Find earliest and latest date in the file
                # --------------------------------------------------------------
                min_date_found = None
                max_date_found = None
                
                for row in reader:
                    # Skip rows that don't have enough columns
                    if len(row) <= date_index:
                        continue
                    
                    date_str = row[date_index].strip()
                    # Attempt to parse date
                    try:
                        current_date = datetime.strptime(date_str, "%Y-%m-%d")
                    except ValueError:
                        # If we can't parse a line's date, ignore the line
                        continue
                    
                    if min_date_found is None or current_date < min_date_found:
                        min_date_found = current_date
                    if max_date_found is None or current_date > max_date_found:
                        max_date_found = current_date
                
                if not min_date_found or not max_date_found:
                    print(f"  -> No valid dates found. Skipping.")
                    continue
                
                # --------------------------------------------------------------
                # c) Check date range criteria
                # --------------------------------------------------------------
                if (min_date_found <= EARLIEST_REQUIRED_DATE 
                        and max_date_found >= LATEST_REQUIRED_DATE):
                    # Meets criteria - copy file
                    shutil.copy2(input_path, output_path)
                    print("  -> File meets criteria and has been copied.")
                else:
                    print("  -> Date range does not meet criteria. Skipping.")
        
        except Exception as e:
            print(f"  -> Error reading file: {e}")
            continue

    print("Done processing files.")

if __name__ == "__main__":
    main()
