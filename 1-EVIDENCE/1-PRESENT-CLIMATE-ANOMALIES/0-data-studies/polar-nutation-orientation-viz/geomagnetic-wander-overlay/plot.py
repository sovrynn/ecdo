import argparse
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
from matplotlib.collections import LineCollection
import matplotlib.lines as mlines

def mjd_to_datetime(mjd):
    """Convert Modified Julian Date to datetime."""
    mjd_epoch = datetime(1858, 11, 17)
    return mjd_epoch + timedelta(days=mjd)

def process_X(filename):
    """Process the first data file."""
    data_X = []
    with open(filename, 'r') as file_X:
        for line in file_X:
            line = line.strip()
            if not line:
                continue
            LON_str, LAT_str, YEAR_str = line.split()
            LON = float(LON_str)
            LAT = float(LAT_str)
            # YEAR has two decimal points (always 0)
            YEAR = int(float(YEAR_str))
            if YEAR < 1845:
                continue  # Discard rows before 1845
            data_X.append([LON, LAT, YEAR])

    data_X = np.array(data_X)
    # Normalize so the furthest value from origin is 1
    max_abs_value = np.max(np.abs(data_X[:, :2]))
    data_X[:, :2] /= max_abs_value

    # Map coordinates
    x_vals_X = data_X[:, 0]  # LON normalized
    y_vals_X = data_X[:, 1]  # LAT normalized

    dates_X = data_X[:, 2]  # YEAR
    return x_vals_X, y_vals_X, dates_X

def process_Y(filename):
    """Process the second data file."""
    data_Y = []
    with open(filename, 'r') as file_Y:
        for _ in range(13):
            next(file_Y)  # Skip the first 13 lines
        for line in file_Y:
            line = line.strip()
            if not line:
                continue
            words = line.split()
            if len(words) < 3:
                continue
            date_mjd = float(words[0])
            x_coord = float(words[1])
            y_coord = float(words[2])
            data_Y.append([date_mjd, x_coord, y_coord])

    data_Y = np.array(data_Y)
    # Convert dates from MJD to datetime
    dates_Y = np.array([mjd_to_datetime(mjd) for mjd in data_Y[:, 0]])

    # Select one data point per year
    df_Y = pd.DataFrame({
        'date': dates_Y,
        'x_coord': data_Y[:, 1],
        'y_coord': data_Y[:, 2]
    })
    df_Y['year'] = df_Y['date'].dt.year
    filtered_data_Y = []
    for year, group in df_Y.groupby('year'):
        target_date = datetime(year, 7, 1)  # Mid-year
        idx = (group['date'] - target_date).abs().idxmin()
        filtered_data_Y.append(group.loc[idx])

    filtered_df_Y = pd.DataFrame(filtered_data_Y)

    # Swap x and y, then reverse y
    x_vals_Y = filtered_df_Y['y_coord'].values
    y_vals_Y = -filtered_df_Y['x_coord'].values

    # Normalize to range [-1, 1]
    max_abs_value_Y = max(np.abs(x_vals_Y).max(), np.abs(y_vals_Y).max())
    x_vals_Y /= max_abs_value_Y
    y_vals_Y /= max_abs_value_Y

    dates_Y_filtered = filtered_df_Y['date'].dt.year.values
    return x_vals_Y, y_vals_Y, dates_Y_filtered

def plot_data(x_vals_X, y_vals_X, dates_X, x_vals_Y, y_vals_Y, dates_Y):
    """Plot both datasets with color gradients based on date."""
    plt.figure(figsize=(10, 8))

    # Combine dates for normalization
    all_dates = np.concatenate((dates_X, dates_Y))
    min_date, max_date = all_dates.min(), all_dates.max()
    norm = plt.Normalize(min_date, max_date)
    cmap = plt.cm.viridis

    # Prepare and plot Dataset X
    points_X = np.array([x_vals_X, y_vals_X]).T.reshape(-1, 1, 2)
    segments_X = np.concatenate([points_X[:-1], points_X[1:]], axis=1)
    lc_X = LineCollection(segments_X, cmap=cmap, norm=norm)
    lc_X.set_array(dates_X[:-1])
    lc_X.set_linewidth(2)
    plt.gca().add_collection(lc_X)

    # Prepare and plot Dataset Y
    points_Y = np.array([x_vals_Y, y_vals_Y]).T.reshape(-1, 1, 2)
    segments_Y = np.concatenate([points_Y[:-1], points_Y[1:]], axis=1)
    lc_Y = LineCollection(segments_Y, cmap=cmap, norm=norm)
    lc_Y.set_array(dates_Y[:-1])
    lc_Y.set_linewidth(2)
    plt.gca().add_collection(lc_Y)

    # Add colorbar
    cbar = plt.colorbar(lc_X)
    cbar.set_label('Year')

    # Add legend
    line_X = mlines.Line2D([], [], color='blue', label='Dataset X')
    line_Y = mlines.Line2D([], [], color='green', label='Dataset Y')
    plt.legend(handles=[line_X, line_Y])

    # Set axis limits and labels
    plt.xlim(-1, 1)
    plt.ylim(-1, 1)
    plt.xlabel('X Axis')
    plt.ylabel('Y Axis')
    plt.title('Combined Plot of Dataset X and Y')

    # Save plot to output.png
    plt.savefig('output.png')
    plt.close()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Process two data files and plot them.')
    parser.add_argument('X', type=str, help='Relative filename of the first data file')
    parser.add_argument('Y', type=str, help='Relative filename of the second data file')
    args = parser.parse_args()

    x_vals_X, y_vals_X, dates_X = process_X(args.X)
    x_vals_Y, y_vals_Y, dates_Y = process_Y(args.Y)

    plot_data(x_vals_X, y_vals_X, dates_X, x_vals_Y, y_vals_Y, dates_Y)
