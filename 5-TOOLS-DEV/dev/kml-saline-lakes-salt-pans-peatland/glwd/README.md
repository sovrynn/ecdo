I haven't been able to copy over all the files due to filesize/count limits.

The exact data I used is GLWD_v2_delta_area_by_class_ha_tif.zip, you can download it from WoKaS online.

# Overview

Steps:
1. Load up the data into python and make sure you can manipulate it
2. Compress the data and generate a new dataset in your own format
3. Generate the KML file from the dataset

# Step 1

```
Classes:
02: saline lake
28: mangrove
29: saltmarsh
32: salt pan, saline/brackish wetland

Peat (6 categories):
22 Arctic/boreal peatland, forested
23 Arctic/boreal peatland, non-forested
24 Temperate peatland, forested
25 Temperate peatland, non-forested
26 Tropical peatland, forested
27 Tropical peatland, non-forested
```

# Step 2

Knowing how much 70k+ earthquake objects completely freezes up google earth (likely single-threaded)... you can't create too many objects

Anyways if its too laggy, or too non-granular, you can always redo it

# CONCLUDING Comments

As I expected, the mangrove and saltmarsh categories are completely coastal and useless.

However the saline lake and salt pan data is amazing.

The saline lake data completely supersets the salt pan/wetland data. However, since I think the salt pan/wetland data adds more texture to the data rather than blanket labeling everything a salt lake, I believe the salt pan/wetland data should take priority. What ISN'T considered a salt pan/wetland but is a saline lake is surely a saline lake, whereas something that qualifies as both should be qualified a salt pan/wetland.

# SOURCE

Original glwd V1 research paper: https://www.sciencedirect.com/science/article/abs/pii/S0022169404001404?via%3Dihub

Technical docs: https://data.hydrosheds.org/file/technical-documentation/GLWD_TechDoc_v2_delta.pdf

Cool website: https://www.hydrosheds.org/products/glwd?utm_source=chatgpt.com#downloads