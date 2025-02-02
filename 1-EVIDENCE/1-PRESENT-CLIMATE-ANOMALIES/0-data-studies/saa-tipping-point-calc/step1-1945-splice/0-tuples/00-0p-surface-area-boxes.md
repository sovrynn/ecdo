So, I want to calculate the 32000 nt isoline surface area by using a geomagnetic model (gufm1). I already have access to it programatically so thats not a problem. But the issue i'm running into is, the only function I really have to work with here is plugging in a lat/lon and getting a nt field value.

I think the method I should use is to divide up the surface of the earth into areas of equal lat/lon, for example 0.5 x 0.5 or 1 x 1 squares. Now obviously these squares are going to have differing surface area based on whether they're at the equator or the poles. But that's fine for me.

Is there any python library that can allow me to calculate the surface areas of these lat/lon boxes based on where they are on the surface area of the earth? A spherical model is fine here.