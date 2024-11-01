import os
import glob
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

def main():
    # Initialize a Series to hold cumulative PRCP values for years 1950 to 2020
    years = list(range(1950, 2021))
    cumulative_prcp = pd.Series(0, index=years)

    # Get the current working directory
    current_dir = os.getcwd()

    # Find all directories ending with 'longtrim' in the current directory
    longtrim_dirs = [d for d in os.listdir(current_dir) if os.path.isdir(d) and d.endswith('longtrim')]

    # Process CSV files in each 'longtrim' directory
    for dir_name in longtrim_dirs:
        dir_path = os.path.join(current_dir, dir_name)
        
        # Find all CSV files in the directory
        csv_files = glob.glob(os.path.join(dir_path, '*.csv'))
        
        for file in csv_files:
            df = pd.read_csv(file)
            
            # Ensure 'DATE' and 'PRCP' columns exist
            if 'DATE' not in df.columns or 'PRCP' not in df.columns:
                continue  # Skip files without required columns

            # Convert 'DATE' to integer if necessary
            df['DATE'] = df['DATE'].astype(int)

            # Filter for years between 1950 and 2020
            df = df[df['DATE'].isin(years)]

            # Group by 'DATE' and sum 'PRCP' values
            yearly_prcp = df.groupby('DATE')['PRCP'].sum()

            # Add to cumulative PRCP values
            cumulative_prcp = cumulative_prcp.add(yearly_prcp, fill_value=0)

    # Print the cumulative PRCP values
    for year, prcp in cumulative_prcp.items():
        print(f"{year} {prcp}")

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

    # Calculate R-squared
    ss_tot = np.sum((y - np.mean(y)) ** 2)
    ss_res = np.sum((y - y_pred) ** 2)
    r_squared = 1 - (ss_res / ss_tot)
    print(f"R-squared: {r_squared}")

    # Print linear regression formula
    slope = model.coef_[0]
    intercept = model.intercept_
    print(f"Linear regression formula: y = {slope:.4f}x + {intercept:.4f}")

    # Calculate 8-year moving average
    moving_avg = pd.Series(y).rolling(window=8, center=True).mean()

    # Plot the original values, regression line, and moving average
    plt.figure(figsize=(12, 8))
    plt.plot(years, y, label='Cumulative PRCP', marker='o')
    plt.plot(years, y_pred, label='Linear Regression', color='red')
    plt.plot(years, moving_avg, label='8-Year Moving Average', color='green')

    plt.xlabel('Year')
    plt.ylabel('Cumulative PRCP')
    plt.title('Cumulative PRCP from 1950 to 2020 with Linear Regression and Moving Average')
    plt.legend()
    plt.savefig('y.png')
    plt.show()

if __name__ == "__main__":
    main()
