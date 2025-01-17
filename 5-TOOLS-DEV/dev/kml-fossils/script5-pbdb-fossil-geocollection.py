import os
import sys
import argparse
import subprocess

def main():
    parser = argparse.ArgumentParser(
        description='Downloads CSV files from paleobiodb.org for each taxon ID in a file.'
    )
    parser.add_argument('input_file', help='Relative path to the file containing taxon IDs')
    parser.add_argument('output_dir', help='Relative path to the directory where output .txt files will be saved')
    args = parser.parse_args()

    input_file = args.input_file
    output_dir = args.output_dir

    # Ensure the output directory exists; create if it doesn't.
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Check if the input file exists.
    if not os.path.isfile(input_file):
        print(f"Error: The file '{input_file}' does not exist.")
        sys.exit(1)

    # Read all lines from the input file.
    with open(input_file, 'r') as f:
        lines = f.readlines()

    # Clean and keep only non-empty lines
    lines = [line.strip() for line in lines if line.strip()]

    total = len(lines)
    if total == 0:
        print(f"No valid lines found in '{input_file}'. Exiting.")
        sys.exit(0)

    base_url = "https://paleobiodb.org/data1.2/occs/geosum.csv?level=2&all_records&taxon_id="
    # base_url = "https://paleobiodb.org/data1.2/colls/list.txt?all_records&taxon_id="

    # Download each line
    for i, line in enumerate(lines, start=1):
        # Build the URL
        url = base_url + line

        # Construct output filename: line_number.txt
        output_filename = f"{i}.txt"
        output_path = os.path.join(output_dir, output_filename)

        # Print progress to console
        print(f"[{i}/{total}] Downloading taxon_id='{line}' -> '{output_filename}'")

        # Run wget
        # -O <output_path> ensures the file is saved to output_path
        try:
            subprocess.run(
                ["wget", "-q", "-O", output_path, url],
                check=True
            )
        except subprocess.CalledProcessError as e:
            print(f"Error while downloading taxon_id='{line}': {e}")
            # You may continue or sys.exit(1) depending on desired behavior
            continue

    print(f"\nAll downloads complete. Files saved in '{output_dir}'.\n")

if __name__ == "__main__":
    main()
