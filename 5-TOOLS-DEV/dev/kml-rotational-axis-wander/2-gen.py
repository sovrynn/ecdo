#!/usr/bin/env python3

import sys

def main():
    if len(sys.argv) < 2:
        print("Usage: python plot_kml.py <input_file>")
        sys.exit(1)

    input_file = sys.argv[1]

    # ----------------------------------------------------------------
    # Customize these parameters as needed:
    # ----------------------------------------------------------------
    marker_color = "ff0000ff"  # AABBGGRR in hex; "ff0000ff" = fully opaque red
    marker_scale = "1.2"       # Marker scale/size
    marker_icon  = "http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
    # ----------------------------------------------------------------

    # Read the input file (expects lines of the form: lon lat year)
    coords = []
    with open(input_file, 'r') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            parts = line.split()
            if len(parts) != 3:
                # Skip lines that don't have exactly 3 parts
                continue

            lat_str, lon_str, year = parts
            try:
                lon = float(lon_str)
                lat = float(lat_str)
            except ValueError:
                # Skip if not valid float
                continue

            coords.append((lon, lat, year))

    # Construct the KML
    kml_header = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<kml xmlns="http://www.opengis.net/kml/2.2">\n'
        '  <Document>\n'
        '    <name>Rotational Axis Wander</name>\n'  # KML name
        # Define one shared style for all markers
        f'    <Style id="markerStyle">\n'
        f'      <IconStyle>\n'
        f'        <color>{marker_color}</color>\n'
        f'        <scale>{marker_scale}</scale>\n'
        f'        <Icon>\n'
        f'          <href>{marker_icon}</href>\n'
        f'        </Icon>\n'
        f'      </IconStyle>\n'
        f'    </Style>\n'
    )

    kml_placemarks = ""
    for lon, lat, year in coords:
        placemark = (
            '    <Placemark>\n'
            f'      <name>{year}</name>\n'
            f'      <styleUrl>#markerStyle</styleUrl>\n'
            '      <Point>\n'
            f'        <coordinates>{lon},{lat},0</coordinates>\n'
            '      </Point>\n'
            '    </Placemark>\n'
        )
        kml_placemarks += placemark

    kml_footer = (
        '  </Document>\n'
        '</kml>\n'
    )

    # Write out the KML to npw.kml
    with open("rotational-axis-wander.kml", "w") as out:
        out.write(kml_header)
        out.write(kml_placemarks)
        out.write(kml_footer)

    print("KML file written to npw.kml.")

if __name__ == "__main__":
    main()
