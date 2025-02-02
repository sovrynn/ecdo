I guess the only useful thing I got out of this is you can create a smooth timeseries even with only 5 year granularity data points by interpolating the existing datapoints.

# Understanding and Using IGRF-14 Coefficients

The International Geomagnetic Reference Field (IGRF) model provides a mathematical description of the Earth's main magnetic field and its secular variation over time. The IGRF coefficients are the key parameters used to represent this field.

## What Do the IGRF Coefficients Represent?
The Earth's magnetic field is represented using a spherical harmonic expansion, which is a sum of terms that describe the field as a function of latitude, longitude, and radius (distance from the Earth's center). The IGRF coefficients are:

1. **Gauss coefficients** (\(g_n^m\) and \(h_n^m\)): These are the numerical coefficients that define the spherical harmonic expansion of the magnetic potential.
   - \(n\): Degree of the harmonic term, which determines the spatial resolution (higher \(n\) means finer resolution).
   - \(m\): Order of the harmonic term, which is tied to longitude dependence.
2. **Units**: The coefficients are expressed in nanoteslas (nT) and define the field's strength and direction.

The IGRF provides these coefficients at 5-year intervals, along with a secular variation model to estimate changes between epochs.

## How to Use the Coefficients
To compute the magnetic field from the coefficients:

### Magnetic Potential (\(V\)): 
\[
V(r, \theta, \phi) = \frac{a}{r} \sum_{n=1}^{N} \left(\frac{a}{r}\right)^n \sum_{m=0}^{n} \left(g_n^m \cos(m\phi) + h_n^m \sin(m\phi)\right) P_n^m(\cos\theta)
\]
where:
- \(a\): Earth's mean radius (~6371.2 km).
- \(r\): Radius from Earth's center.
- \(\theta\): Colatitude (90° - latitude).
- \(\phi\): Longitude.
- \(P_n^m\): Schmidt semi-normalized associated Legendre function.

### Magnetic Field Components:
\[
B_r = -\frac{\partial V}{\partial r}, \quad
B_\theta = -\frac{1}{r} \frac{\partial V}{\partial \theta}, \quad
B_\phi = -\frac{1}{r \sin\theta} \frac{\partial V}{\partial \phi}
\]

### Interpolating Between Epochs:
Between the 5-year epochs, use the secular variation coefficients to interpolate the field. For a given year \(t\):
\[
g_n^m(t) = g_n^m(t_0) + \dot{g}_n^m (t - t_0)
\]
where:
- \(g_n^m(t_0)\): Coefficient at the closest earlier epoch.
- \(\dot{g}_n^m\): Secular variation coefficient for \(g_n^m\).

## Calculating the 32,000 nT Isoline as a Time Series
The 32,000 nT isoline represents locations where the total field strength equals 32,000 nT. To calculate this:

1. **Compute the Magnetic Field**:
   - Use the IGRF coefficients to calculate \(B_r\), \(B_\theta\), and \(B_\phi\) at various points on the Earth's surface.
   - Total field strength: \(B = \sqrt{B_r^2 + B_\theta^2 + B_\phi^2}\).

2. **Find Locations Matching 32,000 nT**:
   - Solve \(B(r, \theta, \phi) = 32,000\) nT for a grid of points.

3. **Generate Time Series**:
   - Repeat the above calculation for each epoch (and interpolated times if needed).

4. **Plot or Analyze**:
   - Visualize the isoline on maps or analyze its temporal evolution.

## Why Only One Data Point Every 5 Years?
The IGRF is designed for long-term, low-frequency variations of the geomagnetic field. The Earth's main field changes slowly, so 5-year intervals suffice for modeling purposes. For higher temporal resolution, the secular variation coefficients allow interpolation within these intervals.

Let me know if you'd like a step-by-step example for any of these computations!
