So, just going to use what I've previously used for this.

Basemap

# Prompt script.py

Write a python script that takes one input arg, a relative directory X.

The script should parse every .txt file in X. Each one will have one lat,lon comma separated pair per line. The format for the lat/lon values are +- rather than North/east/south/west.

The script should use basemap to generate a 2d projection of the earth. Then for each one of the lat/lon values in the .txt files in X, it should plot a red marker on the map.

Save the map to output.png.

# Labeled data aggregator prompt

Write a python script that takes three input args, three relative directories X, Y and Z.

For each file in X, it should do the following.

Find the file in Y with the same filename. Fail if it doesn't exist.

Then, create a new output file by writing the first line in X, then the first line in Y, then the second line in X, second line in Y, etc until there are no more lines.

Write this output file, with the same filename as the one in X and Y, to directory Z.
