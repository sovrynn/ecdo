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
        years.append(year)
        
        # Initialize a list to store values for the current year
        values = []
        
        # Open and read the file line by line
        with open(os.path.join(data_directory, filename), 'r') as file:
            for line in file:
                if line.startswith("#"):
                    continue  # Skip comment lines
                # Extract characters 56-58, convert them to an integer
                try:
                    # 55:58 : cumulative Ap
                    value = int(line[55:58])
                    # 28:31 : Daily Kp sum 
                    # value = int(line[28:31]) / 10
                    
                    values.append(value)
                except ValueError:
                    continue  # Skip lines with invalid data in these columns
        
        # Calculate the average of values for the current file
        if values:
            avg_value = np.mean(values)
            averages.append(avg_value)
            print(f"Year {year}: Average Value = {avg_value:.2f}")

# Sort data by year
sorted_indices = np.argsort(years)
years = np.array(years)[sorted_indices]
averages = np.array(averages)[sorted_indices]

# Perform linear regression
slope, intercept, r_value, p_value, std_err = linregress(years, averages)
print(f"Linear Regression: slope = {slope:.4f}, intercept = {intercept:.2f}, "
      f"r-value = {r_value:.2f}, p-value = {p_value:.4e}, std_err = {std_err:.4f}")

# Plotting the timeseries and linear regression
plt.figure(figsize=(10, 6))
plt.plot(years, averages, marker='o', linestyle='-', color='b', label='Yearly Average')
plt.plot(years, intercept + slope * years, 'r--', label=f'Linear Fit (slope={slope:.4f})')

# Customize plot
plt.xlabel("Year")
plt.ylabel("Yearly average of daily Ap average")
plt.title("Ap: Yearly average of daily average")
plt.legend()
plt.grid(True)

# Save the plot to output.png
plt.savefig("output.png")
plt.show()
