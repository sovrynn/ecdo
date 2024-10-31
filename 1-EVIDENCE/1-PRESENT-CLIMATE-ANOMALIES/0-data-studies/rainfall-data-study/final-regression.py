import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

def main():
    # Read the data from the file
    data = []
    with open('final.txt', 'r') as file:
        for line in file:
            parts = line.strip().split()
            if len(parts) >= 2:
                date = int(parts[0])  # Convert DATE to integer
                y_value = float(parts[1])  # Convert y-value to float
                data.append((date, y_value))
    
    # Convert data to DataFrame
    df = pd.DataFrame(data, columns=['DATE', 'Y'])

    # Set the smallest DATE as x = 0
    min_date = df['DATE'].min()
    df['X'] = df['DATE'] - min_date

    # Prepare data for linear regression
    X = df[['X']].values  # X should be 2D for sklearn
    y = df['Y'].values

    # Perform linear regression
    model = LinearRegression()
    model.fit(X, y)

    # Get the slope and intercept
    slope = model.coef_[0]
    intercept = model.intercept_

    # Print the regression equation
    print(f"Linear regression equation: y = {slope:.4f}x + {intercept:.4f}")

if __name__ == "__main__":
    main()
