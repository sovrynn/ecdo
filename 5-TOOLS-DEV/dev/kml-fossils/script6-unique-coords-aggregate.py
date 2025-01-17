#!/usr/bin/env python3

import os
import sys
import csv

def main():
    if len(sys.argv) < 2:
        print("Usage: python collect_unique_coords.py <relative_directory>")
        sys.exit(1)

    input_dir = sys.argv[1]

    # Validate that the directory exists
    if not os.path.isdir(input_dir):
        print(f"Error: '{input_dir}' is not a valid directory.")
        sys.exit(1)

    unique_coords = set()
    duplicate_count = 0

    # Traverse the directory
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(".txt"):
            file_path = os.path.join(input_dir, filename)

            with open(file_path, mode="r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                
                # Confirm 'lat' and 'lng' columns exist
                if "lat" not in reader.fieldnames or "lng" not in reader.fieldnames:
                    print(f"Warning: CSV '{filename}' missing 'lat' or 'lng' columns. Skipping.")
                    continue

                for row in reader:
                    lat = row["lat"].strip()
                    lng = row["lng"].strip()

                    # Form a tuple
                    coord_tuple = (lat, lng)

                    # Check if coord_tuple already in set
                    if coord_tuple in unique_coords:
                        duplicate_count += 1
                    else:
                        unique_coords.add(coord_tuple)

    # Write unique coordinates to output file
    output_file = "exclusively-marine-1000.txt"
    with open(output_file, mode="w", encoding="utf-8") as out_f:
        for (lat, lng) in unique_coords:
            out_f.write(f"{lat} {lng}\n")

    # Print summary
    print(f"Total unique coords: {len(unique_coords)}")
    print(f"Total duplicates encountered: {duplicate_count}")

if __name__ == "__main__":
    main()
