#!/usr/bin/env python3
"""
Empty TXT File Detector

This script takes one input argument: a relative or absolute directory path.
It scans all `.txt` files within the specified directory and prints out the names
of any empty `.txt` files to the console.

Usage:
    python find_empty_txt_files.py path/to/directory

Example:
    python find_empty_txt_files.py ./data
"""

import argparse
from pathlib import Path
import sys

def parse_arguments():
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            "Scan all .txt files in the specified directory and print out the names of any empty files."
        )
    )
    parser.add_argument(
        'directory',
        type=str,
        help='Relative or absolute path to the directory containing .txt files.'
    )
    return parser.parse_args()

def validate_directory(directory_path):
    """Validate that the provided path exists and is a directory."""
    directory = Path(directory_path)
    if not directory.exists():
        print(f"Error: The directory '{directory}' does not exist.", file=sys.stderr)
        sys.exit(1)
    if not directory.is_dir():
        print(f"Error: The path '{directory}' is not a directory.", file=sys.stderr)
        sys.exit(1)
    return directory

def find_empty_txt_files(directory):
    """
    Find all empty .txt files in the given directory.

    Args:
        directory (Path): Path object representing the directory.

    Returns:
        list of Path: List of Path objects for empty .txt files.
    """
    empty_files = []
    txt_files = list(directory.glob("*.txt"))
    
    if not txt_files:
        print(f"No .txt files found in directory '{directory}'.")
        return empty_files

    for txt_file in txt_files:
        try:
            if txt_file.stat().st_size == 0:
                empty_files.append(txt_file)
        except Exception as e:
            print(f"Warning: Could not access file '{txt_file}': {e}", file=sys.stderr)
    
    return empty_files

def main():
    """Main function to orchestrate the empty TXT file detection."""
    args = parse_arguments()
    directory = validate_directory(args.directory)
    
    empty_files = find_empty_txt_files(directory)
    
    total_txt_files = len(list(directory.glob("*.txt")))
    
    if empty_files:
        print("Empty .txt files found:")
        for file in empty_files:
            print(f"- {file.name}")
    else:
        print("No empty .txt files found.")

    print("\n--- Summary ---")
    print(f"Total .txt files scanned: {total_txt_files}")
    print(f"Number of empty .txt files: {len(empty_files)}")

if __name__ == "__main__":
    main()
