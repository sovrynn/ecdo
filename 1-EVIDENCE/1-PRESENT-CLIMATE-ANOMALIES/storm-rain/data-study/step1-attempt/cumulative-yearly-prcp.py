import os
import sys
import pandas as pd
import glob

def process_csv_files(directory):
    # Define the target years and initialize output
    target_years = [1973, 1990, 2010, 2023]
    
    # Open the output file for writing results
    with open('output.txt', 'w') as output_file:
        # Write header for readability
        output_file.write(f"{'File':<20} {'1973_Sum':>10} {'1990_Sum':>10} {'2010_Sum':>10} {'2023_Sum':>10} {'D/A':>10} {'C/A':>10} {'B/A':>10} {'Rows_1973':>10} {'Rows_2023':>10}\n")
        
        # Get all CSV files in the specified directory
        csv_files = glob.glob(os.path.join(directory, "*.csv"))
        csv_files = sorted(csv_files)

        skipped_count = 0
        success_count = 0
        skipped_zero_count = 0
        
        # Process each CSV file
        for csv_file in csv_files:
            print(f"Processing {csv_file}...")

            # Try to read the CSV file
            try:
                df = pd.read_csv(csv_file)
            except Exception as e:
                print(f"Failed to read {csv_file}: {e}")
                continue  # Skip to the next file if there's an error

            # Ensure DATE and PRCP columns are present
            if 'DATE' not in df.columns or 'PRCP' not in df.columns:
                print(f"Skipping {csv_file} (missing required columns)")
                continue

            # Convert DATE column to datetime to extract the year
            df['DATE'] = pd.to_datetime(df['DATE'], errors='coerce')
            df = df.dropna(subset=['DATE'])  # Drop rows with invalid dates

            # Check if data covers from 1973 to 2024
            if df['DATE'].dt.year.min() > 1973 or df['DATE'].dt.year.max() < 2024:
                print(f"Skipping {csv_file} (data does not cover 1973 to 2023)")
                skipped_count += 1
                continue

            # Initialize sums for target years and count of rows for 1973 and 2023
            year_sums = {year: 0 for year in target_years}
            row_counts = {year: 0 for year in [1973, 2023]}
            
            # Loop through each target year and calculate the sum for PRCP and count of rows
            for year in target_years:
                yearly_data = df[df['DATE'].dt.year == year]
                year_sums[year] = yearly_data['PRCP'].sum()
                if year in row_counts:
                    row_counts[year] = len(yearly_data)  # Count the number of rows for 1973 and 2023

            # Skip files where the sum for 1973 (A) is zero to avoid division errors in E = D / A
            A = year_sums[1973]
            D = year_sums[2023]
            if A == 0 or D == 0:
                print(f"Skipping {csv_file} (sum for 1973 is zero or sum for 2023 is zero)")
                skipped_zero_count += 1
                continue

            # Calculate the required values
            F = os.path.basename(csv_file)  # Filename as the first element
            B = year_sums[1990]
            C = year_sums[2010]
            E = D / A  # Calculate E as D / A THIS IS 2023/1973
            G = C / A # 2010 / 1973
            H = B / A # 1990 / 1973
            rows_1973 = row_counts[1973]
            rows_2023 = row_counts[2023]

            # Prepare the output line in a fixed-width format
            output_line = f"{F:<20} {A:>10.2f} {B:>10.2f} {C:>10.2f} {D:>10.2f} {E:>10.6f} {G:>10.6f} {H:>10.6f} {rows_1973:>10} {rows_2023:>10}\n"

            # Write the line to the output file
            output_file.write(output_line)

            success_count += 1

        print(f'Total csv files: {len(csv_files)}')
        print(f'Skip count: {skipped_count}')
        print(f'Success count: {success_count}')
        print(f'Skipped zero sum count: {skipped_zero_count}')

if __name__ == "__main__":
    # Check if directory argument is provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <directory>")
    else:
        directory = sys.argv[1]
        process_csv_files(directory)
