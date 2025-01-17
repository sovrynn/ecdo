# Choosing a dataset

I mean, worst comes to worst you can always make multiple KML files... can't hurt, although you will certainly waste your time.

It's a tossup between wikipedia and glwd.

With wikipedia, I'll manually scrape a curated lits of saltlakes and saltpans. Then I'll have to feed them into the Google API to get coordinates. It'll be 1-to-1 and clean. But it requires manual work. Which is actually not that difficult.

With GLWD, I'll have to run some kind of fancy flood fill algo. There will be many datapoints, probably much more than I desire. But the data is already organized by lat/lon so it'll be extremely precise. Like, extremely.

They both have their merits. Both will take a day of work.

# Dataset option 1: wikipedia

Look here: https://en.wikipedia.org/wiki/Category:Saline_lakes

And here for salt pans: https://en.wikipedia.org/wiki/Category:Salt_flats_by_country

You could also do salt mines

# dataset option 2

https://www.hydrosheds.org/products/glwd?utm_source=chatgpt.com

The Global Lakes and Wetlands Database (GLWD) version 2 provides a comprehensive and seamless global map of inland surface waters distinguished into 33 waterbody and wetland types.

Technical docs: https://data.hydrosheds.org/file/technical-documentation/GLWD_TechDoc_v2_delta.pdf

This one has both saline lakes and salt pans!!! And a couple more.

# Dataset option 3

https://gee-community-catalog.org/projects/salinity/?utm_source=chatgpt.com

Global Surface water and groundwater salinity measurements (1980-2019)

This data contains a new global salinity database, compiled from electrical conductivity (EC) monitoring data of both surface water (rivers, lakes/reservoirs) and groundwater locations over the period 1980-2019. The database includes information from over 16.3 million samples, from 45,103 surface water locations and 208,550 groundwater locations around the world.