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

        y(t) = A + B * ln(tc - t) * [1 + D * cos(2π f ln(tc - t) + phi)]

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
    #    Adjust these as needed for your data.
    #    IMPORTANT: ensure tc is initially > max(t_data) to avoid log(0) or log(negative).
    t_max = np.max(t_data)

    # this one works for the full timeseries
    p0 = [
        1.0e4,       # A  ~ offset
        -1.0e3,      # B  ~ scale factor for ln(tc - t)
        2050,  # tc ~ a bit beyond the last data time
        1,         # D  ~ amplitude of log-periodic oscillation
        1,         # f  ~ frequency
        1.0          # phi ~ phase shift
    ]

    p0 = [
        1.0e4,       # A  ~ offset
        -1.0e3,      # B  ~ scale factor for ln(tc - t)
        2050,  # tc ~ a bit beyond the last data time
        1,         # D  ~ amplitude of log-periodic oscillation
        1,         # f  ~ frequency
        1.0          # phi ~ phase shift
    ]

    # lb = [-np.inf, -np.inf, 2025.1, -np.inf, -np.inf, -np.inf]
    # ub = [np.inf, np.inf, 2100,    np.inf,  np.inf,  np.inf]
    popt, pcov = curve_fit(log_periodic, t_data, y_data,
                           p0=p0, maxfev=1000000)

    # # Optional: Use parameter bounds so tc can't drop below max(t_data)
    # # from scipy.optimize import curve_fit
    # lb = [-np.inf, -np.inf, t_max + 1, -np.inf, 0, -2*np.pi]
    # ub = [np.inf, np.inf, t_max + 1000, np.inf, 5, 2*np.pi]

    # # 4) Fit the data
    # popt, pcov = curve_fit(
    #     log_periodic, t_data, y_data,
    #     p0=p0, maxfev=20000
    # )

    # Extract best-fit parameters
    A_fit, B_fit, tc_fit, D_fit, f_fit, phi_fit = popt

    # 5) Compute predictions at the actual data points
    y_fit = log_periodic(t_data, *popt)

    # 6) Calculate correlation coefficient (Pearson r)
    #    We'll just do a standard Pearson correlation.
    r_value, p_value = pearsonr(y_data, y_fit)

    print(f"Correlation coefficient (r) = {r_value:.4f}")
    print(f"p-value for r               = {p_value:.4e}")
    print(f'Critical time {tc_fit}')

    # Print best-fit parameters and correlation
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
    t_fit = np.linspace(t_min, 2030, 200)
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
