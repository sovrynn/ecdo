# Rainfall data study

GHCN: https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-daily

So there's a PDF on what the columns mean. Data in CSV format, downloadable via HTTPs, lots of wonderful datasets, takes a bit to load, and there's way too much to download it all.

Scripts:
- gen.py (generates linear regression charts, saves them, for ONE csv file)
	- takes two input args, csv file, and prefix for the image visualizations
- cumulative.py (generates linear regression values, for all desired fields, and saves them to an output text file)
	- takes one input arg, relative directory to search
	- there are a lot of filters where it will skip the csv file:
		- if it doesn't have the 3 required rows
		- if it fails to read in the csv file
		- if the csv file data doesn't go up to 2024
		- for csv files that ARE processed it just wipes data before a certain cutoff date
- count-data-storage-size.py simply reads the raw text of the CSV list and adds up the size of each CSV file
- download-all-data.py reads all the csv names from a list and wget's them to a specified directory
- parse-csv-names.py: simply data cleaning script that gets the CSV name list
- regression-averages.py calculates the average of the PRCP TMAX TMIN regression slopes from cumulative.py.

## General workflow

1. Run cumulative.py on a batch of CSV files
2. Run regression-averages.py to see the batched regression slopes
3. Use gen.py to dig closer into any single CSV file

## Data units

- PRCP = Precipitation (mm or inches as per user preference, inches to hundredths on Daily Form pdf file)
	- I assume this is mm, because there are values above 100 in the data
- SNOW = Snowfall (mm or inches as per user preference, inches to tenths on Daily Form pdf file)
- SNWD = Snow depth (mm - or inches as per user preference, inches on Daily Form pdf file)- 
- TMAX = Maximum temperature (Fahrenheit or Celsius as per user preference, Fahrenheit to tenths on Daily Form pdf file
	- I'm so confused. On CHM the temperature goes as low as -200... but the coldest temperature ever recorded on Earth has been -130 Fahrenheit.
	- 200 Celsius is even colder, ~-300 degrees Fahrenheit.
	- It seems to be in tenths of celsius for CHM. (China). And London as well (CA).
- TMIN = Minimum temperature (Fahrenheit or Celsius as per user preference, Fahrenheit to tenths on Daily Form pdf file

## Hardcoded stations

Finding data: Look for datasets that are updated till today, go back long enough in time, don't have gaps.

Let me find 3 locations. Maybe 10, even better. Let's see:
- Japan (Tokyo): JA000047662
- Seoul: KSM00047108
- Beijing: CHM00054511
- London: CA006144470
- Johannesburg: SFM00068368
- Tehran: IR000407540
- Moscow: RSM00027612
- San Francisco
	- USW00023234
	- MXN00007145
- Manhattan: US1ILWL0026

## Prompt

Write a python script that does the following. It should take two input args, a csv filename and an output filename prefix P. It should read the csv file, and then generate and save some charts.

The csv file has values, contained in double quotations. The second column is a date, labeled DATE. This is in the format YYYY-MM-DD. Then I want you to generate two charts, one graphing PRCP, and the other graphing TMAX and TMIN (on the same graph). Sometimes the row values for those columns will be empty. If so, keep the same date range as exists in the columns, but just don't plot any data point there.

Save the two charts as P1 and P2, with whatever image extension is applicable, replacing P with the second input arg.

## Prompt linear regression

given a csv dataset read into a pandas object in python. write a little code excerpt that runs a linear regression of best fit (MSE), with "DATE" on the x-axis and "PRCP" on the y-axis. Plot the data and the line, and include the equation for the line on the chart.

## Prompt cumulative linear regression

So the data you need is:
- the name of the CSV file
- date range
- rainfall slope
- temperature slope TMAX, TMIN

Write a python script that does the following. It should read in all the CSV files in the current relative directory. For each CSV file, it should generate 3 linear regressions of MSE. On the x-axis for all 3 will be the DATE column, in the format YYYY-MM-DD. The y-axis will be PRCP, TMAX, and TMIN. Some of the rows will have empty values for these columns, and you should handle the linear regression gracefully (just ignore those points). Then, create an output file output.txt which has 1 line for each csv file. Print "N D1 D2 S1 S2 S3" for each file, where N is the name of the CSV file, D1 is the starting date of the data, D2 is the end date of the data, and S1 S2 S3 are the slopes of the linear regressions for PRCP, TMAX, TMIN, respectively.

## Scraping

https://www.ncei.noaa.gov/data/global-historical-climatology-network-daily/access/F

Where F is the CSV filename.

## Total dataset size

- Total Size (in MB): 136223.40790000337
- Number of Entries Added: 127629

## Preliminary results

Data from 88 stations from 1973 to 2024:
- The median for 2023 rainfall / 1973 rainfall is: 2.421143
- The median for 2010 rainfall / 1973 rainfall is: 2.1417235000000003
- The median for 1990 rainfall / 1973 rainfall is: 1.873853