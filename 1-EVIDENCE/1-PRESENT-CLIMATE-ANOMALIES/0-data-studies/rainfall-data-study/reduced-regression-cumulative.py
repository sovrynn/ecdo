import os
import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np

def main():
    # Get the current directory
    current_directory = os.getcwd()

    # Find all directories ending with "reduced" in the current directory
    reduced_dirs = [d for d in os.listdir(current_directory) if os.path.isdir(d) and d.endswith("reduced")]
    total_files = 0
    slopes = []

    # Count total number of CSV files across all "reduced" directories for progress indication
    for directory in reduced_dirs:
        total_files += len([f for f in os.listdir(directory) if f.endswith('.csv')])

    if total_files == 0:
        print("No CSV files found in any 'reduced' directory.")
        return

    processed_files = 0  # Track number of successfully processed files

    # Iterate over each "reduced" directory
    for directory in reduced_dirs:
        print(f"\nProcessing directory: {directory}")

        for filename in os.listdir(directory):
            if filename.endswith('.csv'):
                filepath = os.path.join(directory, filename)
                processed_files += 1
                print(f"Processing file {processed_files}/{total_files}: {filename}")

                # Read the CSV file
                df = pd.read_csv(filepath)

                # Check if the required columns are present
                if 'DATE' not in df.columns or 'PRCP' not in df.columns:
                    print(f"  Skipping {filename} - Missing required columns")
                    continue

                # Center the year column by subtracting the first year
                df['DATE'] = pd.to_numeric(df['DATE'], errors='coerce')
                df = df.dropna(subset=['DATE', 'PRCP'])
                df['DATE_Centered'] = df['DATE'] - df['DATE'].iloc[0]

                # Prepare data for linear regression
                X = df[['DATE_Centered']]
                y = df['PRCP']

                # Perform linear regression
                model = LinearRegression()
                model.fit(X, y)
                slope = model.coef_[0]
                slopes.append(slope)

    # Calculate statistics if any slopes were recorded
    if slopes:
        max_slope = max(slopes)
        min_slope = min(slopes)
        median_slope = np.median(slopes)
        avg_slope = np.mean(slopes)

        # Print out the statistics
        print("\nSummary:")
        print(f"Total CSV files processed: {processed_files}/{total_files}")
        print(f"Greatest slope: {max_slope:.4f}")
        print(f"Lowest slope: {min_slope:.4f}")
        print(f"Median slope: {median_slope:.4f}")
        print(f"Average slope: {avg_slope:.4f}")
    else:
        print("No files with valid data were found.")

if __name__ == "__main__":
    main()
