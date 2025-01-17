So I'll have to filter this data before I can plot it.

# Step 0 filtering, data shape

Certain files have duplicates (2 copies) for differing temporal resolution. One can simply be discarded.

All units are in m^3/s, so I think I just take the average, no matter what the resolution is.

When there's no measurement, the default value is NA. Treat it as 0.

What I'll do is I'll average all the measurements. THen I'll only get the unique ones. Then I'll see the distribution.

# Step 1 plotting

Ezpz lemon squeezy.