import sys

def main():
    if len(sys.argv) != 2:
        print("Usage: script.py <input_filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    output_filename = "output.txt"
    line_numbers_filename = "input.txt"

    # Read and validate line numbers from 'input.txt'
    line_numbers = []
    try:
        with open(line_numbers_filename, 'r', encoding='utf-8') as ln_file:
            for idx, line in enumerate(ln_file, 1):
                line = line.strip()
                if not line.isdigit():
                    print(f"Error: Line {idx} in 'input.txt' is not a valid number.")
                    sys.exit(1)
                line_numbers.append(int(line))
    except FileNotFoundError:
        print(f"File not found: {line_numbers_filename}")
        sys.exit(1)

    # Read the content of the input file
    try:
        with open(input_filename, 'r', encoding='utf-8') as infile:
            lines = infile.readlines()
    except FileNotFoundError:
        print(f"File not found: {input_filename}")
        sys.exit(1)

    total_lines = len(lines)

    # Append two backticks to specified lines
    for line_number in line_numbers:
        if line_number < 1 or line_number > total_lines:
            print(f"Error: Line number {line_number} is out of range (1 to {total_lines}).")
            sys.exit(1)
        # Adjust index for zero-based indexing
        idx = line_number - 1
        lines[idx] = '``' + lines[idx]

    # Write the modified content to 'output.txt'
    with open(output_filename, 'w', encoding='utf-8') as outfile:
        outfile.writelines(lines)

if __name__ == "__main__":
    main()
