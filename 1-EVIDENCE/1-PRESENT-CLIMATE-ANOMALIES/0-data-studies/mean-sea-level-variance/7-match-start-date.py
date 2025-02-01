import os
import sys

def parse_date(date_str):
    """
    Parse a date string expected to be in the form "YYYY-M" or "YYYY-MM".
    Returns a tuple (year, month) if successful, or None if the format is wrong.
    """
    try:
        parts = date_str.split('-')
        if len(parts) != 2:
            return None
        year = int(parts[0])
        month = int(parts[1])
        return year, month
    except Exception:
        return None

def normalize_date(date_str):
    """
    Convert a date string to the normalized "YYYY-MM" format.
    Returns the normalized string or None if the date cannot be parsed.
    """
    parsed = parse_date(date_str)
    if parsed is None:
        return None
    year, month = parsed
    return f"{year:04d}-{month:02d}"

def process_file(input_path, threshold="1950-01"):
    """
    Process a single file:
      - Read all lines.
      - Find the first nonempty, valid data line (with at least two tokens) and normalize its date.
      - If the normalized date is later than threshold, skip the file (return None).
      - Otherwise, remove any leading lines until we find a line with a normalized date exactly equal to threshold.
      - Return the list of lines starting at that threshold line.
      - If no line matches the threshold date, return None.
    """
    with open(input_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    if not lines:
        return None

    # Check the first nonempty valid line's date.
    first_valid_date = None
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
        parts = stripped.split()
        if len(parts) < 2:
            continue
        normalized = normalize_date(parts[0])
        if normalized is None:
            continue
        first_valid_date = normalized
        break

    if first_valid_date is None:
        return None

    # If the first valid date is later than the threshold, skip this file.
    if first_valid_date > threshold:
        return None

    # Now, find the first line with a normalized date equal to the threshold.
    start_index = None
    for idx, line in enumerate(lines):
        stripped = line.strip()
        if not stripped:
            continue
        parts = stripped.split()
        if len(parts) < 2:
            continue
        normalized = normalize_date(parts[0])
        if normalized == threshold:
            start_index = idx
            break

    if start_index is None:
        # No line with the threshold date was found.
        return None

    # Return all lines starting from the threshold.
    return lines[start_index:]

def main():
    if len(sys.argv) < 2:
        print("Usage: python process_files.py <relative_folder_path>")
        sys.exit(1)
    
    input_folder = sys.argv[1]
    input_folder = os.path.abspath(input_folder)

    # Create the output folder in the current working directory.
    output_folder = os.path.join(os.getcwd(), "output")
    os.makedirs(output_folder, exist_ok=True)

    files_copied = 0

    # Process each file in the input folder.
    for filename in os.listdir(input_folder):
        input_path = os.path.join(input_folder, filename)
        if not os.path.isfile(input_path):
            continue

        trimmed_lines = process_file(input_path)
        if trimmed_lines is None:
            # Skip file if it doesn't meet our criteria.
            continue

        output_path = os.path.join(output_folder, filename)
        with open(output_path, 'w', encoding='utf-8') as out_f:
            out_f.writelines(trimmed_lines)

        files_copied += 1

    print(f"Total files copied: {files_copied}")

if __name__ == "__main__":
    main()
