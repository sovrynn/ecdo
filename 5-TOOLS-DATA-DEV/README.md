# Technical Tools

This folder is dedicated to tools, data, and development resources that help investigate the ECDO.

## Mapping

For elevation, [TessaDEM](https://tessadem.com/) is nice. Interactive web map is [here](https://en-gb.topographic-map.com/map/?center=14.43468%2C0.17578&popup=68.02073%2C175.78125).

Google's mapping tools are excellent:
- Google Earth: https://www.google.com/earth/about/versions/
- Google Maps: https://www.google.com/maps/d/
- Google Earth Scripting (need Google account): https://code.earthengine.google.com
- Google Earth Pro (desktop app)

Here is a decent interactive web [flooding map](https://floodmap.net).

A basic alternative to Google Earth is [earth.nullschool.net](https://earth.nullschool.net).

## Ocean floor mapping

Ocean mapping:
- [NOAA Ocean Exploration Data Atlas](https://ncei.noaa.gov/maps/ocean-exploration-data-atlas)

## Globe mapping libraries

Matplotlib + basemap, geopandas

- https://github.com/openglobus/openglobus
- https://cesium.com/platform/cesiumjs

## Lat/long tools

Here is a [lat/long distance calculator](https://latlongdata.com/distance-calculator).

Here is a [lat/long elevation webapp](https://latlongdata.com/elevation).

Lat/long follows a Cartesian coordinate system. East is right on the x-axis, North is up on the y-axis.

In order to find how much a point rotates about a pivot, find the latitude difference, the distance from the pivot, and then rotate the latitude around the pivot's latitude, extending the same distance.

## Solar system

NASA solar system simulator: https://science.nasa.gov/eyes/

## Search engine

Google search tricks:
- https://www.freecodecamp.org/news/how-to-google-like-a-pro-10-tips-for-effective-googling/
- `X AROUND([word #]) Y`

SearXNG metasearch: https://searx.nobulart.com

## Misc

Youtube video download: [yt-dlp](https://github.com/yt-dlp/yt-dlp)

## TODO Other Tools

Google earth engine scripting

I'd really like topography lines on Google Earth

Ask Nobulart about these:
- KML: "Those files provide various feature overlays to the map. File menu > Open. ECDO paths can be drawn using the Measure > Circle tool. Draw a circle with the center on the nearest pivot to see the ECDO path. Some examples contained in the attached KML."
- False colour maps - STM15 digital elevation dataset (an add-on for GEP)
