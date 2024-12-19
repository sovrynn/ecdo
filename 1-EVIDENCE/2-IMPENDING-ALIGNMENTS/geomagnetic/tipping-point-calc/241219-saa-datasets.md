So the paper used:
- gufm1: https://royalsocietypublishing.org/doi/10.1098/rsta.2000.0569
- IGRF 13: https://www.ngdc.noaa.gov/IAGA/vmod/igrf.html
- IGRF 14: https://www.ncei.noaa.gov/products/international-geomagnetic-reference-field

Source: https://www.ncei.noaa.gov/news/tracking-changes-earth-magnetic-poles

For calculating the historical extent of the SAA.

# gufm1

So, the link provided was published in 2000. Which makes me question how up to date this model is.

## GPT

The gufm1 model, published in 2000, describes Earth's geomagnetic field from 1590 to 1990.  
([Source: geomag.colorado.edu](https://geomag.colorado.edu/gufm1?utm_source=chatgpt.com))

It was developed by Andrew Jackson, Art R. T. Jonkers, and Matthew R. Walker, based on a comprehensive compilation of historical observations, including maritime records and early measurements.  
([Source: github.com](https://github.com/martinrehfeld/gufm1-webservice?utm_source=chatgpt.com))

Since its publication, gufm1 has not been updated. However, more recent geomagnetic models have been developed to extend and refine our understanding of Earth's magnetic field beyond 1990.

- **International Geomagnetic Reference Field (IGRF):** A standard model that is regularly updated to reflect the latest data, covering 1900 to the present.  
  ([Source: en.wikipedia.org](https://en.wikipedia.org/wiki/International_Geomagnetic_Reference_Field?utm_source=chatgpt.com))

- **High Definition Geomagnetic Model (HDGM):** Provides high-resolution data and is updated annually.  
  ([Source: geomag.colorado.edu](https://geomag.colorado.edu/geomagnetic-and-electric-field-models?utm_source=chatgpt.com))

These models incorporate data from ground-based observatories, satellites, and other sources to provide more current representations of the geomagnetic field.

# IGRF

## GPT

The International Geomagnetic Reference Field (IGRF) is a standard mathematical model describing the Earth's main magnetic field and its temporal variations. Developed by the International Association of Geomagnetism and Aeronomy (IAGA), the IGRF has been updated every five years since its inception in the 1960s.

**Timeframe Coverage:**

The IGRF provides a series of models representing the Earth's magnetic field from 1900 onwards. Each model corresponds to a specific epoch (a reference time point), with predictive components extending a few years beyond the latest epoch to account for secular variation (gradual changes in the Earth's magnetic field).

**Publication and Updates:**

- **Initial Release:** The IGRF was first introduced in the late 1960s, with subsequent updates released every five years to incorporate new data and improve accuracy.

- **Recent Generations:**
  - **IGRF-13:** Released in December 2019, covering the period from 1900 to 2025. This edition included a definitive main field model for epoch 2015.0, a main field model for epoch 2020.0, and a predictive secular variation model for 2020.0 to 2025.0. :contentReference[oaicite:0]{index=0}

  - **IGRF-14:** The latest generation, finalized by an IAGA task force in November 2024. While specific details about IGRF-14's coverage are not provided in the available sources, it is expected to extend the model's validity beyond 2025, incorporating the most recent data to enhance accuracy. :contentReference[oaicite:1]{index=1}

**Most Recent Update:**

As of December 2024, the IGRF-14 is the most up-to-date version of the model, reflecting the latest measurements and research in geomagnetism. This edition ensures that applications relying on geomagnetic data, such as navigation and geophysical surveys, have access to the most current information available.

For more detailed information and access to the IGRF models, you can visit the National Centers for Environmental Information's [International Geomagnetic Reference Field product page](https://www.ncei.noaa.gov/products/international-geomagnetic-reference-field). :contentReference[oaicite:2]{index=2}

## GPT more detail: International Geomagnetic Reference Field (IGRF) Coverage

### Key Details:
1. **Oldest Year Covered:**  
   - The IGRF spans back to **1900**, with successive models extending this timeline forward to the present.

2. **Extent of Coverage for Each Iteration:**  
   - **Continuous Coverage:** Each new generation of the IGRF provides updated field models that cover the **entire span from 1900 up to the most recent epoch**.  
   - This ensures users have access to a single coherent model extending across the entire covered timeframe, rather than needing to rely on separate or disconnected models for earlier and later years.

3. **Temporal Representation:**  
   - The IGRF includes:  
     - **Definitive models** for earlier epochs, representing the field based on historical data and measurements.  
     - **Predictive secular variation models** for years beyond the latest definitive epoch to estimate how the magnetic field is expected to change.

### Example:
- **IGRF-13:** Released in 2019, it includes:
  - Definitive models from **1900** to **2015**.
  - A main field model for **2020.0**.
  - Predictive secular variation estimates from **2020.0 to 2025.0**.

- **IGRF-14:** Released in 2024, it provides:
  - Updated definitive and predictive models covering the full span from **1900 to beyond 2025**.

### Summary:
Each IGRF iteration is comprehensive and ensures the continuity of the Earth's geomagnetic field representation across time. Users have access to the most accurate and up-to-date geomagnetic data for applications like navigation and geophysical studies.
