Find a dataset, get the coords, plot it, you know the drill...

# Dataset

Smithsonian Institution

1000+ Holocene volcanoes.

https://volcano.si.edu/volcanolist_holocene.cfm

Lit!

## Downloaded it from here

https://fsm-data.sprep.org/dataset/volcanoes-world-global-volcanism-program

## Downloading through ftp... wtf?

https://sos.noaa.gov/catalog/datasets/volcano-locations/

# NCEI

1500 volcano locations

https://catalog.data.gov/dataset/global-volcano-locations-database1

https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ngdc.mgg.hazards:G02135

# WHy is it so hard to find a dataset.

Getting scrubbed off the web I see...

# Nice google earth kmz stuff

https://www.digitalatlasproject.net/themes/plate-tectonics/gearth-kml-kmz-files

I FOUND IT HERE!!!

# prompt

Write a python script that does teh following. It should take one input arg a relative filename. It should look in it for all lines with, once stripped, matching "<Placemark>".

For every such line it should look on the next line. Verify that it, once stripped, starts with <name>. If it doesn't print the line number out to console and fail the script. If it does, insert "<!--" before the start of "<name>" and insert "-->" after the last ">" character on the line.

Write the output file to GVP-edited-no-names.kml.