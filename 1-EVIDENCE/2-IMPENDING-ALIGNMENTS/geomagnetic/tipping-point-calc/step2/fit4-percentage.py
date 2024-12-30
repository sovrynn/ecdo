#!/usr/bin/env python3

"""
Usage:
    python fit_logperiodic.py mydata.txt

Description:
    Reads a two-column text file (time, observation) from 'mydata.txt'.
    Fits the data to a log-periodic model:

        y(t) = A + B * ln(tc - t) * [1 + D * cos(2π f ln(tc - t) + phi)]

    Then:
    1) Prints out the best-fit parameters and the correlation coefficient (r).
    2) Saves a plot (with extended range up to tc) to 'output.png'.
"""

import sys
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
from scipy.stats import pearsonr

def log_periodic(t, A, B, tc, D, f, phi):
    """
    Log-periodic function y(t):

        y(t) = A + B * ln(tc - t) * (1 + D * cos(2π f ln(tc - t) + phi))

    Parameters
    ----------
    t : float or array-like
        Independent variable (time).
    A, B, tc, D, f, phi : float
        Model parameters.

    Returns
    -------
    float or array-like
        The model-predicted values y(t).
    """
    return A + B * np.log(tc - t) * (
        1.0 + D * np.cos(2.0 * np.pi * f * np.log(tc - t) + phi)
    )

def main():
    # 1) Read the single input argument: the filename.
    if len(sys.argv) < 2:
        print("Usage: python fit_logperiodic.py <datafile.txt>")
        sys.exit(1)

    filename = sys.argv[1]

    # 2) Load data: each line has "time observation", space-separated.
    data = np.loadtxt(filename)
    t_data = data[:, 0]
    y_data = data[:, 1]

    # 3) Provide an initial guess for the model parameters:
    #    [A, B, tc, D, f, phi]
    t_max = np.max(t_data)

    p0 = [
        250000000,  # A  ~ offset
        -50000000,  # B  ~ scale factor for ln(tc - t)
        2026,       # tc ~ a bit beyond the last data time
        -0.1,       # D  ~ amplitude of log-periodic oscillation
        1,          # f  ~ frequency
        2.0         # phi ~ phase shift
    ]

    # 4) Fit the data
    popt, pcov = curve_fit(log_periodic, t_data, y_data, p0=p0, maxfev=1000000)

    # Extract best-fit parameters
    A_fit, B_fit, tc_fit, D_fit, f_fit, phi_fit = popt

    # 5) Compute predictions at the actual data points
    y_fit = log_periodic(t_data, *popt)

    # 6) Calculate correlation coefficient (Pearson r)
    r_value, p_value = pearsonr(y_data, y_fit)

    # Print best-fit parameters and correlation
    print("Best-fit parameters:")
    print(f"  A   = {A_fit:.4f}")
    print(f"  B   = {B_fit:.4f}")
    print(f"  tc  = {tc_fit:.4f}")
    print(f"  D   = {D_fit:.4f}")
    print(f"  f   = {f_fit:.4f}")
    print(f"  phi = {phi_fit:.4f}")
    print()
    print(f"Correlation coefficient (r) = {r_value:.4f}")
    print(f"p-value for r               = {p_value:.4e}")
    print(f'Critical time {tc_fit}')

    # 7) Extend the plot up to tc if tc > t_max
    if tc_fit > t_max:
        t_ext = np.linspace(np.min(t_data), tc_fit - 0.001, 400)
    else:
        print("\nWarning: tc <= max(t_data). Plot is limited to data range.")
        t_ext = np.linspace(np.min(t_data), t_max, 400)

    y_ext = log_periodic(t_ext, *popt)

    # 8) Plot
    plt.figure(figsize=(8, 5))

    # -- MODIFICATION: scale y_data by dividing by 510,100,000 then multiply by 100
    #    (effectively converting to '% of 510,100,000')
    y_data = (y_data / 510100000.0) * 100
    y_ext = (y_ext / 510100000.0) * 100

    # Plot the data
    plt.scatter(t_data, y_data, c='blue', label='SAA Surface Area Extent (%)')

    # Plot the extended model
    plt.plot(t_ext, y_ext, 'r-', label='Tipping Point Model Fit')

    # Optionally, mark the tc with a vertical line
    if tc_fit > t_max:
        plt.axvline(tc_fit, color='green', linestyle='--',
                    label=f'Tipping point time = {tc_fit:.1f}')

    plt.xlabel("Time")
    # Updated label reflecting the scaling
    ylabel = """SAA Extent (% of Earth's surface area)
    """
    plt.ylabel(ylabel)
    plt.title("Geomagnetic Tipping Point Projection Based on South Atlantic Anomaly Extent\nData Source: GUFM1 (1590-1944), IGRF (1945-2025)")
    plt.legend()
    plt.savefig("output.png", dpi=150)
    plt.close()

if __name__ == "__main__":
    main()
