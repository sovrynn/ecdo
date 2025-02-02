Workflow:
- get the stations and their timeseries in a folder
- generate the output jsons
- use the regression script to get the cumulative values in console
- convert the cumulative values by putting them in a text file and converting to csv
- plug those csv values into some visualization tool

# INTERANNUAL VARIATION UNITS

Interannual variation of monthly mean sea level in meters

# Initial reactions

So, based on the linear confidence lines, these don't actually provide anything useful imo, as they always form a fan shape.

I think TES may have done his own analysis using his own statistical methods.

However there may be a shortcut - these guys provide "interannual variation from the linear trend" data. Fitting a trendline on this data might show an increase in MSL range.

# Interannual variation

Not that complicated I think - just take the absolute value? And then a trendline?

# Prompt

Write a python script that takes one input arg, a relative filename. That filename is a csv.

The data starts on the 7th line, 3 columns. The first is the year. The second is the month. The third is the value.

I want you to append the month to the year with a dash, and then make the third value positive, and then write the resulting two values, space separated, one per line, to an output file with the same filename to folder data-abs-val

# Prompt

Write a python script that takes one input arg, a relative directory.

In that directory are .csv files. For each one the script should do the following.

The rows have 2 space separated values, date in YYYY-MM format, and then a value.

The script should perform a linear regression on the values in each file and print out the slope for each to console together with thefilename.

# prompt

Write a python script that takes one input arg, a relative filename

From the content of that filename it should parse all 7 digit numbers

And write them one per line

to an output file output.txt

# prompt

Write a python script that takes one input arg, a relative filename

Each line on that filename has a 7 digit number (once stripped)

for each number get the response from calling https://tidesandcurrents.noaa.gov/sltrends/data/9410170_intannvar.csv , replacing the 7 digit number in the URL with the 7 digit number in question

Save the result to X.txt, replacing X with the 7 digit number, to folder data-intannvar-scrape

Print out a progress indidcator with the total number of files downloaded out of the total number to download

# regression

9410230.txt: slope = 0.000072
1820000.txt: slope = 0.000094
8737048.txt: slope = 0.000070
9440910.txt: slope = 0.000015
8461490.txt: slope = 0.000251
8720030.txt: slope = 0.000037
1612480.txt: slope = 0.000009
9416841.txt: slope = 0.000071
8725520.txt: slope = 0.000048
8774770.txt: slope = -0.000026
8510560.txt: slope = 0.000109
8728690.txt: slope = 0.000063
9468756.txt: slope = -0.001210
9453220.txt: slope = 0.000038
8761927.txt: slope = -0.000188
9497645.txt: slope = 0.000254
8638610.txt: slope = 0.000132
8726384.txt: slope = -0.000197
8635750.txt: slope = -0.000070
9751401.txt: slope = -0.000202
1619910.txt: slope = -0.000120
9461380.txt: slope = -0.000036
9459450.txt: slope = 0.000267
9412110.txt: slope = -0.000016
8723970.txt: slope = 0.000067
8418150.txt: slope = 0.000088
8651370.txt: slope = -0.000050
8726674.txt: slope = -0.000405
9452210.txt: slope = 0.000044
8723214.txt: slope = 0.000183
8729840.txt: slope = 0.000174
9444090.txt: slope = 0.000042
8574680.txt: slope = 0.000084
8779748.txt: slope = -0.000001
8518750.txt: slope = 0.000011
8658120.txt: slope = 0.000181
9451600.txt: slope = 0.000109
8594900.txt: slope = 0.000172
8449130.txt: slope = 0.000206
9415144.txt: slope = -0.000627
8516945.txt: slope = 0.000158
9413450.txt: slope = -0.000081
8631044.txt: slope = 0.000038
9449424.txt: slope = 0.000046
8575512.txt: slope = 0.000187
8721604.txt: slope = -0.000459
1617760.txt: slope = 0.000081
9410170.txt: slope = 0.000121
8779770.txt: slope = -0.000008
9418767.txt: slope = 0.000003
9435380.txt: slope = 0.000031
9431647.txt: slope = -0.000251
8419870.txt: slope = 0.000106
8772471.txt: slope = -0.000049
9759110.txt: slope = 0.000047
9410660.txt: slope = 0.000076
8545240.txt: slope = 0.000043
1617433.txt: slope = 0.000648
8761724.txt: slope = -0.000196
8638901.txt: slope = -0.000138
8670870.txt: slope = 0.000206
9414750.txt: slope = 0.000109
8636580.txt: slope = -0.000119
9454050.txt: slope = 0.000045
9452400.txt: slope = -0.000064
8573927.txt: slope = -0.000226
9432780.txt: slope = 0.000112
8661070.txt: slope = -0.000038
9462620.txt: slope = 0.000030
9439040.txt: slope = -0.000051
1611400.txt: slope = 0.000006
1612340.txt: slope = 0.000001
8551910.txt: slope = -0.000170
9455090.txt: slope = 0.000014
8724580.txt: slope = 0.000130
8452660.txt: slope = 0.000169
8778490.txt: slope = -0.000038
8413320.txt: slope = 0.000087
8726520.txt: slope = 0.000041
8531680.txt: slope = 0.000134
8557380.txt: slope = 0.000168
8720218.txt: slope = 0.000158
8729210.txt: slope = -0.000368
1630000.txt: slope = 0.000293
9415020.txt: slope = -0.000159
2695535.txt: slope = 0.000015
9455920.txt: slope = -0.000350
9457292.txt: slope = -0.000052
8577330.txt: slope = 0.000204
9751639.txt: slope = -0.000150
8771450.txt: slope = -0.000023
9450460.txt: slope = 0.000011
8770822.txt: slope = -0.000240
9454240.txt: slope = -0.000153
8771341.txt: slope = -0.000107
9447130.txt: slope = 0.000062
8722670.txt: slope = 0.000122
9455760.txt: slope = -0.000166
2695540.txt: slope = 0.000006
8770613.txt: slope = 0.000251
8652587.txt: slope = -0.000077
1770000.txt: slope = 0.000041
9437540.txt: slope = 0.000004
9755371.txt: slope = 0.000029
9455500.txt: slope = -0.000282
8632200.txt: slope = 0.000162
9443090.txt: slope = 0.000013
8635027.txt: slope = -0.000185
8656483.txt: slope = 0.000127
8571892.txt: slope = 0.000055
9414290.txt: slope = -0.000007
8729108.txt: slope = -0.000056
8410140.txt: slope = 0.000065
9411340.txt: slope = 0.000028
8727520.txt: slope = 0.000201
9449880.txt: slope = 0.000066
8467150.txt: slope = 0.000184
8637689.txt: slope = 0.000135
8536110.txt: slope = -0.000053
9410840.txt: slope = 0.000031
9463502.txt: slope = -0.000323
8454000.txt: slope = 0.000245
8573364.txt: slope = -0.000051
8534720.txt: slope = 0.000110
9444900.txt: slope = 0.000010
1890000.txt: slope = 0.000126
8665530.txt: slope = 0.000140
8447930.txt: slope = 0.000216
8443970.txt: slope = 0.000130
8747437.txt: slope = -0.000053
1615680.txt: slope = 0.000094
8735180.txt: slope = 0.000128
8771013.txt: slope = 0.000330
8726724.txt: slope = 0.000033
9414523.txt: slope = -0.000378
8570283.txt: slope = -0.000415

