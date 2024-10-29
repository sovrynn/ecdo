import os
import sys
import pandas as pd
from pathlib import Path
from tqdm import tqdm
import numpy as np

def main():
    # Check if directory name is provided
    if len(sys.argv) != 2:
        print("Usage: python script_name.py <relative_directory>")
        sys.exit(1)

    # Get the directory name from command-line arguments
    directory = Path(sys.argv[1])

    # Check if the directory exists
    if not directory.is_dir():
        print(f"Directory '{directory}' does not exist.")
        sys.exit(1)

    # Find all CSV files in the directory
    csv_files = list(directory.glob('*.csv'))

    if not csv_files:
        print(f"No CSV files found in directory '{directory}'.")
        sys.exit(1)

    # Initialize a dictionary to hold MULT values for each year
    years = range(2000, 2024)  # Years from 2000 to 2023 inclusive
    mult_values = {year: [] for year in years}

    # Process each CSV file with a progress bar
    print(f"Processing CSV files in '{directory}'...")
    for csv_file in tqdm(csv_files, desc="Processing files", unit="file"):
        try:
            # Read the CSV file
            df = pd.read_csv(csv_file)

            # Check if 'DATE' and 'MULT' columns are present
            if 'DATE' not in df.columns or 'MULT' not in df.columns:
                print(f"Skipping file '{csv_file.name}': Missing 'DATE' or 'MULT' columns.")
                continue

            # Ensure 'DATE' is in integer format
            df['DATE'] = pd.to_numeric(df['DATE'], errors='coerce').astype('Int64')

            # Drop rows with invalid 'DATE' or 'MULT' values
            df = df.dropna(subset=['DATE', 'MULT'])

            # Loop through each year and collect MULT values
            for year in years:
                year_mult_values = df.loc[df['DATE'] == year, 'MULT'].tolist()
                mult_values[year].extend(year_mult_values)

        except Exception as e:
            print(f"Error processing file '{csv_file.name}': {e}")
            continue

    # Calculate and print median and average for each year
    print("\nYear-wise Median and Average of MULT values:")
    print("{:<6} {:>15} {:>15}".format('Year', 'Median', 'Average'))
    for year in years:
        values = mult_values[year]
        if values:
            median = np.median(values)
            average = np.mean(values)
            print(f"{year:<6} {median:>15.6f} {average:>15.6f}")
        else:
            print(f"{year:<6} {'No data':>15} {'No data':>15}")

if __name__ == "__main__":
    main()
