import pandas as pd
import matplotlib.pyplot as plt
import sys
from sklearn.linear_model import LinearRegression
import numpy as np

def plot_precipitation_and_temperature(csv_filename, output_prefix):
    # Load CSV data
    data = pd.read_csv(csv_filename, dtype=str)
    
    # Convert DATE column to datetime and ensure PRCP, TMAX, TMIN are numeric
    data['DATE'] = pd.to_datetime(data['DATE'], errors='coerce')
    data['PRCP'] = pd.to_numeric(data['PRCP'], errors='coerce')
    data['TMAX'] = pd.to_numeric(data['TMAX'], errors='coerce')
    data['TMIN'] = pd.to_numeric(data['TMIN'], errors='coerce')
    
    print_temp_range(data)

    plot_linear_regression(data, 'PRCP', output_prefix)
    plot_dual_regression(data, 'DATE', 'TMAX', 'TMIN', output_prefix)

    # # Chart 1: Plotting PRCP over time
    # plt.figure()
    # plt.plot(data['DATE'], data['PRCP'], label='PRCP', color='blue')
    # plt.xlabel('Date')
    # plt.ylabel('Precipitation (mm)')
    # plt.title('Daily Precipitation Over Time')
    # plt.legend()
    # plt.savefig(f"{output_prefix}1.png")
    # plt.close()

    # # Chart 2: Plotting TMAX and TMIN over time on the same chart
    # plt.figure()
    # plt.plot(data['DATE'], data['TMAX'], label='TMAX', color='red')
    # plt.plot(data['DATE'], data['TMIN'], label='TMIN', color='blue')
    # plt.xlabel('Date')
    # plt.ylabel('Temperature (°C)')
    # plt.title('Daily Maximum and Minimum Temperature Over Time')
    # plt.legend()
    # plt.savefig(f"{output_prefix}2.png")
    # plt.close()

def print_temp_range(data):
    df = pd.DataFrame(data)

    # Convert the column to numeric type (int or float)
    df['TMAX'] = pd.to_numeric(df['TMAX'])

    # Now you can use the max function
    print(df['TMAX'].max())

    # Convert the column to numeric type (int or float)
    df['TMIN'] = pd.to_numeric(df['TMIN'])

    # Now you can use the max function
    print(df['TMIN'].min())

def plot_linear_regression(data, COL, output_prefix):
    # Assuming 'data' is the DataFrame containing the dataset
    data['DATE'] = pd.to_datetime(data['DATE'])
    data = data.dropna(subset=[COL])  # Drop rows where PRCP is NaN

    # Convert DATE to ordinal format (days since 1970-01-01)
    data['DATE_ORDINAL'] = data['DATE'].map(lambda x: x.toordinal())

    # Define X and y
    X = data[['DATE_ORDINAL']]
    y = data[COL]

    # Create and fit the linear regression model
    model = LinearRegression()
    model.fit(X, y)

    # Generate predictions
    data['PRCP_PRED'] = model.predict(X)

    # Plot the data and the regression line
    plt.figure(figsize=(10, 6))
    plt.scatter(data['DATE'], data[COL], color='blue', label='Observed Data', alpha=0.5)
    plt.plot(data['DATE'], data['PRCP_PRED'], color='red', label='Best Fit Line')

    # Display the equation on the chart
    slope = model.coef_[0]
    intercept = model.intercept_
    plt.text(data['DATE'].iloc[0], max(data[COL]), f"y = {slope:.6f}x + {intercept:.6f}", color='red', fontsize=12)

    # Labeling and showing the plot
    plt.xlabel('Date')
    plt.ylabel('Precipitation (PRCP)')
    plt.title('Linear Regression of Precipitation over Time')
    plt.legend(loc='upper right')  # Move legend to the bottom right
    # plt.show()
    plt.savefig(f"{output_prefix}_prcp.png")
    plt.close()

def plot_dual_regression(data, date_col, y_col1, y_col2, output_prefix):
    # Ensure DATE is in datetime format
    data[date_col] = pd.to_datetime(data[date_col])
    
    # Drop rows with NaN values in any of the specified columns
    data = data.dropna(subset=[date_col, y_col1, y_col2])

    # Convert DATE to ordinal for linear regression
    data['DATE_ORDINAL'] = data[date_col].map(lambda x: x.toordinal())

    # Set up the X (date in numeric format)
    X = data[['DATE_ORDINAL']]

    # Create and fit the first regression model for y_col1
    model1 = LinearRegression()
    model1.fit(X, data[y_col1])
    data['PRED1'] = model1.predict(X)

    # Create and fit the second regression model for y_col2
    model2 = LinearRegression()
    model2.fit(X, data[y_col2])
    data['PRED2'] = model2.predict(X)

    # Plot the data and both regression lines
    plt.figure(figsize=(10, 6))

    # Plot observed data for y_col1 and y_col2
    plt.scatter(data[date_col], data[y_col1], color='blue', label=f'Observed Data ({y_col1})', alpha=0.5)
    plt.scatter(data[date_col], data[y_col2], color='green', label=f'Observed Data ({y_col2})', alpha=0.5)

    # Plot regression lines for y_col1 and y_col2
    plt.plot(data[date_col], data['PRED1'], color='blue', label=f'Regression Line ({y_col1})')
    plt.plot(data[date_col], data['PRED2'], color='green', label=f'Regression Line ({y_col2})')

    # Display equations for both lines
    slope1, intercept1 = model1.coef_[0], model1.intercept_
    slope2, intercept2 = model2.coef_[0], model2.intercept_

    # Display both equations on the chart
    plt.text(data[date_col].iloc[0], max(data[y_col1]), f"{y_col1} = {slope1:.6f}x + {intercept1:.6f}", color='red', fontsize=12)
    plt.text(data[date_col].iloc[0], max(data[y_col2]), f"{y_col2} = {slope2:.6f}x + {intercept2:.6f}", color='red', fontsize=12)

    # Labeling and showing the plot
    plt.xlabel(date_col)
    plt.ylabel("Values")
    plt.title(f'Linear Regression of {y_col1} and {y_col2} over {date_col}')
    plt.legend(loc='upper right')  # Move legend to the bottom right
    # plt.show()
    plt.savefig(f"{output_prefix}_temp.png")
    plt.close()

# Command-line arguments
if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <csv_filename> <output_prefix>")
    else:
        csv_filename = sys.argv[1]
        output_prefix = sys.argv[2]
        plot_precipitation_and_temperature(csv_filename, output_prefix)
