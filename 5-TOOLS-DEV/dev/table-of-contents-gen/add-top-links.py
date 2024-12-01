#!/usr/bin/env python3
import argparse
import os
import sys

def parse_arguments():
    """
    Parse command-line arguments.
    """
    parser = argparse.ArgumentParser(description="Append a '(top)' link to H1 headers in a Markdown file.")
    parser.add_argument(
        "filename",
        type=str,
        help="Relative path to the Markdown file to be processed."
    )
    return parser.parse_args()

def append_top_links(lines, url):
    """
    Append a '(top)' link to every H1 header except the first one.

    Args:
        lines (list of str): Lines from the Markdown file.
        url (str): URL to be used in the '(top)' link.

    Returns:
        list of str: Modified lines with '(top)' links appended.
    """
    modified_lines = []
    h1_count = 0  # Counter for H1 headers encountered

    for line in lines:
        stripped_line = line.lstrip()  # Remove leading whitespace for accurate header detection
        if stripped_line.startswith("# "):
            h1_count += 1
            if h1_count > 1:
                # Check if '(top)' link already exists to prevent duplicate links
                if f"[ (top)]({url})" not in line:
                    # Append ' [(top)](url)' to the H1 header
                    line = line.rstrip('\n') + f" [(top)]({url})\n"
        modified_lines.append(line)

    return modified_lines

def main():
    # Define the URL for the '(top)' link
    TOP_URL = "https://github.com/sovrynn/ecdo/blob/master/6-LITERATURE-MEDIA/corliss/"  # Replace with your desired URL

    # Parse command-line arguments
    args = parse_arguments()
    input_file = args.filename

    # Check if the file exists
    if not os.path.isfile(input_file):
        print(f"Error: The file '{input_file}' does not exist.", file=sys.stderr)
        sys.exit(1)

    try:
        # Read all lines from the input Markdown file
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading the file '{input_file}': {e}", file=sys.stderr)
        sys.exit(1)

    # Process lines to append '(top)' links
    modified_lines = append_top_links(lines, TOP_URL)

    try:
        # Write the modified lines back to the same file
        with open(input_file, 'w', encoding='utf-8') as f:
            f.writelines(modified_lines)
        print(f"Successfully updated '{input_file}' with '(top)' links.")
    except Exception as e:
        print(f"Error writing to the file '{input_file}': {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
