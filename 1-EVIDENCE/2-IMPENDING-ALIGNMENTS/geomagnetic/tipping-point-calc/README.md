So there's two basic steps to this.

1. Get the 32,000 nt isoline surface area extent as a timeseries
2. Fit that timeseries to the "tipping point" equation

I think I should really lean on GPT o1 for this task.

# Questions I still need to answer

Can I use flood fill to lazily calculate the required values? I'll need to answer the above question to know this. I should have enough compute for this though.

So, I still need to figure out whether the original authors combined gufm1 and igrf and if so, whether they needed any special methods to do it properly. Because igrf doesn't go back that far and it seems fitting the voight equation requires lots of data...

# Dataset

IGRF 14. https://www.ncei.noaa.gov/products/international-geomagnetic-reference-field

# Step 1

IGRF-14 goes from 1900 to present, pretty much. They just released it on Nov 2024 which is as up-to-date as it gets, although I don't know what the actual date cutoff is for that, since I think they use forward modeling to bring the "model" all the way till 2030. Pretty sketch tbh.

## Method

So the way this will be done is to brute force the spherical geomagnetic grid, essentially, for each time value. You'll add up the total number 

# Step 2

This part will be a pain but easier than the first I think.