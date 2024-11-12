import sys
import csv
from collections import defaultdict

if len(sys.argv) != 2:
    print("Usage: script.py filename.csv")
    sys.exit(1)

filename = sys.argv[1]

# Dictionary to hold the count of rows with a specific number of CSV values
value_counts = defaultdict(int)
# Dictionary to store line numbers for each bucket (except for 20 values)
line_numbers = defaultdict(list)

try:
    with open(filename, 'r', encoding='utf-8') as file:
        reader = csv.reader(file)

        for line_num, row in enumerate(reader, start=1):
            num_values = len(row)
            value_counts[num_values] += 1

            # Store line numbers except for the bucket with 20 values
            if num_values != 20:
                line_numbers[num_values].append(line_num)

    # Print the bucketed counts and line numbers
    print("Number of CSV values per row - Count of rows and line numbers:")
    for num_values, count in sorted(value_counts.items()):
        if num_values == 20:
            print(f"{num_values} values: {count} rows (line numbers not displayed)")
        else:
            line_nums = ", ".join(map(str, line_numbers[num_values]))
            print(f"{num_values} values: {count} rows, line numbers: {line_nums}")

except FileNotFoundError:
    print(f"Error: File '{filename}' not found.")
except Exception as e:
    print(f"An error occurred: {e}")
