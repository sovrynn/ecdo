# Google Earth

## Google Earth Pro

Loads both KML and KMZ files. Very easy to download these files and boot them up into Google Earth Pro.

In order to get underwater elevation paths you need to turn "Terrain" off before you draw the path.

You can use the script in `dev/rotational-path-kml` to generate rotation paths. Alternatively just center a circle object using GEP on the location.

## Google Earth Engine

DEM datasets: https://developers.google.com/earth-engine/datasets/tags/dem

Good datasets:
- Macro: https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1
- Lidar DEM, micro: https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V3_2

See the API docs here: https://developers.google.com/earth-engine/apidocs/
- `Map.add()`: https://developers.google.com/earth-engine/apidocs/map-add

Water management guide: https://courses.spatialthoughts.com/gee-water-resources-management.html

It seems you can do all kinds of things in the code editor; raise the sea level, change the contrast, add all kinds of UI elements, draw polygons, get elevation paths, etc.

Apparently you can export KMZ/KML files from Google Earth Engine where you have access to a ton of datasets which is super nice.
