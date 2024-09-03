# Dev Resources

## Contents

- `scripts`: Scripts for generating KML files and 2D maps for rotational path.

## Globe mapping libraries

- Matplotlib:
	- basemap (used in `scripts/rotational-path-2D`)
	- Contour
- geopandas
- https://github.com/openglobus/openglobus
- https://cesium.com/platform/cesiumjs

Google earth engine, topography
- https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1
- https://www.ngdc.noaa.gov/mgg/global/relief/ETOPO1/tiled/ice_surface/etopo1_ice_surface.kmz

## Repo text find-and-replace

Use `find /path/to/search -type f -name "*.txt" -exec sed -i 's/old-text/new-text/g' {} +`.
