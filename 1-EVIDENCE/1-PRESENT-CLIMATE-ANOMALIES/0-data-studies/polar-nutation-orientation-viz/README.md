# Earth Orientation Viz

1846 - now: https://www.iers.org/IERS/EN/DataProducts/EarthOrientationData/eop.html

The exact data I used is "EOP C01 IAU2000 (1846-now)", in the "Long term earth orientation data" section.

## Data format

MJD is a continuous count of days since November 17, 1858. It is used in astronomy and geodesy as a convenient way of representing time.
Purpose: MJD provides the date and time for the Earth orientation parameters, making it easier to track how these parameters evolve over time.

## Axes

Positive X is towards Greenwich meridian (0 degrees), negative away.

GPT says Positive Y is towards 90 east (Asia), negative is 90 west (about americas), which is OPPOSITE what's said in the paper, and Wikipedia. So it's probably wrong.

So the rotation is going towards West.

You can confirm the output with the result from this paper: https://www.nature.com/articles/s41561-024-01478-2

## Units

One arcsecond is about 30 meters. That's the unit in the viz. So a quarter arcsecond is about 7.25 meters.

# Notes

## Viz

I'd like to visualize this in 3D, projected onto a sphere, with a color gradient for the path.

## Prompt

Kindly write a script that takes an input arg filename and generates a 3d visualization of a timeseries curve in 3 dimensions. It should read the content of the filename into a variable, and then process the data. Starting at the 14th line (inclusive), it should parse each line as a series of words (separated by spaces, potentially multiple). Each line represents one data point. The first "word" in each line is a float, date, MJD format, days since November 17, 1858, potentially negative. The second is PM-X seconds of arc X, and the third is PM-Y seconds of arc Y. These are the only values you will use. X and Y correspond to points on the surface of a sphere. I want you to plot these points, on the surface of a sphere, in a timeseries curve starting at the oldest date and going to the most recent date. I want you to color the line with a gradient curve based on the date, and create a legend on the side. I want you to scale the visualization so its a birds eye view looking down on the sphere, and scale it so that all points are contained in the visualization, and the borders of the visualization correspond to the lowest and highest X and Y values. Save the resulting visualization to a file.

using matplotlib, write a python script with a funciton that takes a list of 3 data points in the format of 3 lists, a, b, c. A is a date, in number of days in MJD format. B and C represent x and y coordinates. I want you to plot a 2d timeseries curve of the x,y points, with a color gradient scaled based on the oldest and most recent date. The graph should be centered on 0,0, and extend to a range of 1 away from the origin. save the output to a file and display it

# Visualizing the delta, dx/dy (GPT prompt)

Using matplotlib, write a python script that takes an input arg filename and generates a 2d visualization of a timeseries curve in 2 dimensions. It should read the content of the filename into a variable, and then process the data. Starting at the 14th line (inclusive), it should parse each line as a series of words (separated by spaces, potentially multiple). Each line represents one data point. The first "word" in each line is a float, date, MJD format, days since November 17, 1858, potentially negative. The second is the x coordinate, and the third is the y coordinate. I want you to scale the 2d chart so that it is centered at the origin, and the x/y edges are twice the max/min x/y values in the data. Add a color gradient to the line based on the date, from the oldest date to the most recent date, and create a legend on the side. Save the resulting visualization to a file.