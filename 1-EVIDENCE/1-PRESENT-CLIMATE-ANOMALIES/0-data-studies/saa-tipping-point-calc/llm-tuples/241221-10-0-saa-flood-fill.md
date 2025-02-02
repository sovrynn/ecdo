So, I want to use gufm1 and igrf 14 to calculate the surface area extent of the south atlantic anomaly from 1590 to 2025.

The issue is these models only provide the low-level field values - they don't actually have any conception of what a "south atlantic anomaly" is.

I will use the 32,000 nt isoline as the boundary for the SAA.

The question here is, how do I actually calculate this boundary in a sandbox model? Because I assume that the SAA is not the only singular bounding box that contains geomagnetic values less than 32000 nt - does this mean I have to use some flood fill technique? Is there any scientifically accepted convention for how to calculate this?