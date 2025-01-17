#!/usr/bin/env python3

import sys
import os
import glob

# -----------------
# Parameterization
# -----------------
# Thresholds
THRESHOLD_SKIP = 0.01
THRESHOLD_WHITE = 0.1
THRESHOLD_GRAY = 1.0

# KML output file
KML_NAME = "Karst Aquifers"
OUTPUT_KML = "output.kml"

# Marker appearance
MARKER_ICON = "http://maps.google.com/mapfiles/kml/paddle/wht-blank.png"
MARKER_SCALE = 2  # icon scale in KML
LABEL_SCALE = 1

# Colors in KML use AABBGGRR format (alpha, blue, green, red)
# Note: 'ff' alpha channel is fully opaque
COLOR_WHITE = "ffffffff"  # white
# COLOR_GRAY  = "ffc0c0c0"  # gray
COLOR_GRAY = "ff00ff00" # green
COLOR_BLACK = "ff000000"  # black

# -----------------
# Script
# -----------------
def main():
    if len(sys.argv) < 2:
        print("Usage: python script.py <relative_directory>")
        sys.exit(1)
    
    input_dir = sys.argv[1]
    
    # Resolve relative directory to absolute path
    input_path = os.path.abspath(input_dir)
    if not os.path.isdir(input_path):
        print(f"Error: {input_path} is not a valid directory.")
        sys.exit(1)
    
    # Counters
    white_count = 0
    gray_count = 0
    black_count = 0
    
    # Prepare the KML header
    kml_lines = []
    kml_lines.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>")
    kml_lines.append("<kml xmlns=\"http://www.opengis.net/kml/2.2\">")
    kml_lines.append(f"  <Document>")
    kml_lines.append(f"    <name>{KML_NAME}</name>")
    
    # Define the styles for white, gray, black
    kml_lines.append(f"    <Style id=\"whiteMarker\">")
    kml_lines.append("      <IconStyle>")
    kml_lines.append(f"        <color>{COLOR_WHITE}</color>")
    kml_lines.append(f"        <scale>{MARKER_SCALE}</scale>")
    kml_lines.append(f"        <Icon><href>{MARKER_ICON}</href></Icon>")
    kml_lines.append("      </IconStyle>")
    kml_lines.append("      <LabelStyle>")
    kml_lines.append(f"        <scale>{LABEL_SCALE}</scale>")
    kml_lines.append("      </LabelStyle>")
    kml_lines.append("    </Style>")
    
    kml_lines.append(f"    <Style id=\"grayMarker\">")
    kml_lines.append("      <IconStyle>")
    kml_lines.append(f"        <color>{COLOR_GRAY}</color>")
    kml_lines.append(f"        <scale>{MARKER_SCALE}</scale>")
    kml_lines.append(f"        <Icon><href>{MARKER_ICON}</href></Icon>")
    kml_lines.append("      </IconStyle>")
    kml_lines.append("      <LabelStyle>")
    kml_lines.append(f"        <scale>{LABEL_SCALE}</scale>")
    kml_lines.append("      </LabelStyle>")
    kml_lines.append("    </Style>")
    
    kml_lines.append(f"    <Style id=\"blackMarker\">")
    kml_lines.append("      <IconStyle>")
    kml_lines.append(f"        <color>{COLOR_BLACK}</color>")
    kml_lines.append(f"        <scale>{MARKER_SCALE}</scale>")
    kml_lines.append(f"        <Icon><href>{MARKER_ICON}</href></Icon>")
    kml_lines.append("      </IconStyle>")
    kml_lines.append("      <LabelStyle>")
    kml_lines.append(f"        <scale>{LABEL_SCALE}</scale>")
    kml_lines.append("      </LabelStyle>")
    kml_lines.append("    </Style>")
    
    # Find all CSV files in the directory
    csv_files = glob.glob(os.path.join(input_path, "*.csv"))
    
    for csv_file in csv_files:
        # Read the first four lines
        with open(csv_file, "r", encoding="utf-8") as f:
            lines = [line.strip() for line in f]
        
        if len(lines) < 4:
            # Not enough lines; skip
            print(f"Skipping {os.path.basename(csv_file)} (not enough lines).")
            continue
        
        A = lines[0]     # string
        try:
            B = float(lines[1])  # lat
            C = float(lines[2])  # lon
            D = float(lines[3])  # threshold value
        except ValueError:
            print(f"Skipping {os.path.basename(csv_file)} (invalid float).")
            continue
        
        # Skip if D < THRESHOLD_SKIP
        if D < THRESHOLD_SKIP:
            print(f"Skipping {os.path.basename(csv_file)}: D={D} < {THRESHOLD_SKIP}")
            continue
        
        # Determine color category
        if D < THRESHOLD_WHITE:
            style_id = "whiteMarker"
            white_count += 1
        elif D < THRESHOLD_GRAY:
            style_id = "grayMarker"
            gray_count += 1
        else:
            style_id = "blackMarker"
            black_count += 1
        
        # Add a Placemark
        placemark = f"""
    <Placemark>
      <name>{A}</name>
      <styleUrl>#{style_id}</styleUrl>
      <Point>
        <coordinates>{C},{B},0</coordinates>
      </Point>
    </Placemark>
"""
        kml_lines.append(placemark.strip("\n"))
    
    # Close the KML Document
    kml_lines.append("  </Document>")
    kml_lines.append("</kml>")
    
    # Write out to KML file
    with open(OUTPUT_KML, "w", encoding="utf-8") as out_f:
        out_f.write("\n".join(kml_lines))
    
    # Print the results
    print("==================================")
    print("Processing complete.")
    print(f"Output KML written to: {OUTPUT_KML}")
    print("==================================")
    print(f"White markers (D < {THRESHOLD_WHITE}): {white_count}")
    print(f"Gray markers  ({THRESHOLD_WHITE} <= D < {THRESHOLD_GRAY}): {gray_count}")
    print(f"Black markers (D >= {THRESHOLD_GRAY}): {black_count}")
    print(f"Skipped markers (D < {THRESHOLD_SKIP}) were printed above.")

if __name__ == "__main__":
    main()
