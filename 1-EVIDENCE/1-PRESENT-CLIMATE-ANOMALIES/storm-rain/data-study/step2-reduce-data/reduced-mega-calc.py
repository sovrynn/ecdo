import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress

# Initialize lists to store data
all_ratios = {}

# Get all folders ending with 'reduced' in the current directory
directories = [d for d in os.listdir('.') if os.path.isdir(d) and d.endswith('reduced')]

for directory in directories:
    # Get all CSV files in the directory
    csv_files = [f for f in os.listdir(directory) if f.endswith('.csv')]
    counter = 1
    total = len(csv_files)
    for csv_file in csv_files:
        print(f'{counter}/{total}')
        counter += 1

        # Read the CSV file
        df = pd.read_csv(os.path.join(directory, csv_file))
        
        # Filter data for DATE between 1973 and 2023 (inclusive) and PRCP not zero
        df = df[(df['DATE'] >= 1973) & (df['DATE'] <= 2023) & (df['PRCP'] != 0)]
        df = df.sort_values('DATE')
        
        # Ensure we have data for consecutive years
        years = df['DATE'].values
        prcp_values = df['PRCP'].values
        
        for i in range(len(years) - 1):
            year = years[i]
            next_year = years[i + 1]
            # Check if the next year is consecutive
            if next_year - year == 1:
                ratio = prcp_values[i + 1] / prcp_values[i]
                if year not in all_ratios:
                    all_ratios[year] = []
                all_ratios[year].append(ratio)

# Prepare lists for plotting
years = sorted(all_ratios.keys())
average_ratios = []
median_ratios = []

for year in years:
    ratios = all_ratios[year]
    average = np.mean(ratios)
    median = np.median(ratios)
    average_ratios.append(average)
    median_ratios.append(median)

# Convert years to array for regression
x_years = np.array(years)

# Perform linear regression on average ratios
slope_avg, intercept_avg, r_value_avg, p_value_avg, std_err_avg = linregress(x_years, average_ratios)
regression_line_avg = intercept_avg + slope_avg * x_years

# Perform linear regression on median ratios
slope_med, intercept_med, r_value_med, p_value_med, std_err_med = linregress(x_years, median_ratios)
regression_line_med = intercept_med + slope_med * x_years

# Plotting
plt.figure(figsize=(12, 6))
plt.plot(years, average_ratios, marker='o', label='Average Ratios')
plt.plot(years, median_ratios, marker='s', label='Median Ratios')

# Plot regression lines
plt.plot(years, regression_line_avg, label=f'Avg Regression: y = {intercept_avg:.4f} + {slope_avg:.4f}x')
plt.plot(years, regression_line_med, label=f'Med Regression: y = {intercept_med:.4f} + {slope_med:.4f}x')

# Set y-axis to logarithmic scale
plt.yscale('log')

# Labels and legend
plt.xlabel('Year')
plt.ylabel('Multiplier Ratios')
plt.title('Yearly Multiplier Ratios (1973-2022)')
plt.legend()
plt.grid(True)

# Save the plot
plt.savefig('output.png')
plt.show()

# Calculate cumulative product of average and median ratios
cumulative_avg = np.prod(average_ratios)
cumulative_med = np.prod(median_ratios)

# Print the cumulative values and equations
print(f"Cumulative Average Multiplier from 1973 to 2022: {cumulative_avg}")
print(f"Cumulative Median Multiplier from 1973 to 2022: {cumulative_med}\n")

print("Average Ratios Regression Equation:")
print(f"y = {intercept_avg:.4f} + {slope_avg:.4f} * x\n")

print("Median Ratios Regression Equation:")
print(f"y = {intercept_med:.4f} + {slope_med:.4f} * x\n")

# Show the math for cumulative calculations
print("Cumulative Average Multiplier Calculation:")
print(" * ".join([f"{avg_ratio:.4f}" for avg_ratio in average_ratios]))
print(f"= {cumulative_avg}\n")

print("Cumulative Median Multiplier Calculation:")
print(" * ".join([f"{med_ratio:.4f}" for med_ratio in median_ratios]))
print(f"= {cumulative_med}")
