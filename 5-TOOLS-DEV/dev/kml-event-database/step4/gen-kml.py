#!/usr/bin/env python3
import sys
import csv
import os

# ------------------------------
# PARAMETER DEFINITIONS
# ------------------------------

# Editable at the top of the script
KML_DOCUMENT_NAME = "ECDO Event Database"       # <-- Set your desired KML Document name here
OUTPUT_KML_FILENAME = "event-database.kml"    # <-- Set your desired output KML filename here

MARKER_SIZE = "3"

# Sample ARGB color codes for 19 categories (KML color format: AABBGGRR)
CATEGORY_COLORS = [
    "ff0000ff",  # Category 0: red
    "ff008000",  # Category 1: green
    "ffff0000",  # Category 2: blue
    "ff00ffff",  # Category 3: yellow
    "ffff00ff",  # Category 4: magenta
    "ffffff00",  # Category 5: cyan
    "ff800000",  # Category 6: maroon
    "ff808000",  # Category 7: olive
    "ff008080",  # Category 8: teal
    "ff800080",  # Category 9: purple
    "ffff8080",  # Category 10: light blue
    "ffffff80",  # Category 11: light cyan
    "ffff80ff",  # Category 12: light magenta
    "ff80ffff",  # Category 13: light yellow
    "ff808080",  # Category 14: gray
    "ffa52a2a",  # Category 15: brown
    "ffff4500",  # Category 16: orange red
    "ff00ff7f",  # Category 17: spring green
    "ffd2691e",  # Category 18: chocolate
]

# Sample Marker Icon URLs for 19 categories
# Each URL corresponds to a specific category as follows:
# 0: Climate Disruption
# 1: Isostacy
# 2: Sealevel Change
# 3: Oceanic Inundation
# 4: Flood Evidence
# 5: Tsunami Layer
# 6: Earthquake
# 7: Volcanic Layer
# 8: Bolides / Comet
# 9: Destruction Layer
# 10: Extinction Event
# 11: Abandoned Settlements
# 12: Astronomical Disruption
# 13: Solar Event
# 14: Excursion / Reversal
# 15: Aurora
# 16: Plague / Pandemic
# 17: Burning
# 18: Other
CATEGORY_ICONS = [
    "http://maps.google.com/mapfiles/kml/shapes/thunderstorm.png",          # 0: Climate Disruption
    "http://maps.google.com/mapfiles/kml/shapes/mountains.png",          # 1: Isostacy
    "http://maps.google.com/mapfiles/kml/shapes/water.png",          # 2: Sealevel Change
    "http://maps.google.com/mapfiles/kml/shapes/water.png",          # 3: Oceanic Inundation
    "http://maps.google.com/mapfiles/kml/shapes/water.png",       # 4: Flood Evidence
    "http://maps.google.com/mapfiles/kml/shapes/water.png",          # 5: Tsunami Layer
    "http://maps.google.com/mapfiles/kml/shapes/target.png",       # 6: Earthquake
    "http://maps.google.com/mapfiles/kml/shapes/volcano.png",        # 7: Volcanic Layer
    "http://maps.google.com/mapfiles/kml/shapes/star.png",         # 8: Bolides / Comet
    "http://maps.google.com/mapfiles/kml/shapes/caution.png",       # 9: Destruction Layer
    "http://maps.google.com/mapfiles/kml/shapes/caution.png",    # 10: Extinction Event
    "http://maps.google.com/mapfiles/kml/shapes/caution.png",     # 11: Abandoned Settlements
    "http://maps.google.com/mapfiles/kml/shapes/star.png", # 12: Astronomical Disruption
    "http://maps.google.com/mapfiles/kml/shapes/sunny.png",  # 13: Solar Event
    "http://maps.google.com/mapfiles/kml/shapes/star.png",         # 14: Excursion / Reversal
    "http://maps.google.com/mapfiles/kml/shapes/star.png",        # 15: Aurora
    "http://maps.google.com/mapfiles/kml/shapes/lodging.png",       # 16: Plague / Pandemic
    "http://maps.google.com/mapfiles/kml/shapes/firedept.png",  # 17: Burning
    "http://maps.google.com/mapfiles/kml/shapes/info-i.png",     # 18: Other
]

START_COLUMN_NAME = "Climate Disruption"
END_COLUMN_NAME = "Other"

# ------------------------------
# HELPER FUNCTIONS
# ------------------------------

def xml_escape(text):
    """
    Escapes special XML characters in a string (e.g. &, <, >, ").
    """
    if text is None:
        return ""
    replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text

