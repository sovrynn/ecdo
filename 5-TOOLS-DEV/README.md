# Technical Tools

This folder is for tools, data, and development resources that help investigate the ECDO.

## Contents

- `dev`: Scripts for generating rotational path KML files and 2D visualizations.
- `google-earth`: Google Earth Pro and Google Earth Engine resources.
- `datasets`: Links to various datasets.

## Mapping

For elevation, [here](https://en-gb.topographic-map.com/map/?center=14.43468%2C0.17578&popup=68.02073%2C175.78125) is an excellent interactive web map from [TessaDEM](https://tessadem.com/). 

Here is an interactive web [flooding map](https://floodmap.net).

Google's mapping tools are excellent:
- Google Maps: https://www.google.com/maps/d/
- Google Earth: https://www.google.com/earth/about/versions/
- Google Earth Pro (desktop app)
- Google Earth Scripting (need Google account): https://code.earthengine.google.com

Washington state lidar portal: https://lidarportal.dnr.wa.gov/

3D globe, temperature data: https://earth.nullschool.net

Ocean mapping:
- Google Earth Pro
- [NOAA Ocean Exploration Data Atlas](https://ncei.noaa.gov/maps/ocean-exploration-data-atlas)

The GEBCO 2030 data set. Spectacular detail. Best map of the oceans made to date.
https://download.gebco.net

## Lat/long tools

Here is a [lat/long distance calculator](https://latlongdata.com/distance-calculator).

Here is a [lat/long elevation webapp](https://latlongdata.com/elevation).

Lat/long follows a Cartesian coordinate system. East is right on the x-axis, North is up on the y-axis.

## Data viz tools

- Google Colab
- KDE LabPlot: https://labplot.kde.org
	- produces LML files

## Paleomagnetic data

Past 50k years: https://geomagia.gfz-potsdam.de/

http://gpmdb.net/

## Fluid dynamics simulation

- [OpenFOAM](https://www.openfoam.com/), open source
- Gerris, open source
- Lattice Boltzmann Method implementations such as Palabos
- SimScale: cloud based, free and paid versions
- Blender

## Search engine

Google search tricks:
- https://www.freecodecamp.org/news/how-to-google-like-a-pro-10-tips-for-effective-googling/
	- Use quotes to get an "EXACT" match
	- Search for a particular filetype with `filetype:<extension>`
- `X AROUND([word #]) Y`

SearXNG metasearch: https://searx.nobulart.com

## Misc

Youtube video download: [yt-dlp](https://github.com/yt-dlp/yt-dlp)

UK Grid dashboard: https://www.gridwatch.templar.co.uk/

Europe nuclear facilities: https://www.nucleareurope.eu/facts-figures/nuclear_facilities/

On-screen protractor: https://github.com/fritzw/pyqtprotractor

## Repo text find-and-replace

Linux: Use `find /path/to/search -type f -name "*.md" -exec sed -i 's/old-text/new-text/g' {} +`.

Mac: Use `find /path/to/search -type f -name "*.md" -exec sed -i '' 's/old-text/new-text/g' {} +`.

# TODO

There's some Google :index search trick I can't seem to find

Lovely visualizations here: https://s-ink.org/gallery