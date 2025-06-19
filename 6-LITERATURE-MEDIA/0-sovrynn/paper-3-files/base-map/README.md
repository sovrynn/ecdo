python3 gen2.py coordsbase.txt coordsundersea.txt coordssub.txt

# Locations undersea bases

a) the continental shelf off the eastern seaboard of the mainland United States, all the way from Florida to New England
b) the New England sea mounts in the North Atlantic off of northeastern North America
c) the Gulf of Mexico
d) the Caribbean Sea, especially (but not only) around Puerto Rico and Andros Island in the Bahamas
e) Lake Erie
f) the Channel Islands off of southern California
g) the Hawaiian Islands region
h) the Aleutian Islands region
i) the San Juan Islands, Vancouver Island region of western North America

# Boilerplate script

This script is a simple command-line tool that:

    Loads your Google Maps API key from a file called apikey.txt.

    Reads a list of postal addresses (one per line) from an input text file that you pass as an argument:

python script.py addresses.txt

For each address, it calls the Google Geocoding API (https://maps.googleapis.com/maps/api/geocode/json) to turn the address into geographic coordinates (latitude and longitude).

Writes the results to output.txt, one “lat lon” pair per line.

    If an address line is blank, it writes Error: Empty address line.

    If the API request fails or returns no result, it writes Error: Could not geocode address.

Prints a summary message when done.

# Map script prompt

Write a python script that does the following.

It should take three input args. Each will be a relative filename, each having one coord per line, space separated.

The script should generate a 2d map of the area containing the coordinates. Each of the files will correspond to a certain marker icon and color and size, parameterized in the script.

The script will add a marker for each coord in each file. Then it will add a key with 3 entries, one of each icon, and a label.

parameterize a title for the map as well in the script

also add another parameter for the buffer around the coordinates that will denote the area that is displayed on the map; a bigger buffer will show a bigger area, a buffer of 0 will place the borders as small as possible while still showing all the markers

save the map to output.png