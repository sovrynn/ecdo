#!/usr/bin/env python3

import csv
import os
import sys
import time
import subprocess

def main():
    if len(sys.argv) < 2:
        print("Usage: python script.py <relative_csv_filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    output_folder = "output"

    # Ensure the output folder exists
    os.makedirs(output_folder, exist_ok=True)

    # Read the CSV file
    with open(input_filename, mode="r", newline="", encoding="utf-8") as infile:
        reader = csv.reader(infile)
        rows = list(reader)

    if not rows:
        print("The CSV file is empty. Exiting.")
        sys.exit(0)

    # The first row is the header
    header = rows[0]
    data_rows = rows[1:]  # all subsequent rows

    # Find the total number of data rows
    total_data_rows = len(data_rows)

    # Identify the second column index (i.e., index 1)
    # Make sure there's at least 2 columns
    if len(header) < 2:
        print("Error: The CSV does not have at least two columns.")
        sys.exit(1)

    link_col_index = 1  # second column

    files_completed = 0  # Track how many downloads succeeded

    # Iterate over data rows
    for i, row in enumerate(data_rows):
        row_number = i + 1  # 1-based index for data rows
        # Convert row number to 3-digit zero-padded (e.g., "001", "002", ...)
        row_number_str = f"{row_number:03d}"

        # Safety check: row might not have enough columns
        if len(row) <= link_col_index:
            print(f"Row {row_number_str} has no link (not enough columns). Skipping.")
            continue

        link = row[link_col_index].strip()

        # Construct output filename
        output_file = os.path.join(output_folder, f"{row_number_str}.txt")

        # Print status before attempting download
        print(f"Downloading row {row_number_str}: {link} (so far {files_completed} completed)")

        # Attempt the download via subprocess + wget
        try:
            subprocess.run(
                ["wget", "-q", "-O", output_file, link],
                check=True  # Raises CalledProcessError on failure
            )
            # If successful, increment the counter
            files_completed += 1
        except subprocess.CalledProcessError:
            # If wget fails, print a message and do NOT create the file
            print(f"Failed to download row {row_number_str}: {link}. Skipping.")
            # If wget partially created the file, ensure we remove it
            if os.path.exists(output_file):
                os.remove(output_file)

        # Wait 10 seconds between downloads
        time.sleep(10)

    # Print final summary
    print(f"\nFinished downloading. Total output files created: {files_completed}.")

if __name__ == "__main__":
    main()
