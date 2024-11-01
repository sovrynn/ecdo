import sys
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

def main(filename):
    # Read data from file, skipping the first line
    data = pd.read_csv(filename, delim_whitespace=True, skiprows=1, header=None, names=['DATE', 'TMAX', 'TMIN'])

    # Extract values
    years = data['DATE'].values
    tmax_values = data['TMAX'].values
    tmin_values = data['TMIN'].values

    # Perform linear regression for TMAX and TMIN
    coeffs_tmax = np.polyfit(years, tmax_values, 1)
    slope_tmax, intercept_tmax = coeffs_tmax
    tmax_trend = slope_tmax * years + intercept_tmax

    coeffs_tmin = np.polyfit(years, tmin_values, 1)
    slope_tmin, intercept_tmin = coeffs_tmin
    tmin_trend = slope_tmin * years + intercept_tmin

    # Plotting TMAX
    plt.figure(figsize=(10, 6))
    plt.plot(years, tmax_values, label='Average TMAX per Year', color='red', marker='o')
    plt.plot(years, tmax_trend, color='darkred', linestyle='--', label='TMAX Linear Regression')
    plt.xlabel('Year')
    plt.ylabel('Yearly Average of Highest Daily Temperature (Celsius)')
    plt.title('Yearly Average of Highest Daily Temperature, Averaged Across 2270 Stations')
    plt.legend()
    plt.savefig('TMAX_plot.png')
    plt.show()

    # Plotting TMIN
    plt.figure(figsize=(10, 6))
    plt.plot(years, tmin_values, label='Average TMIN per Year', color='blue', marker='o')
    plt.plot(years, tmin_trend, color='darkblue', linestyle='--', label='TMIN Linear Regression')
    plt.xlabel('Year')
    plt.ylabel('Yearly Average of Lowest Daily Temperature (Celsius)')
    plt.title('Yearly Average of Lowest Daily Temperature, Averaged Across 2270 Stations')
    plt.legend()
    plt.savefig('TMIN_plot.png')
    plt.show()

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script_name.py <filename>")
    else:
        filename = sys.argv[1]
        main(filename)