# prompt

Write a python script that takes one input arg a relative filename.

In that filename it should parse the last word, which will be a positive or negative float number, on every line.

It should calculate the mean median and count of these numbers and print out to console.

# prompt

Write a python script that takes one input arg a relative folder.

In that folder it should parse each file, which has one data row per line, with two values space separated. The first value is a date in in YYYY-MM format.

The script should bucket the number of files startin in each year, and print out to console. (The number of files with years starting in 1950, 1951, 1952, etc)

# prompt

Write a python script that takes one input arg a relative folder.

In that folder it should parse each file, which has one data row per line, with two values space separated. The first value is a date in in YYYY-MM format.

The script should check the date of the first line. If it starts later than 1950-01, the scirpt should skip it. If the first line date starts at or before 1950-01, the script should remove, potentially, leading lines until the data starts at 1950-01. Then the script should copy that output to a file with the same filename in folder output.

At the end print out the total number of files copied.

# prompt get locations

write a python script that takes one input arg a relative folder.

In that folder it shouuld parse each file and create an output file in folder station-locations with the same filename

ESsentially in the inptu folder it should parse each filename, which will be a 7 digit number (and .txt extension). It should look in local file rawstationids.txt for a line starting with that 7-digit number. if nto found, fail the script

Then, on the line containing the 7-digit number, the script should parse everything coming after the 7digit number and save it in the corresponding output file.

At the end print out the total number of files processed.

# prompt get coords

done

# prompt gen json

write a python script that takes one input arg a relative folder.

In that folder it shouuld parse each file and create an output json in folder output-json.

Each file in the folder has one data row per line, two values, space separated

The first is a date in YYYY-M or YYYY-MM format dependenig on whether the monht has 1 or two digits

Second is a value

The dates should be converted to YYYY-MM format only (by prepending 0 to the month when necessary)

Then three values should be parsed:
- NAME, the stripped content of a file with the same filename in folder "station-locations"
- LAT, the first word of stripped content of a file with the same filename in folder "station-coords"
- LON, the second word of stripped content of a file with the same filename in folder "station-coords"

Then the json should be put in this format:

{
  "name": "Variance From Linear Sea Level Trend (NAME)",
  "description": "Source: NOAA https://tidesandcurrents.noaa.gov/sltrends",
  "global": false,
  "lat": LAT,
  "lon": LON,
  "values": [
    {
      "date": "19600101",
      "value": 6
    },
    {
      "date": "19610101",
      "value": 8
    },
    ...

replacing the values list with the values from the original file

# prompt regression

Write a python script that does the following.

It should take one input arg a relative directory.

In that directory it should parse json files.

Each json file is in the following format

{
  "name": "Variance From Linear Sea Level Trend (NAME)",
  "description": "Source: NOAA https://tidesandcurrents.noaa.gov/sltrends",
  "global": false,
  "lat": LAT,
  "lon": LON,
  "values": [
    {
      "date": "19600101",
      "value": 6
    },
    {
      "date": "19610101",
      "value": 8
    },
    ...

I want you to, for all the json files in that directory, combine all the values for each date, and perform a linear regression on them, and print out for me the slope, along with the summed values, with the corresponding date, to console.