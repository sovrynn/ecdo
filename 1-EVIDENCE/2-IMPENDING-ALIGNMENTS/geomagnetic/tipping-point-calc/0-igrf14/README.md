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