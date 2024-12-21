So there's two basic steps to this.

1. Generate a single timeseries dataset for SAA s.a.
2. Fit that timeseries to the "tipping point" equation

# Your best friends

I think I should really lean on GPT o1 for this task. It's going to be a complete nightmare if I can't test things properly. The issue is - without understanding the source code, when it comes to such complex equations, can I really be sure it's working as intended?

It'll really help to stick with INTERFACES rather than manipulating EQUATIONS.

You can pass o1 the documentation, ask it to literally write testing code, and just verify the output

# Questions I still need to answer

Can I use flood fill to lazily calculate the required values? I should have enough compute not to need this.

So, I still need to figure out whether the original authors combined gufm1 and igrf and if so, whether they needed any special methods to do it properly. Because igrf doesn't go back that far and it seems fitting the voight equation requires lots of data...

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