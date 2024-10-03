# Point Geo North Rotation

The goal of this script is to calculate the orientation of "planar north" (the point perpendicular to the horizontal plane of a point) as it rotates around the Earth.

Reason I'm making it is to calculate the trajectory of the Sun during the day, specifically for use during solstices and equinoxes (but ideally it could be used for any time of the year).

## Steps

Fix the rotational axis vertically, calculate the 360 planar north bearings. No theatrics here. Just increment the xy bearing.

Next, rotate the planar north bearing the desired amount. Again, no theatrics. Simply append the rotational axis angles to xy and z.

Finally, we need to calculate the angle between the Sun and the planar north. This could range from 0 (directly above) to 90 (horizontal, sunset/sunrise) to more than 90 (nighttime) all the way up till 180.

This is easy. Just fix the sun on the x axis and then do some simple maths.

## yaw pitch roll

- Yaw (Rotation about Z-axis): This angle defines the rotation around the Z-axis.
- Pitch (Rotation about Y-axis): This angle defines the rotation around the Y-axis.
- Roll (Rotation about X-axis): This angle defines the rotation around the X-axis.

## Prompt v2

Write a python script that has the 3 following functions.
1. Given a lat long, calculate the yaw, pitch, and roll. Fix the rotational axis of the earth positive on the z axis. Fix the longitude 0 negative on the y axis. Fix the longitude 90 east positive on the x axis, and the longitude 90 west negative on the x axis. Return the result as a tuple.
2. Given yaw, pitch, and roll values corresponding to a single point, rotate the point 360 degrees in single degree increments about the z axis, and return the corresponding yaw, pitch, and roll values as a list of 360 tuples.
3. Given yaw, pitch, and roll values corresponding to a single point, and rotation angles for yaw pitch and roll, rotate the point the corresponding yaw, pitch and roll values, and return as a tuple.
Cap the yaw, pitch, and roll values at their corresponding ranges to prevent floating point errors of going slightly above or below the ranges.

## Prompt

Generate a script that calculates the "geographic north" of a point (the axis perpendicular to the horizontal earth surface plane) as it does a single day's rotation on the Earth. The specified "geographic north" axis should cross through the point and the center of the earth. Through these calculations, the Earth's center should be assumed to be at (0,0,0) in the xyz coordinate system. Assume Earth is a perfect sphere.

I want you to do it like this:
- Read the following inputs from an input file 'input.txt'. Values will be one per line. Read the first word of each line as the input parameter (to allow for trailing words such as comments).
	- lat of the point, float
	- lon of the point, float
	- bearing of Earth's rotational axis in the xy plane, float, 0 to 360
	- vertical angle of Earth's rotational axis in the z plane, float, -90 to 90
- First, calculate the geographic north of the lat/lon ASSUMING the rotational axis is pointing straight north on the z plane. Calculate it as two angles (xy plane angle, z plane angle). Start at the bearing 0 N from the orbital north pole (Arctic) going towards the point. Then, rotate the point in 1 degree increments, up till 360, and calculate the same angles.
- Second, rotate these angles by the 3rd and 4th input values in the input file around the center of the Earth. I want you to write a specific parameterized function for this (rotate axis around center).
- Finally print out the values to output.txt in the format f"Orbital bearing: X, Planar north xy bearing: Y, Planar north z bearing: Z) where X,Y,Z are:
	- X is the bearing from the orbital north pole (Arctic) to the point (starting from 0, goes to 360, in 1 degree increments)
	- Y is the xy bearing of the "geographic north"
	- Z is the z angle between the horizontal plane
Make sure to always keep X, Y and Z the same number of digits so the output value lines line up.