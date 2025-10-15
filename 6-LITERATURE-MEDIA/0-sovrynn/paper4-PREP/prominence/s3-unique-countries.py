#!/usr/bin/env python3
"""
unique_last_lines.py

Takes one input argument: a relative folder path.
For each file in that folder, extracts the value of the last line.
Creates a unique set of all last-line values and writes them to output.txt,
one per line.
"""
import sys
import os

def main():
    if len(sys.argv) != 2:
        print("Usage: python unique_last_lines.py <input_folder>")
        sys.exit(1)

    input_folder = sys.argv[1]
    if not os.path.isdir(input_folder):
        print(f"Error: '{input_folder}' is not a directory.")
        sys.exit(1)

    unique_values = set()

    for fname in os.listdir(input_folder):
        path = os.path.join(input_folder, fname)
        if not os.path.isfile(path):
            continue
        try:
            with open(path, 'r', encoding='utf-8') as f:
                last = None
                for line in f:
                    last = line.rstrip('\n')
                if last is not None:
                    unique_values.add(last)
        except IOError as e:
            print(f"Warning: could not read '{fname}': {e}")

    # Write unique values to output.txt
    with open('output.txt', 'w', encoding='utf-8') as out:
        for value in sorted(unique_values):
            out.write(f"{value}\n")

if __name__ == "__main__":
    main()
