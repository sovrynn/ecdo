So if you actually look at these values:

Approx area (km^2): 12363.683990261114
Approx area (km^2): 10653.316302134217
Approx area (km^2): 6088.401114137134
Approx area (km^2): 4127.23967398813
Approx area (km^2): 2040.6741448291054
Approx area (km^2): 3091.038694847311
Approx area (km^2): 107.89623558970708
Approx area (km^2): 12157.115864714786

They're all fine, except for that second to last one, which is literally the last degree of longitude.

I think I can keep it simple for now - I'll use half-degree boxes, up till 80 degrees of latitude, when I'll use full-degree boxes. Hacky, I know. But that's what I'll do.

It's going to be pretty simple really. Actually, surprisingly simple. For-loop. Easy. Peasy.

Two scripts:
- gufm1: 1590 - 1944
- igrf14: 1945 - 2024

Use January 1st if you need to provide an exact date.

One data point per year. It'll be about 435 data points in the timeseries.

Yeet.

# Data Parameters

Square kilometers.

# Running it

6 threads.

# Post mortem notes

So, I had an interesting way of running it.

Basically, it actually takes a long time to complete the data processing for 1 year - it iterates through every single 1x1 degree lat/lon box, checks the field value, and if its less than the 32000 nt threshold, calculates the surface area and adds it to a sum.

In my scripts, I can denote the range of years I want the script to complete.

Since each script took 1 thread, what I would do is utilize multiple threads by running multiple scripts; each one with a different range of years. They'd all run concurrently.

Then I gathered the output files together.