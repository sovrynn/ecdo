#!/usr/bin/env python3

import sys
import statistics

def main():
    if len(sys.argv) < 2:
        print("Usage: python script.py <input_file>")
        sys.exit(1)

    input_filename = sys.argv[1]

    numbers = []

    # Read lines and parse the last word as a float
    with open(input_filename, 'r') as fin:
        for line in fin:
            line = line.strip()
            if not line:
                continue  # Skip empty lines
            parts = line.split()
            last_word = parts[-1]
            value = float(last_word)
            numbers.append(value)

    if not numbers:
        print("No data found in the file.")
        sys.exit(0)

    # Calculate mean, median, and count
    mean_val = statistics.mean(numbers)
    median_val = statistics.median(numbers)
    count_val = len(numbers)

    # Print the results
    print(f"Count : {count_val}")
    print(f"Mean  : {mean_val}")
    print(f"Median: {median_val}")

if __name__ == "__main__":
    main()
