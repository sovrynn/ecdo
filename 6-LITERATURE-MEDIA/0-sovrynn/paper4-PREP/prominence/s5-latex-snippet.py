#!/usr/bin/env python3
"""
make_peak_lists.py

Builds a LaTeX snippet that groups mountain–peak records into ten regional
“2000 m Prominence Peak List” subsections.

USAGE
-----
python make_peak_lists.py <input_folder> <country_map.txt>

ARGUMENTS
---------
<input_folder>
    Folder containing text files, one file per peak, each **exactly six lines**:
        1  Peak name
        2  Elevation (m)
        3  Prominence (m)
        4  Latitude      (ignored)
        5  Longitude     (ignored)
        6  Country name

<country_map.txt>
    Plain‑text mapping:  CountryName#N  
    where **N is 0–9 (0‑indexed)** designating which LaTeX list the country
    belongs to according to the order shown below.

LIST ORDER  (index N)
---------------------
0  Asia  
1  South America  
2  Mesoamerica  
3  Africa  
4  Australia  
5  Europe  
6  North America  
7  West Asia  
8  Pacific Islands  
9  Antarctica  

OUTPUT
------
Creates/overwrites **output.txt** containing the full LaTeX snippet.

──────────────────────────────────────────────────────────────────────────────
"""
import sys
import os
from collections import defaultdict

SECTIONS = [
    r"\subsection{Asia 2000m Prominence Peak List}",
    r"\subsection{South America 2000m Prominence Peak List}",
    r"\subsection{Mesoamerica 2000m Prominence Peak List}",
    r"\subsection{Africa 2000m Prominence Peak List}",
    r"\subsection{Australia 2000m Prominence Peak List}",
    r"\subsection{Europe 2000m Prominence Peak List}",
    r"\subsection{North America 2000m Prominence Peak List}",
    r"\subsection{West Asia 2000m Prominence Peak List}",
    r"\subsection{Pacific Islands 2000m Prominence Peak List}",
    r"\subsection{Antarctica 2000m Prominence Peak List}",
]

# --------------------------------------------------------------------------- #
# Helpers
# --------------------------------------------------------------------------- #
def load_country_map(path):
    """
    Returns a dict  country -> list_index  (index 0‑9).
    Ignores blank lines and lines without '#'.
    """
    mapping = {}
    with open(path, "r", encoding="utf-8") as fh:
        for raw in fh:
            if "#" not in raw:
                continue
            country, idx = raw.strip().split("#", 1)
            country = country.strip()
            idx = idx.strip()
            if not idx.isdigit():
                continue
            mapping[country] = int(idx)
    return mapping


def parse_peak(path):
    """
    Reads a six‑line peak file and returns tuple:
        (name, elevation, prominence, country)
    Raises ValueError if file malformed.
    """
    with open(path, "r", encoding="utf-8") as fh:
        lines = [ln.rstrip("\n") for ln in fh]
    if len(lines) < 6:
        raise ValueError("fewer than 6 lines")
    name, elev, prom, country = lines[0], lines[1], lines[2], lines[5]
    return name, elev, prom, country


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def main():
    if len(sys.argv) != 3:
        print("Usage: python make_peak_lists.py <input_folder> <country_map.txt>")
        sys.exit(1)

    in_dir, map_file = sys.argv[1], sys.argv[2]

    if not os.path.isdir(in_dir):
        sys.exit(f"Error: '{in_dir}' is not a directory.")
    if not os.path.isfile(map_file):
        sys.exit(f"Error: mapping file '{map_file}' not found.")

    country_to_idx = load_country_map(map_file)

    # dict index -> list[ (country, name, entry_str) ]
    region_lists = defaultdict(list)

    for fname in sorted(os.listdir(in_dir)):
        src = os.path.join(in_dir, fname)
        if not os.path.isfile(src):
            continue
        try:
            name, elev, prom, country = parse_peak(src)
        except ValueError as err:
            print(f"Skipping '{fname}': {err}")
            continue

        idx = country_to_idx.get(country)
        if idx is None or not (0 <= idx < len(SECTIONS)):
            print(f"Skipping '{fname}': country '{country}' not in mapping.")
            continue

        entry = f"{name}, {country}, {elev} m, {prom} m"
        region_lists[idx].append((country.lower(), name.lower(), entry))

    # Assemble LaTeX
    lines_out = []
    for idx, section in enumerate(SECTIONS):
        lines_out.append(section)
        lines_out.append(r"\begin{flushleft}")
        lines_out.append(r"\begin{enumerate}")

        # sort alphabetically by country (case‑insensitive) then by name
        for _, _, entry in sorted(region_lists.get(idx, [])):
            lines_out.append(f"    \\item {entry}")

        lines_out.append(r"\end{enumerate}")
        lines_out.append(r"\end{flushleft}")
        lines_out.append("")  # blank line for readability

    with open("output.txt", "w", encoding="utf-8") as out:
        out.write("\n".join(lines_out))

    print("LaTeX snippet written to output.txt")


if __name__ == "__main__":
    main()
