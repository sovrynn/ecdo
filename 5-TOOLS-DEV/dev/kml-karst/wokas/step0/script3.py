#!/usr/bin/env python3

import sys
import argparse
from pathlib import Path
import shutil

def parse_arguments():
    """
    Parse command-line arguments.

    Returns:
        argparse.Namespace: Parsed arguments with input and output directory paths.
    """
    parser = argparse.ArgumentParser(
        description="Process .csv files by handling (A)-(B) pairs and copying files."
    )
    parser.add_argument(
        "input_dir",
        type=str,
        help="Relative path to the input directory containing .csv files."
    )
    parser.add_argument(
        "output_dir",
        type=str,
        help="Relative path to the output directory where processed .csv files will be saved."
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

def get_corresponding_b_file(a_file):
    """
    Given an (A) file, find the corresponding (B) file.

    Args:
        a_file (Path): Path object of the (A) file.

    Returns:
        Path or None: Path object of the corresponding (B) file if exists, else None.
    """
    b_filename = a_file.name.replace("(A)", "(B)", 1)
    b_file = a_file.parent / b_filename
    return b_file if b_file.exists() else None

def read_fourth_line(file_path):
    """
    Read the fourth line from a file and return it as a float.

    Args:
        file_path (Path): Path object of the file.

    Returns:
        float or None: The float value from the fourth line, or None if error occurs.
    """
    try:
        with file_path.open('r', encoding='utf-8') as f:
            lines = f.readlines()
        if len(lines) < 4:
            print(f"Error: File {file_path} has fewer than 4 lines.")
            return None
        fourth_line = lines[3].strip()
        value = float(fourth_line)
        return value
    except ValueError:
        print(f"Error: Fourth line in file {file_path} is not a valid float.")
        return None
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return None

def replace_fourth_line(file_path, new_value):
    """
    Replace the fourth line of a file with a new float value.

    Args:
        file_path (Path): Path object of the file.
        new_value (float): The new float value to write.

    Returns:
        list of str or None: Modified lines if successful, else None.
    """
    try:
        with file_path.open('r', encoding='utf-8') as f:
            lines = f.readlines()
        if len(lines) < 4:
            print(f"Error: File {file_path} has fewer than 4 lines.")
            return None
        lines[3] = f"{new_value}\n"
        return lines
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")
        return None

def write_output_file(output_file, lines):
    """
    Write the modified lines to the output file.

    Args:
        output_file (Path): Path object of the output file.
        lines (list of str): Lines to write.

    Returns:
        bool: True if successful, False otherwise.
    """
    try:
        output_file.parent.mkdir(parents=True, exist_ok=True)
        with output_file.open('w', encoding='utf-8') as f:
            f.writelines(lines)
        return True
    except Exception as e:
        print(f"Error writing to file {output_file}: {e}")
        return False

def copy_file(input_file, output_file):
    """
    Copy a file from input to output directory.

    Args:
        input_file (Path): Path object of the input file.
        output_file (Path): Path object of the output file.

    Returns:
        bool: True if successful, False otherwise.
    """
    try:
        output_file.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(input_file, output_file)
        return True
    except Exception as e:
        print(f"Error copying file {input_file} to {output_file}: {e}")
        return False

def process_a_b_pair(a_file, b_file, output_dir, input_dir):
    """
    Process an (A)-(B) file pair by averaging their fourth lines and saving the modified (A) file.

    Args:
        a_file (Path): Path object of the (A) file.
        b_file (Path): Path object of the (B) file.
        output_dir (Path): Path object of the output directory.
        input_dir (Path): Path object of the input directory.

    Returns:
        bool: True if processing is successful, False otherwise.
    """
    a_value = read_fourth_line(a_file)
    b_value = read_fourth_line(b_file)

    if a_value is None or b_value is None:
        print(f"Skipping pair ({a_file}, {b_file}) due to read errors.")
        return False

    average_value = (a_value + b_value) / 2
    modified_lines = replace_fourth_line(a_file, average_value)

    if modified_lines is None:
        print(f"Skipping pair ({a_file}, {b_file}) due to modification errors.")
        return False

    # Determine the relative path and corresponding output file
    relative_path = a_file.relative_to(input_dir)
    output_file = output_dir / relative_path

    success = write_output_file(output_file, modified_lines)
    if success:
        print(f"Processed and saved: {output_file}")
    return success

def main():
    # Parse command-line arguments
    args = parse_arguments()
    input_dir = Path(args.input_dir).resolve()
    output_dir = Path(args.output_dir).resolve()

    # Check if the input directory exists
    if not input_dir.is_dir():
        print(f"Error: The input directory '{input_dir}' does not exist or is not a directory.")
        sys.exit(1)

    # Find all .csv files in the input directory
    csv_files = find_csv_files(input_dir)

    if not csv_files:
        print(f"No .csv files found in the input directory: {input_dir}")
        sys.exit(0)

    # Initialize counters
    total_files_created_in_Y = 0
    total_a_b_pairs_processed = 0
    processed_b_files = set()  # To avoid processing (B) files independently

    # Iterate through all .csv files
    for csv_file in csv_files:
        filename = csv_file.name

        if "(A)" in filename:
            # Find corresponding (B) file
            b_file = get_corresponding_b_file(csv_file)
            if b_file:
                # Process the (A)-(B) pair
                success = process_a_b_pair(csv_file, b_file, output_dir, input_dir)
                if success:
                    total_a_b_pairs_processed += 1
                    total_files_created_in_Y += 1  # Only the modified (A) file is created
                # Mark the (B) file as processed
                processed_b_files.add(b_file)
            else:
                print(f'Found an A file without a B file: {filename}')
                # No corresponding (B) file, copy (A) as is
                relative_path = csv_file.relative_to(input_dir)
                output_file = output_dir / relative_path
                success = copy_file(csv_file, output_file)
                if success:
                    total_files_created_in_Y += 1
        elif "(B)" in filename:
            # If (B) file has already been processed as part of its (A) pair, skip
            print('Just going to skip.')
            # if csv_file in processed_b_files:
            #     continue
            # else:
            #     print('The script shouldnt ever come in here')
            #     # No corresponding (A) file found earlier, copy (B) as is
            #     relative_path = csv_file.relative_to(input_dir)
            #     output_file = output_dir / relative_path
            #     success = copy_file(csv_file, output_file)
            #     if success:
            #         total_files_created_in_Y += 1
        else:
            # Files without (A) or (B), copy as is
            relative_path = csv_file.relative_to(input_dir)
            output_file = output_dir / relative_path
            success = copy_file(csv_file, output_file)
            if success:
                total_files_created_in_Y += 1

    # Calculate the number of (A)-(B) pairs processed
    # Already counted in total_a_b_pairs_processed

    # Print the tally
    print("\nProcessing Summary:")
    print(f"Total .csv files found in '{input_dir}': {len(csv_files)}")
    print(f"Total files created in '{output_dir}': {total_files_created_in_Y}")
    print(f"Total (A)-(B) file pairs processed: {total_a_b_pairs_processed}")

if __name__ == "__main__":
    main()
