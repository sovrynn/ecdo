import os
import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress

# Define start and end years for easy parameterization
START_YEAR = 2001
END_YEAR = 2023

# Check if directory argument is provided
if len(sys.argv) != 2:
    print("Usage: python script.py <relative_directory>")
    sys.exit(1)

# Get the directory from the command line arguments
directory = sys.argv[1]

# Collect all CSV files in the specified directory
csv_files = [f for f in os.listdir(directory) if f.endswith('.csv')]

# Dictionary to store MULT values by year across all files
mult_values_by_year = {year: [] for year in range(START_YEAR, END_YEAR + 1)}

counter = 1
total = len(csv_files)

# Process each CSV file
for csv_file in csv_files:
    print(f'{counter}/{total}')
    counter += 1
    
    # Read the CSV file
    file_path = os.path.join(directory, csv_file)
    df = pd.read_csv(file_path)

    # Check if 'DATE' and 'MULT' columns are present
    if 'DATE' in df.columns and 'MULT' in df.columns:
        # Filter data for the specified year range
        df_filtered = df[(df['DATE'] >= START_YEAR) & (df['DATE'] <= END_YEAR)]

        # Group by year and accumulate MULT values
        for year, group in df_filtered.groupby('DATE'):
            mult_values_by_year[year].extend(group['MULT'].values)
    else:
        print(f"Skipping file {csv_file}: 'DATE' and 'MULT' columns not found.")

# Calculate average and median MULT values for each year
years = list(range(START_YEAR, END_YEAR + 1))
average_mult_values = []
median_mult_values = []

for year in years:
    mult_values = mult_values_by_year[year]
    if mult_values:
        average_mult_values.append(np.mean(mult_values))
        median_mult_values.append(np.median(mult_values))
    else:
        average_mult_values.append(np.nan)
        median_mult_values.append(np.nan)

# Shift the x-axis so that 1974 starts at x = 0
shifted_years = np.array(years) - START_YEAR

# Convert to numpy arrays for easier indexing
average_mult_values = np.array(average_mult_values)
median_mult_values = np.array(median_mult_values)

# Filter out NaN values for regression
valid_indices = ~np.isnan(average_mult_values)
valid_shifted_years = shifted_years[valid_indices]
valid_avg_mults = average_mult_values[valid_indices]
valid_med_mults = median_mult_values[valid_indices]

# Linear regression on average MULT values
slope_avg, intercept_avg, *_ = linregress(valid_shifted_years, valid_avg_mults)
regression_line_avg = intercept_avg + slope_avg * valid_shifted_years

# Linear regression on median MULT values
slope_med, intercept_med, *_ = linregress(valid_shifted_years, valid_med_mults)
regression_line_med = intercept_med + slope_med * valid_shifted_years

# Plotting
plt.figure(figsize=(12, 6))
plt.plot(valid_shifted_years, valid_avg_mults, marker='o', label='Average MULT')
plt.plot(valid_shifted_years, valid_med_mults, marker='s', label='Median MULT')
plt.plot(valid_shifted_years, regression_line_avg, label=f'Avg MULT Regression: y = {intercept_avg:.4f} + {slope_avg:.4f}x')
plt.plot(valid_shifted_years, regression_line_med, label=f'Med MULT Regression: y = {intercept_med:.4f} + {slope_med:.4f}x')

# Labels and legend
plt.xlabel('Years since 1974')
plt.ylabel('MULT Values')
plt.title('Yearly Average and Median MULT Values (1974-2023)')
plt.legend()
plt.grid(True)

# Save the plot
plt.savefig('output.png')
plt.show()

# Calculate cumulative product of average and median MULT values from 1974 to 2023
cumulative_avg_mult = np.prod(valid_avg_mults)
cumulative_med_mult = np.prod(valid_med_mults)

# Print the cumulative values
print(f"Cumulative Product of Average MULT from 1974 to 2023: {cumulative_avg_mult}")
print(f"Cumulative Product of Median MULT from 1974 to 2023: {cumulative_med_mult}")
