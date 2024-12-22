# gufm1

gufm1: https://royalsocietypublishing.org/doi/10.1098/rsta.2000.0569
- Source: https://www.ncei.noaa.gov/news/tracking-changes-earth-magnetic-poles

Hard copy of the original paper in here. http://jupiter.ethz.ch/~ajackson/GeophysikI/gufm1.pdf

# Python Library

## Option 1: Mr. Nicholas Knezek

https://github.com/nknezek/gufm1

It's completely obscure but I suppose it's always testable.

### Anotha one by the same guy

https://github.com/nknezek/coremagmodels

## Option 2: pymagglobal - This one looks legit, from Germany

This one has an impressive list of models. It's built by: Copyright (C) 2020 Helmholtz Centre Potsdam GFZ, German Research Centre for Geosciences, Potsdam, Germany

https://sec23.git-pages.gfz-potsdam.de/korte/pymagglobal/

The repo is here, they created it a few years ago and it hasn't really been updated much since: https://git.gfz-potsdam.de/sec23/korte/pymagglobal/

# GPT: Summary of the Paper: "Four Centuries of Geomagnetic Secular Variation from Historical Records"

---

## **Objective**
This research presents the **gufm1 model**, a new representation of the geomagnetic field at the core-mantle boundary (CMB) for the period 1590–1990. The model leverages a comprehensive dataset of historical geomagnetic observations, including many unpublished records from maritime voyages.

---

## **Key Contributions**
1. **Comprehensive Dataset:**
   - Over 83,000 magnetic field observations from more than 64,000 locations were compiled, focusing on magnetic declination.
   - Significant additions were made to 17th-century data with over 8,000 new entries.
   - Data sources include:
     - Logbooks of East India Companies, naval expeditions, and merchant ships.
     - French, Dutch, Danish, and English archives.

2. **Correction of Errors:**
   - Positional inaccuracies due to poor longitude estimations (before the advent of accurate chronometers) were addressed using a stochastic Brownian motion model.
   - Observational errors, crustal magnetic interference, and navigational errors were quantified and corrected.

3. **Modeling Approach:**
   - The gufm1 model employs **spherical harmonics** for spatial representation and **B-splines** for temporal variation, with 36,512 parameters.
   - Regularization techniques minimize roughness in spatial and temporal domains, ensuring smooth solutions that fit the data accurately.

4. **Advancements Over Previous Models:**
   - Extends earlier models by incorporating previously unused data and offering better temporal and spatial resolution.
   - Represents the longest continuous geomagnetic field model available, covering 400 years.

---

## **Data Sources and Historical Context**
1. **Pre-19th Century Data:**
   - Data primarily from maritime logbooks, with navigational practices heavily reliant on magnetic observations due to poor longitude determination methods.
   - Key sources include voyages from East India Companies, naval expeditions, and smaller merchant organizations.
   
2. **19th and 20th Century Data:**
   - Includes observations from Sabine's compilations (1820–1870), additional expedition logs, and satellite data (e.g., POGO and Magsat).
   - Enhanced by recovery of missing observations from original manuscripts.

---

## **Findings**
1. **Field Evolution at the Core-Mantle Boundary:**
   - The gufm1 model provides maps of the radial magnetic field at the CMB at 100-year intervals.
   - Key features include:
     - Persistent flux lobes over Canada and Siberia, mirrored in the Southern Hemisphere.
     - Time-dependent features like the westward drift of the Indian Ocean core flux spot.

2. **Comparison with Previous Models:**
   - Consistent with earlier models but offers improved resolution and continuity.
   - Enhanced imaging of long-term field features, such as flux lobes and dynamic field morphology.

3. **Error Quantification and Corrections:**
   - Navigational errors were modeled using a random walk or Brownian bridge approach.
   - Observational errors were quantified, with declination errors averaging ±0.46°.
   - Crustal magnetic field errors were addressed through statistical modeling.

---

## **Applications**
1. **Understanding Geomagnetic Processes:**
   - Offers insights into the geomagnetic field's long-term stability, secular variation, and reversals.
   - Provides a robust framework for testing hypotheses about mantle influence on field generation.

2. **Core Dynamics and Earth's Rotation:**
   - The model supports studies of core-surface flows and their relationship to changes in Earth's rotation (e.g., length-of-day variations).

3. **Navigation and Maritime History:**
   - Improves understanding of historical navigation techniques and their reliance on geomagnetic data.

---

## **Limitations and Future Work**
1. **Limitations:**
   - Smoothing techniques, while effective, may oversimplify certain dynamic field features.
   - Temporal and spatial resolution decrease for earlier periods due to limited data.

2. **Future Directions:**
   - Development of alternative regularization methodologies for more refined solutions.
   - Testing physical hypotheses about core dynamics using the gufm1 model.
   - Further exploration of underutilized archival sources, especially Spanish maritime records.

---

## **Conclusion**
The gufm1 model is a significant advancement in understanding Earth's geomagnetic field, providing a high-resolution, continuous representation of its evolution over the past 400 years. It serves as a critical tool for geophysical research and historical studies, setting a benchmark for future geomagnetic field models.

---

**Keywords:** Geomagnetic secular variation, historical magnetic data, core
