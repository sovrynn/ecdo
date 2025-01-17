#!/usr/bin/env python3
"""
KML Plotter (Two Files, Two Categories)

This script takes two input files (each a list of latitude, longitude pairs),
and produces a single KML file containing two folders (categories). The second
file’s coordinates are de-duplicated against the first file’s coordinates.

Usage:
    python plot_kml_two_files.py path/to/first_list.txt path/to/second_list.txt

Each input file should contain lines like:
    37.4222899 -122.0822035
    34.052234  -118.243685
    ...
"""

import argparse
import sys
from pathlib import Path

# ======================
#  Category Parameters
# ======================
# Adjust to your liking (icon URL, color, scale, folder name).
CATEGORY_CONFIG = [
    {
        "name": "",
        "icon_url": "http://maps.google.com/mapfiles/kml/shapes/open-diamond.png",
        # "icon_color": "ffff0000",  # KML color in aabbggrr (opaque blue?), adjust as needed
        # "icon_color": "ffD0E040",
        "icon_color": "ffefff00",
        "icon_scale": 2
    },
    {
        "name": "",
        "icon_url": "http://maps.google.com/mapfiles/kml/shapes/open-diamond.png",
        "icon_color": "ffffffff",  # Opaque green, adjust as needed
        "icon_scale": 2
    }
]

# CDATA description placeholder text for each placemark
DESCRIPTION_PLACEHOLDER = """
<b>Legend: </b>Blue = Saline Lake, White = Salt Pan
<p>Source (GLWD): https://www.hydrosheds.org/products/glwd?utm_source=chatgpt.com</p>
"""
# DESC_2 = "Salt Pan/Wetland"

def parse_args():
    """Parse two input filenames from the command line."""
    parser = argparse.ArgumentParser(description="Plot two sets of coordinates (two categories) in a single KML.")
    parser.add_argument("first_file", type=str, help="Path to the first coordinate list.")
    parser.add_argument("second_file", type=str, help="Path to the second coordinate list.")
    return parser.parse_args()

def validate_coordinate(lat_str, lon_str, line_num, filename):
    """
    Convert lat/lon strings to float and ensure they're in valid range.
    """
    try:
        lat = float(lat_str)
        lon = float(lon_str)
    except ValueError:
        raise ValueError(f"File '{filename}', line {line_num}: Invalid latitude/longitude.")

    if not (-90 <= lat <= 90):
        raise ValueError(f"File '{filename}', line {line_num}: Latitude {lat} out of range (-90 to 90).")
    if not (-180 <= lon <= 180):
        raise ValueError(f"File '{filename}', line {line_num}: Longitude {lon} out of range (-180 to 180).")
    return lat, lon

def read_coordinates(file_path: Path):
    """
    Read lat/lon pairs from the given file and return a list of (lat, lon) tuples.
    """
    if not file_path.exists():
        print(f"Error: File '{file_path}' does not exist.", file=sys.stderr)
        return []
    if not file_path.is_file():
        print(f"Error: '{file_path}' is not a file.", file=sys.stderr)
        return []

    coords = []
    with file_path.open("r", encoding="utf-8") as f:
        for line_num, line in enumerate(f, start=1):
            line = line.strip()
            if not line:
                continue
            parts = line.split()
            if len(parts) != 2:
                print(f"Warning: File '{file_path.name}', line {line_num} does not have exactly two values. Skipping.", file=sys.stderr)
                continue
            try:
                lat, lon = validate_coordinate(parts[0], parts[1], line_num, file_path.name)
                coords.append((lat, lon))
            except ValueError as ve:
                print(f"Warning: {ve} Skipping.", file=sys.stderr)
    return coords

def generate_kml(categories, output_path: Path):
    """
    Write a KML with multiple folders. Each dict in 'categories' should have:
      - name (Folder name)
      - icon_url
      - icon_color
      - icon_scale
      - coords (list of (lat, lon))
    """
    kml_lines = []
    kml_lines.append('<?xml version="1.0" encoding="UTF-8"?>')
    kml_lines.append('<kml xmlns="http://www.opengis.net/kml/2.2">')
    kml_lines.append('  <Document>')

    # For each category, define a style, then a folder with placemarks
    for idx, cat in enumerate(categories, start=1):
        style_id = f"catStyle_{idx}"

        # Add Style
        kml_lines.append(f'    <Style id="{style_id}">')
        kml_lines.append('      <IconStyle>')
        kml_lines.append(f'        <color>{cat["icon_color"]}</color>')
        kml_lines.append(f'        <scale>{cat["icon_scale"]}</scale>')
        kml_lines.append('        <Icon>')
        kml_lines.append(f'          <href>{cat["icon_url"]}</href>')
        kml_lines.append('        </Icon>')
        kml_lines.append('      </IconStyle>')
        kml_lines.append('    </Style>')

        # Start Folder
        kml_lines.append('    <Folder>')
        kml_lines.append(f'      <name>{cat["name"]}</name>')

        # Add Placemarks
        for (lat, lon) in cat["coords"]:
            kml_lines.append('      <Placemark>')
            kml_lines.append(f'        <name>{cat["name"]}</name>')
            kml_lines.append('        <description>')
            kml_lines.append(f'          <![CDATA[{DESCRIPTION_PLACEHOLDER}]]>')
            kml_lines.append('        </description>')
            kml_lines.append(f'        <styleUrl>#{style_id}</styleUrl>')
            kml_lines.append('        <Point>')
            kml_lines.append(f'          <coordinates>{lon},{lat},0</coordinates>')
            kml_lines.append('        </Point>')
            kml_lines.append('      </Placemark>')

        # End Folder
        kml_lines.append('    </Folder>')

    # Close Document
    kml_lines.append('  </Document>')
    kml_lines.append('</kml>')

    try:
        with output_path.open("w", encoding="utf-8") as f:
            for line in kml_lines:
                f.write(line + "\n")
        print(f"Successfully wrote KML file to '{output_path}'.")
    except Exception as e:
        print(f"Error: Failed to write KML file '{output_path}': {e}", file=sys.stderr)
        sys.exit(1)

def main():
    args = parse_args()
    first_path = Path(args.first_file)
    second_path = Path(args.second_file)

    # 1) Read coordinates from each file
    coords1 = read_coordinates(first_path)
    coords2 = read_coordinates(second_path)

    # 2) De-duplicate coords2 against coords1
    set1 = set(coords1)
    unique_coords2 = [c for c in coords2 if c not in set1]

    # 3) Prepare the category dictionaries
    #    - We reuse the config from CATEGORY_CONFIG but fill in the coords.
    cat1 = CATEGORY_CONFIG[0].copy()
    cat1["coords"] = coords1
    cat2 = CATEGORY_CONFIG[1].copy()
    cat2["coords"] = unique_coords2

    # 4) Generate single KML output
    #    We'll name it based on the first file or second file, or a fixed name:
    output_kml = Path("two_categories_output.kml")
    generate_kml([cat1, cat2], output_kml)

if __name__ == "__main__":
    main()
