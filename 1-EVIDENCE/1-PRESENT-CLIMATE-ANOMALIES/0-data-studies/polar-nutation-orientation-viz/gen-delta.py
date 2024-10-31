# I think this is deprecated, don't use it

import sys
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from matplotlib.colors import Normalize

# from 0 to 1
L1 = 0
L2 = 1

def read_data(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()[13:]  # Start from line 14 (inclusive)

    dates = []
    x_coords = []
    y_coords = []

    for line in lines:
        # Split the line into words (handle multiple spaces)
        words = line.strip().split()
        if len(words) < 6:
            continue  # Skip lines that don't have enough data

        # Extract data
        try:
            date = float(words[0])
            x_coord = float(words[4])
            y_coord = float(words[5])
        except ValueError:
            continue  # Skip lines with invalid data

        dates.append(date)
        x_coords.append(x_coord)
        y_coords.append(y_coord)

    # adjust for the desired subset of the data
    dates = dates[int(len(dates) * L1):int(len(dates) * L2)]
    x_coords = x_coords[int(len(x_coords) * L1):int(len(x_coords) * L2)]
    y_coords = y_coords[int(len(y_coords) * L1):int(len(y_coords) * L2)]

    return np.array(dates), np.array(x_coords), np.array(y_coords)

def plot_timeseries(dates, x_coords, y_coords):
    # Sort data by date
    sorted_indices = np.argsort(dates)
    dates = dates[sorted_indices]
    x_coords = x_coords[sorted_indices]
    y_coords = y_coords[sorted_indices]

    # Create a color gradient based on dates
    norm = Normalize(vmin=dates.min(), vmax=dates.max())
    cmap = plt.get_cmap('viridis')

    # Prepare segments for LineCollection
    points = np.array([x_coords, y_coords]).T.reshape(-1, 1, 2)
    segments = np.concatenate([points[:-1], points[1:]], axis=1)

    lc = LineCollection(segments, cmap=cmap, norm=norm)
    lc.set_array(dates[:-1])
    lc.set_linewidth(2)

    fig, ax = plt.subplots(figsize=(10, 8))

    ax.add_collection(lc)

    # Set axis limits centered at origin
    x_max = np.max(np.abs(x_coords))
    y_max = np.max(np.abs(y_coords))
    max_limit = max(x_max, y_max) * 2  # Edges are twice the max/min values

    ax.set_xlim(-max_limit, max_limit)
    ax.set_ylim(-max_limit, max_limit)
    ax.set_aspect('equal', adjustable='box')

    # Add colorbar as legend
    cbar = plt.colorbar(lc, ax=ax, pad=0.02)
    cbar.set_label('Date (MJD)')

    # Labels and title
    ax.set_xlabel('X Coordinate')
    ax.set_ylabel('Y Coordinate')
    ax.set_title('2D Timeseries Curve with Date Gradient')

    # Add labels at every 5000 MJD increments
    start_mjd = dates.min()
    end_mjd = dates.max()
    increment = 15000

    mjd_labels = np.arange(start_mjd - (start_mjd % increment), end_mjd + increment, increment)
    mjd_labels = mjd_labels[mjd_labels >= start_mjd]

    # Find the indices closest to the desired MJD labels
    for mjd_label in mjd_labels:
        idx = (np.abs(dates - mjd_label)).argmin()
        x = x_coords[idx]
        y = y_coords[idx]
        ax.text(x, y, f'{int(dates[idx])}', fontsize=8, ha='center', va='center',
                bbox=dict(facecolor='white', alpha=0.6, edgecolor='none'))

    # Save the figure
    plt.savefig('timeseries_visualization_with_labels.png', dpi=300)
    plt.show()

def plot_numbers(lst):
    # Create a list of indices for the x-axis, same length as the input list
    x_values = range(len(lst))
    
    # Plot the values
    plt.figure(figsize=(8, 6))  # Optional: set the figure size
    plt.plot(x_values, lst, marker='o')  # 'o' is to plot the points
    plt.xlabel('Index (Order)')
    plt.ylabel('Values')
    plt.title('Plot of Values by Index')
    plt.grid(True)  # Optional: add grid for better readability
    plt.show()

def main():
    if len(sys.argv) != 2:
        print("Usage: python script_name.py data_filename")
        sys.exit(1)

    filename = sys.argv[1]
    dates, x_coords, y_coords = read_data(filename)
    if len(dates) == 0:
        print("No valid data found in the file.")
        sys.exit(1)

    plot_timeseries(dates, x_coords, y_coords)

if __name__ == "__main__":
    main()
