# Google Earth

## Google Earth Pro

Loads both KML and KMZ files. Very easy to download these files and boot them up into Google Earth Pro.

In order to get underwater elevation paths you need to turn "Terrain" off before you draw the path.

You can use the script in `dev/rotational-path-kml` to generate rotation paths. Alternatively just center a circle object using GEP on the location.

## Google Earth Engine

### Datasets

DEM datasets [here](https://developers.google.com/earth-engine/datasets/tags/dem). There actually aren't too many, particularly high-res ones for places outside of the West.

Good datasets:
- ETOPO (global 30 arcsec): https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1
- Lidar DEM (global 30m, 1arcsec res): https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V3_2
	- Lot of detail but is quite slow to load unfortunately
- USGS 1m (incomplete): https://developers.google.com/earth-engine/datasets/catalog/USGS_3DEP_1m
- Google maps uses Landsat: https://developers.google.com/earth-engine/datasets/catalog/landsat

You can modify parameters and styles of the datasets within the little code snippets they give. For example you can change the gradient range

You'll find that for very close up analysis, you need 1m.

### Code Documentation, Guides

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

Just adding a point, how do you add a point? Lon comes first.

```
Map.addLayer(ee.Geometry.Point([121, 0]), {color: 'red'});
```

### Earth Engine other notes

Lat/lon for markes are reversed.

Apparently you can export KMZ/KML files from Google Earth Engine where you have access to a ton of datasets which is super nice.
