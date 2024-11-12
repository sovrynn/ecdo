# Health OCR Data Parsing (hard copy here)

Source: https://www.poleshiftnews.com/earths-health-at-a-glance.html

The data has been parsed from the PDF text into csv by GPT, and then manually verified:

- Atmospheric CO2 PPM and oxygen % verified to be within a tight range
- radiation background count, volcanos, and largest earthquake verified manually to match the data
- muons per hour normalized, (it is either 2 values split into UK or Canada, or just a single value, net heuristic. When there is only one number, the second row is empty) and sunspot number verified manually to match the data
- rest unverified

Volcanoes show clear up-trend. Rest noisy.

## Columns

Atmospheric CO2 PPM
Atmospheric oxygen %
Magnetic North Pole position
- Latitude
- Longitude
Radiation background count USV/h
Volcanos in eruption
Largest earth quake 24 hours
Muons per hour per meter square UK
Muons per hour per meter square Canada
Sunspot number
Geomagnetic Field
Sola X Rays
Jet stream conditions
Global magnetometers
- Hong Kong
- Canada
- Gold coast Australia
- Perth Australia
- Tucson Arizona
Magnetosphere strength

## First row

 Ata glanceEarthshealth 15/11/2021
‘AtmosphericCO2 PPM ‘Atmosphericoxygen% MagneticNorthPoleposition
Latitude
Longitude
Radiation back groundcountUSV/h Volcanos ineruption
Largestearth quake24hours
Muons perhourpermetersquareUK MuonsperhourpermetersquareCanada 821
Sunspotnumber GeomagneticField SolaXRays Jetstreamconditions Globalmagnetometers
HongKong canada GoldcoastAustralia
PerthAustralia TucsonArizona
Magnetospherestrength
2 quiet
Normal Unstable
Stable Unstable Stable Stable Stable s0uT
450 20.86
82°51,40,04N 120°36,30,82,E 00.14
29
6.1southernIran 532.

## Real

Date: November 15, 2021
450
20.86
(skip Magnetic north pole position row)
82.51,40,04 N
120.36,30,82 E
00.14
29
6.1 southern Iran
532
821
2
quiet
Normal
Unstable
(skip Global magnetometers)
Stable
Unstable
Stable
Stable
Stable
50uT

## Prompt

I want you to read this data. It is copied from a PDF. It is the data for a single page that has two columns of data representing data for a certain date. I want you to convert this to a CSV row and return me the CSV row only, nothing else in the result.

In the text data, the column data is together with the column labels. The column labels come first in the text, but they will then be either followed by or mixed with the column data. At least, the column labels and column values will be sequential on their own, but mixed up. You have to parse the column values. Don't worry about the column labels, just give me the plain csv row with only the column data.

These are the 20 column labels ("magnetic north pole position", and "global magnetometers" don't have column values, they are just column label headers):

Date
Atmospheric CO2 PPM
Atmospheric oxygen %
Magnetic North Pole position
- Latitude
- Longitude
Radiation background count USV/h
Volcanos in eruption
Largest earth quake 24 hours
Muons per hour per meter square UK
Muons per hour per meter square Canada
Sunspot number
Geomagnetic Field
Sola X Rays
Jet stream conditions
Global magnetometers
- Hong Kong
- Canada
- Gold coast Australia
- Perth Australia
- Tucson Arizona
Magnetosphere strength

Here is an example paragraph:

 Ata glanceEarthshealth 15/11/2021
‘AtmosphericCO2 PPM ‘Atmosphericoxygen% MagneticNorthPoleposition
Latitude
Longitude
Radiation back groundcountUSV/h Volcanos ineruption
Largestearth quake24hours
Muons perhourpermetersquareUK MuonsperhourpermetersquareCanada 821
Sunspotnumber GeomagneticField SolaXRays Jetstreamconditions Globalmagnetometers
HongKong canada GoldcoastAustralia
PerthAustralia TucsonArizona
Magnetospherestrength
2 quiet
Normal Unstable
Stable Unstable Stable Stable Stable s0uT
450 20.86
82°51,40,04N 120°36,30,82,E 00.14
29
6.1southernIran 532.

This would be the 20 parsed CSV columns:

2021-11-15
450
20.86
82.51.40.04 N
120.36.30.82 E
00.14
29
6.1 southern Iran
532
821
2
quiet
Normal
Unstable
Stable
Unstable
Stable
Stable
Stable
50uT

Just return it to me in a single line, CSV format. Replace all instances of "sour" with 50uT.

Here is the paragraph:

## Paragraph size distribution

12 lines: 3 paragraphs
13 lines: 1 paragraphs
14 lines: 1 paragraphs
15 lines: 5 paragraphs
16 lines: 11 paragraphs
17 lines: 28 paragraphs
18 lines: 39 paragraphs
19 lines: 6 paragraphs
20 lines: 1 paragraphs
21 lines: 1 paragraphs