import os
import pandas as pd

# Define start and end dates for filtering
START_YEAR = 2000
END_YEAR = 2020

# Initialize output directory
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# Initialize counter for new CSV files
processed_files_count = 0

# Gather all directories in the current directory that end with 'reduced'
directories = [d for d in os.listdir('.') if os.path.isdir(d) and d.endswith('reduced')]

# Initialize a list to collect all CSV files that will be processed
csv_files_to_process = []

for directory in directories:
    # Gather all CSV files in the current 'reduced' directory
    csv_files = [f for f in os.listdir(directory) if f.endswith('.csv')]
    csv_files_to_process.extend([(directory, csv_file) for csv_file in csv_files])

# Total files count for progress tracking
total_files = len(csv_files_to_process)

for idx, (directory, csv_file) in enumerate(csv_files_to_process, start=1):
    # Read each CSV file
    file_path = os.path.join(directory, csv_file)
    df = pd.read_csv(file_path)

    # Check if 'DATE' and 'PRCP' columns are present
    if 'DATE' in df.columns and 'PRCP' in df.columns:
        # Filter rows for the specified date range and non-zero PRCP values
        df_filtered = df[(df['DATE'] >= START_YEAR) & (df['DATE'] <= END_YEAR) & (df['PRCP'] != 0)]
        
        # Check if all dates within the range are present and if PRCP has no zero entries
        if len(df_filtered) == (END_YEAR - START_YEAR + 1):
            # Sort by DATE to ensure order
            df_filtered = df_filtered.sort_values(by='DATE').reset_index(drop=True)

            # Add the 'MULT' column
            df_filtered['MULT'] = df_filtered['PRCP'].pct_change().fillna(0) + 1
            df_filtered.loc[0, 'MULT'] = 1  # Set the first entry in MULT to 1

            # Define the output filename and save the processed DataFrame
            output_file = os.path.join(output_dir, csv_file.replace('.csv', '-processed.csv'))
            df_filtered.to_csv(output_file, index=False)
            
            # Increment the processed files counter
            processed_files_count += 1

    # Print progress
    print(f"Processed {idx}/{total_files} files...")

# Print the total number of new CSV files created
print(f"Total number of new CSV files created: {processed_files_count}")
