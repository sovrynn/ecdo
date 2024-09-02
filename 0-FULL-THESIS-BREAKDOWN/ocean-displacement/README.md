# Oceanic Displacement

This document is for predicting the height and extent of temporary oceanic displacement during the rotation. These factors will be key for evaluating safe locations.

In short, it is a very complex, large-scale fluid dynamics problem.

## Intro: Key forces at play

- Uniquely shaped landmass rotating at varying high speeds
- 3D physics of large bodies of water
	- water moves radially to the past of least resistance
	- gravity

It's not complicated when we describe it this way, but we need to develop a system for performing the analysis.

## A 3-part system for modeling ocean displacement

For me, currently, the key concepts here are:
1. *Terrain chokepoints*, from underwater to above-ground, that will dictate areas where water has to choose between going *around* or *over*
2. *Total volume of water surge*, which when combined with surface area, determines *water height*
3. *Speed of water surge*, which when combined with *water height and volume*, can tell you *exactly* how water might flow

Evidences of past inundation will be extremely helpful in fine-tuning the analysis. Every location will be unique and must be evaluated on a case-by-case basis.

## Part 1: Chokepoints

Chokepoints are areas with concave terrain in which water will get trapped if it flows into, and will have to choose between going *around* or *over*. For example, most bays and basins form de facto chokepoints.

In contrast, terrain that forms a convex shape has more of a likelihood to streamline through the water, letting the water move around. However, this depends on the speed of the water. If you have ever stood in the tides of the ocean as they flow out to sea, you'll know that the water, even if it moves around, will first react to obstacles in an upward fashion, with strength proportional to the speed of the water, without exception.

The earliest chokepoints are all underwater in the oceanic terrain near the coasts. These underwater chokepoints will drive the water above sea level, from which the water will continue to move.

Determining the water inundation height at a chokepoint is dependent on how much water has to flow through the chokepoint at what speed. The water will rise until the cross sectional volume that the chokepoint handles is sufficient to allow the water to pass through the chokepoint at the given speed.

The speed is key here, because of gravity. Without sufficient *water inflow speed*, water will not be able to pass over obstacles.

Precisely mapping the inundation will be a question of determining the cumulative progression of water from chokepoint(s) to chokepoint(s).

## Part 2: Total volume and height of water surge

The total volume of water surge at any location with significant flows is determined in a progressive manner through a cumulative series of chokepoints that lead to the location. Since water moves *radially*, the water that moves through any given chokepoint will often spread to multiple subsequenct chokepoints, splitting up the water flow.

Determining the total volume of water at any given chokepoint depends on the total volumetric input and output rate of water flows into the chokepoint.

The height of the water flow is directly proportional to the total volume and inversely proportional to the total surface area of the water surge.

## Part 3: Speed of water surge

This is the simplest part; the speed of watetr surge will be directly proportional to the speed of rotation. See `FULL-THESIS-BREAKDOWN/s1-to-s2/rotation-speed`.

## Best Examples of Location Oceanic Displacement Analysis

`LOCATION-MAPPING` is where all the location-specific flood analysis will go. Some good examples are:
- East Asia, chokepoints
- Turkey (Urgup Cones), 1025m above sea level
- North Africa, 1200m height 600m above sea level

## Factors that are difficult to predict

The exact amount of time it takes for the S1 -> S2 rotation will affect the ocean displacement. The shorter it takes, the faster water will rush onto the land, and the higher the obstacles it could go over.
