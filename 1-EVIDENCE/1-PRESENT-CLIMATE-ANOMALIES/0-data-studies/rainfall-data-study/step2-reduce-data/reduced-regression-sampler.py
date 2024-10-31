import os
import sys
import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np

def main():
    # Check for correct number of input arguments
    if len(sys.argv) != 2:
        print("Usage: python script.py <directory>")
        sys.exit(1)

    directory = sys.argv[1]
    
    # Initialize statistics
    slopes = []
    total_files = 0

    # Iterate over all CSV files in the directory
    for filename in os.listdir(directory):
        if filename.endswith('.csv'):
            total_files += 1
            filepath = os.path.join(directory, filename)

            # Read the CSV file
            df = pd.read_csv(filepath)

            # Check if the required columns are present
            if 'DATE' not in df.columns or 'PRCP' not in df.columns:
                print(f"Skipping {filename} - Missing required columns")
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
        print(f"Total CSV files processed: {total_files}")
        print(f"Greatest slope: {max_slope:.4f}")
        print(f"Lowest slope: {min_slope:.4f}")
        print(f"Median slope: {median_slope:.4f}")
        print(f"Average slope: {avg_slope:.4f}")
    else:
        print("No files with valid data were found.")

if __name__ == "__main__":
    main()
