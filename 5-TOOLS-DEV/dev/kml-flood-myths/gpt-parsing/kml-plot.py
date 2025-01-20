import os
import sys

################################################################################
# Parameters that can be changed easily:
################################################################################
MARKER_ICON = "http://maps.google.com/mapfiles/kml/shapes/ranger_station.png"
MARKER_SCALE = "2.0"        # scale (size) of the icon
MARKER_COLOR = "ff00ff00"   # color in KML AABBGGRR format (ARGB, hex)
KML_DOC_NAME = "My KML Document"  # Name that appears at the top of the KML
OUTPUT_FILE = "output.kml"       # Output KML filename
################################################################################

def main():
    if len(sys.argv) < 5:
        print("Usage: python script.py <X_DIR> <Y_DIR> <Z_DIR> <E_DIR>")
        sys.exit(1)

    X_DIR = sys.argv[1]
    Y_DIR = sys.argv[2]
    Z_DIR = sys.argv[3]
    E_DIR = sys.argv[4]

    # Collect all *.txt files in X_DIR
    x_files = [f for f in os.listdir(X_DIR) if f.endswith(".txt")]
    x_files.sort()  # Sort for consistent processing order (optional)

    # Prepare the KML header
    kml_header = f"""<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>{KML_DOC_NAME}</name>

  <!-- Define a style for our markers -->
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

    # We will collect placemarks in a list for easy insertion
    placemarks = []

    # Loop through each *.txt file in X_DIR
    for x_filename in x_files:
        # Corresponding Y file should have the same name
        y_filename = x_filename

        # Build full paths
        x_path = os.path.join(X_DIR, x_filename)
        y_path = os.path.join(Y_DIR, y_filename)

        # Check if the Y file exists
        if not os.path.exists(y_path):
            print(f"Warning: No corresponding Y file found for {x_filename}. Skipping.")
            continue

        # Read lines from X and Y in parallel
        with open(x_path, 'r', encoding='utf-8') as fx, \
             open(y_path, 'r', encoding='utf-8') as fy:

            x_lines = fx.readlines()
            y_lines = fy.readlines()

        # If X and Y differ in line count, we process up to the min length
        min_len = min(len(x_lines), len(y_lines))

        for i in range(min_len):
            line_x = x_lines[i].strip()
            line_y = y_lines[i].strip()

            # Skip empty lines in X
            if not line_x:
                continue

            # Attempt to find the filename after the last '#'
            if '#' not in line_x:
                # If there's no '#', skip or handle as needed
                continue

            # Extract the part after the last '#' for Z/E filenames
            z_e_filename_core = line_x.rsplit('#', 1)[-1].strip()
            z_e_filename = z_e_filename_core + ".txt"

            z_path = os.path.join(Z_DIR, z_e_filename)
            e_path = os.path.join(E_DIR, z_e_filename)

            # If the Z file doesn't exist, skip
            if not os.path.exists(z_path):
                continue

            # Read content of Z
            with open(z_path, 'r', encoding='utf-8') as fz:
                z_content = fz.read().strip()

            # If Z content is a single '0', skip
            if z_content == "0":
                continue

            # Read content of E (if exists), else empty
            e_content = ""
            if os.path.exists(e_path):
                with open(e_path, 'r', encoding='utf-8') as fe:
                    e_content = fe.read().strip()

            # Parse lat,lon from line in Y
            # Assuming the line_y is "lat,lon"
            try:
                lat_str, lon_str = line_y.split(',')
                lat = lat_str.strip()
                lon = lon_str.strip()
            except ValueError:
                # If line_y isn't properly formatted, skip
                continue

            # Build KML Placemark
            # KML expects <coordinates> to be "lon,lat[,alt]"
            placemark_description = "<p>" + z_content + "</p>" + "\n<p><b>ORIGINAL STORY:</b></p>\n\n" + e_content
            placemark_kml = f"""
    <Placemark>
      <styleUrl>#markerStyle</styleUrl>
      <!-- No <name> tag, as requested -->
      <description><![CDATA[{placemark_description}]]></description>
      <Point>
        <coordinates>{lon},{lat},0</coordinates>
      </Point>
    </Placemark>
"""
            placemarks.append(placemark_kml)

    # Close KML
    kml_footer = """
</Document>
</kml>
"""

    # Write out the KML file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as fout:
        fout.write(kml_header)
        for pm in placemarks:
            fout.write(pm)
        fout.write(kml_footer)

    print(f"Output KML written to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
