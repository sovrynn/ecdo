#!/usr/bin/env python3

import sys
import os
import csv
import shutil

def main():
    if len(sys.argv) != 3:
        print(f"Usage: {os.path.basename(sys.argv[0])} <input_dir> <output_dir>")
        sys.exit(1)

    input_dir = sys.argv[1]
    output_dir = sys.argv[2]

    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)

    # Get a list of all CSV files in the input directory
    csv_files = [f for f in os.listdir(input_dir) if f.lower().endswith('.csv')]
    total_files = len(csv_files)

    required_columns = ["PRCP", "TMAX", "TMIN", "SNOW"]

    print(f"Found {total_files} CSV file(s) to process.\n")

    # Iterate over each CSV file
    for i, filename in enumerate(csv_files, start=1):
        print(f"Processing file {i} of {total_files}: {filename}")
        input_path = os.path.join(input_dir, filename)

        # Open and read the CSV file
        with open(input_path, "r", newline="", encoding="utf-8") as f:
            reader = csv.reader(f)
            
            # Read header row
            try:
                headers = next(reader)
            except StopIteration:
                # Empty file or invalid CSV
                continue

            # Strip enclosing quotes from headers if they exist
            headers = [h.strip('"') for h in headers]

            # Check if the required columns are present
            if not all(col in headers for col in required_columns):
                # If any required column is missing, skip this file
                continue

            # Build a mapping from column name to index for easy lookup
            col_indices = {col: headers.index(col) for col in required_columns}

            # Check that there are no empty values in required columns
            file_is_valid = True
            for row in reader:
                # If row length doesn't match headers, skip or mark invalid
                if len(row) != len(headers):
                    file_is_valid = False
                    break

                # Check each required column
                for col in required_columns:
                    if row[col_indices[col]].strip() == "":
                        file_is_valid = False
                        break

                if not file_is_valid:
                    break

        # If file meets the criteria, copy to output directory if not already there
        if file_is_valid:
            output_path = os.path.join(output_dir, filename)
            if not os.path.exists(output_path):
                shutil.copy2(input_path, output_path)

    print("\nDone processing all files.")

if __name__ == "__main__":
    main()
