So there's two basic steps to this.

1. Get the 32,000 nt isoline surface area extent as a timeseries
2. Fit that timeseries to the "tipping point" equation

I think I should really lean on GPT o1 for this task.

# Questions I still need to answer

Can I use flood fill to lazily calculate the required values? I'll need to answer the above question to know this. I should have enough compute for this though.

So, I still need to figure out whether the original authors combined gufm1 and igrf and if so, whether they needed any special methods to do it properly. Because igrf doesn't go back that far and it seems fitting the voight equation requires lots of data...

# Datasets

Both the coefficients for gufm1 and IGRF 14 are in here. Which is all I think I really need actually.

IGRF 14. https://www.ncei.noaa.gov/products/international-geomagnetic-reference-field

gufm1: https://royalsocietypublishing.org/doi/10.1098/rsta.2000.0569
- Source: https://www.ncei.noaa.gov/news/tracking-changes-earth-magnetic-poles

gufm1 is actually dope. Check it out

# Step 1

IGRF-14 goes from 1900 to present, pretty much. They just released it on Nov 2024 which is as up-to-date as it gets, although I don't know what the actual date cutoff is for that, since I think they use forward modeling to bring the "model" all the way till 2030. Pretty sketch tbh.

## Getting da raw data

I'll have to combine gufm1 and igrf14 to get a complete record from 1590 to 2025. From what I understand though, it's only using real data till 2020 (IGRf 14) so that's the cutoff. It'll be an extra decade of data than what the original paper used, but still 5 years outdated.

## Method for getting the 32,000 isoline timeseries

So the way this will be done is to brute force the spherical geomagnetic grid, essentially, for each time value. You'll add up the total number of grid values that are at or under the threshold.

I'm not sure if I need flood fill for this. How do I make sure I don't include other random weak geomagnetic points? GPT says there are some... think I should verify with some diagrams I've got saved in the repo

# Step 2

This part will be a pain but easier than the first I think.