#!/usr/bin/env python3
"""
combine_lines.py

For every regular file in the given input folder:

1. Reads the 4th and 5th lines (index 3 and 4).
2. Writes a new file of the same name in ./output/
   containing a single line: "<4th line>,<5th line>".
3. Prints the total count of files processed.

Usage:
    python combine_lines.py <input_folder>
"""
import sys
import os

def main() -> None:
    if len(sys.argv) != 2:
        print("Usage: python combine_lines.py <input_folder>")
        sys.exit(1)

    in_dir = sys.argv[1]
    if not os.path.isdir(in_dir):
        sys.exit(f"Error: '{in_dir}' is not a directory.")

    out_dir = "output"
    os.makedirs(out_dir, exist_ok=True)

    processed = 0

    for filename in os.listdir(in_dir):
        src_path = os.path.join(in_dir, filename)
        if not os.path.isfile(src_path):
            continue  # skip sub‑directories or non‑files

        with open(src_path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        if len(lines) < 5:
            print(f"Skipping '{filename}' (fewer than 5 lines)")
            continue

        combined = f"{lines[3].rstrip()},{lines[4].rstrip()}\n"

        dst_path = os.path.join(out_dir, filename)
        with open(dst_path, "w", encoding="utf-8") as out_f:
            out_f.write(combined)

        processed += 1

    print(f"Processed {processed} file(s).")

if __name__ == "__main__":
    main()
