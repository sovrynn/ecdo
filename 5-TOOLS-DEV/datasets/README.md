# Datasets

## LIDAR DEM

- Huge NASA index: https://search.earthdata.nasa.gov
- North america: https://apps.nationalmap.gov/lidar-explorer/#/
- European, North American, Australian data: https://softree.com/free-lidar
- Korea: https://ngii.go.kr/eng/content.do?sq=298

## Solar System

- JPL Ephemeris: https://ssd.jpl.nasa.gov/horizons/app.html
- SSB (Solar System Barycenter) Ephemeris: https://landscheidt.wordpress.com/6000-year-ephemeris/

## US NOAA (National Oceanic and Atmospheric Administration) Datasets

NOAA dataset index: https://www1.ncdc.noaa.gov/pub/data/

North pole wander: https://ncei.noaa.gov/products/wandering-geomagnetic-poles
- No idea how up to date this one is, the data goes to 2025 which is in the future. I believe some of the data is projected, not real

## ESA Swarm

Swarm is a European Space Agency mission to study the Earth's magnetic field.

Swarm web gateway: https://earth.esa.int/eogateway/missions/swarm

They have an interactive web app called VirES to interact with Swarm data: https://vires.services

## Topography Data

Preexisting Topography KMLs (all bad):
- [earthpoint](https://www.earthpoint.us/topomap.aspx ) is bad
- [ngmdb.usgs.gov](https://ngmdb.usgs.gov/topoview) is so fractured
- [esri world topo map (ge-map-overlays)](https://ge-map-overlays.appspot.com/esri/world-topo-map) is awful

There is an index of SRTM elevation data [here](https://srtm.kurviger.de) at srtm.kurviger.de but after working with this one for a few hours I deemed the data is bad. Elevations of positive 1000m in the sea and duplicated elevation all over. Unredeemable.

Google Earth Engine, integrated with Google Cloud, has the data AFAIK.

## TODO

Lidar DEM data, very detailed
- See search.earthdata.nasa.gov

SWARM data and readings from 160 land based observatories: http://www.geomag.bgs.ac.uk/research/modelling/WorldMagneticModel.html