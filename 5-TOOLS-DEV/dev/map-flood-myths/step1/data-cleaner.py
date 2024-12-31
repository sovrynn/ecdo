#!/usr/bin/env python3
"""
Batch Text File Processor

This script processes all `.txt` files in a specified source directory by:
1. Removing the first two lines of each file.
2. Removing the first two characters from each of the remaining lines.

The processed content is written to new files with the same names in a specified target directory.

Usage:
    python process_txt_files.py path/to/source_directory path/to/target_directory

Example:
    python process_txt_files.py ./input_txt ./output_txt
"""

import argparse
from pathlib import Path
import sys
import shutil

def parse_arguments():
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            "Process all .txt files in the source directory by removing the first two lines "
            "and the first two characters of the remaining lines, then save them to the target directory."
        )
    )
    parser.add_argument(
        "source_dir",
        type=str,
        help="Relative path to the source directory containing .txt files."
    )
    parser.add_argument(
        "target_dir",
        type=str,
        help="Relative path to the target directory where processed files will be saved."
    )
    return parser.parse_args()

def validate_directories(source: Path, target: Path):
    """Validate the existence of the source directory and create the target directory if it doesn't exist."""
    if not source.exists():
        print(f"Error: The source directory '{source}' does not exist.", file=sys.stderr)
        sys.exit(1)
    if not source.is_dir():
        print(f"Error: The source path '{source}' is not a directory.", file=sys.stderr)
        sys.exit(1)
    if not target.exists():
        try:
            target.mkdir(parents=True, exist_ok=True)
            print(f"Created target directory '{target}'.")
        except Exception as e:
            print(f"Error: Could not create target directory '{target}': {e}", file=sys.stderr)
            sys.exit(1)
    elif not target.is_dir():
        print(f"Error: The target path '{target}' is not a directory.", file=sys.stderr)
        sys.exit(1)

def process_file(source_file: Path, target_file: Path):
    """
    Process a single text file:
    - Remove the first two lines.
    - Remove the first two characters from each of the remaining lines.
    """
    try:
        with source_file.open('r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error: Failed to read '{source_file}': {e}", file=sys.stderr)
        return

    if len(lines) < 2:
        print(f"Warning: '{source_file.name}' has fewer than two lines. Skipping.", file=sys.stderr)
        return

    # Remove the first two lines
    remaining_lines = lines[2:]

    processed_lines = []
    for idx, line in enumerate(remaining_lines, start=3):  # Start at 3 to account for removed lines
        if len(line) < 2:
            print(f"Warning: Line {idx} in '{source_file.name}' has fewer than two characters. Skipping line.", file=sys.stderr)
            continue
        processed_line = line[2:]
        processed_lines.append(processed_line)

    try:
        with target_file.open('w', encoding='utf-8') as f:
            f.writelines(processed_lines)
        print(f"Processed '{source_file.name}' and saved to '{target_file}'.")
    except Exception as e:
        print(f"Error: Failed to write to '{target_file}': {e}", file=sys.stderr)

def process_all_files(source_dir: Path, target_dir: Path):
    """Process all .txt files in the source directory."""
    txt_files = list(source_dir.glob("*.txt"))
    if not txt_files:
        print(f"No .txt files found in '{source_dir}'. Nothing to process.")
        return

    for txt_file in txt_files:
        target_file = target_dir / txt_file.name
        process_file(txt_file, target_file)

def main():
    """Main function to orchestrate the processing."""
    args = parse_arguments()
    source_path = Path(args.source_dir)
    target_path = Path(args.target_dir)

    validate_directories(source_path, target_path)
    process_all_files(source_path, target_path)
    print("Processing completed.")

if __name__ == "__main__":
    main()
