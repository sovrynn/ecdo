#!/usr/bin/env python3

import os
import sys

# ------------------------- USER PARAMETERS -------------------------
KML_DOC_NAME = "Flood Myth Safe Spots"
MARKER_ICON = "https://maps.google.com/mapfiles/kml/shapes/ranger_station.png"
MARKER_ICON = "http://maps.google.com/mapfiles/kml/pal2/icon10.png"
MARKER_SCALE = 3
# KML colors are in the format AABBGGRR (hex). For example:
#   ff0000ff = fully opaque, color = 0000ff = red
#   ff00ff00 = fully opaque, color = 00ff00 = green
#   ffff0000 = fully opaque, color = ff0000 = blue
MARKER_COLOR = "ff0000ff"  # fully opaque red
OUTPUT_KML_FILE = "flood-myth-safe-spots2.kml"
# ------------------------------------------------------------------

def main():
    """
    Usage: python script.py <dirX> <dirY> <dirZ> <dirE>
    
    Where:
      dirX: Directory containing .txt files (each line = data point).
      dirY: Directory containing .txt files of matching name to dirX,
            each line in X corresponds to 2 lines in Y (description, lat/lon).
      dirZ: Directory containing .txt files; the filename is parsed from
            the last '#' in the line from X (plus .txt).
      dirE: Another directory with .txt files (same naming pattern as Z).
    """

    if len(sys.argv) < 5:
        print("ERROR: Not enough arguments provided.")
        print("Usage: python script.py <dirX> <dirY> <dirZ> <dirE>")
        sys.exit(1)
    
    dirX = sys.argv[1]
    dirY = sys.argv[2]
    dirZ = sys.argv[3]
    dirE = sys.argv[4]

    # Start building KML output
    kml_header = f"""<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>{KML_DOC_NAME}</name>
    <Style id="markerStyle">
      <IconStyle>
        <color>{MARKER_COLOR}</color>
        <scale>{MARKER_SCALE}</scale>
        <Icon>
          <href>{MARKER_ICON}</href>
        </Icon>
      </IconStyle>
    </Style>
"""

    # Collect all <Placemark> entries
    placemarks = []
    counter = 0

    # Iterate over each .txt file in X
    for file_name in os.listdir(dirX):
        if not file_name.endswith(".txt"):
            continue

        x_file_path = os.path.join(dirX, file_name)
        y_file_path = os.path.join(dirY, file_name)
        
        # If there's no matching Y file, skip
        if not os.path.isfile(y_file_path):
            print(f"[WARNING] No corresponding Y file for {x_file_path}, skipping.")
            continue
        
        # Read lines from X (skip empty lines)
        with open(x_file_path, "r", encoding="utf-8") as fx:
            x_lines = [line.strip() for line in fx if line.strip() != ""]
        
        # Read lines from Y
        with open(y_file_path, "r", encoding="utf-8") as fy:
            y_lines = [line.strip() for line in fy]
        
        # We expect pairs of lines in Y for each single line in X
        # So the total lines in Y should be 2 * len(x_lines) ideally.
        # If mismatch, we'll handle gracefully (skip or break).
        if len(y_lines) < 2 * len(x_lines):
            print(f"[WARNING] Y file {y_file_path} does not have enough lines, skipping some data.")
        
        for i, x_line in enumerate(x_lines):
            # The corresponding lines in Y:
            y_index_1 = 2 * i
            y_index_2 = 2 * i + 1
            if y_index_2 >= len(y_lines):
                # Not enough lines in Y, skip
                break
            
            y_desc = y_lines[y_index_1]
            lat_lon_str = y_lines[y_index_2]  # e.g. "12.3456, -98.7654"
            
            # Extract the filename from X's line after the last '#'
            # e.g. if x_line = "some text #myfile", then new_file_name = "myfile.txt"
            parts = x_line.rsplit('#', 1)
            if len(parts) < 2:
                # No '#' found, skip
                continue
            z_e_basename = parts[-1].strip()
            if not z_e_basename:
                # If empty after '#', skip
                continue
            
            z_e_filename = z_e_basename + ".txt"
            z_file_path = os.path.join(dirZ, z_e_filename)
            e_file_path = os.path.join(dirE, z_e_filename)
            
            # If the Z file does not exist or E file does not exist, we can skip or handle differently
            if not os.path.isfile(z_file_path):
                # Possibly skip if file not found
                continue
            if not os.path.isfile(e_file_path):
                # Possibly skip if file not found
                continue
            
            # Read content from Z
            with open(z_file_path, "r", encoding="utf-8") as fz:
                z_content = fz.read().strip()
            # If Z content is just '0', skip
            if z_content == "" or z_content == "0":
                continue
            print(z_content)
            counter += 1
            
            # Read content from E
            with open(e_file_path, "r", encoding="utf-8") as fe:
                e_content = fe.read().strip()
            
            # Build the description from (Y first line, Z content, E content)
            # You can adjust the format as needed
            placemark_description = f"""
          <div style="font-size:24px; font-family:Arial, sans-serif;">
              <p><strong>{y_desc}</strong></p>
              <p>{z_content}</p>
              <p><b>Original story:</b></p>
              <p>{e_content}</p>
          </div>
"""
            # If lat/lon is something like "12.34, -56.78", KML expects 
            # <coordinates>lon,lat</coordinates> 
            # so we might need to parse them if they're reversed
            # We'll assume lat_lon_str is already lat,lon. If your data is lon,lat, switch accordingly.
            lat_lon_parts = lat_lon_str.split(',')
            if len(lat_lon_parts) == 2:
                lat_str = lat_lon_parts[0].strip()
                lon_str = lat_lon_parts[1].strip()
            else:
                # If it doesn't parse, skip
                continue
            
            # Build placemark
            placemark = f"""    <Placemark>
      <name></name>
      <description><![CDATA[{placemark_description}]]></description>
      <styleUrl>#markerStyle</styleUrl>
      <Point>
        <coordinates>{lon_str},{lat_str}</coordinates>
      </Point>
    </Placemark>
"""
            placemarks.append(placemark)

    # Close out KML
    kml_footer = """  </Document>
</kml>
"""

    # Write to output file
    with open(OUTPUT_KML_FILE, "w", encoding="utf-8") as out_kml:
        out_kml.write(kml_header)
        for pm in placemarks:
            out_kml.write(pm)
        out_kml.write(kml_footer)

    print(f"KML output written to {OUTPUT_KML_FILE}")
    print(f'Total markers: {counter}')

if __name__ == "__main__":
    main()
