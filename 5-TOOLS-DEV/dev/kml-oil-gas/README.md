How to run: python script.py data.csv

# Overview

Good source here: https://globalenergymonitor.org/projects/global-oil-gas-extraction-tracker/

Litty

# Script 1

Copied the script from kml-coal

# Script 2

Write a python script that takes one input arg a relative filename. It is a csv file.

The first row is column labels. The rest are data rows.

I want you to look for every row with empty values in "Latitude" or "Longitude" column.

For these, the following string should be written to "Unit ID".txt in relative folder "empty-coord-locations" where "Unit ID" is replaced by the value of column "Unit ID" for that row:

A, B, C

Where A is replaced by value of column "Unit Name", B is replaced by value of column "Subnational unit (province, state)", and C is replaced by column value "Country".

At the end, print out a tally of how many files were created.

# Script 3

geocoding api. Pasted into here.

Manually edited to generic Chad coords:
Error: Could not geocode address: Oryx, Chad for file OG0017520.txt
Error: Could not geocode address: Lenea, Chad for file OG0017516.txt
Error: Could not geocode address: Prosopis, Chad for file OG0018282.txt

# Script 3

Copy the generated coords into the original csv

## Prompt

Write a python script that takes one input arg a relative filename. It is a csv file.

The first row is column labels. The rest are data rows.

I want you to look for every row with empty values in "Latitude" or "Longitude" column.

For these rows, take the value of column "Unit ID" (let's call it A). Look in relative file "empty-coord-locations/A.txt". In there, the first line will have lat/lon space separated on the first line.

Take these and copy them into "Latitude" and "Longitude" columns for that row.

AT the end print out how many rows were edited in this way.

Don't modify the original csv; write the edited csv to data-all-locations.csv

# Verdict

Don't need those missing locations

797 of them

Also some of them parsed locations improperly.

Just use the remaining ~7k