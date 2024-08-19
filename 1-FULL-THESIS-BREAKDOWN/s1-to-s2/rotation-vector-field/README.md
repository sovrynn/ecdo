# Rotation Vector Field

The purpose of this document is to understand exactly what direction and strength the rotation will be, on the surface of the Earth, during S1 -> S2.

Of course, the answer is not a constant, but depends on which point on the Earth's surface is in question.

## Rotational Direction

Calculating rotational direction is rather simple. Simply find the closest pivot (there are two pivots).

Then, the point will rotate counterclockwise if the pivot is the western pivot, and clockwise if the pivot is the eastern pivot, if the viewer is looking down at the pivots.

## Calculating rotational speed

We not only need to know the direction of rotation but also the speed of rotation. This depends on how far away said point is from the pivots. The closer the point is to either of the pivots, the less rotational speed it will endure, and the farther away from the pivots, the greater.

We can use basic trigonometry and some simplifing assumptions to calculate rotational speed.

If:
- theta is the angle between a point and the closest pivot
- r_earth is the radius of the Earth (~6371 km)
- t is the number of hours it takes to go from S1 -> S2

Then:
- Radius of rotation of the point (r) = `r_earth * sin(theta)`
- Average rotational speed = `rotational circumference * (104/360) / t` = `2 * pi * r * (104/360) / t`

## Rotational speed example - Singapore

I'll calculate the rotational speed of Singapore as an example.

Asking ChatGPT, the angle between Singapore and the eastern pivot is about 17.3 degrees.

Then, the radius of rotation of Singapore is:
- `r_earth * sin(17.3)`
- = `6371 km * 0.297`
- = `1895 km`

Then, the average rotational speed, assuming S1 -> S2 takes 6 hours is:
- `2 * pi * r * (104/360) / t`
- = `2 * pi * 1895 km * (104/360) / 6 hr`
- = `573 km/h`

So during S1 -> S2, Singapore will be rotating clockwise around the eastern pivot in Indonesia at an average speed of 573 km/h.

## Drawing rotational vector field example - Singapore, Tokyo, Dubai

Finally we can map the direction and speed of rotation across many points in the map to get a rotational vector field. Here is a very simple example I did for Singapore, Tokyo, and Dubai, rotating around the eastern pivot in Indonesia.

![eastern vector field](img/eastern-pivot-vector-field.png "eastern pivot vector field")

Here is the predicted average rotational speed at each city assuming a 6 hour rotation:
- Singapore: 17.3 degrees from pivot, ~573 km/h
- Tokyo: 26.7 degrees from pivot, ~866 km/h
- Dubai: 43.2 degrees from pivot, ~1319 km/h

## Water displacement

It can be expected that the water displacement will run in the reverse direction of land rotation, with a proportional strength to the speed of rotation at that point.
