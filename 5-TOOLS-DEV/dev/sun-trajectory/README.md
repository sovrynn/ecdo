# Point Geo North Rotation

EDIT: Think I just wasted a bunch of time working on this. Lots of tools out there like Photographer's Ephemeris, Suncalc, Stellarium that do this for you.

## What the script does

Essentially, it uses unit vectors and brute forces everything. It fixes the Sun to the right and the Earth to the left.

It'll calculate the lat/lon of single-degree-increments orbits, first without the axial tilt. Then it applies the axial tilt. This allows you to know the path of rotation, in lat/lon, of the point. At lon 0 and 180, we have sunrise and sunset. Negative longitudes are night, positive are day.

Then it calculates the bearing of the Sun at each of these points. By looking at the sunset/sunrise points (0 and 180 lon) we can see the bearing of the sun at sunrise and sunset.

## Goal of the script

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

## prompt v2 planar north addition

Given a unit vector V from the origin pointing to point P, write a function that calculates the unit vector K that is on the plane perpendicular to V and points toward the z axis from point P.

Also, write a function given a vector J and a vector K, takes the plane Y perpendicular to vector J, project the x-axis unit vector onto Y to create vector L, and calculates the bearing on the plane Y between K and L, where K is at bearing 0.

## Prompt v2

Write a python script that has the 3 following functions. Assume the earth is a sphere and has a radius of 1.
1. Given a lat long, calculate the unit vector to the point based at the center of the earth. Fix the rotational axis of the earth positive on the z axis. Fix the longitude 0 negative on the y axis. Fix the longitude 90 east positive on the x axis, and the longitude 90 west negative on the x axis. Return the result as a tuple (dx dy dz).
2. Given a unit vector, rotate the vector in single degree increments about the z axis, and return the corresponding vectors as a list of 360 tuples.
3. Given a unit vector, and rotation angles for yaw pitch and roll, rotate the vector the corresponding yaw, pitch and roll values, and return as a tuple.
4. Given a unit vector, calculate the lat/lon, assuming the north pole is positive on the z axis, longitude 0 is negative on the y axis, and longitude 90 east is positive on the x axis.
5. Given a unit vector, calculate the angle between the vector and the x axis.
Cap the vector and yaw, pitch, and roll, and lat/lon values at their corresponding ranges to prevent floating point errors of going slightly above or below the ranges.
