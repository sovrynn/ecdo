#!/usr/bin/env python3

import sys
import csv

# ---------------------------------------------------------------------
# Parameterization Section

# KML output filename
KML_OUTPUT_FILENAME = "coal-mine-combined.kml"

# --- Parameters for the first CSV file ---
CATEGORY_NAME_1 = "Coal Mines"
MARKER_ICON_1 = "http://maps.google.com/mapfiles/kml/shapes/square.png"
MARKER_SCALE_1 = 1.2
MARKER_COLOR_1 = "ff000000"  # AABBGGRR format for KML (hex)
# Explanation: "ff0000ff" is a fully opaque color in ARGB notation (alpha=ff, blue=ff, green=00, red=00).

# --- Parameters for the second CSV file ---
CATEGORY_NAME_2 = "Coal Mines (Closed)"
MARKER_ICON_2 = "http://maps.google.com/mapfiles/kml/shapes/square.png"
MARKER_SCALE_2 = 1.2
MARKER_COLOR_2 = "ff000000"  # AABBGGRR format for KML (hex)
# Explanation: "ffff0000" is a fully opaque color in ARGB notation (alpha=ff, blue=00, green=00, red=ff).

# ---------------------------------------------------------------------

def create_placemark(name, description, lat, lon, icon, scale, color):
    """
    Returns a KML Placemark string with the specified parameters.
    Note on color format in KML: <color>AABBGGRR</color>
    """
        # <name>{name}</name>
    placemark = f"""
      <Placemark>
        <Style>
          <IconStyle>
            <color>{color}</color>
            <scale>{scale}</scale>
            <Icon>
              <href>{icon}</href>
            </Icon>
          </IconStyle>
        </Style>
        <description><![CDATA[{description}]]></description>
        <Point>
          <coordinates>{lon},{lat},0</coordinates>
        </Point>
      </Placemark>
    """
    return placemark

def process_csv(filename, category_name, icon, scale, color, file_id=1):
    """
    Process the CSV file, build the KML subcategory string, and
    print out rows with missing lat/lon.
    
    - file_id=1 -> use first file logic (description includes GEM Wiki URLs).
    - file_id=2 -> use second file logic (description uses a fixed URL).
    """
    placemarks = []
    
    with open(filename, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)

        count = 0
        
        for row_num, row in enumerate(reader, start=2):
            count += 1
            lat_str = row.get("Latitude", "").strip()
            lon_str = row.get("Longitude", "").strip()
            
            if not lat_str or not lon_str:
                print(f"Row {row_num} in {filename} has empty Latitude or Longitude: {row}")
                continue
            
            mine_name = row.get("Mine Name", "").strip()
            
            if file_id == 1:
                # For File 1, description: <p><b>Coal Mine: A</b></p><p>Source: B</p>
                gem_wiki_url = row.get("GEM Wiki URLs", "").strip()
                description = (
                    f"<p><b>Coal Mine: {mine_name}</b></p>"
                    f"<p>Source: {gem_wiki_url}</p>"
                )
            else:
                # For File 2, description: <p><b>Coal Mine: A</b></p><p>Source: https://www.gem.wiki/</p>
                description = (
                    f"<p><b>Coal Mine: {mine_name}</b></p>"
                    f"<p>Source: https://www.gem.wiki/</p>"
                )
            
            placemark = create_placemark(
                name=mine_name,
                description=description,
                lat=lat_str,
                lon=lon_str,
                icon=icon,
                scale=scale,
                color=color
            )
            placemarks.append(placemark)
        
        print(f'Count: {count}')

    # Build the folder string for this set of placemarks
    folder = f"""
    <Folder>
      <name>{category_name}</name>
      {''.join(placemarks)}
    </Folder>
    """
    return folder

def main():
    if len(sys.argv) < 3:
        print("Usage: python create_kml.py file1.csv file2.csv")
        sys.exit(1)
    
    file1 = sys.argv[1]
    file2 = sys.argv[2]

    # Process each CSV and get the KML folder content
    folder1 = process_csv(
        filename=file1,
        category_name=CATEGORY_NAME_1,
        icon=MARKER_ICON_1,
        scale=MARKER_SCALE_1,
        color=MARKER_COLOR_1,
        file_id=1
    )
    
    folder2 = process_csv(
        filename=file2,
        category_name=CATEGORY_NAME_2,
        icon=MARKER_ICON_2,
        scale=MARKER_SCALE_2,
        color=MARKER_COLOR_2,
        file_id=2
    )
    
    # Wrap everything in the KML container
    kml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
{folder1}
{folder2}
</Document>
</kml>
"""
    
    # Write to output file
    with open(KML_OUTPUT_FILENAME, 'w', encoding='utf-8') as output_file:
        output_file.write(kml_content)
    
    print(f"KML file created: {KML_OUTPUT_FILENAME}")


if __name__ == "__main__":
    main()
