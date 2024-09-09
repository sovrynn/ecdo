# Google Earth

## Google Earth Pro

Loads both KML and KMZ files. Very easy to download these files and boot them up into Google Earth Pro.

In order to get underwater elevation paths you need to turn "Terrain" off before you draw the path.

You can use the script in `dev/rotational-path-kml` to generate rotation paths. Alternatively just center a circle object using GEP on the location.

## Google Earth Engine

### Datasets

DEM datasets [here](https://developers.google.com/earth-engine/datasets/tags/dem). There actually aren't too many built-in ones, particularly high-res ones for places outside of the West. Apparently you can upload datasets though.

Good datasets:
- ETOPO (global 30 arcsec): https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1
- Lidar DEM (global 30m, 1arcsec res): https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V3_2
	- Lot of detail but is quite slow to load unfortunately

Need to check out:
- Drainage: https://developers.google.com/earth-engine/datasets/catalog/WWF_HydroSHEDS_03DIR
- Landforms: https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_Global_ALOS_landforms
- Topographic position: https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_Global_ALOS_mTPI
- 18 years of floods: https://developers.google.com/earth-engine/datasets/catalog/GLOBAL_FLOOD_DB_MODIS_EVENTS_V1

Other datasets (verdict unclear):
- Hydrography (gradient not working??): https://developers.google.com/earth-engine/datasets/catalog/MERIT_Hydro_v1_0_1
- USGS 1m (incomplete, or very slow to load): https://developers.google.com/earth-engine/datasets/catalog/USGS_3DEP_1m
- Google maps uses Landsat: https://developers.google.com/earth-engine/datasets/catalog/landsat

You can modify parameters and styles of the datasets within the little code snippets they give. For example you can change the elevation range to get closer detail in a smaller range. You can also change the colors.

You'll find that for close up analysis, you need 1m.

### Earth engine community repo

Treasure trove - Earth engine community repo: https://github.com/google/earthengine-community
- Tutorials here: https://github.com/google/earthengine-community/tree/master/tutorials
	- Start with the beginner's cookbook
- Guides
	- good stuff in image, image collections, and "getting started"

#### Beginners cookbook

Data types:
- Geometry
- Feature
	- Geometries associated with specific properties. You can run all kinds of operations on these
- FeatureCollection
- Image
- ImageCollection

Rasters are images consisting of matrixes of values representing some attribute.

Rasters can have different bands, that correspond to different variables, within the same dataset.

#### Guides

`images01.js` shows you have to get info about image bands and metadata properties.

### Other dev resources

See the API docs here: https://developers.google.com/earth-engine/apidocs/
- `ui.Map styles`: https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyle
	- styles: https://developers.google.com/maps/documentation/javascript/style-reference#stylers
		- gamma for contrast
		- lightness, invert_lightness
		- hue
- `Map.add()`: https://developers.google.com/earth-engine/apidocs/map-add

Water management guide: https://courses.spatialthoughts.com/gee-water-resources-management.html

### Earth engine code snippets

Just adding a point, how do you add a point? Lon comes first.

```
Map.addLayer(ee.Geometry.Point([121, 0]), {color: 'red'});
```

### Earth Engine other notes

Lat/lon for markes are reversed.

Apparently you can export KMZ/KML files from Google Earth Engine where you have access to a ton of datasets which is super nice.
