import os
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
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

# Process files with progress bar
with tqdm(total=total_files, desc='Processing CSV files') as pbar:
    for dir in dirs:
        dir_path = os.path.join(current_dir, dir)
        files = [f for f in os.listdir(dir_path) if f.endswith('.csv')]
        for file in files:
            print(file_path)
            file_path = os.path.join(dir_path, file)
            try:
                df = pd.read_csv(file_path)
                if 'TMAX' in df.columns and 'TMIN' in df.columns and 'DATE' in df.columns:
                    # Ensure DATE column is integer
                    df['DATE'] = pd.to_numeric(df['DATE'], errors='coerce').astype('Int64')
                    # Ensure TMAX and TMIN are numeric
                    df['TMAX'] = pd.to_numeric(df['TMAX'], errors='coerce')
                    df['TMIN'] = pd.to_numeric(df['TMIN'], errors='coerce')
                    # Process the data
                    for year in years:
                        year_data = df[df['DATE'] == year]
                        tmax_vals = year_data['TMAX'].dropna().tolist()
                        tmin_vals = year_data['TMIN'].dropna().tolist()
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
        average_tmax_per_year[year] = np.nanmean(tmax_vals)
    else:
        average_tmax_per_year[year] = np.nan
    if tmin_vals:
        average_tmin_per_year[year] = np.nanmean(tmin_vals)
    else:
        average_tmin_per_year[year] = np.nan

# Prepare data for regression
valid_years_tmax = [year for year in years if not np.isnan(average_tmax_per_year[year])]
X_tmax = np.array(valid_years_tmax).reshape(-1, 1)
Y_tmax = np.array([average_tmax_per_year[year] for year in valid_years_tmax])

valid_years_tmin = [year for year in years if not np.isnan(average_tmin_per_year[year])]
X_tmin = np.array(valid_years_tmin).reshape(-1, 1)
Y_tmin = np.array([average_tmin_per_year[year] for year in valid_years_tmin])

# Perform linear regression for TMAX
model_tmax = LinearRegression()
model_tmax.fit(X_tmax, Y_tmax)
Y_pred_tmax = model_tmax.predict(X_tmax)
r_squared_tmax = model_tmax.score(X_tmax, Y_tmax)
slope_tmax = model_tmax.coef_[0]
intercept_tmax = model_tmax.intercept_

# Perform linear regression for TMIN
model_tmin = LinearRegression()
model_tmin.fit(X_tmin, Y_tmin)
Y_pred_tmin = model_tmin.predict(X_tmin)
r_squared_tmin = model_tmin.score(X_tmin, Y_tmin)
slope_tmin = model_tmin.coef_[0]
intercept_tmin = model_tmin.intercept_

# Print average values per year, regression equation and r^2
print("Year\tAverage TMAX\tAverage TMIN")
for year in years:
    avg_tmax = average_tmax_per_year[year]
    avg_tmin = average_tmin_per_year[year]
    if not np.isnan(avg_tmax) and not np.isnan(avg_tmin):
        print(f"{year}\t{avg_tmax:.2f}\t\t{avg_tmin:.2f}")
    elif not np.isnan(avg_tmax):
        print(f"{year}\t{avg_tmax:.2f}\t\tN/A")
    elif not np.isnan(avg_tmin):
        print(f"{year}\tN/A\t\t{avg_tmin:.2f}")
    else:
        print(f"{year}\tN/A\t\tN/A")

print("\nTMAX Linear Regression Equation: y = {:.4f}x + {:.4f}".format(slope_tmax, intercept_tmax))
print("TMAX R^2 value: {:.4f}".format(r_squared_tmax))

print("\nTMIN Linear Regression Equation: y = {:.4f}x + {:.4f}".format(slope_tmin, intercept_tmin))
print("TMIN R^2 value: {:.4f}".format(r_squared_tmin))

# Plotting
plt.figure(figsize=(12,6))
plt.scatter(valid_years_tmax, Y_tmax, label='Average TMAX per Year', color='red')
plt.plot(valid_years_tmax, Y_pred_tmax, color='darkred', label='TMAX Linear Regression')

plt.scatter(valid_years_tmin, Y_tmin, label='Average TMIN per Year', color='blue')
plt.plot(valid_years_tmin, Y_pred_tmin, color='darkblue', label='TMIN Linear Regression')

plt.xlabel('Year')
plt.ylabel('Temperature')
plt.title('Average TMAX and TMIN per Year with Linear Regression')
plt.legend()
plt.savefig('Tplot.png')
plt.close()
