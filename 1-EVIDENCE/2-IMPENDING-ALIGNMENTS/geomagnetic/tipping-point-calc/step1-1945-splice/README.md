So in this part I'm going to actually calculate the SAA surface area as a scalar for every time value, creating a single-variable timeseries.

This one is a bit confusing. I need to figure out:
- what approach I'm going to use
- if I'm going to use brute force, how I'm going to divvy up the Earth surface into chunks
- flood fill vs brute force
- verify that I've actually done the calculations correctly without errors

# required tasks

You've got to use separate scripts for gufm1 and igrf 14.

Each script will come up with its own corresponding piece of the SAA SA timeseries dataset.

# How to do

Lean on o1 for this.

You've got to:
- figure out how to divide the globe up into squares, probably use the lat/lon midpoints, and then do a flood fill of some sort
- then it's a simple brute force tally for each time. not that complicated

# Brainstorming on how to split up the earth's surface area

You really don't have to be super granular for this.

You're performing a trendline fit on a timeseries spanning centuries. Honestly you don't even have to be that accurate while doing this.

## One way

You split up the earth's surface into a grid of lat/lon. Obviously, since the Earth gets thinner closer to the poles, the same lat/lon increments will have a much greater surface area near the equator than at the poles.

You use some kind of projection (let gpt handle it although you'll need to verify it) to figure out the surface area of that bounding box. Which should be very straightforward in a spherical model, and straightforward even in an oblate spheroid model.

What this does of course, is make the surface area blocky and chunky near the equator yet very fine-grained near the poles. Since there's 90 lat in a hemisphere and 360 lon, you'll be dividing up each hemisphere into roughly 90 * 360 blocks = 32,400.

You can easily do it in half degree increments, should be easily manageable by whatever library you might use for the job. That would quadruple it, making it 100k. Plenty.

It's the easiest way I think. And you use the midpoint of each bounding box to calculate the field value.

## Bounding box? Or global?

Honestly looking at the diagram I found on the earth's surface, I'm thinking I should just do an individual tally for every single box for every single time period. Complete brute force. I don't think I need to do some fancy bounding box; I don't need to exclude anything from the tally. These low values only exist at the SAA.

# Verification

First of all, my data matches the one in the Desantis paper in shape and scale. That itself is good enough.

Any concerns with lack of geomagnetic field strength measurements prior to 1830 should be dispelled, as archaeointensity results show a clear dipole strength reduction on much longer timeframes than back till 1590. Additionally, there is some work cited from NASA that supposedly shows that while dipole strength decreases, the total field energy doesn't, indicating that given a stronger dipole in the past, but fixed energy, we can assume that anomalies like the SAA will have been smaller in extent.

The results are unambiguous to me.