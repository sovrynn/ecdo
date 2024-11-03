import sys
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
from matplotlib.lines import Line2D
import numpy as np

def parse_first_file(filename):
    """Parses the first file where each line is 'DATE X Y'."""
    data = pd.read_csv(filename, sep=' ', header=None, names=['date', 'x', 'y'])
    data['date'] = pd.to_datetime(data['date'], format='%Y-%m-%d')
    return data

def parse_second_file(filename):
    """Parses the second file where each line is 'X Y DATE', with DATE being only the year value."""
    data = pd.read_csv(filename, sep=' ', header=None, names=['x', 'y', 'date'])
    data['date'] = pd.to_datetime(data['date'], format='%Y')
    return data

def plot_time_series(filenames):
    # Parameterized colors for intervals (modifiable)
    interval_colors = ['red', 'orange', 'red', 'blue', 'green', 'red', 'blue', 'green', 'red', 'blue']
    
    # Parameterized label offsets for each interval per dataset (modifiable)
    # Structure: {'dataset_index': {'interval_end_year': (x_offset, y_offset), ...}, ...}
    label_offsets = {
        0: {  # For first dataset
            1880: (-0.1, 0.015),
            1900: (-0.1, -0.01),
            1920: (0.0, 0.06),
            1940: (0, 0.05),
            1960: (0, 0.05),
            1980: (0, 0.06),
            2000: (0, 0.05),
            2020: (0.1, 0),
        },
        1: {  # For second dataset
            1880: (0.01, 0.015),
            1900: (0, -0.015),
            1920: (0.033, -0.013),
            1940: (0, 0.012),
            1960: (0, 0.012),
            1980: (0, -0.02),
            2000: (0, 0.018),
            2020: (0, 0.02),
        }
    }

    # Initialize variables to collect data from all files
    all_data = pd.DataFrame()
    datasets = []

    # Read and store data from all files
    for idx, filename in enumerate(filenames):
        if idx == 0:
            # First file parsing
            data = parse_first_file(filename)
        else:
            # Second file parsing
            data = parse_second_file(filename)

        # Assign a dataset ID
        data['dataset_id'] = idx
        datasets.append(data)
        all_data = pd.concat([all_data, data], ignore_index=True)

    # Prepare the plot
    fig, ax = plt.subplots(figsize=(10, 10))

    # For the legend
    legend_elements = []

    # For each dataset
    for idx, data in enumerate(datasets):
        # Sort data by date
        data.sort_values('date', inplace=True)
        data.reset_index(drop=True, inplace=True)

        # Prepare the data for LineCollection
        points = data[['x', 'y']].values
        dates = data['date'].values
        segments = np.array([[points[i], points[i+1]] for i in range(len(points)-1)])

        # Define the 20-year intervals
        min_year = data['date'].dt.year.min()
        max_year = data['date'].dt.year.max()

        # Adjust min_year to the nearest lower multiple of 20 (e.g., 1900, 1920, ...)
        min_interval_start = (min_year // 20) * 20 + 20

        # Generate intervals
        intervals = []
        num_intervals = ((max_year - min_interval_start) // 20)
        for i in range(num_intervals):
            start_year = min_interval_start + 20 * i
            end_year = start_year + 20
            intervals.append({
                'start': pd.Timestamp(f'{start_year}-01-01'),
                'end': pd.Timestamp(f'{end_year}-01-01'),
                'label': str(end_year),  # Label with end date of the interval
                'color': interval_colors[i % len(interval_colors)]
            })

        # Initialize lists to hold segments and their colors
        all_segments = []
        all_colors = []
        dots = []

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
                    dots.append({
                        'x': x,
                        'y': y,
                        'color': interval['color'],
                        'label': interval['label'],
                        'dataset_id': idx
                    })

                # For the legend (avoid duplicates)
                if (interval['label'], interval['color']) not in legend_elements:
                    legend_elements.append((interval['label'], interval['color']))

        # Create a LineCollection for all segments
        lc = LineCollection(all_segments, colors=all_colors, linewidths=1)

        # Add line collection to the plot
        ax.add_collection(lc)

        # Plot dots at the end of each interval and add labels with offsets
        for dot in dots:
            interval_label = dot['label']
            dataset_id = dot['dataset_id']
            x_offset, y_offset = label_offsets.get(dataset_id, {}).get(int(interval_label), (0, 0))
            ax.plot(dot['x'], dot['y'], 'o', color=dot['color'])
            ax.text(dot['x'] + x_offset, dot['y'] + y_offset, interval_label,
                    fontsize=9, color=dot['color'], ha='center', va='center')

    # Reverse the legend order to have the most recent dates first
    legend_elements = legend_elements[::-1]

    # Create legend handles
    legend_handles = [Line2D([0], [0], color=color, lw=2, label=label) for label, color in legend_elements]
    ax.legend(handles=legend_handles, title='20-Year Intervals', loc='best')

    # Center the coordinate system at the origin
    max_range_x = max(abs(all_data['x']).max(), abs(all_data['x']).max()) * 1.05  # Add 5% padding
    max_range_y = max(abs(all_data['y']).max(), abs(all_data['y']).max()) * 1.05
    ax.set_xlim(-max_range_x, max_range_x)
    ax.set_ylim(-max_range_y, max_range_y)
    ax.axhline(0, color='black', linewidth=0.5)
    ax.axvline(0, color='black', linewidth=0.5)

    # Labels and title
    ax.set_xlabel('X Coord (90 West -> 90 East)')
    ax.set_ylabel('Y Coord (0 Longitude -> 180 Longitude)')
    ax.set_title('True Polar Wander (left) and North Magnetic Pole Wander (right)')

    # Save the plot to output.png
    plt.savefig('output.png', bbox_inches='tight')
    plt.close()
    print("Plot saved as output.png")

if __name__ == '__main__':
    if len(sys.argv) < 2 or len(sys.argv) > 3:
        print("Usage: python script.py <filename1> [<filename2>]")
        sys.exit(1)

    filenames = sys.argv[1:]
    plot_time_series(filenames)
