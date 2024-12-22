pyIGRF is a simple Python package for evaluating any generation of the International Geomagnetic Reference Field (IGRF) geomagnetic field model.

The code runs a simple command-line driven menu which allows spot values of the seven main field components (Declination, Inclination, Total Field, Horizontal, North, East and Vertical strength, or D,I,F,H,X,Y,Z) and their respective secular variation to be computed for a given latitude, longitude, altitude and time.

You can also specify the IGRF generation from 1 to 14 (as of November 2024).

Other options include computing a time-series of values for a location over a number of years, or computing values for a grid of latitude and longitude values for a particular date.

The code accepts geodetic (WGS-84) with altitude in km above the WGS-84 ellipsoid or geocentric coordinates with radius in km from Earth's centre (6371.2 is the nominal geophysical surface radius).

Location values in decimal degrees or degrees and minutes. 

There are no validity checks on the models so be aware of errors caused by extrapolation outside the valid range.

Check https://www.ncei.noaa.gov/products/international-geomagnetic-reference-field for validity ranges on each generation as these vary widely.

For example:
IGRF-1 is valid from 01-Jan-1965 to 31-Dec-1979.
IGRF-13 is valid from 01-Jan-1900 to 31-Dec-2024.
IGRF-14 is valid from 01-Jan-1900 to 31-Dec-2029
