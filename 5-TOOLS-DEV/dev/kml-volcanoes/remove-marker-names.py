#!/usr/bin/env python3

import sys

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)

    input_filename = sys.argv[1]

    # Read all lines from the input file
    try:
        with open(input_filename, "r", encoding="utf-8") as f:
            lines = f.readlines()
    except OSError as e:
        print(f"Error: Could not read file '{input_filename}': {e}")
        sys.exit(1)

    output_lines = []
    i = 0
    while i < len(lines):
        current_line = lines[i]
        stripped_current = current_line.strip()

        # Check if this line is <Placemark>
        if stripped_current == "<Placemark>":
            # Ensure the next line exists
            if i + 1 >= len(lines):
                print(f"Error: '<Placemark>' at line {i+1} has no following line.")
                sys.exit(1)

            next_line = lines[i + 1]
            stripped_next = next_line.strip()

            # The next line must start with <name
            if not stripped_next.startswith("<name"):
                print(f"Error: Line {i+2} does not start with <name>")
                sys.exit(1)

            # Insert <!-- ... -->
            last_gt = next_line.rfind('>')
            if last_gt == -1:
                print(f"Error: Line {i+2} has no closing '>' for <name> tag.")
                sys.exit(1)

            idx_of_name = next_line.find("<name")
            if idx_of_name == -1:
                print(f"Error: Line {i+2} does not contain <name> as expected.")
                sys.exit(1)

            # Build the new line with comment markers
            new_next_line = (
                next_line[:idx_of_name]
                + "<!--"
                + next_line[idx_of_name : last_gt + 1]
                + "-->"
                + next_line[last_gt + 1 :]
            )

            # Write the current line unchanged
            output_lines.append(current_line)
            # Write the modified next line
            output_lines.append(new_next_line)

            i += 2  # Skip ahead
        else:
            # No change to current line
            output_lines.append(current_line)
            i += 1

    # Write all modified lines to the output file
    output_filename = "GVP-edited-no-names.kml"
    try:
        with open(output_filename, "w", encoding="utf-8") as f:
            f.writelines(output_lines)
        print(f"Successfully wrote edited file to '{output_filename}'.")
    except OSError as e:
        print(f"Error: Could not write to '{output_filename}': {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
