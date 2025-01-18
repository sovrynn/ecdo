#!/usr/bin/env python3
"""
Batch Location KML Plotter with Link Descriptions and Story Blocks

This script processes all `.txt` files in a specified directory (location data),
pairs each data entry with a link from a matching file in another directory (link data),
and then generates a KML file plotting these locations with customizable marker styles,
titles, appended links, and (optionally) a story block in the description.

Usage:
    python plot_locations_kml.py path/to/location_directory path/to/link_directory path/to/story_directory

Each location `.txt` file should have data in pairs of lines:
    Location Name 1
    Latitude1, Longitude1
    Location Name 2
    Latitude2, Longitude2
    ...

The **matching** `.txt` file in the link directory should have exactly one link line
for every location entry in the corresponding location file.

Additionally, for each link, the script attempts to extract the part after the last
hashtag (#), e.g., "Luiseño" from "...#Luiseño". It then searches for a file named
"Luiseño.txt" in `story_directory` and appends its content as a "story block" in the
placemark description.
"""
import argparse
from pathlib import Path
import sys

# ============================
# ===== Parameters ===========
# ============================

KML_TITLE = "Flood Myths with Stories"
MARKER_ICON = "http://maps.google.com/mapfiles/kml/paddle/wht-blank.png"
# MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/phone.png"
# MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/schools.png"
MARKER_SIZE = 4
MARKER_LABEL_SIZE = 14
MARKER_COLOR = "ff0000ff"  # Opaque red in aabbggrr format

# ============================
# ===== End Parameters =======
# ============================

