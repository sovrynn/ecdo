# Flood Height

This folder is for building a system to predict how high the oceans will flood the land for a certain location.

## Initial Criteria

First of all, the most important factor is how far away the location is from the closest pivot. This will determine the total distance the location will travel during the rotation, and how much ocean will potentially be displaced over that point.

The quantity of water being displaced across the rotation path is important as well. Locations that are by the sea and also rotating into the sea will face more water displacement, whereas locations inland will have more of a land buffer for the ocean to travel across before it reaches said location, and locations rotating away from the sea may not experience so much ocean displacement.

The local land geography will also affect the inundation height. Water will flow through the lowest elevation points before it reaches higher elevation. Each location will have a different result based on the surrounding geography.

Another factor is how long the S1 -> S2 rotation takes. The longer it takes, the slower the movement of the land under the oceans will be, and this could lead to lower inundation levels as there's more time for the water to flow past obstacles. Vice versa, the faster the rotation is, the more likely that the water could move violently over obstacles. Likely, the speed of water movement will be inversely proportional to the time it takes for the S1 -> S2 rotation.

## Other Factors

If there are traces of past inundation, these could be used to predict a similar level of inundation during this ECDO event.

A great example is the erosion on the Khafre pyramid, from which one can glean how high the ocean was, for certain periods at least, during the erosion at that point.

## Momentary vs Prolonged Inundation

It's likely that the highest levels of inundation will only be temporary, as water is displaced and looks for a location to stay, and that the prolonged level of inundation will be much lower.

## Calculating Rotational Path

Since we are lacking mapping libraries, the way I'm currently doing this is with lat/long coordinates, distance, and ChatGPT as a calculator.

Steps:
- Figure out the direction of the angle between location and closest pivot (ex: 355 degrees north)
- Figure out the distance between location and closest pivot
- Rotate the angle 104 degrees (counter)clockwise (depending on the pivot), traverse the same distance, and get a lat/long coordinate
- Plot the lat/long coordinate on a map
- Connect the starting location and final location with an arc of a circle rotating from the pivot, on a spherical map, to get the rotational path

## Inundation Markers from previous ECDO events

- Khafre pyramid
	- erosion level is 175m above sea level
- Appalachian mountains
- Urgup Cones Turkey
	- ~1025m above sea level