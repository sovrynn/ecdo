import argparse
import os
import glob
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

def main():
    # Parse the input argument
    parser = argparse.ArgumentParser(description='Process CSV files to compute cumulative PRCP values.')
    parser.add_argument('directory', type=str, help='Relative directory containing CSV files')
    args = parser.parse_args()

    # Initialize a DataFrame to hold cumulative PRCP values
    years = list(range(2000, 2024))
    cumulative_prcp = pd.Series(0, index=years)

    # Find all CSV files in the specified directory
    csv_files = glob.glob(os.path.join(args.directory, '*.csv'))

    # Process each CSV file
    for file in csv_files:
        df = pd.read_csv(file)

        # Ensure DATE and PRCP columns exist
        if 'DATE' not in df.columns or 'PRCP' not in df.columns:
            continue  # Skip files that don't have the required columns

        # Filter years from 2000 to 2023
        df = df[df['DATE'].isin(years)]

        # Group by DATE and sum PRCP values
        yearly_prcp = df.groupby('DATE')['PRCP'].sum()

        # Add to cumulative PRCP values
        cumulative_prcp = cumulative_prcp.add(yearly_prcp, fill_value=0)

    # Print the cumulative PRCP values
    print("Year\tCumulative PRCP")
    for year, prcp in cumulative_prcp.items():
        print(f"{year}\t{prcp}")

    # Prepare data for linear regression
    X = np.array(years).reshape(-1, 1)
    y = cumulative_prcp.values

    # Perform linear regression
    model = LinearRegression()
    model.fit(X, y)
    y_pred = model.predict(X)

    # Calculate Mean Squared Error (MSE)
    mse = np.mean((y - y_pred) ** 2)
    print(f"\nMean Squared Error of the regression: {mse}")

    # Plot the original values and the regression line
    plt.figure(figsize=(10, 6))
    plt.scatter(years, y, color='blue', label='Original Data')
    plt.plot(years, y_pred, color='red', label='Linear Regression')
    plt.xlabel('Year')
    plt.ylabel('Cumulative PRCP')
    plt.title('Cumulative PRCP from 2000 to 2023 with Linear Regression')
    plt.legend()
    plt.savefig('x.png')
    plt.show()

if __name__ == "__main__":
    main()
