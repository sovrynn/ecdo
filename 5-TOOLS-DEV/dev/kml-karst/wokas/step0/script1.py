import argparse
from pathlib import Path
import chardet
import sys

def parse_arguments():
    """
    Parse command-line arguments.

    Returns:
        argparse.Namespace: Parsed arguments with source and destination directories.
    """
    parser = argparse.ArgumentParser(
        description="Convert all .csv files in a source directory to UTF-8 encoding and save them to a destination directory."
    )
    parser.add_argument(
        "source_dir",
        type=str,
        help="Relative path to the source directory containing .csv files."
    )
    parser.add_argument(
        "destination_dir",
        type=str,
        help="Relative path to the destination directory where converted .csv files will be saved."
    )
    return parser.parse_args()

def detect_encoding(file_path, num_bytes=10000):
    """
    Detect the encoding of a file using chardet.

    Args:
        file_path (Path): Path object of the file.
        num_bytes (int): Number of bytes to read for detection.

    Returns:
        str: Detected encoding or 'utf-8' as default if detection fails.
    """
    try:
        with file_path.open('rb') as f:
            raw_data = f.read(num_bytes)
        result = chardet.detect(raw_data)
        encoding = result['encoding']
        confidence = result['confidence']
        if encoding and confidence > 0.5:
            print(f"Detected encoding '{encoding}' with confidence {confidence:.2f} for file: {file_path}")
            return encoding
        else:
            print(f"Warning: Low confidence ({confidence:.2f}) for encoding of file {file_path}. Defaulting to 'utf-8'.")
            return 'utf-8'
    except Exception as e:
        print(f"Error detecting encoding for file {file_path}: {e}")
        return 'utf-8'

def convert_file_to_utf8(source_path, dest_path):
    """
    Convert a single file to UTF-8 encoding and save it to the destination path.

    Args:
        source_path (Path): Path object of the source file.
        dest_path (Path): Path object where the converted file will be saved.

    Returns:
        bool: True if conversion is successful, False otherwise.
    """
    encoding = detect_encoding(source_path)
    try:
        # Read the content with detected encoding
        with source_path.open('r', encoding=encoding, errors='strict') as src_file:
            content = src_file.read()
    except UnicodeDecodeError as ude:
        print(f"UnicodeDecodeError reading file {source_path} with encoding '{encoding}': {ude}")
        return False
    except Exception as e:
        print(f"Error reading file {source_path}: {e}")
        return False

    try:
        # Ensure the parent directory exists
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        # Write the content with UTF-8 encoding
        with dest_path.open('w', encoding='utf-8') as dest_file:
            dest_file.write(content)
        print(f"Successfully converted and saved: {dest_path}")
        return True
    except Exception as e:
        print(f"Error writing file {dest_path}: {e}")
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
    source_dir = Path(args.source_dir).resolve()
    destination_dir = Path(args.destination_dir).resolve()

    # Check if the source directory exists
    if not source_dir.is_dir():
        print(f"Error: The source directory '{source_dir}' does not exist or is not a directory.")
        sys.exit(1)

    # Find all .csv files in the source directory recursively
    csv_files = find_csv_files(source_dir)

    if not csv_files:
        print(f"No .csv files found in the source directory: {source_dir}")
        sys.exit(0)

    print(f"Found {len(csv_files)} .csv file(s) in '{source_dir}'. Starting conversion to UTF-8...")

    # Iterate over each CSV file and convert it
    success_count = 0
    failure_count = 0
    for csv_file in csv_files:
        # Determine the relative path from source_dir to csv_file
        relative_path = csv_file.relative_to(source_dir)
        # Determine the destination file path
        dest_file_path = destination_dir / relative_path

        # Convert the file
        success = convert_file_to_utf8(csv_file, dest_file_path)
        if success:
            success_count += 1
        else:
            failure_count += 1

    # Report results
    print("\nConversion completed.")
    print(f"Successfully converted and saved {success_count} file(s).")
    if failure_count > 0:
        print(f"Failed to convert {failure_count} file(s). Check the above messages for details.")
    else:
        print("All files were converted successfully.")

if __name__ == "__main__":
    main()
