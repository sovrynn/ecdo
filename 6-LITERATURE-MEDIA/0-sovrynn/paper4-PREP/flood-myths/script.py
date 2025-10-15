#!/usr/bin/env python3
"""
process_links.py

Reads a text file and for every line beginning with '-':
  1. Extracts the text between the leading '-' and the first ':' and wraps it in \textbf{…}.
  2. Adds a colon immediately after the bold text.
  3. Takes the text between that colon and the last word (the URL) and appends it.
  4. Wraps the last word (the URL) in \href{…}{Story Link} and encloses it in parentheses.
  5. Emits a LaTeX \item line for each such input line and writes to output.txt.
"""

import argparse
import sys

def process_file(infile, outfile="output.txt"):
    with open(infile, 'r', encoding='utf-8') as fin, \
         open(outfile, 'w', encoding='utf-8') as fout:
        for line in fin:
            # only consider lines that start with a dash
            if not line.startswith('-'):
                continue

            # skip if there's no colon (can't parse)
            if ':' not in line:
                continue

            # 1) Parse title (between '-' and first ':') and bold it
            title = line[1:line.index(':')].strip()
            bold_title = r"\textbf{" + title + "}"
            bold_title = title

            # 2) Parse the URL (last whitespace-delimited token)
            tokens = line.strip().split()
            url = tokens[-1]

            # 3) Grab everything between the first ':' and that last token
            after_colon = line[line.index(':')+1:].strip()
            parts = after_colon.split()
            # drop the final token (the URL) to get description text
            desc_tokens = parts[:-1]
            description = ' '.join(desc_tokens)

            # 4) Build the href and wrap in parentheses
            href = r"\href{" + url + r"}{Story Link}"
            href_paren = f"({href})"
            href_paren = r"\href{" + url + r"}{" + description + r"}"

            # 5) Assemble the \item line
            #    - colon immediately after bold_title
            #    - if there's a description, prefix with a space
            desc_part = f" {description}" if description else ""
            item_line = f"\\item {bold_title}:{desc_part} {href_paren}"
            item_line = f"\\item {bold_title}: {href_paren}"

            fout.write(item_line + "\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Extract titles, descriptions, and URLs from lines starting with '-' and emit formatted LaTeX \\item lines."
    )
    parser.add_argument(
        "input_file",
        help="Path to the input text file (relative or absolute)."
    )
    args = parser.parse_args()

    try:
        process_file(args.input_file)
        print("Done! Wrote formatted \\item lines to output.txt")
    except FileNotFoundError:
        print(f"Error: file '{args.input_file}' not found.", file=sys.stderr)
        sys.exit(1)
