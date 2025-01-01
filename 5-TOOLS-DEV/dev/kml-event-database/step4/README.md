The easiest part. Generating the KML file.

The label name will be the first column in the csv.

The link, the second (if it exists).

Parameterize the pretty things and.. you're good!

Maybe you could generate separate kml files for the different categories. Not worrying about the overlap.

# Step 0 combining into a single csv file

Write a python script that takes two input args, a relative filename and relative directory J.

The relative filename is a csv. The first row are the labels, and the rest of the rows are data.

For each data row, the script should create a 3-digit id. The first row has id 001 (prepend 0s to make it 3 digits), the second data row has id 002, etc.

The script should add two new columns to the end of the csv, Lat and Lon.

For each row, the values for lat/lon are in the file id.txt in relative directory J, replacing "id" in the filename with the actual 3-digit filename. In the file id.txt, the lat/lon values are on the first line, space separated.

Write the resulting output csv file to output.csv.

# Script Prompt

Write a python script that takes one input arg a relative filename.

The relative filename is a csv file. The first row are the labels, and the rest of the rows are data.

The script should, for each column from "Climate Disruption" to "Other", both inclusive (there should be 19), create a category inside a KML file. Name the category the relevant column name.

The content of each category of the KML will be as follows. For each column/category, filter out the rows that have value FALSE for that row. The remainder rows should all have value TRUE.

For each row, add a marker to the KML category/folder. The coords of the marker should be the Lat and Lon columns of the row.

Label the marker the value of the first column.

The second column is a URL (sometimes empty). If the URL is not-empty, add it as a description to the marker somehow, so that when someone views it in google earth pro, they can easily follow the link.

Parameterize the marker sizes and icons at the top of the script.

Additionally, each category should have a different color. This color array should also be parameterized at the top of the script.

Write the single output kml to output.kml.

# Script icons

Source: http://kml4earth.appspot.com/icons.html

# Modifying the csv so every row only has one true value

Just taking the first.

## Prompt

Write me a python script that takes one input arg a relative filename. That filename is a csv file. The first row is the column labels and the rest of the rows are data.

There is a consecutive set of 19 columns, from "Climate Disruption" to "Other", both inclusive). These have only TRUE or FALSE as their value.

The script should scan these from left to right starting at the Climate Disruption column and iterating to Other.

After the first TRUE value, all the remaining column values until "Other" column (inclusive) should be set to FALSE.

Verify that every row has exactly one TRUE value in this consecutive set of columns and the rest are all FALSE.

Print the resulting output csv to data-with-coords-one-category.csv.