import sys

# =========================
# CONFIGURABLE PARAMETERS
# =========================

# URL or path to a custom marker icon
MARKER_ICON = "http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/water.png"
MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/open-diamond.png"

# Adjusts the size of the marker icon
MARKER_SCALE = 2

# Adjusts the size of the text label
LABEL_SCALE = 1

# Color for the marker in KML (in KML ABGR hex format; "ff0000ff" is red)
# Format: AABBGGRR (Alpha, Blue, Green, Red)
MARKER_COLOR = "ff0000ff"
# MARKER_COLOR = "ffffffff"
MARKER_COLOR = "fff4f5eb"

# Name of the KML output file
KML_FILENAME = "salt-mines-no-label.kml"
KML_NAME = "Salt Mines"

def main():
    """
    Usage:
        python create_kml.py <fileX> <fileY>

    <fileX> = A text file with one label per line (e.g. location names).
    <fileY> = A text file with one lat/lon pair (space separated) per line.
    The script pairs line i of <fileX> with line i of <fileY>.
    """

    if len(sys.argv) != 3:
        print("Usage: python create_kml.py <fileX> <fileY>")
        sys.exit(1)

    fileX = sys.argv[1]
    fileY = sys.argv[2]

    try:
        with open(fileX, "r", encoding="utf-8") as fx:
            linesX = [line.strip() for line in fx if line.strip()]
    except FileNotFoundError:
        print(f"Error: File '{fileX}' not found.")
        sys.exit(1)

    try:
        with open(fileY, "r", encoding="utf-8") as fy:
            linesY = [line.strip() for line in fy if line.strip()]
    except FileNotFoundError:
        print(f"Error: File '{fileY}' not found.")
        sys.exit(1)

    # Ensure both files have the same number of lines
    if len(linesX) != len(linesY):
        print("Error: The two files must have the same number of lines.")
        sys.exit(1)

    # Create the KML content
    kml_content = []
    kml_content.append('<?xml version="1.0" encoding="UTF-8"?>')
    kml_content.append('<kml xmlns="http://www.opengis.net/kml/2.2">')
    kml_content.append("  <Document>")
    kml_content.append(f"    <name>{KML_NAME}</name>")

    # Define the style once, which we'll reference in each placemark
    kml_content.append("    <Style id=\"myStyle\">")
    kml_content.append(f"      <IconStyle>")
    # kml_content.append(f"        <color>{MARKER_COLOR}</color>")
    kml_content.append(f"        <scale>{MARKER_SCALE}</scale>")
    kml_content.append(f"        <Icon><href>{MARKER_ICON}</href></Icon>")
    kml_content.append("      </IconStyle>")
    kml_content.append("      <LabelStyle>")
    kml_content.append(f"        <scale>{LABEL_SCALE}</scale>")
    kml_content.append("      </LabelStyle>")
    kml_content.append("    </Style>")

    # Create a Placemark for each line
    for i in range(len(linesX)):
        location_name = linesX[i]
        lat_lon = linesY[i].split()
        # Expecting "lat lon"
        if len(lat_lon) != 2:
            print(f"Warning: Invalid lat/lon in line {i+1} of {fileY}. Skipping.")
            continue

        lat, lon = lat_lon
        # KML requires the order: <coordinates>lon,lat</coordinates>
        # Prepend "Salt Mine: " to the label
        kml_content.append("    <Placemark>")
        # kml_content.append(f"      <name>Salt Mine: {location_name}</name>")
        # kml_content.append("      <description></description>")
        kml_content.append(f"""      <description>
        <![CDATA[
          <p><b>Major Salt Mine: </b> {location_name}</p>
          <p>Source: https://en.wikipedia.org/wiki/Salt_mining</p>
        ]]>
      </description>""")
        kml_content.append("      <styleUrl>#myStyle</styleUrl>")
        kml_content.append("      <Point>")
        kml_content.append(f"        <coordinates>{lon},{lat}</coordinates>")
        kml_content.append("      </Point>")
        kml_content.append("    </Placemark>")

    kml_content.append("  </Document>")
    kml_content.append("</kml>")

    # Write to output KML file
    with open(KML_FILENAME, "w", encoding="utf-8") as kml_file:
        kml_file.write("\n".join(kml_content))

    print(f"KML file '{KML_FILENAME}' has been created.")

if __name__ == "__main__":
    main()
