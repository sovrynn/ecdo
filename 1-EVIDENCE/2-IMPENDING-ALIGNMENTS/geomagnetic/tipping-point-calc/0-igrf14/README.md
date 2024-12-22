# IGRF-14

IGRF 14. https://www.ncei.noaa.gov/products/international-geomagnetic-reference-field

Wiki page: https://en.wikipedia.org/wiki/International_Geomagnetic_Reference_Field

# Time range

1900 to 2030. Obviously it's EOY 2024 right now.

As far as I understand:
- up till 2020 is practically set in stone.
- 2020-2025 should incorporate recent measurements
- 2025-2030 completely predictive

# Using the python tool

So I'm just using the spherical model.

The radial distance in km is from the Earth's core, and their min value is 3485 km (exclusive). However the Earth's surface is 6371.2 km. So that's what you should use. It gets weaker the further you get from the core.

## What the tool prints out (from the documentation in the package)

The code runs a simple command-line driven menu which allows spot values of the seven main field components (Declination, Inclination, Total Field, Horizontal, North, East and Vertical strength, or D,I,F,H,X,Y,Z) and their respective secular variation to be computed for a given latitude, longitude, altitude and time.

# How to use the scripts in here

You need to download that python 

# Dates

THis is in the README of the python entry file LOL

```
     The main-field models for 1900.0, 1905.0,..1940.0 and 2025.0 are 
     non-definitive, those for 1945.0, 1950.0,...2020.0 are definitive and
     the secular-variation model for 2025.0 to 2030.0 is non-definitive.
```