import os
from pathlib import Path
import pandas as pd

# Base directory is the current directory
base_dir = Path('.')

# Find all folders ending with '-reduced'
reduced_folders = [folder for folder in base_dir.iterdir() if folder.is_dir() and folder.name.endswith('-reduced')]

# Initialize the processed files counter
processed_files = 0

# Process each '-reduced' folder
for folder in reduced_folders:
    # Get the prefix A from 'A-reduced'
    prefix = folder.name[:-8]  # Remove '-reduced' from the end
    # Create the corresponding 'A-trimmed' folder
    trimmed_folder = base_dir / f"{prefix}-longtrim"
    trimmed_folder.mkdir(exist_ok=True)
    
    # Find all CSV files in the folder
    csv_files = list(folder.glob('*.csv'))
    
    for csv_file in csv_files:
        try:
            # Read the CSV file into a DataFrame
            df = pd.read_csv(csv_file)
            
            # Check if 'DATE' and 'PRCP' columns are present
            if 'DATE' not in df.columns or 'PRCP' not in df.columns:
                continue  # Skip this file
            
            # Ensure that DATE is in integer format (4-digit year)
            df['DATE'] = df['DATE'].astype(int)
            
            # Filter the DataFrame for years from 2000 to 2023
            df = df[df['DATE'].between(1950, 2020)]
            
            # Check that for each year from 2000 to 2023, there is a row with non-zero PRCP
            years = range(1950, 2021)  # 2000 to 2023 inclusive
            has_all_years = True
            for year in years:
                if not ((df['DATE'] == year) & (df['PRCP'] != 0)).any():
                    has_all_years = False
                    break
            if not has_all_years:
                continue  # Skip this file
            
            # Sort the DataFrame by DATE
            df = df.sort_values('DATE').reset_index(drop=True)
            
            # Calculate MULT column
            df['MULT'] = df['PRCP'] / df['PRCP'].shift(1)
            df.loc[df.index[0], 'MULT'] = 1  # Set MULT for the first row to 1
            
            # Write the new CSV file to the output folder
            output_file = trimmed_folder / csv_file.name
            df.to_csv(output_file, index=False)
            
            # Update the processed files counter
            processed_files += 1
            print(f"Total CSV files processed: {processed_files}", end='\r')
        
        except Exception as e:
            # Handle exceptions (e.g., file read errors)
            print(f"Error processing file {csv_file}: {e}")
            continue

# After processing all files, print the total number of files processed
print(f"\nTotal CSV files processed: {processed_files}")
