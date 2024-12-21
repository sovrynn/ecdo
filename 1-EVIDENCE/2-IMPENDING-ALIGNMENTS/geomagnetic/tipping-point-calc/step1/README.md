So in this part I'm going to actually calculate the SAA surface area as a scalar for every time value, creating a single-variable timeseries.

This one is a bit confusing. I need to figure out:
- what approach I'm going to use
- if I'm going to use brute force, how I'm going to divvy up the Earth surface into chunks
- flood fill vs brute force
- verify that I've actually done the calculations correctly without errors

# required tasks

You've got to use separate scripts for gufm1 and igrf 14.

Each script will come up with its own corresponding piece of the SAA SA timeseries dataset.