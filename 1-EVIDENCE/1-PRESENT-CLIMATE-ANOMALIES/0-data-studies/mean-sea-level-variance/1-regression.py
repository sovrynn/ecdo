#!/usr/bin/env python3

import sys
import os
import statistics

def main():
    # 1. Check for the directory argument
    if len(sys.argv) < 2:
        print("Usage: python script.py <directory>")
        sys.exit(1)
    
    directory = sys.argv[1]
    
    # 2. Loop through all files in the given directory
    for filename in os.listdir(directory):
        if filename.endswith(".txt"):
            filepath = os.path.join(directory, filename)

            # Lists to store x (time) and y (value)
            x_data = []
            y_data = []
            
            # 3. Read each CSV file. Each row has 2 space-separated values:
            #    - date in YYYY-MM format (e.g., "2023-07")
            #    - value (float)
            with open(filepath, "r") as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        # skip any empty lines
                        continue
                    
                    date_str, val_str = line.split()
                    # Parse the date (YYYY-MM)
                    year_str, month_str = date_str.split("-")
                    year = int(year_str)
                    month = int(month_str)
                    
                    # Convert date to a numeric value, e.g. 2023 + (7 - 1)/12
                    # so that each month is roughly 1/12 of a year increment
                    x_value = year + (month - 1) / 12.0
                    
                    # Parse the numeric value
                    y_value = float(val_str)
                    
                    x_data.append(x_value)
                    y_data.append(y_value)

            # 4. Perform linear regression if we have enough data points
            if len(x_data) < 2:
                print(f"{filename}: Not enough data points for regression")
                continue

            # The built-in statistics.linear_regression returns slope, intercept
            slope, intercept = statistics.linear_regression(x_data, y_data)
            
            # 5. Print the slope for this file
            print(f"{filename}: slope = {slope:.6f}")

if __name__ == "__main__":
    main()
