#!/usr/bin/env python3

import argparse
import csv
import sys
from pathlib import Path

def process_csv(csv_file, output_dir):
    created_files = 0
    preexisting_files = 0

    csv_file = Path(csv_file)
    output_dir = Path(output_dir)

    # Check if input file exists
    if not csv_file.is_file():
        print(f"Error: The file '{csv_file}' does not exist.")
        sys.exit(1)

    # Ensure output directory exists
    output_dir.mkdir(parents=True, exist_ok=True)

    # Read all lines from the CSV
    try:
        with csv_file.open(mode="r", encoding="utf-8") as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading file '{csv_file}': {e}")
        sys.exit(1)

    # Check if there are enough lines (at least 21)
    if len(lines) < 21:
        print("Error: The file does not have at least 21 lines.")
        sys.exit(1)

    # Skip first 20 lines
    # 21st line is the header (index 20)
    header_line = lines[20].rstrip('\n')  # strip the trailing newline
    data_lines = lines[21:]               # lines after the header

    # Parse the header using csv.reader to handle the double quotes
    try:
        header = next(csv.reader([header_line], delimiter=',', quotechar='"'))
    except Exception as e:
        print(f"Error parsing header line: {e}")
        sys.exit(1)

    if "taxon_no" not in header:
        print("Error: 'taxon_no' column not found in the CSV header.")
        sys.exit(1)

    taxon_no_index = header.index("taxon_no")

    empty_taxon_no = 0
    # Now process each data line
    current_line_number = 22  # Data starts at line 22 in the original file
    for raw_line in data_lines:
        line_stripped = raw_line.rstrip('\n')
        # Parse the line to extract columns
        try:
            row = next(csv.reader([line_stripped], delimiter=',', quotechar='"'))
        except Exception as e:
            print(f"Warning: Could not parse line {current_line_number} -> {e}")
            current_line_number += 1
            continue

        # Check for matching column count
        if len(row) != len(header):
            print(f"Warning: Row {current_line_number} has {len(row)} columns; expected {len(header)}. Skipping.")
            current_line_number += 1
            continue

        # Get taxon_no
        taxon_no = row[taxon_no_index].strip()
        if not taxon_no:
            print(f"Warning: 'taxon_no' is empty on row {current_line_number}. Skipping.")
            empty_taxon_no += 1
            current_line_number += 1
            continue

        # Construct the output file path
        output_file = output_dir / f"{taxon_no}.txt"

        if output_file.exists():
            # If file exists, print and do not overwrite
            print(f"Pre-existing file (not overwritten): {output_file.name}")
            preexisting_files += 1
        else:
            # Write the exact raw line (with quotes) to the output file
            try:
                with output_file.open(mode="w", encoding="utf-8") as out_f:
                    out_f.write(raw_line)  # raw_line already has its newline
                created_files += 1
            except Exception as e:
                print(f"Error writing to file '{output_file}': {e}")

        current_line_number += 1

    # Print summary
    print(f"\nTotal files created: {created_files}")
    print(f"Total pre-existing files (not overwritten): {preexisting_files}")
    print(f'Empty taxon no: {empty_taxon_no}')

def main():
    parser = argparse.ArgumentParser(
        description="Process a CSV file with quoted columns, skipping the first 20 lines, using the 21st as header."
    )
    parser.add_argument("csv_file", help="Relative path to the CSV file (quoted columns).")
    parser.add_argument("output_dir", help="Relative path to the output directory.")

    args = parser.parse_args()

    process_csv(args.csv_file, args.output_dir)

if __name__ == "__main__":
    main()
