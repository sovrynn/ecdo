import sys
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from matplotlib.lines import Line2D
import numpy as np

def plot_time_series(filename):
    # Read data from the file
    data = pd.read_csv(filename, sep=' ', header=None, names=['date', 'x', 'y'])

    # Convert date strings to datetime objects
    data['date'] = pd.to_datetime(data['date'], format='%Y-%m-%d')

    # Sort data by date
    data.sort_values('date', inplace=True)
    data.reset_index(drop=True, inplace=True)

    # Prepare the data for LineCollection
    points = data[['x', 'y']].values
    dates = data['date'].values
    segments = np.array([[points[i], points[i+1]] for i in range(len(points)-1)])

    # Define the 20-year intervals from 1900 to 2020
    min_year = data['date'].dt.year.min()
    max_year = data['date'].dt.year.max()

    # Adjust min_year to the nearest lower multiple of 20 (e.g., 1900, 1920, ...)
    min_interval_start = (min_year // 20) * 20

    # Generate intervals from 1900 to 2020 in 20-year increments
    colors = ['yellow', 'orange', 'red', 'green', 'blue', 'red', 'green', 'blue', 'red']
    intervals = []
    num_intervals = ((2020 - 1860) // 20) + 1  # From 1900 to 2020
    for i in range(num_intervals):
        start_year = 1860 + 20 * i
        end_year = start_year + 20
        intervals.append({
            'start': pd.Timestamp(f'{start_year}-01-01'),
            'end': pd.Timestamp(f'{end_year}-01-01'),
            'color': colors[i % len(colors)],
            'label': str(start_year)
        })

    # Initialize lists to hold segments and their colors
    all_segments = []
    all_colors = []
    dots = []

    # For the legend
    legend_elements = []

    # For each interval, collect segments and plot
    for interval in intervals:
        # Collect segments within the interval
        interval_segments = []
        interval_indices = []

        for i in range(len(segments)):
            date = dates[i]
            next_date = dates[i+1]

            if (date >= interval['start'] and date < interval['end']):
                interval_segments.append(segments[i])
                interval_indices.append(i)

        if interval_segments:
            # Add to all segments
            all_segments.extend(interval_segments)
            all_colors.extend([interval['color']] * len(interval_segments))

            # Get the last point in the interval for plotting the dot
            last_idx = interval_indices[-1] + 1
            if last_idx < len(points):
                x, y = points[last_idx]
                dots.append({'x': x, 'y': y, 'color': interval['color']})

            # For the legend
            legend_elements.append((interval['label'], interval['color']))

    # Create a LineCollection for all segments
    lc = LineCollection(all_segments, colors=all_colors, linewidths=1)

    # Set up the plot
    fig, ax = plt.subplots(figsize=(10, 10))

    # Add line collection
    ax.add_collection(lc)

    # Plot dots at the end of each interval
    for dot in dots:
        ax.plot(dot['x'], dot['y'], 'o', color=dot['color'])

    # Center the coordinate system at the origin
    max_range = max(abs(data['x']).max(), abs(data['y']).max()) * 1.05  # Add 5% padding
    ax.set_xlim(-max_range, max_range)
    ax.set_ylim(-max_range, max_range)
    ax.axhline(0, color='black', linewidth=0.5)
    ax.axvline(0, color='black', linewidth=0.5)

    # Reverse the legend order to have the most recent dates first
    legend_elements = legend_elements[::-1]

    # Add legend with numbers (years) and their colors
    legend_handles = [Line2D([0], [0], color=color, lw=2, label=label) for label, color in legend_elements]
    ax.legend(handles=legend_handles, title='20-Year Intervals', loc='best')

    # Labels and title
    ax.set_xlabel('X Value')
    ax.set_ylabel('Y Value')
    ax.set_title('2D Time Series Plot with 20-Year Intervals')

    # Save the plot to output.png
    plt.savefig('output.png', bbox_inches='tight')
    plt.close()
    print("Plot saved as output.png")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)

    filename = sys.argv[1]
    plot_time_series(filename)
