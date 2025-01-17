import argparse
from pathlib import Path


def parse_arguments():
    """
    Parse command-line arguments.
    """
    parser = argparse.ArgumentParser(
        description="Parse .csv files starting from the 10th line and check for negative float values."
    )
    parser.add_argument(
        "input_dir",
        type=str,
        help="Relative path to the directory containing .csv files."
    )
    return parser.parse_args()


def find_csv_files(directory):
    """
    Recursively find all .csv files in the given directory.

    Args:
        directory (Path): Path object of the base directory.

    Returns:
        list of Path: List containing paths to .csv files.
    """
    return list(directory.rglob("*.csv"))


def parse_last_word_as_float(file_path):
    """
    Parse the last word on each line from the 10th line onwards in a .csv file.

    Args:
        file_path (Path): The .csv file path.

    Returns:
        bool: True if a negative float is encountered, False otherwise.
    """
    try:
        with file_path.open("r", encoding="utf-8") as f:
            lines = f.readlines()
        # Start processing from the 10th line (index 9)
        for line in lines[9:]:
            # Extract the last word on the line
            last_word = line.strip().split()[-1]
            # Convert the last word to a float
            value = float(last_word)
            if value < 0:
                return True
        return False
    except ValueError:
        # Ignore lines that do not contain valid floats in the last word
        return False
    except Exception as e:
        print(f"Error processing file {file_path}: {e}")
        return False


def main():
    # Parse arguments
    args = parse_arguments()
    input_dir = Path(args.input_dir).resolve()

    # Validate directory
    if not input_dir.is_dir():
        print(f"Error: {input_dir} does not exist or is not a directory.")
        return

    # Find all CSV files
    csv_files = find_csv_files(input_dir)
    if not csv_files:
        print(f"No .csv files found in {input_dir}.")
        return

    print(f"Scanning {len(csv_files)} .csv files in {input_dir}...\n")

    # Check for negative values in each file
    for csv_file in csv_files:
        if parse_last_word_as_float(csv_file):
            print(f"Negative value found in file: {csv_file.name}")


if __name__ == "__main__":
    main()
