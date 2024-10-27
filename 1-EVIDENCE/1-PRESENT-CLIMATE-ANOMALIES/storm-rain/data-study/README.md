# Rainfall data study

There is a 100+ GB dataset of rainfall data from over 10,000 rainfall stations.

First of all, I discarded all data that doesn't at least cover the timerange 2000-2020. Datasets ending before 2020 were discarded, as were datasets starting after 2000.

Then I aggregated the original daily data into yearly data, summing up the rainfall data. I also took averages for TMAX and TMIN. The script performing these basic calculations was tested locally with various manufactured test cases.

Then once the data is in yearly data, it is ripe for linear regression. This is also performed with a script tested locally on manufactured test cases.

# Notes

## Source

GHCN: https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-daily

"The Global Historical Climatology Network daily (GHCNd) is an integrated database of daily climate summaries from land surface stations across the globe. GHCNd is made up of daily climate records from numerous sources that have been integrated and subjected to a common suite of quality assurance reviews.

GHCNd contains records from more than 100,000 stations in 180 countries and territories. NCEI provides numerous daily variables, including maximum and minimum temperature, total daily precipitation, snowfall, and snow depth. About half the stations only report precipitation. Both record length and period of record vary by station and cover intervals ranging from less than a year to more than 175 years.
"

## Data format

So there's a PDF on what the columns mean. Data in CSV format, downloadable via HTTPs, lots of wonderful datasets, takes a bit to load, and there's way too much to download it all.

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

## Scripts

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

## General workflow (deprecated)

1. Run cumulative.py on a batch of CSV files
2. Run regression-averages.py to see the batched regression slopes
3. Use gen.py to dig closer into any single CSV file

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

## Mega-op

So I'll download and process the data in batches.

I need to simplify the data into yearly totals. I want:
- PRCP data
- TMAX, TMIN, if they have it
- remove everything without data from 1973 to 2023.

The hit rate is less than 1%, which is ridiculous. Anyways from there I can download those totals to my computer and work with them. I'll download the raw data, so I can do most of the error checking locally.

The real issue is not even downloading the data, it's handling all those data impurity edge cases.

## Prompt

Kindly write a python script that does the following. It should take two input args, both relative directories. The first one will be where it reads csv files from. It should read all the csv files in that directory. For each csv file, it should read it into memory. If the csv file, does not have DATE and PRCP columns, skip it. The date will most likely be in YYYY-MM-DD format. If the earliest value in DATE is 2001 or more recent, skip it. If the latest value in DATE is 2019 or earlier, skip it. Next, the data will most likely be in daily increments. I want you to reduce the data to yearly granularity by simplifying PRCP and TMAX/TMIN (If they exist) columns. For PRCP, you should sum up all the values for a single year to make the yearly value. For TMAX and TMIN, you should take the average of all the values. Thus, the final data should only have up to 4 columns - DATE, PRCP, TMAX, and TMIN. Save the resulting processed csv to the second input arg directory (create the directory if it does not exist). Name the file the same name that it was in the input directory. Throughout all this, maintain counts of how many files were skipped, bucketed by the reason, along with how many were successfully processed. At the end, print out these stats, along with the total number of csv files in the input directory, to console.

## Prompt

write a python script that takes one input arg, a relative directory name. It should read through that directory for all csv files. each CSV file will have a DATE (4-digit year) and PRCP (float) column. I want you to perform a linear regression with the DATE as the x-axis and PRCP on the y-axis. Center the first year at the origin. Then print out some statistics... calculate the greatest and lowest slope, the median, and the average slope. print them all out to console. Along with the total number of csv files.

## Data sharding stats

### A

Total CSV files in input directory: 17550
Successfully processed files: 4937
Skipped files:
  missing_columns: 69
  earliest_date: 349
  latest_date: 12195
  other: 0

### B

Total CSV files in input directory: 6214
Successfully processed files: 150
Skipped files:
  missing_columns: 1
  earliest_date: 70
  latest_date: 5993
  other: 0

### C

Total CSV files in input directory: 9604
Successfully processed files: 1085
Skipped files:
  missing_columns: 55
  earliest_date: 1858
  latest_date: 6604
  other: 2

### D

Total CSV files in input directory: 22
Successfully processed files: 14
Skipped files:
  missing_columns: 0
  earliest_date: 1
  latest_date: 7
  other: 0

### E

Total CSV files in input directory: 137
Successfully processed files: 80
Skipped files:
  missing_columns: 5
  earliest_date: 11
  latest_date: 41
  other: 0

### F

Total CSV files in input directory: 1115
Successfully processed files: 304
Skipped files:
  missing_columns: 90
  earliest_date: 41
  latest_date: 680
  other: 0

### G

Total CSV files in input directory: 1412
Successfully processed files: 570
Skipped files:
  missing_columns: 47
  earliest_date: 113
  latest_date: 682
  other: 0

### H

Total CSV files in input directory: 32
Successfully processed files: 28
Skipped files:
  missing_columns: 0
  earliest_date: 0
  latest_date: 4
  other: 0

### I

Total CSV files in input directory: 4096
Successfully processed files: 356
Skipped files:
  missing_columns: 4
  earliest_date: 1
  latest_date: 3735
  other: 0

### J

Total CSV files in input directory: 216
Successfully processed files: 158
Skipped files:
  missing_columns: 5
  earliest_date: 0
  latest_date: 53
  other: 0

### K

Total CSV files in input directory: 491
Successfully processed files: 149
Skipped files:
  missing_columns: 5
  earliest_date: 1
  latest_date: 336
  other: 0

### L

Total CSV files in input directory: 130
Successfully processed files: 75
Skipped files:
  missing_columns: 0
  earliest_date: 2
  latest_date: 53
  other: 0

### M

Total CSV files in input directory: 5501
Successfully processed files: 235
Skipped files:
  missing_columns: 1
  earliest_date: 198
  latest_date: 5067
  other: 0

### N

Total CSV files in input directory: 911
Successfully processed files: 642
Skipped files:
  missing_columns: 61
  earliest_date: 35
  latest_date: 173
  other: 0

### P

Total CSV files in input directory: 161
Successfully processed files: 102
Skipped files:
  missing_columns: 1
  earliest_date: 12
  latest_date: 46
  other: 0

### Q

Total CSV files in input directory: 1
Successfully processed files: 1
Skipped files:
  missing_columns: 0
  earliest_date: 0
  latest_date: 0
  other: 0

### R

Total CSV files in input directory: 1465
Successfully processed files: 740
Skipped files:
  missing_columns: 0
  earliest_date: 107
  latest_date: 616
  other: 2

### S

Total CSV files in input directory: 3219
Successfully processed files: 772
Skipped files:
  missing_columns: 78
  earliest_date: 217
  latest_date: 2152
  other: 0

### T

Total CSV files in input directory: 278
Successfully processed files: 147
Skipped files:
  missing_columns: 1
  earliest_date: 16
  latest_date: 114
  other: 0