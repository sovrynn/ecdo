#!/usr/bin/env python3

import sys
import os
import json

def main():
    if len(sys.argv) != 2:
        print("Usage: python combine_and_regress.py <relative-directory>")
        sys.exit(1)

    input_dir = sys.argv[1]
    if not os.path.isdir(input_dir):
        print(f"Error: '{input_dir}' is not a valid directory.")
        sys.exit(1)

    # This dictionary will map date_str (e.g. "19600101") to an accumulated sum of values
    date_sums = {}

    # 1) Read all *.json files in the directory and accumulate sums by date
    for fname in os.listdir(input_dir):
        if fname.lower().endswith(".json"):
            file_path = os.path.join(input_dir, fname)
            try:
                with open(file_path, "r") as f:
                    data = json.load(f)
                    # Expect a "values" list in the JSON
                    for entry in data.get("values", []):
                        date_str = entry.get("date")
                        val = entry.get("value", 0)
                        # Accumulate the sum
                        if date_str not in date_sums:
                            date_sums[date_str] = 0
                        date_sums[date_str] += val
            except json.JSONDecodeError:
                print(f"Warning: {fname} is not valid JSON, skipping.")
            except Exception as e:
                print(f"Error reading {fname}: {e}")
                sys.exit(1)

    # If no data was found, exit
    if not date_sums:
        print("No valid data found; nothing to process.")
        sys.exit(0)

    # 2) Convert date_sums to sorted lists of (year, sum_of_values)
    #    - We’ll parse the first 4 chars of date_str as the year
    #    - Sort by year
    date_year_sums = []
    for date_str, val_sum in date_sums.items():
        # Simple error-check: make sure we have at least 4 chars and they are digits
        if len(date_str) >= 4 and date_str[:4].isdigit():
            year = int(date_str[:4])
            date_year_sums.append((year, val_sum))
        else:
            print(f"Warning: Unknown date format '{date_str}', skipping in regression.")
    
    # Sort by the integer year
    date_year_sums.sort(key=lambda x: x[0])

    # 3) Perform a linear regression on (year, summed_value) to get the slope
    #    We’ll implement simple linear regression manually here:
    #    slope = covariance(x, y) / variance(x)
    
    # Separate out x and y for convenience
    X = [item[0] for item in date_year_sums]
    Y = [item[1] for item in date_year_sums]

    n = len(X)
    if n < 2:
        print("Not enough data points to perform a linear regression.")
        sys.exit(0)

    # Compute means
    mean_x = sum(X) / n
    mean_y = sum(Y) / n

    # Compute numerator (covariance) and denominator (variance of x)
    num = 0.0
    den = 0.0
    for i in range(n):
        x_diff = X[i] - mean_x
        y_diff = Y[i] - mean_y
        num += x_diff * y_diff
        den += x_diff * x_diff

    if den == 0:
        print("All X values are the same; slope is undefined.")
        sys.exit(0)

    slope = num / den

    # 4) Print results:
    print("=== Linear Regression Results ===")
    print(f"Slope: {slope:.4f}")
    print()
    print("=== Summed Values by Date (year) ===")
    for (year, val_sum) in date_year_sums:
        print(f"{year}: {val_sum}")

if __name__ == "__main__":
    main()
