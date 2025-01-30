# Total CSV files: 1669
# CSV files with TMAX and TMIN columns: 215/1669
# CSV files with DATE column in YYYY-MM-DD format: 1663/1669
# CSV files with SNOW column: 6/1669
# CSV files with DATE range from 1973 or earlier to 2023 or later: 453/1669

import os
import sys
import pandas as pd
from datetime import datetime

def scan_csv_files(directory):
    # Counters
    total_csv_files = 0
    count_tmax_tmin = 0
    count_date_format = 0
    count_snow = 0
    count_date_range = 0

    # List all files in the directory
    for filename in os.listdir(directory):
        if filename.endswith(".csv"):
            total_csv_files += 1
            file_path = os.path.join(directory, filename)
            
            try:
                # Read the CSV file
                df = pd.read_csv(file_path)
                
                # Check for TMAX and TMIN columns
                if 'TMAX' in df.columns and 'TMIN' in df.columns:
                    count_tmax_tmin += 1

                # Check for DATE column in YYYY-MM-DD format
                if 'DATE' in df.columns:
                    try:
                        # Attempt to parse the DATE column to confirm the format
                        date_column = pd.to_datetime(df['DATE'], format='%Y-%m-%d', errors='raise')
                        count_date_format += 1

                        # Check if DATE range includes 1973 or earlier and 2023 or later
                        min_date = date_column.min()
                        max_date = date_column.max()
                        if min_date.year <= 1973 and max_date.year >= 2023:
                            count_date_range += 1
                    except ValueError:
                        pass  # Skip if DATE is not in YYYY-MM-DD format

                # Check for SNOW column
                if 'SNOW' in df.columns:
                    count_snow += 1

            except Exception as e:
                print(f"Error reading {filename}: {e}")
                continue

    # Print results
    print(f"Total CSV files: {total_csv_files}")
    print(f"CSV files with TMAX and TMIN columns: {count_tmax_tmin}/{total_csv_files}")
    print(f"CSV files with DATE column in YYYY-MM-DD format: {count_date_format}/{total_csv_files}")
    print(f"CSV files with SNOW column: {count_snow}/{total_csv_files}")
    print(f"CSV files with DATE range from 1973 or earlier to 2023 or later: {count_date_range}/{total_csv_files}")

# Run the script with a directory path argument
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_directory>")
    else:
        directory = sys.argv[1]
        scan_csv_files(directory)
