# Results

02: saline lake (RED)
28: mangrove
29: saltmarsh
32: salt pan, saline/brackish wetland (YELLOW)

# Prompt

Write a python script that takes one input arg, a relative file. That file has one lat/lon per line, space-separated. The script should read in all the lat/lon coordinates and plot them in a KML file. Parameterize the marker icon, marker size, and marker color at the top of the script. Don't give the markers any labels. Write the output kml to output.kml.

# Prompt

Modify this script to do the following:

It should take one input arg instead of two input args, so that it processes two lists of coords instead of one.

Each one should be given a separate category inside the KML file, with their own category name, icon, icon color, icon size.

Every coordinate in the second file should be checked if a duplicate exists in the first file. If so, then don't include the coordinate in the second category (so it only exists in the first).

Additionally give every marker a description using cdata. Put a placeholder variable in (I'll change it later).

Here's the script:

#!/usr/bin/env python3
"""
KML Plotter Script

This script reads a file containing latitude and longitude coordinates
and generates a KML file plotting these points with customizable markers.

Usage:
    python plot_kml.py path/to/coordinates.txt

The input file should have one latitude and longitude per line, space-separated.
Example:
    37.42228990140251 -122.0822035425683
    34.052234 -118.243685
    ...
"""

import argparse
from pathlib import Path
import sys

# ============================
# ===== Parameters ===========
# ============================

# Marker icon URL. You can use any valid icon URL or a relative path to a local icon file.
MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png"

# Marker size (scale). Typical values are between 0.5 and 2.0
MARKER_SIZE = 2

# Marker color in KML's aabbggrr format (Alpha, Blue, Green, Red).
# For example, opaque red is 'ff0000ff', opaque green is 'ff00ff00', opaque blue is 'ffff0000'.
# MARKER_COLOR = "ff0000ff"  # Opaque red
# MARKER_COLOR = "ff00ff00" # green
# MARKER_COLOR = "ffff0000" # blue
MARKER_COLOR = "ff00ffff" # yellow
# MARKER_COLOR = "ff00a5ff" # dark orange
# MARKER_COLOR = "ff00ccff"    # Bright orange
# Added Neon Colors
# MARKER_COLOR = "ff00a5ff"    # Neon Orange
MARKER_COLOR = "ffff0000"    # Neon Blue

NAME="Saline Lakes"
# NAME="Salt Pans/Wetlands"
DRAW_ORDER = 0 #default 0
# DRAW_ORDER = -1

# ============================
# ===== End Parameters =======
# ============================

def parse_arguments():
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            "Read a file with latitude and longitude coordinates and generate a KML file "
            "plotting these points with customizable marker icons, sizes, and colors."
        )
    )
    parser.add_argument(
        "input_file",
        type=str,
        help="Relative path to the input file containing lat/lon coordinates."
    )
    return parser.parse_args()

def validate_coordinate(lat_str, lon_str, line_num):
    """
    Validate and convert latitude and longitude strings to floats.

    Args:
        lat_str (str): Latitude string.
        lon_str (str): Longitude string.
        line_num (int): Line number in the input file.

    Returns:
        tuple: (latitude, longitude) as floats.

    Raises:
        ValueError: If conversion fails or values are out of valid range.
    """
    try:
        lat = float(lat_str)
        lon = float(lon_str)
    except ValueError:
        raise ValueError(f"Line {line_num}: Invalid latitude or longitude values.")

    if not (-90 <= lat <= 90):
        raise ValueError(f"Line {line_num}: Latitude {lat} out of range (-90 to 90).")
    if not (-180 <= lon <= 180):
        raise ValueError(f"Line {line_num}: Longitude {lon} out of range (-180 to 180).")

    return lat, lon

def read_coordinates(input_file: Path):
    """
    Read and parse latitude and longitude coordinates from the input file.

    Args:
        input_file (Path): Path to the input file.

    Returns:
        list of tuples: List containing (latitude, longitude) tuples.
    """
    coordinates = []
    with input_file.open('r', encoding='utf-8') as file:
        for line_num, line in enumerate(file, start=1):
            stripped_line = line.strip()
            if not stripped_line:
                print(f"Warning: Line {line_num} is empty. Skipping.", file=sys.stderr)
                continue
            parts = stripped_line.split()
            if len(parts) != 2:
                print(f"Warning: Line {line_num} does not have exactly two elements. Skipping.", file=sys.stderr)
                continue
            try:
                lat, lon = validate_coordinate(parts[0], parts[1], line_num)
                coordinates.append((lat, lon))
            except ValueError as ve:
                print(f"Warning: {ve} Skipping.", file=sys.stderr)
                continue
    return coordinates

def generate_kml(coordinates, output_file: Path):
    """
    Generate a KML file with placemarks for each coordinate.

    Args:
        coordinates (list of tuples): List of (latitude, longitude) tuples.
        output_file (Path): Path to the output KML file.
    """
    kml_header = """<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>{NAME}</name>
    <Style id="customStyle">
      <IconStyle>
        <color>{color}</color>
        <scale>{scale}</scale>
        <Icon>
          <href>{icon}</href>
        </Icon>
      </IconStyle>
    </Style>
""".format(NAME=NAME, color=MARKER_COLOR, scale=MARKER_SIZE, icon=MARKER_ICON)

    kml_footer = """  </Document>
</kml>"""

    placemark_template = """    <Placemark>
      <styleUrl>#customStyle</styleUrl>
      <Point>
        <coordinates>{lon},{lat},0</coordinates>
      </Point>
      <drawOrder>{DRAW_ORDER}</drawOrder>
    </Placemark>
"""

    with output_file.open('w', encoding='utf-8') as kml_file:
        kml_file.write(kml_header)
        for lat, lon in coordinates:
            placemark = placemark_template.format(lat=lat, lon=lon,DRAW_ORDER=DRAW_ORDER)
            kml_file.write(placemark)
        kml_file.write(kml_footer)
    print(f"Successfully wrote {len(coordinates)} placemarks to '{output_file}'.")

def main():
    """Main function to execute the script."""
    args = parse_arguments()
    input_path = Path(args.input_file)

    if not input_path.exists():
        print(f"Error: The file '{input_path}' does not exist.", file=sys.stderr)
        sys.exit(1)
    if not input_path.is_file():
        print(f"Error: The path '{input_path}' is not a file.", file=sys.stderr)
        sys.exit(1)

    coordinates = read_coordinates(input_path)
    if not coordinates:
        print("No valid coordinates found. Exiting.", file=sys.stderr)
        sys.exit(1)

    output_kml = input_path.with_name(f"{input_path.stem}.kml")
    generate_kml(coordinates, output_kml)

if __name__ == "__main__":
    main()
