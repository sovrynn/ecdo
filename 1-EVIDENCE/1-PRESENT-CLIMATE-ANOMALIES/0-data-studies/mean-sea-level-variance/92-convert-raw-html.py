#!/usr/bin/env python3
import sys

def main():
    # Check for exactly one argument (the input file)
    if len(sys.argv) != 2:
        print("Usage: python convert_to_csv.py <relative-input-file>")
        sys.exit(1)

    input_file = sys.argv[1]

    try:
        with open(input_file, "r") as infile:
            lines = infile.readlines()
    except Exception as e:
        print(f"Error reading input file: {e}")
        sys.exit(1)

    try:
        with open("output.txt", "w") as outfile:
            # Optionally, write a header line:
            # outfile.write("Year,Value\n")
            for line in lines:
                line = line.strip()
                if not line:
                    continue  # skip empty lines
                # Each line is expected to be in the format: "2023: 5.601999999999999"
                parts = line.split(":")
                if len(parts) != 2:
                    print(f"Skipping invalid line: {line}")
                    continue
                year = parts[0].strip()
                value = parts[1].strip()
                outfile.write(f"{year},{value}\n")
    except Exception as e:
        print(f"Error writing output file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
