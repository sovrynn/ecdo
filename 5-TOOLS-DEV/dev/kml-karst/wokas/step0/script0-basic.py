import sys
import argparse
from pathlib import Path
import re

def parse_arguments():
    """
    Parse command-line arguments.

    Returns:
        argparse.Namespace: Parsed arguments with the directory path.
    """
    parser = argparse.ArgumentParser(
        description="Validate .csv files in a directory based on specific criteria."
    )
    parser.add_argument(
        "directory",
        type=str,
        help="Relative path to the directory to scan for .csv files."
    )
    return parser.parse_args()

def validate_csv_file(file_path):
    """
    Validate a single CSV file based on the specified criteria.

    Args:
        file_path (Path): Path object of the CSV file.

    Returns:
        bool: True if all validations pass, False otherwise.
    """
    try:
        with file_path.open('r', encoding='utf-8') as file:
            lines = file.readlines()
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return False

    # Ensure the file has at least 10 lines
    if len(lines) < 10:
        print(f"File {file_path} has fewer than 10 lines.")
        return False

    # Check if line 9 starts with "Timestamp"
    line_9 = lines[8].strip()  # Zero-based index
    if not line_9.startswith("Timestamp"):
        print(f"Line 9 does not start with 'Timestamp' in file: {file_path}")
        return False

    # Check lines 6 and 7 for specific content
    expected_line_6 = "#Time format   :\t%d.%m.%Y"
    expected_line_7 = "#Discharge unit:\tm^3/s"

    line_6 = lines[5].strip()
    line_7 = lines[6].strip()

    if line_6 != expected_line_6:
        print(f"Line 6 is incorrect in file: {file_path}")
        return False

    if line_7 != expected_line_7:
        print(f"Line 7 is incorrect in file: {file_path}")
        return False

    # Check if line 10 starts with a date in the format %d.%m.%Y
    line_10 = lines[9].strip()
    date_pattern = r"^\d{2}\.\d{2}\.\d{4}"  # Matches DD.MM.YYYY at the start

    if not re.match(date_pattern, line_10):
        print(f"Line 10 does not start with a valid date in file: {file_path}")
        return False

    # All checks passed
    return True

def find_csv_files(directory):
    """
    Recursively find all .csv files in the given directory.

    Args:
        directory (Path): Path object of the base directory.

    Returns:
        list of Path: List containing paths to .csv files.
    """
    return list(directory.rglob("*.csv"))

def main():
    # Parse command-line arguments
    args = parse_arguments()
    relative_dir = args.directory

    # Convert to absolute path
    base_dir = Path(relative_dir).resolve()

    # Check if the directory exists
    if not base_dir.is_dir():
        print(f"Error: The directory '{relative_dir}' does not exist or is not a directory.")
        sys.exit(1)

    # Find all .csv files recursively
    csv_files = find_csv_files(base_dir)

    if not csv_files:
        print(f"No .csv files found in directory: {base_dir}")
        sys.exit(0)

    print(f"Found {len(csv_files)} .csv file(s) in '{base_dir}'. Validating...")

    # Iterate over each CSV file and validate
    invalid_files = []
    for csv_file in csv_files:
        if not validate_csv_file(csv_file):
            invalid_files.append(csv_file)

    # Report results
    if invalid_files:
        print("\nValidation completed. The following files failed the checks:")
        for file in invalid_files:
            print(file)
    else:
        print("\nAll .csv files passed the validation checks.")

if __name__ == "__main__":
    main()
