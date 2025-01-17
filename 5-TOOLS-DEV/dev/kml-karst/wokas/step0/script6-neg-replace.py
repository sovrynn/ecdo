#!/usr/bin/env python3

import argparse
from pathlib import Path
import sys

def parse_arguments():
    """
    Parse command-line arguments.

    Returns:
        argparse.Namespace: Parsed arguments with input and output directory paths.
    """
    parser = argparse.ArgumentParser(
        description=(
            "Scan all .csv files in directory X, replace negative float values "
            "from the 10th line onward with 0, and save the modified files to directory Y."
        )
    )
    parser.add_argument(
        "input_dir",
        type=str,
        help="Relative path to the input directory X containing .csv files."
    )
    parser.add_argument(
        "output_dir",
        type=str,
        help="Relative path to the output directory Y where modified .csv files will be saved."
    )
    return parser.parse_args()

def find_csv_files(directory):
    """
    Recursively find all .csv files in the given directory.

    Args:
        directory (Path): Path object of the base directory.

    Returns:
        list of Path: List containing paths to .csv files.
    """
    return list(directory.rglob("*.csv"))

def process_csv_file(input_file, output_file):
    """
    Process a single CSV file: replace negative floats with 0 starting from the 10th line.

    Args:
        input_file (Path): Path object of the input CSV file.
        output_file (Path): Path object where the output CSV file will be saved.

    Returns:
        bool: True if any negative values were found and replaced, False otherwise.
    """
    negative_found = False
    try:
        with input_file.open("r", encoding="utf-8") as infile:
            lines = infile.readlines()
        
        # Process lines starting from the 10th line (index 9)
        for i in range(9, len(lines)):
            line = lines[i].rstrip("\n")
            if not line.strip():
                continue  # Skip empty lines
            parts = line.split()
            if not parts:
                continue  # Skip lines without any words
            last_word = parts[-1]
            try:
                value = float(last_word)
                if value < 0:
                    negative_found = True
                    parts[-1] = "0"  # Replace negative value with 0
                    lines[i] = " ".join(parts) + "\n"
            except ValueError:
                # If the last word is not a float, skip replacement
                continue
        
        # Ensure the parent directory exists
        output_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Write the modified (or unmodified) lines to the output file
        with output_file.open("w", encoding="utf-8") as outfile:
            outfile.writelines(lines)
        
        return negative_found

    except Exception as e:
        print(f"Error processing file {input_file}: {e}", file=sys.stderr)
        return False

def main():
    # Parse command-line arguments
    args = parse_arguments()
    input_dir = Path(args.input_dir).resolve()
    output_dir = Path(args.output_dir).resolve()

    # Validate input directory
    if not input_dir.is_dir():
        print(f"Error: Input directory '{input_dir}' does not exist or is not a directory.", file=sys.stderr)
        sys.exit(1)

    # Find all .csv files in the input directory
    csv_files = find_csv_files(input_dir)
    if not csv_files:
        print(f"No .csv files found in the input directory: {input_dir}")
        sys.exit(0)

    print(f"Found {len(csv_files)} .csv file(s) in '{input_dir}'. Starting processing...\n")

    # Counters for summary
    files_with_negatives = []
    total_files_processed = 0

    for csv_file in csv_files:
        # Determine the relative path of the file with respect to the input directory
        try:
            relative_path = csv_file.relative_to(input_dir)
        except ValueError:
            # This should not happen as csv_file is found within input_dir
            print(f"Warning: File {csv_file} is not relative to the input directory {input_dir}. Skipping.")
            continue

        # Determine the corresponding output file path
        output_file = output_dir / relative_path

        # Process the CSV file
        negative_found = process_csv_file(csv_file, output_file)
        total_files_processed += 1

        if negative_found:
            files_with_negatives.append(relative_path)
            print(f"Negative value found and replaced in file: {relative_path}")

    # Summary of processing
    print("\n=== Processing Summary ===")
    print(f"Total .csv files processed: {total_files_processed}")
    print(f"Total files with negative values: {len(files_with_negatives)}")

    if files_with_negatives:
        print("\n=== Files with Negative Values ===")
        for file in files_with_negatives:
            print(file)
    else:
        print("\nNo files contained negative values.")

if __name__ == "__main__":
    main()