def main():
    if len(sys.argv) < 2:
        print("Usage: python script.py <csv_filename>")
        sys.exit(1)

    csv_filename = sys.argv[1]

    if not os.path.isfile(csv_filename):
        print(f"Error: CSV file '{csv_filename}' not found.")
        sys.exit(1)

    # Read CSV
    with open(csv_filename, "r", encoding="utf-8-sig") as f:
        reader = csv.reader(f)
        headers = next(reader, None)
        rows = list(reader)

    if not headers:
        print("Error: CSV file is empty or missing a header row.")
        sys.exit(1)

    # Locate the columns for "Climate Disruption" to "Other"
    try:
        start_index = headers.index(START_COLUMN_NAME)
        end_index = headers.index(END_COLUMN_NAME)
    except ValueError as e:
        print(f"Error: Could not find start or end column: {e}")
        sys.exit(1)

    if start_index > end_index:
        start_index, end_index = end_index, start_index

    # Find Lat/Lon indices
    try:
        lat_index = headers.index("Lat")
        lon_index = headers.index("Lon")
    except ValueError:
        print("Error: 'Lat' or 'Lon' column not found.")
        sys.exit(1)

    # First column = name, second column = URL (adjust if needed)
    name_index = 0
    url_index = 1

    # Validate CATEGORY_ICONS length
    num_categories = (end_index - start_index) + 1
    if len(CATEGORY_ICONS) < num_categories:
        print(f"Error: CATEGORY_ICONS list has {len(CATEGORY_ICONS)} icons, but there are {num_categories} categories.")
        sys.exit(1)

    # Build KML
    kml_lines = []
    kml_lines.append('<?xml version="1.0" encoding="UTF-8"?>')
    kml_lines.append('<kml xmlns="http://www.opengis.net/kml/2.2">')
    kml_lines.append('<Document>')
    kml_lines.append(f'  <name>{xml_escape(KML_DOCUMENT_NAME)}</name>')  # Added Document name

    # Create <Style> blocks for each category
    for i in range(num_categories):
        style_id = f"catStyle{i}"
        color = CATEGORY_COLORS[i] if i < len(CATEGORY_COLORS) else "ffffffff"
        icon_href = CATEGORY_ICONS[i] if i < len(CATEGORY_ICONS) else "http://maps.google.com/mapfiles/kml/paddle/wht-circle.png"
        kml_lines.append(f'  <Style id="{style_id}">')
        kml_lines.append('    <IconStyle>')
        kml_lines.append(f'      <color>{color}</color>')
        kml_lines.append(f'      <scale>{MARKER_SIZE}</scale>')
        kml_lines.append('      <Icon>')
        kml_lines.append(f'        <href>{xml_escape(icon_href)}</href>')
        kml_lines.append('      </Icon>')
        kml_lines.append('    </IconStyle>')
        kml_lines.append('  </Style>')

    # For each category column
    column_names = headers[start_index : end_index + 1]
    for i, column_name in enumerate(column_names):
        style_id = f"catStyle{i}"
        kml_lines.append('  <Folder>')
        kml_lines.append(f'    <name>{xml_escape(column_name)}</name>')

        # For each row: if this category column == "TRUE", create a Placemark
        for row in rows:
            if len(row) <= max(lon_index, lat_index):
                continue  # row not long enough

            # value in this category
            value = (row[start_index + i] or "").strip().upper()
            if value == "TRUE":
                placemark_name = (row[name_index] or "").strip()
                url_value = (row[url_index] or "").strip()
                lat_val = (row[lat_index] or "").strip()
                lon_val = (row[lon_index] or "").strip()

                # Skip if lat/lon missing
                if not lat_val or not lon_val:
                    continue

                # Escape the data
                placemark_name_esc = xml_escape(placemark_name)
                url_esc = xml_escape(url_value)
                desc_str = ""
                if url_esc:
                    # Make link clickable with basic HTML
                    desc_str = (
                        f'      <description>'
                        f'<![CDATA[<a href="{url_esc}" target="_blank">{url_esc}</a>]]>'
                        f'</description>'
                    )

                kml_lines.append('    <Placemark>')
                kml_lines.append(f'      <name>{placemark_name_esc}</name>')
                if desc_str:
                    kml_lines.append(desc_str)
                kml_lines.append(f'      <styleUrl>#{style_id}</styleUrl>')
                kml_lines.append('      <Point>')
                kml_lines.append(f'        <coordinates>{lon_val},{lat_val},0</coordinates>')
                kml_lines.append('      </Point>')
                kml_lines.append('    </Placemark>')

        kml_lines.append('  </Folder>')

    kml_lines.append('</Document>')
    kml_lines.append('</kml>')

    # Write the KML file
    with open(OUTPUT_KML_FILENAME, "w", encoding="utf-8") as f:
        f.write("\n".join(kml_lines))

    print(f"Successfully generated '{OUTPUT_KML_FILENAME}'. Escaped any special XML characters.")

if __name__ == "__main__":
    main()
