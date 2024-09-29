import sys
import re

def main():
    if len(sys.argv) != 2:
        print("Usage: script.py <input_filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    output_filename = "output.txt"

    image_lines = []
    error_found = False

    image_pattern = re.compile(r'!\[\]\(.*?\)')

    try:
        with open(input_filename, 'r', encoding='utf-8') as infile:
            lines = infile.readlines()

        for idx, line in enumerate(lines, 1):
            line = line.rstrip('\n')
            match = image_pattern.search(line)
            if match:
                # Position after the image embedding
                end_pos = match.end()
                rest_of_line = line[end_pos:].strip()

                # Split the rest of the line into words
                words_after_image = rest_of_line.split()

                if len(words_after_image) > 1:
                    print(f"Error on line {idx}: {line}")
                    sys.exit(1)
                else:
                    image_lines.append(line)

        # Write the collected lines to output.txt
        with open(output_filename, 'w', encoding='utf-8') as outfile:
            for img_line in image_lines:
                outfile.write(img_line + '\n')

    except FileNotFoundError:
        print(f"File not found: {input_filename}")
        sys.exit(1)

if __name__ == "__main__":
    main()
