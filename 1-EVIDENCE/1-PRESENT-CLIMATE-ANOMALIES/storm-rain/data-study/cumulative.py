import pandas as pd
import numpy as np
import glob
import os
import sys
from sklearn.linear_model import LinearRegression

def process_csv_files(directory):
    # Get all CSV files in the specified directory
    csv_files = glob.glob(os.path.join(directory, "*.csv"))

    # Open the output file
    with open('output.txt', 'w') as output_file:
        # Process each CSV file
        for csv_file in csv_files:
            print(f"Processing {csv_file}...")

            # Attempt to read the CSV file into a DataFrame
            try:
                df = pd.read_csv(csv_file)
            except Exception as e:
                print(f"Failed to read {csv_file}: {e}")
                continue  # Move to the next file if reading fails

            # Check if the required columns are present; if not, skip the file
            required_columns = ['PRCP', 'TMAX', 'TMIN']
            if not all(column in df.columns for column in required_columns):
                print(f"Skipping {csv_file} (missing required columns)")
                continue

            # Ensure the DATE column is in datetime format
            df['DATE'] = pd.to_datetime(df['DATE'], format='%Y-%m-%d', errors='coerce')

            # Remove rows where DATE could not be parsed
            df = df.dropna(subset=['DATE'])

            # add cutoff date
            cutoff_date = pd.to_datetime("1973-01-01")  # Adjust this date as needed
            df = df[df['DATE'] >= cutoff_date]

            # Check if the most recent date is in 2024; if not, skip the file
            most_recent_date = df['DATE'].max()
            if most_recent_date.year != 2024:
                print(f"Skipping {csv_file} (most recent date is not in 2024)")
                continue

            # Get the starting and ending dates
            if df['DATE'].empty:
                D1 = D2 = ''
            else:
                D1 = df['DATE'].min().strftime('%Y-%m-%d')
                D2 = df['DATE'].max().strftime('%Y-%m-%d')

            slopes = []

            # Perform linear regression for each required variable
            for var in required_columns:
                # Drop rows where the variable is NaN
                df_var = df.dropna(subset=[var])

                # If the DataFrame is empty after dropping NaNs
                if df_var.empty:
                    slope = 0.0
                else:
                    # Convert DATE to numerical format (ordinal)
                    X = df_var['DATE'].map(pd.Timestamp.toordinal).values.reshape(-1, 1)
                    # Ensure y is numeric
                    y = pd.to_numeric(df_var[var], errors='coerce')

                    # Remove any remaining NaN values
                    valid_idx = ~np.isnan(y)
                    X = X[valid_idx]
                    y = y[valid_idx]

                    if len(y) == 0:
                        slope = 0.0
                    else:
                        # Perform linear regression
                        model = LinearRegression()
                        model.fit(X, y)
                        # Get the slope (coefficient)
                        slope = model.coef_[0]

                slopes.append(slope)

            # Prepare the output line
            N = os.path.basename(csv_file)
            S1, S2, S3 = slopes
            line = f"{N} {D1} {D2} {S1:.6f} {S2:.6f} {S3:.6f}\n"

            # Write the line to the output file
            output_file.write(line)

if __name__ == "__main__":
    # Check if directory argument is provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <directory>")
    else:
        directory = sys.argv[1]
        process_csv_files(directory)
