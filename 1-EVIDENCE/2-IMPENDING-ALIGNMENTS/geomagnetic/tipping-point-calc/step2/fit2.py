#!/usr/bin/env python3

"""
Usage:
    python fit_logperiodic.py mydata.txt

Description:
    Reads a two-column text file (time, observation) from the file 'mydata.txt'.
    Fits the data to a log-periodic model of the form:

        y(t) = A + B*ln(tc - t)*[1 + D*cos(2*pi*f*ln(tc - t) + phi)]

    Plots both the data and the best-fit curve, then saves the plot as output.png.
"""

import sys
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

def log_periodic(t, A, B, tc, D, f, phi):
    """
    Log-periodic function y(t):

        y(t) = A + B * ln(tc - t) * [1 + D * cos(2π f ln(tc - t) + phi)]

    Parameters
    ----------
    t : float or array-like
        Independent variable (time).
    A, B, tc, D, f, phi : float
        Model parameters as discussed in De Santis et al. (2013b).

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

    # 2) Load data: each line has "time observation", space-separated
    data = np.loadtxt(filename)
    t_data = data[:, 0]
    y_data = data[:, 1]

    # 3) Provide an initial guess for the model parameters:
    #    [A, B, tc, D, f, phi]
    #    Adjust these as needed for your data.
    p0 = [
        1.0e4,   # A ~ offset
        -1.0e3,  # B ~ scale factor for ln(tc - t)
        2050.0,  # tc ~ guess for the "tipping" year
        0.1,     # D ~ amplitude of oscillation
        0.5,     # f ~ frequency for log-periodic oscillation
        0.0      # phi ~ phase shift
    ]

    # 4) Fit the data
    popt, pcov = curve_fit(log_periodic, t_data, y_data, p0=p0, maxfev=20000)

    # Extract best-fit parameters
    A_fit, B_fit, tc_fit, D_fit, f_fit, phi_fit = popt
    print("Best-fit parameters:")
    print(f"A   = {A_fit:.4f}")
    print(f"B   = {B_fit:.4f}")
    print(f"tc  = {tc_fit:.4f}")
    print(f"D   = {D_fit:.4f}")
    print(f"f   = {f_fit:.4f}")
    print(f"phi = {phi_fit:.4f}")

    # Compute the model on a dense time grid for plotting
    t_min = np.min(t_data)
    t_max = np.max(t_data)
    t_fit = np.linspace(t_min, t_max, 200)
    y_model = log_periodic(t_fit, *popt)

    # 5) Plot and save to output.png
    plt.figure(figsize=(8, 5))
    plt.scatter(t_data, y_data, c='blue', label='Data')
    plt.plot(t_fit, y_model, 'r-', label='Log-Periodic Fit')
    plt.xlabel("Time")
    plt.ylabel("Observation")
    plt.title("Log-Periodic Fit")
    plt.legend()
    plt.savefig("output.png", dpi=150)
    plt.close()

if __name__ == "__main__":
    main()
