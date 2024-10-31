import sys
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import Normalize
from matplotlib import cm

XS = -1
XL = 1
YS = -1
YL = 1

def read_data(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()[13:]  # Start from line 14 (0-indexed)
    mjd = []
    pm_x = []
    pm_y = []
    for line in lines:
        # Split the line into words (handle multiple spaces)
        words = line.strip().split()
        if len(words) < 3:
            continue  # Skip lines that don't have enough data
        mjd_value = float(words[0])
        pm_x_value = float(words[1])
        pm_y_value = float(words[2])
        mjd.append(mjd_value)
        pm_x.append(pm_x_value)
        pm_y.append(pm_y_value)

    print(f'X: max {max(pm_x)} min {min(pm_x)}')
    print(f'Y: max {max(pm_y)} min {min(pm_y)}')
    print(f'Date: max {max(mjd)} min {min(mjd)}')

    # deltas are manually calculated. Remove this to plot the original values
    pm_x = calculate_differences(pm_x)
    pm_y = calculate_differences(pm_y)
    mjd = mjd[1:]

    return np.array(mjd), np.array(pm_x), np.array(pm_y)

def calculate_differences(lst):
    if len(lst) < 2:
        raise ValueError("List must contain at least two elements")
    
    differences = [float(lst[i+1] - lst[i]) for i in range(len(lst) - 1)]
    return differences

def plot_timeseries(a, b, c):
    """
    Plots a 2D timeseries curve of x and y points with a color gradient based on dates.

    Parameters:
    - a: list or array of dates (in MJD format)
    - b: list or array of x coordinates
    - c: list or array of y coordinates
    """

    # Ensure inputs are numpy arrays
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)

    # Sort data by date to ensure the gradient flows correctly
    sorted_indices = np.argsort(a)
    a = a[sorted_indices]
    b = b[sorted_indices]
    c = c[sorted_indices]

    # Normalize dates for color mapping
    norm = plt.Normalize(vmin=a.min(), vmax=a.max())

    # Create a colormap
    cmap = plt.cm.viridis

    # Prepare the points for coloring
    points = np.array([b, c]).T.reshape(-1, 1, 2)
    segments = np.concatenate([points[:-1], points[1:]], axis=1)

    # Create a LineCollection object with the segments and colors
    from matplotlib.collections import LineCollection
    lc = LineCollection(segments, cmap=cmap, norm=norm)
    lc.set_array(a[:-1])
    lc.set_linewidth(0.4)

    # Create the plot
    fig, ax = plt.subplots(figsize=(8, 8))

    ax.add_collection(lc)
    ax.set_xlim(XS, XL)
    ax.set_ylim(YS, YL)
    ax.set_aspect('equal', adjustable='box')

    # Add colorbar
    cbar = fig.colorbar(lc, ax=ax)
    cbar.set_label('Date (MJD)')

    # Set labels and title
    ax.set_xlabel('Delta X Pole-Coordinate')
    ax.set_ylabel('Delta Y Pole-Coordinate')
    ax.set_title('Delta Pole-Coordinates Timeseries Curve with Date Gradient')

    # Center the plot on (0,0)
    ax.set_xlim(XS, XL)
    ax.set_ylim(YS, YL)

    # Save the plot to a file and display it
    plt.savefig('output.png', dpi=300)
    plt.show()

def plot_numbers(lst):
    # Create a list of indices for the x-axis, same length as the input list
    x_values = range(len(lst))
    
    # Plot the values
    plt.figure(figsize=(8, 6))  # Optional: set the figure size
    plt.plot(x_values, lst, marker='o')  # 'o' is to plot the points
    plt.xlabel('Year Index (Order)')
    plt.ylabel('Delta X Pole-Coordinate')
    plt.title('Delta X Pole-Coordinate Over Time')
    plt.grid(True)  # Optional: add grid for better readability
    plt.show()

def main():
    if len(sys.argv) != 2:
        print("Usage: python script_name.py data_filename")
        sys.exit(1)
    filename = sys.argv[1]
    mjd, pm_x, pm_y = read_data(filename)

    # Plots
    # plot_numbers(pm_x)
    plot_numbers(pm_x)
    plot_timeseries(mjd, pm_x, pm_y)

if __name__ == "__main__":
    main()
