#!/usr/bin/env python

import numpy as np
import pymagglobal

# Initialize the gufm1 model
model = pymagglobal.Model("gufm1")

def get_total_field_value(lat, lon, year):

    # Earth radius (default for surface evaluations)
    radius = 6371.2

    # Build a "grid" array: shape (4, number_of_points)
    # grid[0]: colatitude (90 - latitude)
    # grid[1]: longitude
    # grid[2]: radius in km
    # grid[3]: year
    grid = np.array([
        [90.0 - lat],    # colatitude in degrees
        [lon],           # longitude in degrees
        [radius],        # radius in km
        [year]           # epoch in years
    ], dtype=float)

    # Evaluate the field in the NEZ system (north, east, down)
    # Returned array has shape (3, number_of_points)
    B = pymagglobal.field(grid, model, field_type='nez')

    # Extract the components for our single evaluation point
    n_comp, e_comp, z_comp = B[:, 0]

    # Compute the total field as sqrt(n^2 + e^2 + z^2)
    t_comp = np.sqrt(n_comp**2 + e_comp**2 + z_comp**2)

    return t_comp

def main():
    # Initialize the gufm1 model
    model = pymagglobal.Model("gufm1")

    # Geodetic latitude & longitude
    lat = -30
    lon = 30

    # Earth radius (default for surface evaluations)
    radius = 6371.2

    print("Year   North (nT)   Total (nT)")
    for year in range(1590, 1991, 5):
        # Build a "grid" array: shape (4, number_of_points)
        # grid[0]: colatitude (90 - latitude)
        # grid[1]: longitude
        # grid[2]: radius in km
        # grid[3]: year
        grid = np.array([
            [90.0 - lat],    # colatitude in degrees
            [lon],           # longitude in degrees
            [radius],        # radius in km
            [year]           # epoch in years
        ], dtype=float)

        # Evaluate the field in the NEZ system (north, east, down)
        # Returned array has shape (3, number_of_points)
        B = pymagglobal.field(grid, model, field_type='nez')

        # Extract the components for our single evaluation point
        n_comp, e_comp, z_comp = B[:, 0]

        # Compute the total field as sqrt(n^2 + e^2 + z^2)
        t_comp = np.sqrt(n_comp**2 + e_comp**2 + z_comp**2)

        print(f"{year}   {n_comp:9.2f}   {t_comp:9.2f}")

def main2():
    print(get_total_field_value(-23.5, 17.5, 1590))
    print(get_total_field_value(-23.5, 18.5, 1590))
    print(get_total_field_value(-23.5, 19.5, 1590))
    print(get_total_field_value(-20.5, 6.5, 1590))

if __name__ == "__main__":
    main2()
