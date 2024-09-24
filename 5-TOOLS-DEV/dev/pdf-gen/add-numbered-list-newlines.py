import sys
import re

def process_file(filepath):
    # Regular expression pattern to match lines starting with a digit, a period, and a space
    pattern = re.compile(r'^\d+\. ')

    # Read the file
    with open(filepath, 'r') as file:
        lines = file.readlines()

    output_lines = []
    i = 0
    while i < len(lines):
        current_line = lines[i]
        output_lines.append(current_line)

        # Check if the current and next lines match the pattern
        if i + 1 < len(lines):
            next_line = lines[i + 1]
            if pattern.match(current_line.strip()) and pattern.match(next_line.strip()):
                # Add a blank line between them
                output_lines.append('\n')
        i += 1

    # Write the modified content back to the same file
    with open(filepath, 'w') as file:
        file.writelines(output_lines)

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python script_name.py <relative_filepath>")
        sys.exit(1)

    input_filepath = sys.argv[1]
    process_file(input_filepath)
    print(f"File '{input_filepath}' has been processed.")
