#!/usr/bin/env python3
"""
Batch File Merger Script

This script takes three relative directory paths as input arguments:
1. Source Directory (X)
2. Corresponding Directory (Y)
3. Target Directory (Z)

For each file in Directory X:
- Finds the file with the same name in Directory Y. Fails if it doesn't exist.
- Merges the two files by interleaving their lines:
    - First line from X, first line from Y, second line from X, second line from Y, etc.
    - If one file has more lines than the other, appends the remaining lines at the end.
- Writes the merged content to a new file with the same filename in Directory Z.

Usage:
    python merge_files.py path/to/X path/to/Y path/to/Z

Example:
    python merge_files.py ./dir_X ./dir_Y ./dir_Z
"""

import argparse
from pathlib import Path
import sys

def parse_arguments():
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            "Merge files from two directories by interleaving their lines and "
            "output the merged files to a target directory."
        )
    )
    parser.add_argument(
        "source_dir",
        type=str,
        help="Relative path to the source directory (X) containing files to merge."
    )
    parser.add_argument(
        "corresponding_dir",
        type=str,
        help="Relative path to the corresponding directory (Y) containing files to merge with."
    )
    parser.add_argument(
        "target_dir",
        type=str,
        help="Relative path to the target directory (Z) where merged files will be saved."
    )
    return parser.parse_args()

def validate_directories(source: Path, corresponding: Path, target: Path):
    """Validate the existence of source and corresponding directories and create target directory if it doesn't exist."""
    if not source.exists():
        print(f"Error: The source directory '{source}' does not exist.", file=sys.stderr)
        sys.exit(1)
    if not source.is_dir():
        print(f"Error: The source path '{source}' is not a directory.", file=sys.stderr)
        sys.exit(1)
    if not corresponding.exists():
        print(f"Error: The corresponding directory '{corresponding}' does not exist.", file=sys.stderr)
        sys.exit(1)
    if not corresponding.is_dir():
        print(f"Error: The corresponding path '{corresponding}' is not a directory.", file=sys.stderr)
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

def merge_files(source_file: Path, corresponding_file: Path, target_file: Path):
    """
    Merge two files by interleaving their lines and write to the target file.
    
    Args:
        source_file (Path): Path to the source file in directory X.
        corresponding_file (Path): Path to the corresponding file in directory Y.
        target_file (Path): Path to the output file in directory Z.
    """
    try:
        with source_file.open('r', encoding='utf-8') as f_src:
            source_lines = f_src.readlines()
    except Exception as e:
        print(f"Error: Failed to read '{source_file}': {e}", file=sys.stderr)
        return

    try:
        with corresponding_file.open('r', encoding='utf-8') as f_cor:
            corresponding_lines = f_cor.readlines()
    except Exception as e:
        print(f"Error: Failed to read '{corresponding_file}': {e}", file=sys.stderr)
        return

    merged_lines = []
    max_len = max(len(source_lines), len(corresponding_lines))

    for i in range(max_len):
        if i < len(source_lines):
            merged_lines.append(source_lines[i].rstrip('\n') + '\n')
        if i < len(corresponding_lines):
            merged_lines.append(corresponding_lines[i].rstrip('\n') + '\n')

    try:
        with target_file.open('w', encoding='utf-8') as f_out:
            f_out.writelines(merged_lines)
        print(f"Merged '{source_file.name}' and '{corresponding_file.name}' into '{target_file}'.")
    except Exception as e:
        print(f"Error: Failed to write to '{target_file}': {e}", file=sys.stderr)

def process_all_files(source_dir: Path, corresponding_dir: Path, target_dir: Path):
    """Process all files in the source directory by merging them with corresponding files in the corresponding directory."""
    files_processed = 0
    files_skipped = 0

    for source_file in source_dir.iterdir():
        if source_file.is_file():
            corresponding_file = corresponding_dir / source_file.name
            if not corresponding_file.exists():
                print(f"Error: Corresponding file '{corresponding_file.name}' does not exist in '{corresponding_dir}'. Skipping '{source_file.name}'.", file=sys.stderr)
                files_skipped += 1
                continue
            target_file = target_dir / source_file.name
            merge_files(source_file, corresponding_file, target_file)
            files_processed += 1

    print(f"\nProcessing completed. {files_processed} files merged successfully.")
    if files_skipped > 0:
        print(f"{files_skipped} files were skipped due to missing counterparts in '{corresponding_dir}'.", file=sys.stderr)

def main():
    """Main function to orchestrate the merging process."""
    args = parse_arguments()
    source_path = Path(args.source_dir)
    corresponding_path = Path(args.corresponding_dir)
    target_path = Path(args.target_dir)

    validate_directories(source_path, corresponding_path, target_path)
    process_all_files(source_path, corresponding_path, target_path)

if __name__ == "__main__":
    main()
