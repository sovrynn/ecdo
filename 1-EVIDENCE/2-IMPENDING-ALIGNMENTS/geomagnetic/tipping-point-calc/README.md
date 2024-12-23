So there's two basic steps to this.

0. wrangle and get everything setup
1. Generate a single timeseries dataset for SAA s.a.
2. Fit that timeseries to the "tipping point" equation
3. an animation to show the field strength gradient over time

# Key concerns? Strength of geomagnetic field going back till 1590

One of the key concerns here is that prior to 1830, the gufm1 model doesn't actually calculate the strength of the geomagnetic field through any measurements.

However, at 1830, the SAA extent is approximately 5% of the Earth's surface, and it's 20% now. These are verified through measurements. Additionally, the weakening dipole field is established on even longer timeframes through archaeomagnetic measurements, which should lead us to believe that anomalies like the SAA must have been less prominent back then as well, since the total energy of the field is constant, as per the late Ned Benton. (See PRESENT-CLIMATE-ANOMALIES/geomagnetic/dipole-strength)

Read this summary from GPT:

## GPT Summary on how the STRENGTH of the field was calculated for historical periods

Yes, the authors discuss the strength of the geomagnetic field throughout the interval from 1590 to 1990, albeit indirectly. Their model, **gufm1**, is focused on reconstructing the magnetic field morphology (its spatial structure) and temporal variations at the core-mantle boundary (CMB) over this period. However, intensity (strength) of the field is also addressed in their methodology:

1. **Before 1832 (Scale Factor for Field Strength):**
   - They acknowledge that measurements before Carl Friedrich Gauss's method of determining absolute field intensities in 1832 lack direct intensity information. Hence, they rely on assumptions about the dipole moment's decay over time to scale the intensity of the reconstructed field. Specifically, they use a decay rate of 15 nT/year (as suggested by Barraclough in 1974) to estimate field strength in earlier times.

2. **Post-1832 (Direct Field Strength Measurements):**
   - For this period, they incorporate Gauss's method-derived intensity measurements into their dataset. These include horizontal intensity (H), total intensity (F), and the three components (X, Y, Z) of the field vector.

3. **Mathematical Representation of Field Strength:**
   - The model represents the field as a sum of spherical harmonics, which include coefficients that encapsulate the field's strength and variation in time and space. The strength of the radial magnetic field component \(B_r\) is a primary focus at the CMB.

While their primary goal is to model the field's morphology and secular variation (changes over time), their inclusion of intensity data post-1832 and assumptions about intensity scaling pre-1832 provide indirect insights into the strength of the geomagnetic field from 1590 to 1990.

# Datasets

Both the coefficients for gufm1 and IGRF 14 are in here. Which is all I think I really need actually.

IGRF 14. https://www.ncei.noaa.gov/products/international-geomagnetic-reference-field

gufm1: https://royalsocietypublishing.org/doi/10.1098/rsta.2000.0569
- Source: https://www.ncei.noaa.gov/news/tracking-changes-earth-magnetic-poles

gufm1 is actually dope. Check it out

# Step 0 - gathering the base models and being able to manipulate them

IGRF-14 goes from 1900 to present, pretty much. They just released it on Nov 2024 which is as up-to-date as it gets, although I don't know what the actual date cutoff is for that, since I think they use forward modeling to bring the "model" all the way till 2030. Pretty sketch tbh.

## Getting the full timeline - combining models

I'll have to combine gufm1 and igrf14 to get a complete record from 1590 to 2025. From what I understand, its accurate up till the present, which means we would actually get an extra 15 years of data compared to the original calculation.

## One thing I should do

Just try generating simple statistics - for example, lowest nt value, the spread of nt values, at different dates, to make sure you've got the data right.

Can try plotting some of them on a world map as well, you can do it on a 2d projection so it's not so complicated.

# Step 1

6371.2 km radius is default for surface area calculations of geomagnetic field.

## Method for getting the 32,000 isoline timeseries

So the way this will be done is to brute force the spherical geomagnetic grid, essentially, for each time value. You'll add up the total number of grid values that are at or under the threshold.

I'm not sure if I need flood fill for this. How do I make sure I don't include other random weak geomagnetic points? GPT says there are some... think I should verify with some diagrams I've got saved in the repo

# Step 2

This part will be a pain but easier than the first I think.

# V-mod Working Group

Some contact info for the people running this IGRF-14 thing on the site here: https://www.ncei.noaa.gov/services/world-data-system/v-mod-working-group

# TODO

Recreate the error checking work in which Desantis calculated 2060