python genkml-descriptions.py locations.txt coords.txt

# Prompt

Write a python script that takes two input args, two relative files X and Y.

It should generate a KML file that has one marker per line in X.

For every line in X, the script should get the corresponding same number line in Y (first line in X -> first line in Y, second to second, etc).

The marker should be labeled the line in X prepended with "Salt Mine: ". The marker should have coords from the line in Y. The line in Y will have lat lon, space separated.

The marker icon, marker size, label size, KML file name, and marker color should be parameterized at the top of the script.

Write the output kml to output.kml.