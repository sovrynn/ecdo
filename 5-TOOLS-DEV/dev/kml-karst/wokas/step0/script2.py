import sys
import argparse
from pathlib import Path
import chardet

def parse_arguments():
    """
    Parse command-line arguments.

    Returns:
        argparse.Namespace: Parsed arguments with input and output directory paths.
    """
    parser = argparse.ArgumentParser(
        description="Process .csv files by extracting specific information and converting encodings."
    )
    parser.add_argument(
        "input_dir",
        type=str,
        help="Relative path to the input directory containing .csv files."
    )
    parser.add_argument(
        "output_dir",
        type=str,
        help="Relative path to the output directory where processed .csv files will be saved."
    )
    return parser.parse_args()

def detect_encoding(file_path, num_bytes=10000):
    """
    Detect the encoding of a file using chardet.

    Args:
        file_path (Path): Path object of the file.
        num_bytes (int): Number of bytes to read for detection.

    Returns:
        str: Detected encoding or None if detection fails.
    """
    try:
        with file_path.open('rb') as f:
            raw_data = f.read(num_bytes)
        result = chardet.detect(raw_data)
        encoding = result['encoding']
        confidence = result['confidence']
        if encoding and confidence > 0.5:
            return encoding
        else:
            print(f"Warning: Low confidence ({confidence:.2f}) for encoding of file {file_path}. Skipping.")
            return None
    except Exception as e:
        print(f"Error detecting encoding for file {file_path}: {e}")
        return None

def process_csv_file(input_file, output_file, encoding):
    """
    Process a single CSV file: parse specific lines, calculate average, and write output.

    Args:
        input_file (Path): Path object of the input CSV file.
        output_file (Path): Path object where the output will be saved.
        encoding (str): Encoding of the input file.

    Returns:
        bool: True if processing is successful, False otherwise.
    """
    try:
        with input_file.open('r', encoding=encoding, errors='strict') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading file {input_file}: {e}. Skipping.")
        return False

    # Ensure the file has at least 10 lines
    if len(lines) < 10:
        print(f"Error: File {input_file} has fewer than 10 lines. Skipping.")
        return False

    # Parse and validate line 4
    line_4 = lines[3].strip()
    expected_prefix_line4 = "#Name          :"
    if not line_4.startswith(expected_prefix_line4):
        print(f"Error: Line 4 does not start with '{expected_prefix_line4}' in file {input_file}. Skipping.")
        return False
    name = line_4[len(expected_prefix_line4):].strip()

    # Parse and validate line 5
    line_5 = lines[4].strip()
    expected_prefix_line5 = "#LAT	LON      :"
    if not line_5.startswith(expected_prefix_line5):
        print(f"Error: Line 5 does not start with '{expected_prefix_line5}' in file {input_file}. Skipping.")
        return False
    lat_lon_part = line_5[len(expected_prefix_line5):].strip()
    lat_lon = lat_lon_part.split()
    if len(lat_lon) != 2:
        print(f"Error: Line 5 does not contain two latitude and longitude values in file {input_file}. Skipping.")
        return False
    try:
        lat = float(lat_lon[0])
        lon = float(lat_lon[1])
    except ValueError:
        print(f"Error: Latitude and Longitude values in file {input_file} are not valid floats. Skipping.")
        return False

    # Process data from line 10 onwards
    data_lines = lines[9:]  # Zero-based indexing
    discharge_values = []
    for idx, line in enumerate(data_lines, start=10):
        stripped_line = line.strip()
        if not stripped_line:
            continue  # Skip empty lines
        parts = stripped_line.split()
        if not parts:
            continue  # Skip lines without data
        last_word = parts[-1]
        if last_word.upper() == "NA":
            value = 0.0
        else:
            try:
                value = float(last_word)
            except ValueError:
                print(f"Warning: Invalid float value '{last_word}' on line {idx} in file {input_file}. Setting to 0.")
                value = 0.0
        discharge_values.append(value)

    if not discharge_values:
        print(f"Error: No discharge data found in file {input_file}. Skipping.")
        return False

    average_discharge = sum(discharge_values) / len(discharge_values)

    # Prepare output content
    output_lines = [
        name,
        f"{lat}",
        f"{lon}",
        f"{average_discharge}"
    ]

    try:
        # Ensure the output directory exists
        output_file.parent.mkdir(parents=True, exist_ok=True)
        # Write the output file in UTF-8 encoding
        with output_file.open('w', encoding='utf-8') as f:
            for line in output_lines:
                f.write(f"{line}\n")
        print(f"Processed and created: {output_file}")
        return True
    except Exception as e:
        print(f"Error writing to file {output_file}: {e}. Skipping.")
        return False

def find_csv_files(directory):
    """
    Recursively find all .csv files in the given directory.

    Args:
        directory (Path): Path object of the base directory.

    Returns:
        list of Path: List containing paths to .csv files.
    """
    return list(directory.rglob("*.csv"))

def main():
    # Parse command-line arguments
    args = parse_arguments()
    input_dir = Path(args.input_dir).resolve()
    output_dir = Path(args.output_dir).resolve()

    # Check if the input directory exists
    if not input_dir.is_dir():
        print(f"Error: The input directory '{input_dir}' does not exist or is not a directory.")
        sys.exit(1)

    # Find all .csv files recursively in the input directory
    csv_files = find_csv_files(input_dir)

    if not csv_files:
        print(f"No .csv files found in the input directory: {input_dir}")
        sys.exit(0)

    print(f"Found {len(csv_files)} .csv file(s) in '{input_dir}'. Starting processing...")

    # Counters for reporting
    processed_count = 0
    skipped_count = 0

    for csv_file in csv_files:
        # Determine the relative path of the file with respect to the input directory
        try:
            relative_path = csv_file.relative_to(input_dir)
        except ValueError:
            print(f"Error: File {csv_file} is not relative to the input directory {input_dir}. Skipping.")
            skipped_count += 1
            continue

        # Determine the corresponding output file path
        output_file = output_dir / relative_path

        # Detect the encoding of the input file
        encoding = detect_encoding(csv_file)

        if not encoding:
            print(f"Skipping file due to undetectable encoding: {csv_file}")
            skipped_count += 1
            continue

        # Process the CSV file and write to the output directory
        success = process_csv_file(csv_file, output_file, encoding)

        if success:
            processed_count += 1
        else:
            skipped_count += 1

    # Summary of the processing
    print("\nProcessing Summary:")
    print(f"Total .csv files found: {len(csv_files)}")
    print(f"Successfully processed and created: {processed_count}")
    print(f"Skipped files: {skipped_count}")

if __name__ == "__main__":
    main()
