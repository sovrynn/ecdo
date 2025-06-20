#!/usr/bin/env python3
import sys
import re

def main():
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <relative_file_path>")
        sys.exit(1)

    filename = sys.argv[1]
    # Matches {https...} containing an underscore, not already preceded by \url
    pattern = re.compile(r'(?<!\\url)({https[^}]*_[^}]*})')

    try:
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        sys.exit(1)

    new_lines = []
    for line in lines:
        def replacer(match):
            original = match.group(1)
            return f"\\url{{{original}}}"

        new_line = pattern.sub(replacer, line)
        if new_line != line:
            print(f"Before: {line.rstrip()}")
            print(f"After:  {new_line.rstrip()}")
        new_lines.append(new_line)

    # Write changes back to file
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

if __name__ == '__main__':
    main()
