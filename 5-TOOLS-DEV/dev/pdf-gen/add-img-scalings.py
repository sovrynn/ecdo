import sys
import re

def main():
    if len(sys.argv) != 2:
        print("Usage: script.py <relative_filename>")
        sys.exit(1)

    relative_filename = sys.argv[1]
    input_filename = 'input.txt'
    output_filename = 'output.txt'

    # Step 1: Read and validate 'input.txt'
    image_entries = []
    line_number = 0
    input_pattern = re.compile(r'^\!\[\]\((.*?)\)(?:\s+(0(?:\.\d+)?|1(?:\.0+)?|0?\.\d+))?$')

    try:
        with open(input_filename, 'r', encoding='utf-8') as infile:
            for line in infile:
                line_number += 1
                line = line.strip()
                match = input_pattern.fullmatch(line)
                if not match:
                    print(f"Error: Line {line_number} in '{input_filename}' is not in the correct format.")
                    sys.exit(1)
                image_path = match.group(1)
                x_value = match.group(2)
                if x_value:
                    x_value = float(x_value)
                    if not (0 <= x_value <= 1):
                        print(f"Error: X value on line {line_number} is not between 0 and 1.")
                        sys.exit(1)
                    image_entries.append((image_path, x_value))
                else:
                    # Skip entries without X value
                    continue
    except FileNotFoundError:
        print(f"Error: File '{input_filename}' not found.")
        sys.exit(1)

    # Step 2: Read the content of the relative filename
    try:
        with open(relative_filename, 'r', encoding='utf-8') as rel_file:
            content = rel_file.read()
    except FileNotFoundError:
        print(f"Error: File '{relative_filename}' not found.")
        sys.exit(1)

    # Step 3: Modify the content
    for image_path, x_value in image_entries:
        image_embedding = f'![]({image_path})'
        escaped_embedding = re.escape(image_embedding)
        pattern = re.compile(escaped_embedding)

        # Check if the image embedding exists in the content
        if not pattern.search(content):
            print(f"Error: Image embedding '{image_embedding}' not found in '{relative_filename}'.")
            sys.exit(1)

        # Replace all occurrences
        replacement = f'{image_embedding} {x_value}'
        content = pattern.sub(replacement, content)

    # Step 4: Write the modified content to 'output.txt'
    with open(output_filename, 'w', encoding='utf-8') as outfile:
        outfile.write(content)

    print(f"Modified content written to '{output_filename}'.")

if __name__ == "__main__":
    main()
