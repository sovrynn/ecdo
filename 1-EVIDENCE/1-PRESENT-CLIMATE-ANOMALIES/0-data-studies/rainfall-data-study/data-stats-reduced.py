import os
import pandas as pd

# Set the thresholds for date comparisons
year_thresholds = [1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000]

# Initialize dictionaries to store counts
stats = {year: {'count': 0, 'no_zero_prcp': 0} for year in year_thresholds}
adjusted_stats = {year: {'count': 0} for year in year_thresholds}  # Adjusted for earliest non-zero PRCP dates
contiguous_stats = {year: {'count': 0} for year in year_thresholds}  # Contiguous non-zero PRCP values from 2020 backward

# Function to check if a file is a CSV
def is_csv_file(filename):
    return filename.endswith('.csv')

# First pass: Count total CSV files
total_csv_files = sum(
    is_csv_file(file)
    for root, dirs, files in os.walk('.')
    if root.endswith('reduced')
    for file in files
)

# Initialize progress counter
processed_files = 0

# Loop through all folders in the current directory that end in "reduced"
for root, dirs, files in os.walk('.'):
    if root.endswith('reduced'):
        for file in files:
            if is_csv_file(file):
                processed_files += 1
                file_path = os.path.join(root, file)
                
                # Load the CSV file
                try:
                    df = pd.read_csv(file_path)
                    
                    # Check if necessary columns are present
                    if 'DATE' in df.columns and 'PRCP' in df.columns:
                        # Convert DATE column to integer year format
                        df['DATE'] = pd.to_numeric(df['DATE'], errors='coerce')
                        
                        # Remove rows with NaN in DATE column for processing
                        df = df.dropna(subset=['DATE'])

                        # Sort by DATE in descending order to start from 2020 and go backward
                        df = df.sort_values('DATE', ascending=False)
                        
                        has_no_zero_prcp = (df['PRCP'] != 0).all()
                        adjusted_df = df[df['PRCP'] != 0]  # Filter out rows where PRCP is 0 for adjusted stats

                        # Create contiguous non-zero PRCP segment from 2020 backward
                        contiguous_df = df[df['PRCP'] != 0]
                        if not contiguous_df.empty:
                            # Find the first occurrence of zero after non-zero PRCP values start
                            first_zero_index = contiguous_df.index[contiguous_df['PRCP'] == 0]
                            if not first_zero_index.empty:
                                # Truncate to only contiguous non-zero PRCP values
                                contiguous_df = contiguous_df.loc[:first_zero_index[0] - 1]

                        # Loop over each year threshold
                        for year in year_thresholds:
                            # Original count based on all rows
                            if any(df['DATE'] < year):
                                stats[year]['count'] += 1
                                if has_no_zero_prcp:
                                    stats[year]['no_zero_prcp'] += 1
                            
                            # Adjusted count based on non-zero PRCP rows only
                            if not adjusted_df.empty and any(adjusted_df['DATE'] < year):
                                adjusted_stats[year]['count'] += 1

                            # Contiguous count based on non-zero PRCP from 2020 backward
                            if not contiguous_df.empty and any(contiguous_df['DATE'] < year):
                                contiguous_stats[year]['count'] += 1
                except Exception as e:
                    print(f"Error processing file {file_path}: {e}")
                
                # Print progress indicator
                print(f"Processed {processed_files}/{total_csv_files} files", end='\r')

# Print out the results
print("\n\nStatistics for CSV files based on DATE column:")
for year in year_thresholds:
    count = stats[year]['count']
    no_zero_prcp_count = stats[year]['no_zero_prcp']
    adjusted_count = adjusted_stats[year]['count']
    contiguous_count = contiguous_stats[year]['count']
    
    print(f"\nFor year < {year}:")
    print(f"  - CSV files: {count}/{total_csv_files}")
    print(f"  - CSV files with no 0 in PRCP: {no_zero_prcp_count}/{count if count > 0 else 'N/A'}")
    print(f"  - Adjusted CSV files (non-zero PRCP from earliest date): {adjusted_count}/{total_csv_files}")
    print(f"  - Contiguous non-zero PRCP files from 2020 backward: {contiguous_count}/{total_csv_files}")
