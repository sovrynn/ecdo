So here I'm just going to make sure I have the gufm1 and igrf 14 models working, make sure values are within reasonable bouds, calculate small bits and pieces of the final result, etc.

# What I've done

tested both the igrf14 and gufm1 tools I'll use at a very basic level:
- I can use them
- they print out values approximately in the right range for south america
- their values align from 1900 - 1990 for that south america value

# Gufm1

This one is easier; there's a nicely built python library that works with this. I wrote a script using o1 that runs some test inputs through it and it works great. Cross-verified with the IGRF console tool for some overlapping 1900s dates.

# IGRF python script

For this one, I had to modify the python console tool that came with IGRF-14.

I've verified it against the command line tool output.

# Verification?

I verified South America, South Africa, and East Asia, using the default gufm1 and igrf tools along with my custom igrf script, and it all checks out...

# Verdict

At this point I'm done - I have both models programatically hooked in:
- gufm1 uses a python library, and an o1 script that I've written hooks into it
- igrf14 uses my custom hacked version of the command line tool

The only thing I really need them to return is field values - it seems the rest I'll have to do myself.

# Running another test

Seeing the bounding box for 32000 isoline.

## Results

These show that at least when calculated at a 5 degree increment granularity (which is extremely coarse to be fair) the 32,000 nt values are indeed only found in the south atlantic anomaly.

Minlat: -60
Maxlat: 10
Minlon: -155
Maxlon: 40