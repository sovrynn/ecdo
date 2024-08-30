# Rotational Path KML generator for Google Earth

`gen.py` script is a Python script that will generate a KML file showing movement path of any location during S1 -> S2.

## Dependencies

Need Python installed, along with [pip](https://pip.pypa.io/en/stable/installation/) (Python package manager) and some Python packages (numpy, simplekml, geopy).

## Running it

Once you have the dependencies installed, just run the script using python using your command line (`python3 gen.py`). You'll need to setup the input values file though.

The script reads 5 input values from `input.txt` using a specific format:
- First line: latitude of moving location
- Second line: longitude of moving location
- Third line: Number of extra lines to draw on each side of the main rotation line
- Fourth line: Distance between drawn rotation lines in km
- Fifth line: Thickness of main line, 5 is a good default (you can go thinner if it's getting in the way)

I've included a template input file `input-TEMPLATE.txt`. You'll need to rename it to use it, as well as remove the comments I added (everything after and including the `#`).

## Post-run

Output KML file will be written to `output.kml` which can then be loaded up into Google Earth.
