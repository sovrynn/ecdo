# Google Earth

## Google Earth Pro

Loads both KML and KMZ files. Very easy to download these files and boot them up into Google Earth Pro.

In order to get underwater elevation paths you need to turn "Terrain" off before you draw the path.

You can use the script in `dev/rotational-path-kml` to generate rotation paths. Alternatively just center a circle object using GEP on the location.

## Google Earth Engine

DEM datasets: https://developers.google.com/earth-engine/datasets/tags/dem
- Good datasets:
	- Macro: https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1
	- Lidar DEM, micro: https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V3_2
		- Lot of detail but is quite slow to load unfortunately
	- Google maps uses Landsat: https://developers.google.com/earth-engine/datasets/catalog/landsat
- You can modify parameters and styles of the datasets within the little code snippets they give. For example you can change the gradient range

See the API docs here: https://developers.google.com/earth-engine/apidocs/
- `ui.Map styles`: https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyle
	- styles: https://developers.google.com/maps/documentation/javascript/style-reference#stylers
		- gamma for contrast
		- lightness, invert_lightness
		- hue
- `Map.add()`: https://developers.google.com/earth-engine/apidocs/map-add

Treasure trove - Earth engine community repo: https://github.com/google/earthengine-community
- Tutorials here: https://github.com/google/earthengine-community/tree/master/tutorials

Water management guide: https://courses.spatialthoughts.com/gee-water-resources-management.html

### Earth engine code snippets

Just adding a point, how do you add a point?

	Map.addLayer(ee.Geometry.Point([121, 0]), {color: 'red'});

### Earth Engine other notes

You can place a marker to see lat/lon data. They are reversed.

Apparently you can export KMZ/KML files from Google Earth Engine where you have access to a ton of datasets which is super nice.
