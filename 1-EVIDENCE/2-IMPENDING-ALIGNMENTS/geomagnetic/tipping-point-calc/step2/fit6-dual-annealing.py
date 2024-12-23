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

    This version replaces curve_fit with scipy.optimize.dual_annealing
    for a global optimization approach.
"""

import sys
import numpy as np
import matplotlib.pyplot as plt

from scipy.optimize import dual_annealing
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
    float or np.ndarray
        The model-predicted values y(t).
    """
    return A + B * np.log(tc - t) * (
        1.0 + D * np.cos(2.0 * np.pi * f * np.log(tc - t) + phi)
    )

def objective_function(params, t_data, y_data):
    """
    Objective function to minimize.

    Parameters
    ----------
    params : array-like
        [A, B, tc, D, f, phi]
    t_data : np.ndarray
        Array of time points.
    y_data : np.ndarray
        Observed data at corresponding time points.

    Returns
    -------
    float
        Sum of squared residuals (SSR) between model and data.
    """
    A, B, tc, D, f, phi = params
    # Model prediction
    pred = log_periodic(t_data, A, B, tc, D, f, phi)
    # Residuals
    residuals = y_data - pred
    # Sum of squared residuals
    return np.sum(residuals**2)

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

    t_min = np.min(t_data)
    t_max = np.max(t_data)

    # === BOUNDS FOR DUAL ANNEALING ===
    # We'll define a plausible range for each parameter.
    # [A, B, tc, D, f, phi]
    # Example:
    #  1) A   ~ can be large or small, so let's do (-1e10, 1e10)
    #  2) B   ~ similarly large range
    #  3) tc  ~ must be > t_max (avoid log of zero or negative)
    #  4) D   ~ amplitude of oscillation; 0 -> 10 as an example
    #  5) f   ~ frequency of log oscillation; maybe 0 -> 5
    #  6) phi ~ phase shift; from -2*pi -> 2*pi
    bounds = [
        (-1e15, 1e15),     # A
        (-1e15, 1e15),     # B
        (t_max + 0.1, 5000),  # tc, must exceed t_max
        (-10, 10.0),       # D
        (0.0, 5.0),        # f
        (-2.0 * np.pi, 2.0 * np.pi),  # phi
    ]

    # 3) Solve using dual_annealing
    result = dual_annealing(
        objective_function,
        bounds=bounds,
        args=(t_data, y_data),
        maxiter=100000,  # Increase if needed
        seed=42        # For reproducibility, optional
    )

    # The optimal parameters
    popt = result.x
    A_fit, B_fit, tc_fit, D_fit, f_fit, phi_fit = popt

    # 4) Compute model predictions with the best fit
    y_fit = log_periodic(t_data, *popt)

    # 5) Calculate Pearson correlation between data and fit
    r_value, p_value = pearsonr(y_data, y_fit)

    print(f"Optimization success: {result.message}")
    print(f"Final SSE (sum of squared errors): {result.fun:.4f}")
    print(f"Correlation coefficient (r) = {r_value:.4f}")
    print(f"p-value for r               = {p_value:.4e}")
    print(f"Critical time               = {tc_fit:.4f}")

    # Print best-fit parameters
    print("\nBest-fit parameters from dual_annealing:")
    print(f"A   = {A_fit:.4f}")
    print(f"B   = {B_fit:.4f}")
    print(f"tc  = {tc_fit:.4f}")
    print(f"D   = {D_fit:.4f}")
    print(f"f   = {f_fit:.4f}")
    print(f"phi = {phi_fit:.4f}")

    # 6) For plotting: Extend the time axis up to a bit before tc
    # Avoid tc exactly because log(tc - t) => log(0) if t==tc
    tc_for_plot = np.min([tc_fit - 1.0, t_max + 50.0])  # just a safety margin
    if tc_for_plot <= t_max:
        tc_for_plot = t_max + 1  # minimal extension

    t_plot = np.linspace(t_min, tc_for_plot, 200)
    y_model = log_periodic(t_plot, *popt)

    # 7) Plot
    plt.figure(figsize=(8, 5))
    plt.scatter(t_data, y_data, c='blue', label='Data')
    plt.plot(t_plot, y_model, 'r-', label='Log-Periodic Fit')
    plt.xlabel("Time")
    plt.ylabel("Observation")
    plt.title("Log-Periodic Fit (dual_annealing)")
    plt.legend()
    plt.savefig("output.png", dpi=150)
    plt.close()

if __name__ == "__main__":
    main()
