#!/usr/bin/env python3

import sys
import csv

def main():
    if len(sys.argv) < 2:
        print("Usage: python script.py <relative_csv_filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    output_filename = "output.csv"

    # Read all rows from the CSV
    with open(input_filename, mode="r", newline="", encoding="utf-8") as infile:
        reader = csv.reader(infile)
        rows = list(reader)
    
    if not rows:
        print("The CSV file is empty. Exiting.")
        sys.exit(0)

    # The first row is the header
    header = rows[0]
    data = rows[1:]  # Everything after the header

    # Find index of the "Extracted Links" column
    # (Assumes "Extracted Links" definitely exists in the header)
    try:
        link_col_index = header.index("Extracted Links")
    except ValueError:
        print('Error: The column "Extracted Links" was not found in the header.')
        sys.exit(1)

    # We'll store None for rows that get deleted
    # Keep track of how many rows are deleted
    deleted_count = 0

    # Use a set to keep track of links we have already encountered
    seen_links = set()

    # Iterate through rows from top to bottom
    for i in range(len(data)):
        row = data[i]
        if row is None:
            # Already deleted
            continue
        
        link_value = row[link_col_index]

        # If we've already seen this link, delete this row
        if link_value in seen_links:
            print(f"Deleted row: {row}")
            data[i] = None  # Mark as deleted
            deleted_count += 1
        else:
            # First time seeing this link; mark it as seen
            seen_links.add(link_value)

    # Print the total number of deleted rows
    print(f"\nTotal deleted rows: {deleted_count}")

    # Write the remaining rows (non-None) to output.csv
    with open(output_filename, mode="w", newline="", encoding="utf-8") as outfile:
        writer = csv.writer(outfile)
        writer.writerow(header)  # write the header first
        for row in data:
            if row is not None:
                writer.writerow(row)

    print(f"Modified CSV saved to: {output_filename}")

if __name__ == "__main__":
    main()
