#!/usr/bin/env python3

import os
import sys

def main():
    # Check that exactly one argument was passed (the folder)
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_folder>")
        sys.exit(1)

    input_folder = sys.argv[1]

    # Verify that the input folder exists
    if not os.path.isdir(input_folder):
        print(f"Error: Folder '{input_folder}' does not exist.")
        sys.exit(1)

    # Read rawstationids.txt and build a dictionary:
    #   key = 7-digit station ID
    #   value = everything after that 7-digit ID on the line
    station_dict = {}
    raw_file_path = "rawstationids.txt"

    if not os.path.isfile(raw_file_path):
        print(f"Error: '{raw_file_path}' file not found.")
        sys.exit(1)

    with open(raw_file_path, "r", encoding="utf-8") as raw_file:
        for line in raw_file:
            line = line.rstrip("\n")
            if not line:
                continue  # skip empty lines

            # Extract the first 7 characters as key, the rest as the value
            key = line[:7]
            # Sanity check: ensure the key is actually 7 digits
            if len(key) != 7 or not key.isdigit():
                # If the line doesn't start with 7 digits, skip or handle differently
                continue

            value = line[7:].strip()
            station_dict[key] = value

    # Prepare output folder for station locations
    output_folder = os.path.join(input_folder, "station-locations")
    os.makedirs(output_folder, exist_ok=True)

    files_processed = 0

    # Iterate over all files in the input folder
    for entry in os.scandir(input_folder):
        if entry.is_file() and entry.name.endswith(".txt"):
            filename = entry.name
            # Remove the ".txt" extension to get the 7-digit ID
            base_name = filename[:-4]

            # Check if the base_name is 7 digits
            if len(base_name) != 7 or not base_name.isdigit():
                # You can decide to skip or raise an error; here we just skip
                continue

            # Look up the station ID in the dictionary
            if base_name not in station_dict:
                print(f"Error: Station ID {base_name} not found in {raw_file_path}.")
                sys.exit(1)

            # Retrieve data associated with this station
            station_data = station_dict[base_name]

            # Write the data to the output file in station-locations
            output_path = os.path.join(output_folder, filename)
            with open(output_path, "w", encoding="utf-8") as out_file:
                out_file.write(station_data)

            files_processed += 1

    print(f"Processed {files_processed} files.")

if __name__ == "__main__":
    main()
