#!/usr/bin/env python3
"""
Usage:
    python polewander2kml.py <input_json_file>

This script reads a JSON file of the format:

{
  "name": "Rotational Axis Wander (10-year running average), arcseconds",
  "description": "Source: IERS ...",
  "global": true,
  "lat": 38.55,
  "lon": -78.04,
  "values": [
    {
      "date": "18560101",
      "x": 0.077628,
      "y": 0.055903
    },
    {
      "date": "18570205",
      "x": 0.078291,
      "y": 0.062216
    },
    ...
  ]
}

- x,y are in arcseconds, referencing an axis system where
  x is from negative (90 W) to positive (90 E),
  y is from negative (Longitude 0) to positive (Longitude 180 E).

We interpret these offsets from the true north pole (lat=90, lon=0).

Steps:
1. Multiply x,y by a factor (DEFAULT_SCALE_FACTOR).
2. Convert arcseconds -> degrees (divide by 3600).
3. The final lat = 90 + x_deg, lon = 0 + y_deg.
4. Generate a KML file with one placemark per point.
5. Label each placemark with the YEAR from the date (YYYYMMDD).
"""

import sys
import json
import os

# ---------------------
# PARAMETER SECTION
# ---------------------

# 1) Factor to multiply (x, y) by BEFORE converting arcseconds -> degrees
DEFAULT_SCALE_FACTOR = 100_000

# 2) Output KML filename
OUTPUT_KML_FILENAME = "output.kml"

# 3) KML Document name
KML_DOCUMENT_NAME = "Rotational Axis Wander"

# 4) Marker icon URL
MARKER_ICON_URL = "http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png"

# 5) Marker size (scale)
MARKER_SIZE = 1.2

# 6) Marker color in KML AABBGGRR hex (ff0000ff = opaque red)
MARKER_COLOR = "ff0000ff"

def main():
    if len(sys.argv) < 2:
        print("Usage: python polewander2kml.py <input_json_file>")
        sys.exit(1)

    input_json = sys.argv[1]

    if not os.path.isfile(input_json):
        print(f"Error: file '{input_json}' not found.")
        sys.exit(1)

    # Load JSON data
    with open(input_json, "r", encoding="utf-8") as f:
        data = json.load(f)

    # We expect a 'values' key
    values = data.get("values", [])
    if not values:
        print("No 'values' array found in the JSON.")
        sys.exit(0)

    # -- Build KML boilerplate --
    kml_header = f'''<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>{KML_DOCUMENT_NAME}</name>
  <Style id="polePointStyle">
    <IconStyle>
      <color>{MARKER_COLOR}</color>
      <scale>{MARKER_SIZE}</scale>
      <Icon>
        <href>{MARKER_ICON_URL}</href>
      </Icon>
    </IconStyle>
  </Style>
'''

    kml_placemarks = []

    for item in values:
        date_str = item.get("date", "")
        x_arcsec = item.get("x", 0.0)
        y_arcsec = item.get("y", 0.0)

        # Extract year from date string (YYYYMMDD)
        year = date_str[:4] if len(date_str) >= 4 else date_str

        # Multiply and convert from arcseconds to degrees
        x_deg = (x_arcsec * DEFAULT_SCALE_FACTOR) / 3600.0
        y_deg = (y_arcsec * DEFAULT_SCALE_FACTOR) / 3600.0

        # We interpret these as offsets from the north pole: (lat=90, lon=0)
        lat = 90.0 + x_deg
        lon = 0.0 + y_deg

        placemark = f'''
  <Placemark>
    <name>{year}</name>
    <styleUrl>#polePointStyle</styleUrl>
    <Point>
      <coordinates>{lon},{lat},0</coordinates>
    </Point>
  </Placemark>
'''
        kml_placemarks.append(placemark)

    kml_footer = '''
</Document>
</kml>
'''

    # Combine final KML
    full_kml = kml_header + "".join(kml_placemarks) + kml_footer

    # Write out to the specified KML file
    with open(OUTPUT_KML_FILENAME, "w", encoding="utf-8") as out_f:
        out_f.write(full_kml)

    print(f"Successfully created KML: {OUTPUT_KML_FILENAME}")

if __name__ == "__main__":
    main()
