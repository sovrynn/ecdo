import os
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# For progress bar
from tqdm import tqdm

# Initialize data structures
years = list(range(1950, 2021))
tmax_values_per_year = {year: [] for year in years}
tmin_values_per_year = {year: [] for year in years}

# Find directories ending with 'longtrim'
current_dir = os.getcwd()
dirs = [d for d in os.listdir(current_dir) if os.path.isdir(d) and d.endswith('longtrim')]

total_files = 0
for dir in dirs:
    dir_path = os.path.join(current_dir, dir)
    files = [f for f in os.listdir(dir_path) if f.endswith('.csv')]
    total_files += len(files)

print(f"Found {total_files} CSV files in {len(dirs)} directories.")

# Counter for valid files
valid_files_count = 0

# Process files with progress bar
with tqdm(total=total_files, desc='Processing CSV files') as pbar:
    for dir in dirs:
        dir_path = os.path.join(current_dir, dir)
        files = [f for f in os.listdir(dir_path) if f.endswith('.csv')]
        for file in files:
            file_path = os.path.join(dir_path, file)
            try:
                df = pd.read_csv(file_path)
                # Check if required columns exist
                if 'TMAX' in df.columns and 'TMIN' in df.columns and 'DATE' in df.columns:
                    # Check for any empty values in TMAX and TMIN
                    if df['TMAX'].isnull().any() or df['TMIN'].isnull().any():
                        # Skip this file
                        pass
                    else:
                        # This file passes the starting requirements
                        valid_files_count += 1
                        # Ensure DATE is integer
                        df['DATE'] = pd.to_numeric(df['DATE'], errors='coerce').astype('Int64')
                        # Ensure TMAX and TMIN are numeric
                        df['TMAX'] = pd.to_numeric(df['TMAX'], errors='coerce')
                        df['TMIN'] = pd.to_numeric(df['TMIN'], errors='coerce')
                        # Drop any rows where DATE, TMAX, or TMIN are NaN
                        df = df.dropna(subset=['DATE', 'TMAX', 'TMIN'])
                        # Process the data
                        for year in years:
                            year_data = df[df['DATE'] == year]
                            tmax_vals = year_data['TMAX'].tolist()
                            tmin_vals = year_data['TMIN'].tolist()
                            tmax_values_per_year[year].extend(tmax_vals)
                            tmin_values_per_year[year].extend(tmin_vals)
                else:
                    # Skip files without required columns
                    pass
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
            pbar.update(1)

# Compute average values per year
average_tmax_per_year = {}
average_tmin_per_year = {}
for year in years:
    tmax_vals = tmax_values_per_year[year]
    tmin_vals = tmin_values_per_year[year]
    if tmax_vals:
        # divide by 10 because the data is in tenths of celsius
        average_tmax_per_year[year] = sum(tmax_vals) / len(tmax_vals) / 10
    else:
        average_tmax_per_year[year] = None
    if tmin_vals:
        # divide by 10 because the data is in tenths of celsius
        average_tmin_per_year[year] = sum(tmin_vals) / len(tmin_vals) / 10
    else:
        average_tmin_per_year[year] = None

# Prepare data for regression
valid_years_tmax = [year for year in years if average_tmax_per_year[year] is not None]
X_tmax = np.array(valid_years_tmax)
Y_tmax = np.array([average_tmax_per_year[year] for year in valid_years_tmax])

valid_years_tmin = [year for year in years if average_tmin_per_year[year] is not None]
X_tmin = np.array(valid_years_tmin)
Y_tmin = np.array([average_tmin_per_year[year] for year in valid_years_tmin])

# Perform linear regression using numpy.polyfit
# For TMAX
coeffs_tmax = np.polyfit(X_tmax, Y_tmax, 1)
slope_tmax, intercept_tmax = coeffs_tmax
Y_pred_tmax = slope_tmax * X_tmax + intercept_tmax

# Calculate R^2 value for TMAX
SS_res_tmax = np.sum((Y_tmax - Y_pred_tmax) ** 2)
SS_tot_tmax = np.sum((Y_tmax - np.mean(Y_tmax)) ** 2)
r_squared_tmax = 1 - (SS_res_tmax / SS_tot_tmax)

# For TMIN
coeffs_tmin = np.polyfit(X_tmin, Y_tmin, 1)
slope_tmin, intercept_tmin = coeffs_tmin
Y_pred_tmin = slope_tmin * X_tmin + intercept_tmin

# Calculate R^2 value for TMIN
SS_res_tmin = np.sum((Y_tmin - Y_pred_tmin) ** 2)
SS_tot_tmin = np.sum((Y_tmin - np.mean(Y_tmin)) ** 2)
r_squared_tmin = 1 - (SS_res_tmin / SS_tot_tmin)

# Print average values per year, regression equations, and R^2 values
print("Year\tAverage TMAX\tAverage TMIN")
for year in years:
    avg_tmax = average_tmax_per_year[year]
    avg_tmin = average_tmin_per_year[year]
    if avg_tmax is not None and avg_tmin is not None:
        print(f"{year}\t{avg_tmax:.2f}\t\t{avg_tmin:.2f}")
    elif avg_tmax is not None:
        print(f"{year}\t{avg_tmax:.2f}\t\tN/A")
    elif avg_tmin is not None:
        print(f"{year}\tN/A\t\t{avg_tmin:.2f}")
    else:
        print(f"{year}\tN/A\t\tN/A")

print("\nTMAX Linear Regression Equation: y = {:.4f}x + {:.4f}".format(slope_tmax, intercept_tmax))
print("TMAX R^2 value: {:.4f}".format(r_squared_tmax))

print("\nTMIN Linear Regression Equation: y = {:.4f}x + {:.4f}".format(slope_tmin, intercept_tmin))
print("TMIN R^2 value: {:.4f}".format(r_squared_tmin))

print(f"\nTotal number of files incorporated into the final result: {valid_files_count}")

# Save aggregated TMAX and TMIN data to a text file
output_file = "TMAX_TMIN_data.txt"
with open(output_file, "w") as file:
    file.write("DATE TMAX TMIN\n")  # Header row
    for year in years:
        avg_tmax = average_tmax_per_year[year]
        avg_tmin = average_tmin_per_year[year]
        # Only write rows with available data for both TMAX and TMIN
        if avg_tmax is not None and avg_tmin is not None:
            file.write(f"{year} {avg_tmax:.2f} {avg_tmin:.2f}\n")

print(f"Aggregate TMAX and TMIN data saved to {output_file}")

# Plotting
plt.figure(figsize=(12,6))
plt.scatter(X_tmax, Y_tmax, label='Average TMAX per Year', color='red')
plt.plot(X_tmax, Y_pred_tmax, color='darkred', label='TMAX Linear Regression')

plt.scatter(X_tmin, Y_tmin, label='Average TMIN per Year', color='blue')
plt.plot(X_tmin, Y_pred_tmin, color='darkblue', label='TMIN Linear Regression')

plt.xlabel('Year')
plt.ylabel('Temperature')
plt.title('Average TMAX and TMIN per Year with Linear Regression')
plt.legend()
plt.savefig('Tplot.png')
plt.close()
