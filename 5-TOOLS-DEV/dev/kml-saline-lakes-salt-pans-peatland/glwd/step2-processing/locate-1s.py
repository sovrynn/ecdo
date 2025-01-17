import argparse
from pathlib import Path
import sys

def process_txt_files(directory: Path):
    if not directory.exists():
        print(f"Error: The directory '{directory}' does not exist.", file=sys.stderr)
        return
    if not directory.is_dir():
        print(f"Error: The path '{directory}' is not a directory.", file=sys.stderr)
        return

    txt_files = list(directory.glob("*.txt"))
    if not txt_files:
        print(f"No .txt files found in directory '{directory}'.")
        return

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
                    print(f"{txt_file.name}: {third_line}")

        except Exception as e:
            print(f"Error processing file '{txt_file}': {e}", file=sys.stderr)

def main():
    parser = argparse.ArgumentParser(description="Process .txt files in a directory based on the fourth line's value.")
    parser.add_argument("directory", type=str, help="Relative path to the directory containing .txt files.")

    args = parser.parse_args()
    directory_path = Path(args.directory)

    process_txt_files(directory_path)

if __name__ == "__main__":
    main()
