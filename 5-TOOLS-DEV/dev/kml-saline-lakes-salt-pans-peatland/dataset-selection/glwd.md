# Method

So I think I can do this a simple way.

First I'll aggregate the data into bigger blocks because it's WAY too fine.

I'll have 4 datasets:
- 1 for saline lake
- 1 for mangrove
- 1 for saltmarsh
- 1 for salt pan

Each "block" will then have a marker if it has a non-zero value.

It's really very simple actually. I can use absolute area or percentage; doesn't matter.

# Data link

https://figshare.com/s/e40017f69f41f80d50df

# Method (deprecated)

So, I'd have to use flood fill on this. It's a really nice dataset though. But honestly wouldn't it just be easier to have one object for saltwater body? Much quicker.

# Salty categories

- **02 Saline lake**: Lakes with high salinity levels.
- **28 Mangrove**: Found in coastal, brackish, or saline water environments.
- **29 Saltmarsh**: Coastal areas dominated by salt-tolerant plants, influenced by salty or brackish water.
- **30 Delta**: Often includes brackish zones where river and sea water mix (not always salty).
- **31 Other coastal wetland**: Likely influenced by saline or brackish water due to coastal location.
- **32 Salt pan, saline/brackish wetland**: Specifically associated with saline or brackish water conditions.

# Granularity

It's EXTREMELY granular.

15 arcsecond = 1/240 of a lat/lon degree

15 arcsecond granularity means splitting each degree into 240 equal parts, with each step corresponding to about 463 meters (0.463 km) at the equator for both latitude and longitude. The longitudinal distance decreases with latitude.