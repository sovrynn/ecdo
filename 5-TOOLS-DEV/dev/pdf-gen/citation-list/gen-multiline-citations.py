import sys

def main():
    if len(sys.argv) != 2:
        print("Usage: python add_line_numbers.py <relative_markdown_filepath>")
        sys.exit(1)

    filepath = sys.argv[1]

    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            lines = file.readlines()

        new_lines = []
        citation_number = 1
        previous_line_blank = False  # Assume the line before the first is not blank

        for idx, line in enumerate(lines):
            stripped_line = line.strip()
            if stripped_line == '':
                # Current line is blank
                new_lines.append(line)
                previous_line_blank = True
            else:
                # Current line is not blank
                if previous_line_blank:
                    # This line continues the previous citation
                    new_line = line
                else:
                    # This line starts a new citation
                    new_line = f"{citation_number}. {line.lstrip()}"
                    citation_number += 1
                new_lines.append(new_line)
                previous_line_blank = False

        with open('output.txt', 'w', encoding='utf-8') as file:
            file.writelines(new_lines)

        print(f"Processed '{filepath}' and added line numbers to citations. Output written to 'output.txt'.")

    except FileNotFoundError:
        print(f"File '{filepath}' not found.")
        sys.exit(1)

if __name__ == '__main__':
    main()
