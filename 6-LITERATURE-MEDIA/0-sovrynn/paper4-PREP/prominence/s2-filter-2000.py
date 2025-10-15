#!/usr/bin/env python3
"""
filter_by_prominence.py

Copies files from an input folder to data2/ if the third line (a numeric value)
is 2000 or greater. Prints the total number of files copied.

Usage:
    python filter_by_prominence.py <input_folder>
"""
import sys
import os
import shutil

def main():
    if len(sys.argv) != 2:
        print("Usage: python filter_by_prominence.py <input_folder>")
        sys.exit(1)

    input_folder = sys.argv[1]
    output_folder = 'data2'

    if not os.path.isdir(input_folder):
        print(f"Error: '{input_folder}' is not a folder or does not exist.")
        sys.exit(1)

    os.makedirs(output_folder, exist_ok=True)

    copied_count = 0

    # Iterate over all entries in the input folder
    for fname in os.listdir(input_folder):
        src_path = os.path.join(input_folder, fname)
        if not os.path.isfile(src_path):
            continue  # skip directories and non-files

        # Read the third line
        try:
            with open(src_path, 'r', encoding='utf-8') as f:
                # Read only first three lines
                lines = [next(f) for _ in range(3)]
        except (IOError, StopIteration):
            # If file can't be read or has fewer than 3 lines, skip it
            continue

        # Parse the third line as a number
        try:
            value = float(lines[2].strip())
        except ValueError:
            continue  # non-numeric third line

        # Copy if value >= 2000
        if value >= 2000:
            dst_path = os.path.join(output_folder, fname)
            shutil.copy2(src_path, dst_path)
            copied_count += 1

    print(f"Copied {copied_count} files to ./{output_folder}/")

if __name__ == '__main__':
    main()
