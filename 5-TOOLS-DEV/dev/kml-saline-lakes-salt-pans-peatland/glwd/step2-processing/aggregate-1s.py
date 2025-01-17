import argparse
from pathlib import Path
import sys

def process_txt_files(input_dir: Path, output_file: Path):
    if not input_dir.exists():
        print(f"Error: The directory '{input_dir}' does not exist.", file=sys.stderr)
        sys.exit(1)
    if not input_dir.is_dir():
        print(f"Error: The path '{input_dir}' is not a directory.", file=sys.stderr)
        sys.exit(1)

    txt_files = list(input_dir.glob("*.txt"))
    if not txt_files:
        print(f"No .txt files found in directory '{input_dir}'.")
        return

    output_lines = []

    for txt_file in txt_files:
        try:
            with txt_file.open('r', encoding='utf-8') as file:
                lines = file.readlines()
                
                if len(lines) < 4:
                    print(f"Warning: '{txt_file}' has fewer than 4 lines. Skipping.", file=sys.stderr)
                    continue

                # Extract the value from the fourth line
                fourth_line = lines[3].strip()
                if fourth_line not in {'0', '1'}:
                    print(f"Warning: Invalid value '{fourth_line}' on line 4 of '{txt_file}'. Skipping.", file=sys.stderr)
                    continue

                if fourth_line == '1':
                    third_line = lines[2].rstrip('\n')
                    output_lines.append(third_line)

        except Exception as e:
            print(f"Error processing file '{txt_file}': {e}", file=sys.stderr)

    # Write the output lines to the output file
    try:
        with output_file.open('w', encoding='utf-8') as out_file:
            for line in output_lines:
                out_file.write(line + '\n')
        print(f"Successfully wrote {len(output_lines)} lines to '{output_file}'.")
    except Exception as e:
        print(f"Error writing to output file '{output_file}': {e}", file=sys.stderr)
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(
        description=(
            "Scan a directory for .txt files, check the 4th line for a 0 or 1. "
            "If the 4th line is 1, append the 3rd line to the output file."
        )
    )
    parser.add_argument(
        "input_directory",
        type=str,
        help="Relative path to the directory containing .txt files."
    )
    parser.add_argument(
        "output_file",
        type=str,
        nargs='?',
        default="output.txt",
        help="Path to the output file. Defaults to 'output.txt' in the current directory."
    )

    args = parser.parse_args()
    input_dir = Path(args.input_directory)
    output_file = f'output-{input_dir}.txt'
    output_file = Path(output_file)

    process_txt_files(input_dir, output_file)

if __name__ == "__main__":
    main()
