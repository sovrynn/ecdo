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
    # Print yearly data before modifications
    print("Dataset X:")
    for row in data_X:
        print(f"{int(row[2])} {row[0]} {row[1]}")

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

    # Print yearly data before modifications
    print("\nDataset Y:")
    for _, row in filtered_df_Y.iterrows():
        print(f"{row['year']} {row['x_coord']} {row['y_coord']}")

    # Swap x and y, then reverse y
    x_vals_Y = filtered_df_Y['y_coord'].values
    y_vals_Y = -filtered_df_Y['x_coord'].values

    # Normalize to range [-1, 1]
    max_abs_value_Y = max(np.abs(x_vals_Y).max(), np.abs(y_vals_Y).max())
    x_vals_Y /= max_abs_value_Y
    y_vals_Y /= max_abs_value_Y

    dates_Y_filtered = filtered_df_Y['year'].values
    return x_vals_Y, y_vals_Y, dates_Y_filtered

def plot_data(x_vals_X, y_vals_X, dates_X, x_vals_Y, y_vals_Y, dates_Y):
    """Plot both datasets with distinct color gradients based on date."""
    plt.figure(figsize=(10, 8))

    # Normalize dates separately for each dataset
    norm_X = plt.Normalize(dates_X.min(), dates_X.max())
    norm_Y = plt.Normalize(dates_Y.min(), dates_Y.max())

    # Choose different colormaps for each dataset
    cmap_X = plt.cm.viridis
    cmap_Y = plt.cm.autumn

    # Prepare and plot Dataset X
    points_X = np.array([x_vals_X, y_vals_X]).T.reshape(-1, 1, 2)
    segments_X = np.concatenate([points_X[:-1], points_X[1:]], axis=1)
    lc_X = LineCollection(segments_X, cmap=cmap_X, norm=norm_X)
    lc_X.set_array(dates_X[:-1])
    lc_X.set_linewidth(2)
    plt.gca().add_collection(lc_X)

    # Prepare and plot Dataset Y
    points_Y = np.array([x_vals_Y, y_vals_Y]).T.reshape(-1, 1, 2)
    segments_Y = np.concatenate([points_Y[:-1], points_Y[1:]], axis=1)
    lc_Y = LineCollection(segments_Y, cmap=cmap_Y, norm=norm_Y)
    lc_Y.set_array(dates_Y[:-1])
    lc_Y.set_linewidth(2)
    plt.gca().add_collection(lc_Y)

    # Add colorbars for each dataset
    cbar_X = plt.colorbar(lc_X, ax=plt.gca(), orientation='vertical', pad=0.02)
    cbar_X.set_label('Year (Dataset X)', color='blue')
    cbar_X.ax.yaxis.set_tick_params(color='blue')
    plt.setp(plt.getp(cbar_X.ax.axes, 'yticklabels'), color='blue')

    cbar_Y = plt.colorbar(lc_Y, ax=plt.gca(), orientation='vertical', pad=0.08)
    cbar_Y.set_label('Year (Dataset Y)', color='red')
    cbar_Y.ax.yaxis.set_tick_params(color='red')
    plt.setp(plt.getp(cbar_Y.ax.axes, 'yticklabels'), color='red')

    # Add legend
    line_X = mlines.Line2D([], [], color='blue', label='Dataset X')
    line_Y = mlines.Line2D([], [], color='red', label='Dataset Y')
    plt.legend(handles=[line_X, line_Y])

    # Set axis limits and labels
    plt.xlim(-1, 1)
    plt.ylim(-1, 1)
    plt.xlabel('X Axis')
    plt.ylabel('Y Axis')
    plt.title('Combined Plot of Dataset X and Y with Distinct Color Gradients')

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
