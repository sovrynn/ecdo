# Oceanic Displacement

This document is for predicting the height and extent of temporary oceanic displacement during the rotation. In short, it is a very complex, large-scale fluid dynamics problem. Every location will be unique and must be evaluated on a case-by-case basis.

## A framework for modeling ocean displacement

For me, currently, the key concepts are:
1. *Concave terrain chokepoints*, both underwater and above-ground, where water will get trapped as it flows in, making it tend to flow *over* rather than *around*, depending on the *chokepoint topography*.
2. *Rotation path and speed*, which will determine how much water gets trapped into the chokepoint and flows over it, dictating the *water surge volume and height*, where *water surge* is defined as the temporary rise in water level due to the ocean displacement.

Evidence of past inundation will be extremely helpful in fine-tuning the analysis.

## Part 1: Concave terrain chokepoints

Chokepoints are areas with concave terrain in which water will get trapped if it flows into, forcing the water to go *around* or *over*, or rise until it does. For example, most bays and basins form de facto chokepoints.

In contrast, terrain that forms a convex shape has more of a likelihood to streamline through the water, letting the water move around. However, this comes after an initial upward reaction of the water. If you have ever stood in the tides of the ocean as they flow out to sea, you'll know that when flowing water encounters obstacles, even if it moves around, it will first react in an upward fashion, with strength proportional to the speed of the water, without exception.

The earliest chokepoints are all at sea level, or underwater. These underwater and water-level chokepoints will be the first to drive the water above sea level, from which the water will continue to move to other chokepoints. For example, note these maps showing underwater and sea-level chokepoint flows in Asia and a small bay in North Africa:

![](img/chokepoints.png "")
![x](img/radial.png "radial water flow")

The *shape* and *slope* of the chokepoints is also key, because when combined with the speed of rotation, will determine how much water will flow *over* versus *around* the chokepoint.

Precisely mapping the inundation will be a question of determining the cumulative progression of water from chokepoint(s) to chokepoint(s), and making judicious use of contour/elevation maps.

## Part 2: Rotation path and speed

The rotation path and speed will determine how much water gets trapped into chokepoints based on the volume of water in the rotation path and the speed at which the water will get pushed into the chokepoint.

The speed is a significant variable here because of gravity and the fluid nature of water - without sufficient speed, the water will simply move radially around the chokepoint, rather than flowing uphill over the chokepoint.

![](../s1-to-s2/img/rotation-path.png "")

## Other Details

Determining the exact temporary water surge height at any given chokepoint depends on the total volumetric input and output rate of water flows into the chokepoint. The water will rise until the output rate matches the input rate.

The height of the water surge is inversely proportional to the total surface area of the water surge.

## Best Examples of Location Oceanic Displacement Analysis

`LOCATION-ANALYSIS` is where all the location-specific flood analysis is located. Some good examples are:
- Shetland (`europe/great-britain`)
- Gulf of California (`north-america/great-basin`)
- Asia, chokepoints
- Turkey (Urgup Cones), Black Sea water surge level (1025 m)
- North Africa, 1200m height 600m above sea level

## Factors that are difficult to predict

The exact amount of time it takes for the S1 -> S2 rotation will significantly affect the speed and result of oceanic displacement.

## Citations

Authors: [Sovrynn](https://sovrynn.github.io)
