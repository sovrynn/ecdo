# Rainfall data study

There is a 100+ GB dataset of rainfall data from over 10,000 rainfall stations.

First of all, I discarded all data that doesn't at least cover the timerange 2000-2020. Datasets ending before 2020 were discarded, as were datasets starting after 2000.

Then I aggregated the original daily data into yearly data, summing up the rainfall data. I also took averages for TMAX and TMIN. The script performing these basic calculations was tested locally with various manufactured test cases.

Then once the data is in yearly data, it is ripe for linear regression. Precipitation was summed up across all data for a specific year. Then graphed and fitted to a line of best fit. The script that does that wal also locally tested with manufactured test cases. The resulting data is below.

### Final Verdict - 1950 to 2020

A total change of about 3% in 70 years. Per the regression line.

```
1950 33761243.0
1951 33230422.0
1952 31019464.0
1953 30076772.0
1954 31524921.0
1955 32372169.0
1956 32375654.0
1957 33136798.0
1958 32928809.0
1959 32127410.0
1960 32630295.0
1961 33403232.0
1962 31535613.0
1963 30107953.0
1964 32321834.0
1965 32037906.0
1966 31541512.0
1967 31942542.0
1968 33366392.0
1969 32530976.0
1970 33054262.0
1971 32812008.0
1972 32723460.0
1973 37675161.0  High
1974 35709169.0
1975 34185515.0
1976 28983752.0  Low
1977 32417180.0
1978 33004884.0
1979 34128562.0
1980 30178595.0
1981 33713267.0
1982 33615884.0
1983 36489206.0  high
1984 33553634.0
1985 32239381.0
1986 32914268.0
1987 31603134.0
1988 30734075.0
1989 32474611.0
1990 35022745.0
1991 32751040.0
1992 34312505.0
1993 34290166.0
1994 31717104.0
1995 34151048.0
1996 34652600.0
1997 32377190.0
1998 35948432.0  high
1999 32875511.0
2000 32916927.0
2001 32037260.0
2002 30734203.0
2003 31587936.0
2004 34253577.0
2005 31748678.0
2006 31326601.0
2007 32760014.0
2008 33538065.0
2009 33798341.0
2010 35366420.0  high
2011 34300297.0
2012 30959958.0
2013 32795817.0
2014 32047149.0
2015 34057624.0
2016 33762860.0
2017 33787102.0
2018 33640211.0
2019 33026902.0
2020 32316988.0

Mean Squared Error of the regression: 2209574971727.1787
R-squared: 0.03402684059532979
Linear regression formula: y = 13613.1305x + 5865868.1963
```

## TMAX, TMIN

```
Year  Average TMAX  Average TMIN
1950  153.94    30.53
1951  153.94    31.39
1952  159.35    33.76
1953  166.16    40.34
1954  162.24    37.88
1955  156.63    32.42
1956  156.80    31.31
1957  156.20    38.02
1958  155.52    35.02
1959  159.17    36.72
1960  153.74    32.20
1961  158.04    36.19
1962  155.92    34.04
1963  158.32    32.70
1964  156.24    31.78
1965  153.36    32.85
1966  154.64    31.31
1967  157.67    34.59
1968  153.56    32.04
1969  150.94    31.52
1970  154.35    33.08
1971  155.64    34.17
1972  151.19    31.86
1973  157.46    39.17
1974  157.55    35.98
1975  156.41    36.29
1976  156.07    28.41
1977  158.46    36.94
1978  150.75    31.00
1979  150.50    30.40
1980  156.15    34.40
1981  161.48    40.21
1982  152.03    34.60
1983  155.04    40.00
1984  153.73    35.99
1985  150.36    31.24
1986  159.02    41.33
1987  159.78    39.39
1988  161.50    36.51
1989  157.56    35.62
1990  164.86    43.49
1991  160.44    42.59
1992  155.97    39.75
1993  150.38    35.62
1994  158.96    39.42
1995  158.31    41.44
1996  150.73    33.36
1997  155.20    39.03
1998  162.58    48.21
1999  164.19    42.55
2000  160.03    40.92
2001  161.94    43.15
2002  161.22    42.22
2003  160.80    41.55
2004  157.85    42.39
2005  162.21    44.14
2006  165.37    45.50
2007  164.17    44.78
2008  157.65    37.75
2009  154.79    37.49
2010  157.26    40.95
2011  161.34    42.73
2012  170.21    47.51
2013  155.55    39.02
2014  158.02    39.76
2015  167.03    48.89
2016  168.10    50.43
2017  166.58    48.65
2018  161.64    44.70
2019  157.79    41.12
2020  165.63    45.84

TMAX Linear Regression Equation: y = 0.0993x + -39.1207
TMAX R^2 value: 0.1981

TMIN Linear Regression Equation: y = 0.1905x + -340.1529
TMIN R^2 value: 0.5544

Total number of files incorporated into the final result: 2270
```

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

