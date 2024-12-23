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

def log_periodic(t, A, B, tc, p):
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
    return A + B * ((tc - t) ** p)

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
        1000000,       # A  ~ offset
        5000000,      # B  ~ scale factor for ln(tc - t)
        2100,  # tc ~ a bit beyond the last data time
        -2,         # p
    ]

    # Bounds for all 6 parameters
    lb = [-np.inf, -np.inf, 2025.1, -np.inf]
    ub = [np.inf,  np.inf, 2500,  np.inf]
    print("About to start fitting")
    popt, pcov = curve_fit(log_periodic, t_data, y_data,
                           p0=p0, bounds=(lb, ub), maxfev=1000000)
    print("Completed fitting")

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
    A_fit, B_fit, tc_fit, p_fit = popt

    # 5) Compute predictions at the actual data points
    y_fit = log_periodic(t_data, *popt)
    y_fit = [log_periodic(t, A_fit, B_fit, tc_fit, p_fit) for t in t_data]

    print("Data:")
    for i in range(len(t_data)):
        print(f'{t_data[i]} {y_data[i]} {y_fit[i]}')

    # 6) Calculate correlation coefficient (Pearson r)
    #    We'll just do a standard Pearson correlation.
    r_value, p_value = pearsonr(y_data, y_fit)

    # Print best-fit parameters and correlation
    print("Best-fit parameters:")
    print(f"  A   = {A_fit:.4f}")
    print(f"  B   = {B_fit:.4f}")
    print(f"  tc  = {tc_fit:.4f}")
    print(f"  p   = {p_fit:.4f}")
    print()
    print(f"Correlation coefficient (r) = {r_value:.4f}")
    print(f"p-value for r               = {p_value:.4e}")
    print(f'Critical time {tc_fit}')

    # 7) Now extend the plot up to tc.
    #    We won't include tc exactly (log would blow up), so we stop slightly before.
    if tc_fit > t_max:
        t_ext = np.linspace(np.min(t_data), tc_fit - 0.001, 400)
    else:
        # If the fitted tc is not > t_max, we just stick to data range
        # (or you can skip plotting beyond data).
        # But usually, we'd expect tc to be beyond max data time.
        print("\nWarning: tc <= max(t_data). Plot is limited to data range.")
        t_ext = np.linspace(np.min(t_data), t_max, 400)

    y_ext = log_periodic(t_ext, *popt)

    # 8) Plot
    plt.figure(figsize=(8, 5))

    # Plot the data
    plt.scatter(t_data, y_data, c='blue', label='Data')

    # Plot the extended model
    plt.plot(t_ext, y_ext, 'r-', label='Log-Periodic Fit')

    # Optionally, mark the tc with a vertical line if it is beyond the data range
    if tc_fit > t_max:
        plt.axvline(tc_fit, color='green', linestyle='--', label=f't_c={tc_fit:.1f}')

    plt.xlabel("Time")
    plt.ylabel("Observation")
    plt.title("Log-Periodic Fit up to tc")
    plt.legend()
    plt.savefig("output.png", dpi=150)
    plt.close()

if __name__ == "__main__":
    main()
