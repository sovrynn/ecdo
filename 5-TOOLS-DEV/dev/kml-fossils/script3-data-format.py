#!/usr/bin/env python3

import argparse
import os
import shutil
from pathlib import Path
import sys

def process_files(input_dir, output_dir):
    """
    Processes files from input_dir:
    - If file content (case-insensitive) is 'yes', copies it to output_dir with lowercase content.
    - If file content (case-insensitive) is 'no', ignores it.
    - If content is neither, prints the filename.

    At the end, prints a tally of total real files, total copied files,
    total ignored files, and total invalid files.
    """

    # Initialize counters
    total_files = 0
    copied_files = 0
    ignored_files = 0
    invalid_files = 0

    input_path = Path(input_dir)
    output_path = Path(output_dir)

    # Check if input directory exists and is a directory
    if not input_path.exists():
        print(f"Error: Input directory '{input_dir}' does not exist.")
        sys.exit(1)
    if not input_path.is_dir():
        print(f"Error: '{input_dir}' is not a directory.")
        sys.exit(1)

    # Create output directory if it doesn't exist
    if not output_path.exists():
        try:
            output_path.mkdir(parents=True, exist_ok=True)
            print(f"Created output directory '{output_dir}'.")
        except Exception as e:
            print(f"Error creating output directory '{output_dir}': {e}")
            sys.exit(1)
    elif not output_path.is_dir():
        print(f"Error: '{output_dir}' exists and is not a directory.")
        sys.exit(1)

    # Iterate over all files in the input directory (non-recursive)
    for item in input_path.iterdir():
        if item.is_file():
            total_files += 1
            try:
                # Read file content and strip whitespace
                content = item.read_text(encoding='utf-8').strip().lower()
                if content[-1] == '.':
                    content = content[:-1]
            except Exception as e:
                print(f"Error reading file '{item.name}': {e}")
                continue  # Skip to the next file

            if content == "yes":
                # Define destination path
                dest_file = output_path / item.name
                try:
                    # Write the lowercase content to the destination file
                    with dest_file.open(mode='w', encoding='utf-8') as f_out:
                        f_out.write(content + '\n')  # Add newline if desired
                    copied_files += 1
                except Exception as e:
                    print(f"Error writing to file '{dest_file}': {e}")
            elif content == "no":
                ignored_files += 1
                # Do nothing
            else:
                invalid_files += 1
                print(f"Invalid content in file '{item.name}': '{content}'")

    # Print the tally
    print("\n=== Processing Summary ===")
    print(f"Total files processed: {total_files}")
    print(f"Total files copied to '{output_dir}': {copied_files}")
    print(f"Total files ignored (content='no'): {ignored_files}")
    print(f"Total files with invalid content: {invalid_files}")

def main():
    # Set up argument parsing
    parser = argparse.ArgumentParser(
        description="Process files based on their content ('yes' or 'no')."
    )
    parser.add_argument(
        "input_directory",
        type=str,
        help="Relative path to the input directory containing files to process."
    )
    parser.add_argument(
        "output_directory",
        type=str,
        help="Relative path to the output directory where 'yes' files will be copied."
    )

    args = parser.parse_args()

    # Call the processing function
    process_files(args.input_directory, args.output_directory)

if __name__ == "__main__":
    main()
