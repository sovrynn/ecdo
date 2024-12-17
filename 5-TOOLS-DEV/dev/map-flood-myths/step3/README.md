So, just going to use what I've previously used for this.

Basemap

# Prompt

Write a python script that takes one input arg, a relative directory X.

The script should parse every .txt file in X. Each one will have one lat,lon comma separated pair per line. The format for the lat/lon values are +- rather than North/east/south/west.

The script should use basemap to generate a 2d projection of the earth. Then for each one of the lat/lon values in the .txt files in X, it should plot a red marker on the map.

Save the map to output.png.