## Initial mega verdict

So back when I was calculating all the religions, not filtering out 0 values, from 2020 till 2020 at the least, over all the data, I got a median and average of around 8. But I think the zero calcs were weighing them down quite a bit. I would imagine most regions in the world get some rain, maybe 5% don't.

Anyways, if a rainfall increase really was happening, surely the regions already getting rain would also get more? So I wouldn't even need those 0 value anomalies.

But then when I remove all the 0 valued data from 1973 to 2020, which should be the mega calc, its running an average of well over 1, sure, but the median is below 1. And these are the average percentage YoY, the median of all of them, and the average of all of them. And the median is under 1.

There seems to be years of 0 precipitation in places that should absolutely get rain, for example, Scotland. Additionally, in these 0 years, for one of them that I checked, it's not that the snow was getting frozen, as for those years, there was 0 snow as well. See year 1941 for UK 305.

In light of all this, I don't see a way to reconcile median linear regressions that are positive with the significant 0 data that went into making them.

I think my next step is calculating the non-zero, per country code. I'll do USA and Australia and UK.

I think B, C, I, M, S are also quite big. Along with U and A.

## nonzero 2020-2023 mega study

I'm in the process of preparing the data for a final mega study. I've trimmed the data to nonzero 2020-2023 sequences.

So the individual folders, checking the multiplier medians, is not showing a positive increase.

However a cumulative study of adding up all the PRCP values per year is yielding positive regression.

### 2000 to 2023 cumulative PRCP

```
Year  Cumulative PRCP
2000  87275570.0
2001  86939286.0
2002  83367406.0
2003  89043731.0
2004  94148566.0
2005  89232200.0
2006  88566060.0
2007  91297487.0
2008  93909816.0
2009  93758080.0
2010  100244331.0
2011  98048320.0
2012  89444303.0
2013  91685120.0
2014  91174410.0
2015  95035080.0
2016  94956549.0
2017  96219260.0
2018  93508431.0
2019  90888341.0
2020  93591658.0
2021  95214783.0
2022  93994901.0
2023  88528154.0

Mean Squared Error of the regression: 11384380868644.467
R-squared: 0.20190218014968098
```

### 2000 to 2023 cumulative median multiplier

To be honest, I don't particularly like this method. Multiplying consecutive multipliers just serves to arrive at the final number in a series with no concern given to how it got there. I also don't know about all this median/average nonsense.

Just get cumulative PRCP values and take a linear regression. That's your trendline.

## nonzero 1950 - 2020 mega study

I've done a long-trim, keeping only the files with nonzero values from 1950 till 2020.

Then I will make a cumulative PRCP regression, with R^2, and that will be my final value.

Results above.

# Notes

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

