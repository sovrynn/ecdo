#!/usr/bin/env python3
"""
Batch Location KML Plotter

This script processes all `.txt` files in a specified directory, extracts location names and their
corresponding latitude/longitude coordinates, and generates a KML file plotting these locations
with customizable marker styles and a customizable title.

Usage:
    python plot_locations_kml.py path/to/directory

Each `.txt` file should have location data in pairs of lines:
    Location Name 1
    Latitude1, Longitude1
    Location Name 2
    Latitude2, Longitude2
    ...
"""
import argparse
from pathlib import Path
import sys

# ============================
# ===== Parameters ===========
# ============================

# KML Title: The main title of the KML file as it appears in Google Earth Pro.
KML_TITLE = "Labeled Flood Myths"

# Marker icon URL. You can use any valid icon URL or a relative path to a local icon file.
# MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png"
MARKER_ICON = "http://maps.google.com/mapfiles/kml/paddle/wht-blank.png"

# Marker size (scale). Typical values are between 0.5 and 2.0
MARKER_SIZE = 3.0

# Marker label size. Note: KML does not support direct label size customization, but you can
# control visibility and other aspects via LabelStyle. Here, it's used as a placeholder.
MARKER_LABEL_SIZE = 14  # This parameter is not directly used in KML but can be extended.

# Marker color in KML's aabbggrr format (Alpha, Blue, Green, Red).
# For example, opaque red is 'ff0000ff', opaque green is 'ff00ff00', opaque blue is 'ffff0000'.
MARKER_COLOR = "ff0000ff"  # Opaque red

# ============================
# ===== End Parameters =======
# ============================

def parse_arguments():
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            "Process all .txt files in a directory, extract location names and coordinates, "
            "and plot them on a KML file with customizable marker styles and title."
        )
    )
    parser.add_argument(
        "input_directory",
        type=str,
        help="Relative path to the directory containing .txt files with location data."
    )
    return parser.parse_args()

def validate_directory(directory: Path):
    """Validate that the provided path exists and is a directory."""
    if not directory.exists():
        print(f"Error: The directory '{directory}' does not exist.", file=sys.stderr)
        sys.exit(1)
    if not directory.is_dir():
        print(f"Error: The path '{directory}' is not a directory.", file=sys.stderr)
        sys.exit(1)

def parse_txt_file(txt_file: Path):
    """
    Parse a .txt file to extract location names and their corresponding latitude/longitude coordinates.

    Args:
        txt_file (Path): Path to the .txt file.

    Returns:
        list of tuples: List containing (location_name, latitude, longitude) tuples.
    """
    location_coords = []
    try:
        with txt_file.open('r', encoding='utf-8') as file:
            lines = [line.strip() for line in file if line.strip()]  # Remove empty lines
    except Exception as e:
        print(f"Error: Failed to read '{txt_file}': {e}", file=sys.stderr)
        return location_coords

    if len(lines) % 2 != 0:
        print(f"Warning: The file '{txt_file.name}' has an odd number of lines. The last line will be skipped.", file=sys.stderr)

    # Process lines in pairs
    for i in range(0, len(lines) - 1, 2):
        location_name = lines[i]
        coord_line = lines[i + 1]
        try:
            lat_str, lon_str = [part.strip() for part in coord_line.split(',')]
            latitude = float(lat_str)
            longitude = float(lon_str)
            if not (-90 <= latitude <= 90):
                raise ValueError(f"Latitude {latitude} out of range (-90 to 90).")
            if not (-180 <= longitude <= 180):
                raise ValueError(f"Longitude {longitude} out of range (-180 to 180).")
            location_coords.append((location_name, latitude, longitude))
        except ValueError as ve:
            print(f"Warning: Invalid coordinates in file '{txt_file.name}' at lines {i+1}-{i+2}: {ve}. Skipping this data point.", file=sys.stderr)
        except Exception as e:
            print(f"Warning: Failed to parse coordinates in file '{txt_file.name}' at lines {i+1}-{i+2}: {e}. Skipping this data point.", file=sys.stderr)

    return location_coords

def gather_all_locations(input_dir: Path):
    """
    Gather all location and coordinate pairs from all .txt files in the input directory.

    Args:
        input_dir (Path): Path to the input directory.

    Returns:
        list of tuples: Combined list of (location_name, latitude, longitude) from all files.
    """
    all_locations = []
    txt_files = list(input_dir.glob("*.txt"))
    if not txt_files:
        print(f"Warning: No .txt files found in directory '{input_dir}'.", file=sys.stderr)
        return all_locations

    for txt_file in txt_files:
        locations = parse_txt_file(txt_file)
        all_locations.extend(locations)
        print(f"Processed '{txt_file.name}': {len(locations)} valid locations found.")

    return all_locations

def generate_kml(locations, output_file: Path):
    """
    Generate a KML file with placemarks for each location.

    Args:
        locations (list of tuples): List containing (location_name, latitude, longitude) tuples.
        output_file (Path): Path to the output KML file.
    """
    kml_header = f"""<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>{KML_TITLE}</name>
    <Style id="customStyle">
      <IconStyle>
        <color>{MARKER_COLOR}</color>
        <scale>{MARKER_SIZE}</scale>
        <Icon>
          <href>{MARKER_ICON}</href>
        </Icon>
      </IconStyle>
      <LabelStyle>
        <scale>{MARKER_LABEL_SIZE / 14}</scale> <!-- KML LabelStyle scale ranges typically from 0 to 1 -->
      </LabelStyle>
    </Style>
"""

    kml_footer = """  </Document>
</kml>"""

    placemark_template = """    <Placemark>
      <name>{name}</name>
      <styleUrl>#customStyle</styleUrl>
      <Point>
        <coordinates>{lon},{lat},0</coordinates>
      </Point>
    </Placemark>
"""

    try:
        with output_file.open('w', encoding='utf-8') as kml:
            kml.write(kml_header)
            for loc in locations:
                name, lat, lon = loc
                placemark = placemark_template.format(name=name, lat=lat, lon=lon)
                kml.write(placemark)
            kml.write(kml_footer)
        print(f"\nSuccessfully wrote {len(locations)} placemarks to '{output_file}'.")
    except Exception as e:
        print(f"Error: Failed to write KML file '{output_file}': {e}", file=sys.stderr)
        sys.exit(1)

def main():
    """Main function to orchestrate the KML plotting."""
    args = parse_arguments()
    input_dir = Path(args.input_directory)

    validate_directory(input_dir)
    print(f"Gathering location data from '{input_dir}'...")

    all_locations = gather_all_locations(input_dir)
    if not all_locations:
        print("No valid location data found. Exiting.", file=sys.stderr)
        sys.exit(1)

    output_kml = Path("output-labeled.kml")
    generate_kml(all_locations, output_kml)

if __name__ == "__main__":
    main()
