# Dev Resources

## Contents

ECDO maps:
- `map-rotational-path-2d`: Generates a 2D map showing lines of rotation for a point during S1 -> S2.
- `map-s2-2d`: Generates a 2D map of S2 with new latitude lines labeled.
- `map-equatorial-bulge`: Generates a 2D map of the equatorial bulge shifts.

ECDO KML:
- `rotational-path-kml`: Generates a KML file showing lines of rotation for a specified location during S1 -> S2.

Misc:
- `downscale-mp4`: Scales mp4 video down under the 10 MB Github-hosted video file size limit.
- `remove-newlines.py`: Formats text copied from PDF files.

## Globe mapping libraries

- Matplotlib:
	- basemap (used in `scripts/rotational-path-2D`)
	- Contour
- cartopy (basemap alternative, has rotatedpole viz)
- geopandas
- https://github.com/openglobus/openglobus
- https://cesium.com/platform/cesiumjs

Google earth engine, topography
- https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1
- https://www.ngdc.noaa.gov/mgg/global/relief/ETOPO1/tiled/ice_surface/etopo1_ice_surface.kmz

