# Prompt (failure)

Write a python script that does the following.

It should take one input arg a relative file.

In that file there is data with this format:

{
  "name": "Rotational Axis Wander (10-year running average), arcseconds",
  "description": "Source: IERS https://www.iers.org/IERS/EN/DataProducts/EarthOrientationData/eop.html",
  "global": true,
  "lat": 38.55,
  "lon": -78.04,
  "values": [
    {
      "date": "18560101",
      "x": 0.077628,
      "y": 0.055903
    },
    {
      "date": "18570205",
      "x": 0.078291,
      "y": 0.062216
    },
    {
      "date": "18580206",
      "x": 0.082535,
      "y": 0.055002
    },
    {
      "date": "18590206",
      "x": 0.075112,
      "y": 0.057152
    },
    ...

The x and y values are in arcseconds. X-axis runs from negative (90 west) to positive (90 east). y-axis runs from negative (longitude 0) to positive (longitude 180 E).

The values are plotted as offsets from true north (90,0).

I want you to multiply these values by like... 100,000. And convert them to lat/lon. And then plot them in a KML file. One marker per coord, a red dot. Label them with the year as well

Finally I want you to parameterize:
- output kml filename
- kml name
- marker icon
- marker size
- marker color

At the top of the script so that I can easily change them.

# prompt

Write a python script that does the following.

It should take one input arg a relative file.

In that file there is data with this format:

{
  "name": "Rotational Axis Wander (10-year running average), arcseconds",
  "description": "Source: IERS https://www.iers.org/IERS/EN/DataProducts/EarthOrientationData/eop.html",
  "global": true,
  "lat": 38.55,
  "lon": -78.04,
  "values": [
    {
      "date": "18560101",
      "x": 0.077628,
      "y": 0.055903
    },
    {
      "date": "18570205",
      "x": 0.078291,
      "y": 0.062216
    },
    {
      "date": "18580206",
      "x": 0.082535,
      "y": 0.055002
    },
    {
      "date": "18590206",
      "x": 0.075112,
      "y": 0.057152
    },
    ...

These x and y values represent displacements from true north (represented by the origin).

I want you to convert these values into lat/lon.

The x-axis represents the great circle at longitude 90 W/ 90 E.

The y-axis represents the great circle at longitude 0/180.

Kindly convert these values into lat/lon. Imagine that the x and y values are not arcseconds, but rather, 1000 km displacements (1 x = 1000 km displacement).

Write the values to an output file output.txt "lat lon year" in yearly order one per line.