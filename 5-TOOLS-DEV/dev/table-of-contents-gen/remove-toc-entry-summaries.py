#!/usr/bin/env python3

import argparse
import os
import sys

def parse_arguments():
    """
    Parse command-line arguments.
    
    Returns:
        argparse.Namespace: Parsed arguments containing the filename.
    """
    parser = argparse.ArgumentParser(
        description="Remove non-list lines under the first H1 header in a Markdown file."
    )
    parser.add_argument(
        "filename",
        type=str,
        help="Relative path to the Markdown file to be processed."
    )
    return parser.parse_args()

def find_first_h1(lines):
    """
    Find the index of the first H1 header in the list of lines.
    
    Args:
        lines (list of str): Lines from the Markdown file.
        
    Returns:
        int: Index of the first H1 header. Returns -1 if not found.
    """
    for idx, line in enumerate(lines):
        stripped_line = line.lstrip()
        if stripped_line.startswith("# "):
            return idx
    return -1

def find_next_h1(lines, start_idx):
    """
    Find the index of the next H1 header after a given start index.
    
    Args:
        lines (list of str): Lines from the Markdown file.
        start_idx (int): Starting index to search for the next H1 header.
        
    Returns:
        int: Index of the next H1 header. Returns len(lines) if not found.
    """
    for idx in range(start_idx + 1, len(lines)):
        stripped_line = lines[idx].lstrip()
        if stripped_line.startswith("# "):
            return idx
    return len(lines)

def filter_lines_under_h1(lines, h1_start_idx, h1_end_idx):
    """
    Filter lines under the first H1 header, keeping only list entries.
    
    Args:
        lines (list of str): All lines from the Markdown file.
        h1_start_idx (int): Index where the first H1 header starts.
        h1_end_idx (int): Index where the first H1 header ends (start of next H1 or end of file).
        
    Returns:
        list of str: Modified lines with only list entries under the first H1 header.
    """
    # Lines before the first H1 header remain unchanged
    before_h1 = lines[:h1_start_idx + 1]  # Include the H1 header itself
    
    # Lines under the first H1 header
    under_h1 = lines[h1_start_idx + 1:h1_end_idx]
    
    # Filter to keep only list entries (lines starting with '-', possibly preceded by whitespace)
    filtered_under_h1 = [
        line for line in under_h1 if line.lstrip().startswith("- [")
    ]
    
    # Lines after the first H1 header remain unchanged
    after_h1 = lines[h1_end_idx:]
    
    # Combine all parts
    return before_h1 + filtered_under_h1 + after_h1

def process_file(filename):
    """
    Process the Markdown file to remove non-list lines under the first H1 header.
    
    Args:
        filename (str): Relative path to the Markdown file.
        
    Raises:
        FileNotFoundError: If the specified file does not exist.
        ValueError: If no H1 header is found in the file.
    """
    if not os.path.isfile(filename):
        raise FileNotFoundError(f"The file '{filename}' does not exist.")
    
    # Read all lines from the file
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find the first H1 header
    first_h1_idx = find_first_h1(lines)
    if first_h1_idx == -1:
        raise ValueError(f"No H1 header ('# Header') found in '{filename}'.")
    
    # Find the index of the next H1 header after the first one
    next_h1_idx = find_next_h1(lines, first_h1_idx)
    
    # Filter lines under the first H1 header
    modified_lines = filter_lines_under_h1(lines, first_h1_idx, next_h1_idx)
    
    # Write the modified lines back to the same file
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(modified_lines)
    
    print(f"Successfully updated '{filename}' by removing non-list lines under the first H1 header.")

def main():
    args = parse_arguments()
    try:
        process_file(args.filename)
    except FileNotFoundError as fnf_err:
        print(f"Error: {fnf_err}", file=sys.stderr)
        sys.exit(1)
    except ValueError as val_err:
        print(f"Error: {val_err}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"An unexpected error occurred: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
