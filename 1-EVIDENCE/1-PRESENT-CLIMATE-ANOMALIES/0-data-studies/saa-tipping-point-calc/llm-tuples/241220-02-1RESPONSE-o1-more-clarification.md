# Understanding the Evaluation of Gauss Coefficients and Overfitting Prevention in IGRF

The IGRF uses a spherical harmonic representation of the Earth's magnetic field, expressed in terms of Gauss coefficients \(g_n^m\) and \(h_n^m\). Each generation of the IGRF (e.g. IGRF-14) is constructed from a set of candidate models submitted by different institutes or research groups. These candidate models typically come from analyses of global magnetic data sets, including satellite measurements (like from the Swarm mission) and ground observatory records.

## How Gauss Coefficients are Evaluated

1. **Data Collection**:  
   Researchers gather global magnetic field measurements, which include vector or scalar magnetic field intensity from satellites and ground-based observatories. The coverage is worldwide, but data quality, distribution, and temporal sampling vary.

2. **Inversion Procedure**:  
   The Gauss coefficients are determined by fitting a spherical harmonic model to these data. This is a mathematical inversion problem:
   - The model:  
     \[
     V(r,\theta,\phi) = a \sum_{n=1}^N \left(\frac{a}{r}\right)^{n+1}\sum_{m=0}^n \left[ g_n^m \cos(m\phi) + h_n^m \sin(m\phi) \right] P_n^m(\cos\theta)
     \]
   - Given data points of the magnetic field (or its components), a least-squares (or more sophisticated) minimization is applied to find the set of \(g_n^m\) and \(h_n^m\) that best fit the observations.

3. **Multiple Candidate Models**:  
   Different groups may use slightly different data sets, weighting schemes, quality-control procedures, or regularization techniques. Thus, multiple candidate models are submitted for each IGRF update. Each candidate model provides a complete set of Gauss coefficients up to a specified spherical harmonic degree (for IGRF, typically \(n=13\)).

## Evaluation of Candidate Models

1. **Comparison Against Data**:  
   The IGRF Working Group evaluates how well each candidate model reproduces independent observations, both satellite data and ground observatory readings.

2. **Statistical Criteria**:  
   They look at residuals (differences between observed data and model predictions) in terms of root-mean-square error or other statistical measures.

3. **Physical Plausibility**:  
   The selected model must not only fit the data well but also produce realistic field structures that align with physical expectations. Sudden, implausible "spikes" or fine-scale features not supported by the data distribution are considered signs of overfitting.

4. **Consensus or Weighted Blending**:  
   Often, the final IGRF model is not just one candidate model but a weighted average of the best-performing candidates. This helps smooth out any peculiarities from individual submissions.

## Preventing Overfitting

### Limiting the Model Degree
The IGRF is limited to a maximum spherical harmonic degree (e.g., \(n=13\)). This sets a strict upper bound on the complexity of the model—far fewer coefficients than data points. For IGRF, there are on the order of a few hundred coefficients, not thousands, even though data points can number in the tens or hundreds of thousands.

### Physical Constraints and Regularization
Inversion routines commonly include damping or regularization to avoid fitting noise. Even if you have 1000 data points, arbitrarily increasing the number of coefficients to match every point exactly would introduce extremely high-frequency, non-physical features. Such a model would not generalize well—it would capture measurement errors and localized anomalies that aren’t representative of the global main field.

### Overdetermined System
Typically, there are far more data points than coefficients, which makes the inversion system "overdetermined." This means many solutions are possible, but the one chosen is the one that best fits the overall pattern without chasing random noise. The result is a stable, smoothed model that does not contort itself to fit every single outlier or noise point.

## Summary
The model’s complexity is deliberately kept lower than the number of data points. The selection process involves statistical evaluation, comparison among candidate models, and physical plausibility checks. This approach ensures the final IGRF model is robust, stable, and not overfitted to any particular data subset.