def parse_arguments():
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            "Process .txt files of location data in one directory, pair each "
            "location with a link from a matching file in another directory, "
            "and plot them on a KML file with optional story blocks."
        )
    )
    parser.add_argument(
        "location_directory",
        type=str,
        help="Path to the directory containing .txt files with (name, lat/long) data."
    )
    parser.add_argument(
        "link_directory",
        type=str,
        help="Path to the directory containing .txt files with link lines."
    )
    parser.add_argument(
        "story_directory",
        type=str,
        help="Path to the directory containing .txt files with story text."
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

def parse_location_file(txt_file: Path):
    """
    Parse a .txt file to extract location names and their latitude/longitude.
    Returns a list of (name, lat, lon).
    """
    data = []
    try:
        with txt_file.open('r', encoding='utf-8') as f:
            lines = [line.strip() for line in f if line.strip()]
    except Exception as e:
        print(f"Error reading '{txt_file}': {e}", file=sys.stderr)
        return data

    if len(lines) % 2 != 0:
        print(f"Warning: '{txt_file.name}' has an odd number of lines. Last line will be ignored.")

    # Each entry: two lines => (LocationName, "lat, long")
    for i in range(0, len(lines) - 1, 2):
        location_name = lines[i]
        coord_line = lines[i + 1]
        try:
            lat_str, lon_str = coord_line.split(',')
            lat, lon = float(lat_str.strip()), float(lon_str.strip())
            if not (-90 <= lat <= 90):
                raise ValueError(f"Latitude out of range (-90 to 90): {lat}")
            if not (-180 <= lon <= 180):
                raise ValueError(f"Longitude out of range (-180 to 180): {lon}")
            data.append((location_name, lat, lon))
        except ValueError as ve:
            print(
                f"Warning: Invalid coordinates in '{txt_file.name}' near lines {i+1}-{i+2}: {ve}. Skipping.",
                file=sys.stderr
            )
    return data

def parse_link_file(link_file: Path):
    """
    Parse a .txt file of links (one link per line).
    Returns a list of link strings.
    """
    links = []
    try:
        with link_file.open('r', encoding='utf-8') as f:
            # Remove empty lines, strip
            links = [line.strip() for line in f if line.strip()]
    except Exception as e:
        print(f"Error reading '{link_file}': {e}", file=sys.stderr)
    return links

def parse_file_pair(loc_file: Path, link_file: Path):
    """
    Parse location data from loc_file and link data from link_file.
    Pair them so that each location has one corresponding link.
    Returns a list of (location_name, lat, lon, link).
    """
    location_data = parse_location_file(loc_file)
    link_data = parse_link_file(link_file)

    paired_data = []
    for i, (name, lat, lon) in enumerate(location_data):
        link = link_data[i] if i < len(link_data) else ""  # Fallback to empty if mismatch
        paired_data.append((name, lat, lon, link))
    return paired_data

def gather_all_data(location_dir: Path, link_dir: Path):
    """
    For each .txt in location_dir, find a matching .txt in link_dir,
    pair their data, and return the combined list.
    """
    all_data = []
    loc_files = sorted(location_dir.glob("*.txt"))

    if not loc_files:
        print(f"No .txt files found in '{location_dir}'.", file=sys.stderr)
        return all_data

    for loc_file in loc_files:
        link_file = link_dir / loc_file.name  # Must have the same filename
        if not link_file.exists():
            print(f"Warning: No matching link file for '{loc_file.name}' in '{link_dir}'. Skipping.")
            continue

        paired = parse_file_pair(loc_file, link_file)
        all_data.extend(paired)
        print(f"Processed '{loc_file.name}': {len(paired)} paired entries.")

    return all_data

def read_story(story_dir: Path, link: str) -> str:
    """
    Extracts the substring after the last '#' in `link` (if present),
    looks for a file named <that_substring>.txt in `story_dir`,
    and returns its content as a string. If no file is found or no '#' is present,
    returns an empty string.
    """
    if '#' not in link:
        return ""  # No '#' => no story to load

    # Extract everything after the last '#'
    story_id = link.rsplit('#', 1)[-1].strip()
    if not story_id:
        return ""  # If it's empty (e.g., trailing '#'), skip

    story_file = story_dir / f"{story_id}.txt"
    if not story_file.exists():
        # Story file not found => return empty or handle differently
        return ""

    try:
        return story_file.read_text(encoding='utf-8').strip()
    except Exception as e:
        print(f"Warning: Could not read story file '{story_file}': {e}", file=sys.stderr)
        return ""

def generate_kml(all_data, output_file: Path, story_dir: Path):
    """
    Generate a KML file with placemarks for each (name, lat, lon, link),
    and also include a story_block from story_dir if available.
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
        <!-- Scale factor is typically between 0 and 1 in KML -->
        <scale>{MARKER_LABEL_SIZE / 14}</scale>
      </LabelStyle>
    </Style>
"""

    kml_footer = """  </Document>
</kml>"""

    # Added {story_block} to the CDATA
    placemark_template = """    <Placemark>
      <description>
        <![CDATA[
          <p><strong>Flood Myth: {name}</strong></p>
          {story_block}
          {link_block}
        ]]>
      </description>
      <styleUrl>#customStyle</styleUrl>
      <Point>
        <coordinates>{lon},{lat},0</coordinates>
      </Point>
    </Placemark>
"""

    try:
        with output_file.open('w', encoding='utf-8') as kml:
            kml.write(kml_header)

            for (name, lat, lon, link) in all_data:
                # If there's a link, create clickable markup
                link_block = f'<p><a href="{link}" target="_blank">{link}</a></p>' if link else ''

                # Load story block from story_dir based on link
                story_content = read_story(story_dir, link)
                if story_content == "":
                    print(link)
                story_block = f"<p>{story_content}</p>" if story_content else ""

                placemark = placemark_template.format(
                    name=name,
                    lat=lat,
                    lon=lon,
                    link_block=link_block,
                    story_block=story_block
                )
                kml.write(placemark)

            kml.write(kml_footer)
        print(f"\nSuccessfully wrote {len(all_data)} placemarks to '{output_file}'.")
    except Exception as e:
        print(f"Error writing KML file '{output_file}': {e}", file=sys.stderr)
        sys.exit(1)

def main():
    args = parse_arguments()
    location_dir = Path(args.location_directory)
    link_dir = Path(args.link_directory)
    story_dir = Path(args.story_directory)

    validate_directory(location_dir)
    validate_directory(link_dir)
    validate_directory(story_dir)

    print(f"Gathering data from '{location_dir}' with matching links from '{link_dir}'...")
    all_data = gather_all_data(location_dir, link_dir)
    if not all_data:
        print("No valid data found. Exiting.", file=sys.stderr)
        sys.exit(1)

    output_kml = Path("flood-myths-stories.kml")
    generate_kml(all_data, output_kml, story_dir)

if __name__ == "__main__":
    main()