```

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

### U

Total CSV files in input directory: 74542
Successfully processed files: 7463
Skipped files:
  missing_columns: 1575
  earliest_date: 48657
  latest_date: 16507
  other: 340

### V

Total CSV files in input directory: 235
Successfully processed files: 43
Skipped files:
  missing_columns: 6
  earliest_date: 37
  latest_date: 148
  other: 1

### W

Total CSV files in input directory: 293
Successfully processed files: 15
Skipped files:
  missing_columns: 0
  earliest_date: 0
  latest_date: 278
  other: 0

### Z

Total CSV files in input directory: 39
Successfully processed files: 9
Skipped files:
  missing_columns: 2
  earliest_date: 0
  latest_date: 28
  other: 0

### All of it

Summary:
Total CSV files processed: 18075/18075
Greatest slope: 1003.3849
Lowest slope: -1318.7892
Median slope: 8.8495
Average slope: 18.3080
```

## Mega-viz

So, filter out all the stations that have 0 columns in between 1973 and 2020? Based on my script there should still be a considerable (13k) out of 18k stations that fulfill this criteria. Plenty for a mega-study. Some of the stations may genuinely have 0 precipitation but some may be duds.

Next I can calculate percentage-wise increases for all of them. And then average them. Graph them, on a linear scale... sometimes it will be <1, sometimes greater than 1. I guess a linear scale should be fine. You can make it a log scale centered around 1 actually. That's best. Next... multiply what average change that implies over the 50 year period. Per year. Theoretically it should be 1 if there is no change.

### Prompt

Create a python script that does the following. It should look in the current directory for all folders with name ending in "reduced". Within them, it should accumulate all the csv files and do the following. Within each is a DATE and PRCP column. It should find all files with no zero entries in PRCP for all values in DATE from 1973 (inclusive) to 2023 (inclusive). For each one, it should calculate the percentage change by using a multiplier ratio (1 for no change) for every year from DATE value 1973 (inclusive) to 2023 (inclusive) by dividing the PRCP value of DATE Y * RATIO = PRCP value of DATE Y + 1, stopping at 2022 (to find the multiplier going into 2023). Then, combine the results for ALL the csv files by, for each year, finding the AVERAGE and MEDIAN of all those values, for each year in the range, to create a timeseries. Plot them both on a logarithmic y-axis, AVERAGE and MEDIAN on the y-axis of the multiplier ratios between years. DATE should be on the x-axis, with 1973's plot starting at (0,1). Include a legend. Also calculate a MSE regression for both, plot it, print out the equations to the console, and include them in a legend. Save that plot, all plotted on one graph, to a file named output. Finally calculate the value gotten when multiplying all the average and median multiplier ratios from 1973 to 2022 (going into 2023) separately, creating two cumulative values, one average and one median. Print this out to console. Show your math. 

### multiple steps

write a python script that does the following. it should look in the current directory for all folders with name ending in "reduced". Within them, it should accumulate all the csv files and do the following. Within each is a DATE (4 digit year format only) and PRCP column. It should find all files with no zero entries in PRCP for all values in DATE from 1973 (inclusive) to 2023 (inclusive). If the file doesn't satisfy these conditions, skip it. Make these dates parameterized so they're easy to change in one place. It should add an extra column to them, MULT. In this column, should be the value of the PRCP column of that row divided by the PRCP column of the previous row, sorted by DATE. In the MULT column of the row with the earliest DATE, just put 1. Write out all these files to the folder output, with the original filename with a changed trailing suffix: "-processed.csv". Print out to console the total number of new csv files created. Add a progress indicator for the current processed csv number out of the total.

write a python script that takes one input arg, a relative directory. IT should look in that relative directory for all csv files. The csv files have a DATE (4 digit year only) and PRCP column. For each DATE year, from 1974 to 2023, it should calculate the average and median values of MULT in that year across ALL files, creating two timeseries pairs of dates from 1974 to 2023 and average and median MULT values across all files for those dates. It should then create a linear MSE regression of both of these timeseries, creating one for the average MULT values and one for the median mult values. Then it should plot all 4 of these (2 timeseries, two linear regressions) on a properly labeled plot with a legend using matplotlib. It should save this plot to an image output.png or something similar. Then it should calculate two values. One is the multiple of all AVERAGE mult values from 1974 to 2023. The other is the multiple of all MEDIAN mult values from 1974 to 2023. It should print these out to console.
