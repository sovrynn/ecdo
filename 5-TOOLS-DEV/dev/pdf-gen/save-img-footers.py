import sys

def main():
    if len(sys.argv) != 2:
        print("Usage: script.py <input_filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    output_filename = "output.txt"

    line_numbers = []

    try:
        with open(input_filename, 'r', encoding='utf-8') as infile:
            for idx, line in enumerate(infile, 1):
                if line.startswith('``'):
                    line_numbers.append(str(idx))

        with open(output_filename, 'w', encoding='utf-8') as outfile:
            outfile.write('\n'.join(line_numbers))

    except FileNotFoundError:
        print(f"File not found: {input_filename}")
        sys.exit(1)

if __name__ == "__main__":
    main()
