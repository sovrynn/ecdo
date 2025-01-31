import os
import re
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import linregress

# Define the directory containing the data
data_directory = "data-definitive"

# Initialize lists to store years and average values
years = []
averages = []

# Regular expression pattern to match filenames and extract the year
file_pattern = re.compile(r"Kp_def(\d{4})\.wdc")

# Iterate through each file in the directory
for filename in os.listdir(data_directory):
    # Match only files with the pattern "Kp_defXXXX.wdc"
    match = file_pattern.match(filename)
    if match:
        year = int(match.group(1))  # Extract year from filename
        
        # Initialize a list to store values for the current year
        values = []
        
        # Open and read the file line by line
        with open(os.path.join(data_directory, filename), 'r') as file:
            for line in file:
                if line.startswith("#"):
                    continue  # Skip comment lines
                try:
                    # Characters 55:58 contain the cumulative Ap
                    value = int(line[55:58])
                    values.append(value)
                except ValueError:
                    continue  # Skip lines with invalid data in these columns
        
        # If we have valid values, compute the average
        if values:
            avg_value = np.mean(values)
            years.append(year)
            averages.append(avg_value)

# Sort data by year
sorted_indices = np.argsort(years)
years = np.array(years)[sorted_indices]
averages = np.array(averages)[sorted_indices]

# Print the sorted results as "year average_value"
for y, a in zip(years, averages):
    print(f"{y} {a:.2f}")

# Optionally, perform linear regression and plot
slope, intercept, r_value, p_value, std_err = linregress(years, averages)

print(f"\nLinear Regression:\n"
      f"slope = {slope:.4f}, intercept = {intercept:.2f}, "
      f"r-value = {r_value:.2f}, p-value = {p_value:.4e}, std_err = {std_err:.4f}")

# Plotting
plt.figure(figsize=(10, 6))
plt.plot(years, averages, marker='o', linestyle='-', color='b', label='Yearly Average')
plt.plot(years, intercept + slope * years, 'r--', label=f'Linear Fit (slope={slope:.4f})')

plt.xlabel("Year")
plt.ylabel("Yearly Average of Daily Ap")
plt.title("Ap: Yearly Average of Daily Ap Index")
plt.legend()
plt.grid(True)

# Save the plot to output.png
plt.savefig("output.png")
plt.show()
