Here I'll be looking to select 5 rainfall collecting stations from each continent:

5 from NOTAM
5 from SOTAM
5 from Europe
5 from Eurasia
5 from Africa
5 from Middle East
5 from SEA
5 from Australia

5 from Arctic?
5 from Antarctica?

That have pristine data, stretching back as long as possible, no breaks, no zero values.

# Prompt

Write a python script that does the following.

It should take two input args, two relative directories.

In the first directory, it should process each .csv file. Based on certain criteria, it will copy it to to the output directory if the output file doesn't exist there already.

The first line is the column names, the rest are data values.

The column names are wrapped in double quotes.

If the following conditions are met, copy the file to the output directory:
- has column PRCP
- has column TMAX
- has column TMIN
- has column SNOW
- DATE (YYYY-MM-DD format) ranges from 1950-01-01 or earlier, to 2024-12-31 or later.

Print out a progress indicator of total files processed out of total files to process to console.

# prompt 2

Write a python script that does the following.

It should take two input args, two relative directories.

In the first directory, it should process each .csv file. Based on certain criteria, it will copy it to to the output directory if the output file doesn't exist there already.

The first line is the column names, the rest are data values.

The column names are wrapped in double quotes.

If the following conditions are met, copy the file to the output directory:
- PRCP, TMAX, TMIN, and SNOW have NO EMPTY values in any of the rows
- has column PRCP
- has column TMAX
- has column TMIN
- has column SNOW

Print out a progress indicator of total files processed out of total files to process to console.