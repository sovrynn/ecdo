import sys
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from matplotlib.colors import Normalize
from matplotlib.animation import FuncAnimation, PillowWriter

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

    return np.array(dates), np.array(x_coords), np.array(y_coords)

def animate_timeseries(dates, x_coords, y_coords):
    # Sort data by date
    sorted_indices = np.argsort(dates)
    dates = dates[sorted_indices]
    x_coords = x_coords[sorted_indices]
    y_coords = y_coords[sorted_indices]

    # Create a color gradient based on dates
    norm = Normalize(vmin=dates.min(), vmax=dates.max())
    cmap = plt.get_cmap('viridis')

    fig, ax = plt.subplots(figsize=(10, 8))

    # Set axis limits centered at origin
    x_max = np.max(np.abs(x_coords))
    y_max = np.max(np.abs(y_coords))
    max_limit = max(x_max, y_max) * 2  # Edges are twice the max/min values

    ax.set_xlim(-max_limit, max_limit)
    ax.set_ylim(-max_limit, max_limit)
    ax.set_aspect('equal', adjustable='box')

    # Labels and title
    ax.set_xlabel('X Coordinate')
    ax.set_ylabel('Y Coordinate')
    ax.set_title('2D Timeseries Curve Animation')

    # Prepare the segments
    points = np.array([x_coords, y_coords]).T.reshape(-1, 1, 2)
    total_frames = len(points) - 1

    # Initialize an empty LineCollection
    lc = LineCollection([], cmap=cmap, norm=norm)
    line = ax.add_collection(lc)

    # Create colorbar
    cbar = plt.colorbar(lc, ax=ax, pad=0.02)
    cbar.set_label('Date (MJD)')

    # Animation function
    def animate(i):
        if i == 0:
            return line,
        # Prepare segments up to frame i
        segs = np.concatenate([points[:i], points[1:i+1]], axis=1)
        lc.set_segments(segs)
        lc.set_array(dates[:i])
        lc.set_linewidth(2)
        return line,

    # Create the animation
    ani = FuncAnimation(fig, animate, frames=total_frames, interval=20, blit=True)

    # Save the animation as a GIF
    ani.save('timeseries_animation.gif', writer=PillowWriter(fps=30))

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

    animate_timeseries(dates, x_coords, y_coords)

if __name__ == "__main__":
    main()
