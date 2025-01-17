#!/usr/bin/env python3

import csv
import sys
import os

# === Configuration Parameters ===

# Marker icon URL (can be a URL or a local path to an icon image)
MARKER_ICON = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png'
MARKER_ICON = 'http://maps.google.com/mapfiles/kml/shapes/capital_small_highlight.png'
MARKER_ICON = "http://maps.google.com/mapfiles/kml/pal2/icon0.png"
MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/capital_big.png"

# Marker scale (size). Typical values range from 0.1 to 1.5
MARKER_SCALE = 2.5

# Marker color in aabbggrr format (alpha, blue, green, red)
# Example: 'ff0000ff' is opaque red
MARKER_COLOR = 'ff00ffff'

# KML output filename
KML_OUTPUT_FILENAME = 'fossil-collections-100.kml'

# KML Document name
KML_NAME = 'Fossil Collections'

# =================================

def escape_xml(text):
    """
    Escapes special XML characters in a string.
    """
    import xml.sax.saxutils as saxutils
    return saxutils.escape(text)

def create_kml_header(kml_name):
    """
    Creates the KML header with necessary namespaces and document name.
    """
    # removed
    #         <color>{MARKER_COLOR}</color>
    header = f'''<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>{escape_xml(kml_name)}</name>
    
    <Style id="customMarker">
      <IconStyle>
        <color>{MARKER_COLOR}</color>
        <scale>{MARKER_SCALE}</scale>
        <Icon>
          <href>{MARKER_ICON}</href>
        </Icon>
      </IconStyle>
    </Style>
'''
    return header

def create_kml_footer():
    """
    Creates the closing tags for the KML file.
    """
    return '''  </Document>
</kml>
'''

def create_kml_placemark(name, description, longitude, latitude):
    """
    Creates a KML Placemark string.
    """
    # removed
    # <name>{escape_xml(name)}</name>
    placemark = f'''
    <Placemark>
      <description>Source: https://paleobiodb.org/</description>
      <styleUrl>#customMarker</styleUrl>
      <Point>
        <coordinates>{longitude},{latitude},0</coordinates>
      </Point>
    </Placemark>
'''
    return placemark

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_csv_filename>")
        sys.exit(1)
    
    csv_filename = sys.argv[1]
    
    if not os.path.isfile(csv_filename):
        print(f"Error: File '{csv_filename}' does not exist.")
        sys.exit(1)

    try:
        with open(csv_filename, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            # Check if 'lng' and 'lat' columns exist
            if 'lng' not in reader.fieldnames or 'lat' not in reader.fieldnames:
                print("Error: CSV file must contain 'lng' and 'lat' columns.")
                sys.exit(1)
            
            # Start writing KML
            with open(KML_OUTPUT_FILENAME, 'w', encoding='utf-8') as kmlfile:
                kmlfile.write(create_kml_header(KML_NAME))
                
                for row in reader:
                    try:
                        longitude = float(row['lng'])
                        latitude = float(row['lat'])
                    except ValueError:
                        print(f"Warning: Invalid coordinates in row: {row}")
                        continue
                    
                    # Use other columns as name and description
                    # For simplicity, we'll concatenate all other fields for description
                    name = row.get('name', 'No Name')  # Assuming there's a 'name' column
                    description_parts = [f"{key}: {value}" for key, value in row.items() if key not in ['lng', 'lat', 'name']]
                    description = "\n".join(description_parts)
                    
                    placemark = create_kml_placemark(name, description, longitude, latitude)
                    kmlfile.write(placemark)
                
                kmlfile.write(create_kml_footer())
        
        print(f"KML file '{KML_OUTPUT_FILENAME}' has been created successfully.")
    
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
