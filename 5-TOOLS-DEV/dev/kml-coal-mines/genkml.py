#!/usr/bin/env python3
import sys
import csv
import os
import xml.sax.saxutils as saxutils

# ========================
# Parameter Section
# ========================
MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png"
MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/square.png"
MARKER_SCALE = "1.2"
MARKER_COLOR = "ff000000"      # AABBGGRR format in KML (when used with <color>)
KML_OUTPUT_FILENAME = "coal_mines.kml"
KML_NAME = "Coal Mines"
# ========================

def escape_for_kml(text):
    """
    Escape special characters for XML (KML) content.
    By default, saxutils.escape() will replace:
      & -> &amp;
      < -> &lt;
      > -> &gt;
      " -> &quot;  (if you pass in the quotes parameter)
      ' -> &apos;  (if you pass in the quotes parameter)
    """
    if text is None:
        return ""
    return saxutils.escape(text)

def main():
    if len(sys.argv) < 2:
        print("Usage: python script.py <csv_filename>")
        sys.exit(1)

    csv_filename = sys.argv[1]
    
    # Read CSV data
    try:
        with open(csv_filename, mode='r', encoding='utf-8-sig') as csvfile:
            reader = csv.DictReader(csvfile)
            
            # Validate required columns
            required_columns = ["Latitude", "Longitude", "Mine Name", "GEM Wiki URLs"]
            for col in required_columns:
                if col not in reader.fieldnames:
                    print(f"Error: Required column '{col}' is missing in CSV.")
                    sys.exit(1)
            
            # Prepare KML
            kml_lines = []
            kml_lines.append('<?xml version="1.0" encoding="UTF-8"?>')
            kml_lines.append('<kml xmlns="http://www.opengis.net/kml/2.2">')
            kml_lines.append(f"  <Document>")
            kml_lines.append(f"    <name>{escape_for_kml(KML_NAME)}</name>")
            
            # Define a style for the Placemark icon
            kml_lines.append("    <Style id=\"markerStyle\">")
            kml_lines.append("      <IconStyle>")
            kml_lines.append(f"        <scale>{escape_for_kml(MARKER_SCALE)}</scale>")
            # KML color is in AABBGGRR format. Example: ff0000ff = fully opaque, red=00, green=00, blue=ff
            kml_lines.append(f"        <color>{escape_for_kml(MARKER_COLOR)}</color>")
            kml_lines.append("        <Icon>")
            kml_lines.append(f"          <href>{escape_for_kml(MARKER_ICON)}</href>")
            kml_lines.append("        </Icon>")
            kml_lines.append("      </IconStyle>")
            kml_lines.append("    </Style>")

            # Go through rows and create Placemarks
            for row_number, row in enumerate(reader, start=2):  # start=2 to account for headers in line 1
                lat = row["Latitude"].strip()
                lon = row["Longitude"].strip()
                mine_name = row["Mine Name"].strip()
                wiki_url = row["GEM Wiki URLs"].strip()

                # Check if lat or lon is empty
                if not lat or not lon:
                    print(f"Row {row_number} missing Latitude/Longitude: {row}")
                    continue

                # Escape values for safety
                lat_escaped = escape_for_kml(lat)
                lon_escaped = escape_for_kml(lon)
                mine_name_escaped = escape_for_kml(mine_name)
                wiki_url_escaped = escape_for_kml(wiki_url)

                # Build HTML for the description
                description_html = f"""
<p><b>Coal Mine: {mine_name}</b></p>
<p>Source: {wiki_url}</p>
""".strip()

                # Wrap in CDATA, but still keep values escaped to avoid parser issues
                description_str = f"<![CDATA[{description_html}]]>"

                # Build Placemark
                # removed this string
                # <name>{mine_name_escaped}</name>
                placemark = f"""
      <Placemark>
        <description>{description_str}</description>
        <styleUrl>#markerStyle</styleUrl>
        <Point>
          <coordinates>{lon_escaped},{lat_escaped},0</coordinates>
        </Point>
      </Placemark>
"""
                kml_lines.append(placemark)

            # Close Document and kml
            kml_lines.append("  </Document>")
            kml_lines.append("</kml>")

        # Write KML output
        with open(KML_OUTPUT_FILENAME, "w", encoding="utf-8") as kml_file:
            kml_file.write("\n".join(kml_lines))

        print(f"KML file created successfully: {KML_OUTPUT_FILENAME}")

    except FileNotFoundError:
        print(f"Error: File '{csv_filename}' not found.")
        sys.exit(1)
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
