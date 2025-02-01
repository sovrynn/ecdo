#!/usr/bin/env python3

import os
import sys
import json

def main():
    # Check usage
    if len(sys.argv) != 2:
        print("Usage: python convert_to_json.py <input_folder>")
        sys.exit(1)

    input_folder = sys.argv[1]

    # 1) Verify the input folder exists
    if not os.path.isdir(input_folder):
        print(f"Error: The folder '{input_folder}' does not exist.")
        sys.exit(1)

    # 2) Determine the script's directory (where station-locations and station-coords are)
    script_dir = os.path.abspath(os.path.dirname(__file__))
    station_locations_folder = os.path.join(script_dir, "station-locations")
    station_coords_folder = os.path.join(script_dir, "station-coords")

    # Ensure those subfolders exist
    if not os.path.isdir(station_locations_folder):
        print(f"Error: The folder '{station_locations_folder}' does not exist.")
        sys.exit(1)
    if not os.path.isdir(station_coords_folder):
        print(f"Error: The folder '{station_coords_folder}' does not exist.")
        sys.exit(1)

    # 3) Prepare an output folder inside the input folder
    output_folder = os.path.join(input_folder, "output-json")
    os.makedirs(output_folder, exist_ok=True)

    # 4) Go through each file in the input folder
    files_processed = 0
    for entry in os.scandir(input_folder):
        # Skip directories and possibly skip non-txt files if desired
        if entry.is_dir():
            continue

        base_filename = entry.name  # e.g. "1234567.txt"
        input_file_path = entry.path

        # Build expected paths for station-locations and station-coords
        station_loc_file = os.path.join(station_locations_folder, base_filename)
        station_coords_file = os.path.join(station_coords_folder, base_filename)

        # If the companion files do not exist, skip or exit
        if not os.path.isfile(station_loc_file):
            print(f"Error: Missing station-locations file for '{base_filename}'")
            sys.exit(1)

        if not os.path.isfile(station_coords_file):
            print(f"Error: Missing station-coords file for '{base_filename}'")
            sys.exit(1)

        # 5) Retrieve NAME from station-locations file
        with open(station_loc_file, "r", encoding="utf-8") as f:
            station_name = f.read().strip()

        # 6) Retrieve LAT and LON from station-coords file
        with open(station_coords_file, "r", encoding="utf-8") as f:
            coords_line = f.read().strip()
            try:
                lat_str, lon_str = coords_line.split()
                lat_val = float(lat_str)
                lon_val = float(lon_str)
            except ValueError:
                print(f"Error: Invalid lat/lon in '{station_coords_file}'.")
                sys.exit(1)

        # 7) Parse data from the input file to build the "values" list
        values_list = []
        with open(input_file_path, "r", encoding="utf-8") as data_file:
            for line_num, line in enumerate(data_file, start=1):
                line = line.strip()
                if not line:
                    continue

                parts = line.split()
                if len(parts) != 2:
                    print(f"Error: Invalid format on line {line_num} in '{base_filename}': '{line}'")
                    sys.exit(1)

                date_str, value_str = parts

                # Convert date_str (YYYY-M or YYYY-MM) to YYYYMM01
                try:
                    year, month = date_str.split('-')
                except ValueError:
                    print(f"Error: Could not parse date '{date_str}' (line {line_num} in '{base_filename}').")
                    sys.exit(1)

                if len(month) == 1:
                    month = "0" + month  # zero-pad month
                final_date = f"{year}{month}01"

                # Convert value to int if possible, otherwise float
                try:
                    numeric_value = float(value_str)
                    if numeric_value.is_integer():
                        numeric_value = int(numeric_value)
                except ValueError:
                    print(f"Error: Invalid numeric value '{value_str}' on line {line_num} in '{base_filename}'.")
                    sys.exit(1)

                values_list.append({
                    "date": final_date,
                    "value": numeric_value
                })

        # 8) Build the final JSON structure
        output_data = {
            "name": f"Interannual Variation of Monthly Mean Sea Level, in meters ({station_name})",
            "description": "Source: NOAA https://tidesandcurrents.noaa.gov/sltrends",
            "global": False,
            "lat": lat_val,
            "lon": lon_val,
            "values": values_list
        }

        # 9) Write the JSON file to output-json (use same base name, .json extension)
        base_no_ext, _ = os.path.splitext(base_filename)
        output_file_path = os.path.join(output_folder, f"{base_no_ext}.json")

        with open(output_file_path, "w", encoding="utf-8") as out_f:
            json.dump(output_data, out_f, indent=2)

        files_processed += 1

    print(f"Finished processing {files_processed} file(s).")

if __name__ == "__main__":
    main()
