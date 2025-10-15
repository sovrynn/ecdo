#!/usr/bin/env python3
"""
extract_kml.py

Extracts name, elevation, prominence, latitude, longitude, and country from each <Placemark>
in a KML file (with the default KML namespace) and writes them (one per line) into
numbered text files in data/.

Usage:
    python extract_kml.py input_file.kml
"""
import sys
import os
import re
import xml.etree.ElementTree as ET

KML_NS = {'kml': 'http://www.opengis.net/kml/2.2'}

def extract_values(pm):
    # 1) Name
    name_el = pm.find('kml:name', namespaces=KML_NS)
    name = name_el.text.strip() if name_el is not None and name_el.text else ''

    # 2) Description CDATA
    desc_el = pm.find('kml:description', namespaces=KML_NS)
    desc = desc_el.text or ''
    elev_m      = re.search(r'<B>ELEVATION</B>\s*=\s*([\d.]+)', desc)
    prom_m      = re.search(r'<B>PROMINENCE</B>\s*=\s*([\d.]+)', desc)
    country_m   = re.search(r'<B>COUNTRY</B>\s*=\s*([^<]+)', desc)
    elevation   = elev_m.group(1) if elev_m else ''
    prominence  = prom_m.group(1) if prom_m else ''
    country     = country_m.group(1).strip() if country_m else ''

    # 3) Coordinates: <longitude>,<latitude>,<alt>
    coord_el = pm.find('.//kml:coordinates', namespaces=KML_NS)
    coord_text = coord_el.text.strip() if coord_el is not None and coord_el.text else ''
    parts = coord_text.split(',')
    longitude = parts[0].strip() if len(parts) > 0 else ''
    latitude  = parts[1].strip() if len(parts) > 1 else ''

    return name, elevation, prominence, latitude, longitude, country

def main():
    if len(sys.argv) != 2:
        print("Usage: python extract_kml.py <input_file.kml>")
        sys.exit(1)

    infile = sys.argv[1]
    tree = ET.parse(infile)
    root = tree.getroot()

    # find all Placemark elements within the KML namespace
    placemarks = root.findall('.//kml:Placemark', namespaces=KML_NS)
    if not placemarks:
        print("No <Placemark> elements found.")
        sys.exit(1)

    # ensure output folder exists
    outdir = 'data'
    os.makedirs(outdir, exist_ok=True)

    # process each placemark
    for idx, pm in enumerate(placemarks, start=1):
        name, elev, prom, lat, lon, country = extract_values(pm)
        out_file = os.path.join(outdir, f"{idx}.txt")
        with open(out_file, 'w', encoding='utf-8') as f:
            f.write(f"{name}\n")
            f.write(f"{elev}\n")
            f.write(f"{prom}\n")
            f.write(f"{lat}\n")
            f.write(f"{lon}\n")
            f.write(f"{country}\n")

    print(f"Wrote {len(placemarks)} files to ./{outdir}/")

if __name__ == '__main__':
    main()
