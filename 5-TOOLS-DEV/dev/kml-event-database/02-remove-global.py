#!/usr/bin/env python3
"""
CSV Row Remover: Removes rows with "Global" in the "Location" column.

This script takes two input arguments:
1. X: Path to the input CSV file.
2. Y: Path where the modified CSV file will be saved.

Usage:
    python remove_global_rows.py input.csv output.csv
"""

import argparse
import sys
import pandas as pd
from pathlib import Path

def parse_arguments():
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            'Remove all rows from a CSV file where the "Location" column has the value "Global". '
            'Print the deleted rows and statistics, then save the modified CSV to the output file.'
        )
    )
    parser.add_argument(
        'input_csv',
        type=str,
        help='Path to the input CSV file (relative or absolute).'
    )
    parser.add_argument(
        'output_csv',
        type=str,
        help='Path to save the modified CSV file (relative or absolute).'
    )
    return parser.parse_args()

def validate_files(input_path, output_path):
    """Validate input file existence and output path."""
    input_file = Path(input_path)
    output_file = Path(output_path)

    # Check if input file exists
    if not input_file.exists():
        print(f"Error: Input file '{input_file}' does not exist.", file=sys.stderr)
        sys.exit(1)

    # Check if input path is a file
    if not input_file.is_file():
        print(f"Error: Input path '{input_file}' is not a file.", file=sys.stderr)
        sys.exit(1)

    # Check if output directory exists; if not, attempt to create it
    if not output_file.parent.exists():
        try:
            output_file.parent.mkdir(parents=True, exist_ok=True)
            print(f"Info: Created output directory '{output_file.parent}'.")
        except Exception as e:
            print(f"Error: Could not create output directory '{output_file.parent}': {e}", file=sys.stderr)
            sys.exit(1)

    return input_file, output_file

def process_csv(input_file, output_file):
    """Process the CSV: remove rows with 'Global' in 'Location' column."""
    try:
        df = pd.read_csv(input_file)
    except Exception as e:
        print(f"Error: Failed to read '{input_file}': {e}", file=sys.stderr)
        sys.exit(1)

    # Check if 'Location' column exists
    if 'Location' not in df.columns:
        print(f"Error: The input CSV does not contain a 'Location' column.", file=sys.stderr)
        sys.exit(1)

    # Total original data rows
    original_rows = len(df)

    # Identify rows to delete
    rows_to_delete = df[df['Location'] == 'Global']

    # Number of rows to delete
    deleted_count = len(rows_to_delete)

    # Final data rows after deletion
    final_rows = original_rows - deleted_count

    if deleted_count > 0:
        print("Deleted Rows:")
        print(rows_to_delete.to_string(index=False))
    else:
        print("No rows with 'Global' in the 'Location' column were found.")

    # Print statistics
    print("\n--- Statistics ---")
    print(f"Original number of data rows: {original_rows}")
    print(f"Total number of rows deleted: {deleted_count}")
    print(f"Final number of data rows: {final_rows}")

    # Remove the rows with 'Global' in 'Location'
    df_filtered = df[df['Location'] != 'Global']

    # Save the modified CSV
    try:
        df_filtered.to_csv(output_file, index=False)
        print(f"\nSuccess: Modified CSV saved to '{output_file}'.")
    except Exception as e:
        print(f"Error: Failed to write to '{output_file}': {e}", file=sys.stderr)
        sys.exit(1)

def main():
    """Main function to orchestrate the CSV processing."""
    args = parse_arguments()
    input_file, output_file = validate_files(args.input_csv, args.output_csv)
    process_csv(input_file, output_file)

if __name__ == "__main__":
    main()
