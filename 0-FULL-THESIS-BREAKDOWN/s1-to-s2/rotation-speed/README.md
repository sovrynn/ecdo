# Rotation Speed

The purpose of this document is to help calculate what speed the rotation will be, at any point on the surface of the Earth, during S1 -> S2.

Of course, the answer depends on which point on the Earth's surface is in question, because the rotation speed will depend on the distance from the closest pivot.

## Calculating rotational speed - trigonometry

Calculating the speed of rotation depends on how far away said point is from the pivots. The closer the point is to either of the pivots, the less rotational speed it will endure, and the farther away from the pivots, the greater.

We can use basic trigonometry and some simplifying assumptions (Earth is a sphere) to calculate rotational speed.

If:
- theta is the angle between a point and the closest pivot
- r_earth is the radius of the Earth (~6371 km)
- t is the number of hours it takes to go from S1 -> S2

Then:
- Radius of rotation of the point: `r = r_earth * sin(theta)`
- Average rotational speed = `rotational circumference * (104/360) / t` = `2 * pi * r * (104/360) / t`

The resulting formula is: `11564 * sin(theta) / t km/h`.

## Alternate trig formula if you only know the surface distance to the pivot

If you only know the surface distance (km) to the pivot, we can just calculate the angle using the circumference of Earth:
- Angle = `distance / earth_circumference * 360` = `distance / 111.2` degrees

Plugging it into the original formula, you would get: `11564 * sin(distance / 111.2) / t km/h`, using km and hours.

## Rotation speed examples - Singapore, Tokyo, Dubai

Using our formula, we can calculate the predicted average rotational speed at each city rotating around the eastern Indonesia pivot, assuming a 6 hour rotation:
- Singapore: 17.3 degrees from pivot, ~573 km/h
- Tokyo: 26.7 degrees from pivot, ~866 km/h
- Dubai: 43.2 degrees from pivot, ~1319 km/h
