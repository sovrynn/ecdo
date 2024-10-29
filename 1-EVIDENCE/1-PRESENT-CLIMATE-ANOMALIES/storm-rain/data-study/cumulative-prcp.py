import os
import glob
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

def main():
    # Initialize a Series to hold cumulative PRCP values for years 2000 to 2023
    years = list(range(2000, 2024))
    cumulative_prcp = pd.Series(0, index=years)

    # Get the current working directory
    current_dir = os.getcwd()

    # Find all directories ending with 'trimmed' in the current directory
    trimmed_dirs = [d for d in os.listdir(current_dir) if os.path.isdir(d) and d.endswith('trimmed')]

    # Process CSV files in each 'trimmed' directory
    for dir_name in trimmed_dirs:
        print(dir_name)
        dir_path = os.path.join(current_dir, dir_name)
        
        # Find all CSV files in the directory
        csv_files = glob.glob(os.path.join(dir_path, '*.csv'))
        
        for file in csv_files:
            print(file)
            df = pd.read_csv(file)
            
            # Ensure 'DATE' and 'PRCP' columns exist
            if 'DATE' not in df.columns or 'PRCP' not in df.columns:
                continue  # Skip files without required columns

            # Convert 'DATE' to integer if necessary
            df['DATE'] = df['DATE'].astype(int)

            # Filter for years between 2000 and 2023
            df = df[df['DATE'].isin(years)]

            # Group by 'DATE' and sum 'PRCP' values
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

    # Calculate R-squared
    ss_tot = np.sum((y - np.mean(y)) ** 2)
    ss_res = np.sum((y - y_pred) ** 2)
    r_squared = 1 - (ss_res / ss_tot)
    print(f"R-squared: {r_squared}")

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
