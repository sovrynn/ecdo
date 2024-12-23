# gufm1

Write a python script that does the following. Assume you have access to methods
- get_total_field_value(lat, lon, year) that returns a float.
- spherical_cell_area(lat_min, lat_max, lon_min, lon_max, R=6371.0) that returns a float

For every year Y from 1590 (inclusive) to 1944 (inclusive), you should do the following:
- loop over all single degree bounding boxes from latitude -90 to -80 and longitude -180 to 180
- loop over all half-degree bounding boxes from latitude -80 to 80 and longitude -180 to 180
- loop over all single degree bounding boxes from latitude 80 to 90 and longitude -180 to 180

For each bounding box, calculate the midpoint lat/lon, and call get_total_field_value. If get_total_field_value is equal to or less than 32000, then:
- add the midpoint lat/lon to a list of lat/lon coords for Y. These will be written to an output file
- call spherical_cell_area using the bounding box boundaries and add the output to a cumulative cell area sum for Y. These will all be written to an output file later

When finished wiht all the bounding bxoes for Y, write the list of saved lat/lon coords, (one coord per line, space separated, lat first) to Y.txt in relative folder output-gufm1.

When finished with all the years, write the cumulative cell area sums for each year to timeseries.txt in relative folder output-gufm1. Write one value per line, with the year coming first, then the cumulative sum, space separated.
