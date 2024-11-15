# Volcano Discovery, Volcano Data

Source: https://www.volcanodiscovery.com/volcanoes/eruptions/statistics/2008.html

So they have two sources for volcano reports, "News" and "VAAC" (Volcanic Ash Advisory Center).

# Prompt: parse from html

I want to parse some online table data into csv files.

The links are in the format: https://www.volcanodiscovery.com/volcanoes/eruptions/statistics/X.html , where X is replaced by 4 digit years from 2008 to 2024 inclusive.

The data is stored in an html table. There should be only one "<table" tag in the entire html file.

Inside the table object is tbody tag, and then tr tags for the list entries. The first tr entry is the column labels, and the rest are the rows. The rows have five td tags inside the tr tag each. The first td tag has a link, where the text of the link is the name N of the location. The last 3 td tags contain column values that should also be extracted. In total, each row in the table should correspond to a row in the csv file, with the name and the 3 column values.

I want you, for each year X from 2008 to 2024, to generate a csv file X.csv (replacing X with the year number). Inside, the column labels should be "Name", "News", "VAAC", and "Total". Then, there should be one row in the csv file for each row in the html table.

USe wget or something similar to download the html files, parse the data into csv files, and write them to the current directory.

# Prompt: generate single cumulative

i want you to write a scirpt that does the following. It should look in the local directory "csv" and accumulate all the csvs into one csv. Here is how.

Each csv file is named X.csv where X is an year from 2008 to 2024 inclusive. There are 4 columns, Name, News, VAAC, and Total. I want you to accumulate each csv file into one row in the output csv. The output csv should have rows Year, News, VAAC, Total. Each row should correspond to one year.

For X.csv, you should add up all the values for News, VAAC, and Total. Specifically, sometimes VAAC will have a value of "n/a". This should be regarded as a 0. Therefore the output row will have 4 columns, Year, News, VAAC, and Total, where the last 3 columns are aggregations of the original csv file.

Write the output csv to "cumulative.csv" in the current folder.

# Prompt: sum checker

write a python script that takes a relative filename. it is a csv file. it should add up all the values in News, VAAC, and Total columns and print them to console.

# Prompt: Generate location-based cumulative

Write a python script that does the following. It should look into local relative folder "csv-year" and generate a bunch of new csv files in "csv-location" (create if it doesn't exist).

The csv files in "csv-year" are named X.csv, where X is an year from 2008 to 2024 inclusive. The columns are Name, News, VAAC, and Total. The script should reorganize the data by unique values in Name. To do this, do the following.

For every unique Name value N in all of the "csv-year" csv files, it should generate a new csv file N.csv and write it to "csv-location". These csv files should have columns Year, News, VAAC, Total. For every row in any of the csv files corresponding to year Z that has Name N, create a row in N.csv that has Year value Z, and the same News, VAAC, and Total values as the row corresponding to that location in the original file.