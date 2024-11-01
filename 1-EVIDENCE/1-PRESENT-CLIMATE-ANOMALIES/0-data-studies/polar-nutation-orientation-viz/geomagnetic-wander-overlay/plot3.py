import sys
import numpy as np
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

def read_data_x(filename):
    data = []
    with open(filename, 'r') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            # Each line is "LON LAT YEAR", where YEAR is a float with two decimal points (always 0)
            parts = line.split()
            if len(parts) != 3:
                continue  # skip invalid lines
            lon, lat, year = map(float, parts)
            year = int(year)
            data.append((lon, lat, year))
    return data

def process_data_x(data):
    # Step 1: Discard rows where YEAR before 1846
    data = [row for row in data if row[2] >= 1846]
    # Print step 1 data
    print("Step 1 Data:")
    for lon, lat, year in data:
        print(f"{year} {lat} {lon}")

    # Step 2: Normalize data so that first data point is at 0,0
    first_lon, first_lat, first_year = data[0]
    data_offset = []
    for lon, lat, year in data:
        delta_lon = lon - first_lon
        delta_lat = lat - first_lat
        data_offset.append((delta_lon, delta_lat, year))
    # Print step 2 data
    print("Step 2 Data:")
    for delta_lon, delta_lat, year in data_offset:
        print(f"{year} {delta_lat} {delta_lon}")

    # Step 3: Convert lat/lon offsets to coordinate offsets
    # θ = 90 - Δlon (positive x-axis is 90 east)
    data_xy = []
    for delta_lon, delta_lat, year in data_offset:
        theta = 90 - delta_lon  # θ = 90 - Δlon
        theta_rad = np.deg2rad(theta)
        distance = delta_lat
        x = distance * np.cos(theta_rad)
        y = distance * np.sin(theta_rad)
        data_xy.append((x, y, year))
    # Print step 3 data
    print("Step 3 Data:")
    for x, y, year in data_xy:
        print(f"{year} {x} {y}")

    # Step 4: Normalize x/y so that max absolute value is 1
    max_value = max(max(abs(x), abs(y)) for x, y, year in data_xy)
    data_normalized = [(x / max_value, y / max_value, year) for x, y, year in data_xy]
    # Print step 4 data
    print("Step 4 Data:")
    for x, y, year in data_normalized:
        print(f"{year} {x} {y}")
    return data_normalized

def read_data_y(filename):
    data = []
    with open(filename, 'r') as f:
        lines = f.readlines()
        for line in lines[13:]:  # starting from the 14th line (inclusive)
            line = line.strip()
            if not line:
                continue
            parts = line.split()
            if len(parts) < 3:
                continue  # skip invalid lines
            mjd_date = float(parts[0])
            x = float(parts[1])
            y = float(parts[2])
            data.append((mjd_date, x, y))
    return data

def mjd_to_datetime(mjd):
    # MJD is days since 1858-11-17
    mjd_epoch = datetime(1858, 11, 17)
    date = mjd_epoch + timedelta(days=mjd)
    return date

def process_data_y(data):
    # Step 1: Convert dates to AD format, include month and day
    data_dates = [(mjd_to_datetime(mjd), x, y) for mjd, x, y in data]
    data_dates.sort()  # sort by date
    # Starting from earliest date, include only the date that is 365.25 days after it, or closest
    selected_data = []
    current_date = data_dates[0][0]
    index = 0
    while index < len(data_dates):
        # Find the data point closest to current_date + 365.25 days
        target_date = current_date + timedelta(days=365.25)
        # Find index of date closest to target_date
        closest_index = min(range(index, len(data_dates)), key=lambda i: abs((data_dates[i][0] - target_date).days))
        selected_data.append(data_dates[closest_index])
        current_date = data_dates[closest_index][0]
        index = closest_index + 1
    # Print step 1 data
    print("Step 1 Data:")
    for date, x, y in selected_data:
        print(f"{date.strftime('%Y-%m-%d')} {x} {y}")

    # Step 2: Replace data with past 1-year average
    data_avg = []
    for i, (date_i, x_i, y_i) in enumerate(selected_data):
        # Compute average of data points in the 12 months prior to date_i
        start_date = date_i - timedelta(days=365.25)
        x_values = []
        y_values = []
        for date_j, x_j, y_j in data:
            date_j_conv = mjd_to_datetime(date_j)
            if start_date <= date_j_conv <= date_i:
                x_values.append(x_j)
                y_values.append(y_j)
        if x_values:
            avg_x = sum(x_values) / len(x_values)
            avg_y = sum(y_values) / len(y_values)
            data_avg.append((date_i, avg_x, avg_y))
        else:
            data_avg.append((date_i, x_i, y_i))
    # Print step 2 data
    print("Step 2 Data:")
    for date, x, y in data_avg:
        print(f"{date.strftime('%Y-%m-%d')} {x} {y}")

    # Step 3: Switch x and y values
    data_switched = [(date, y, x) for date, x, y in data_avg]
    # Print step 3 data
    print("Step 3 Data:")
    for date, x, y in data_switched:
        print(f"{date.strftime('%Y-%m-%d')} {x} {y}")

    # Step 4: Multiply resulting y values (previously x) by -1
    data_final = [(date, x, -y) for date, x, y in data_switched]
    # Print step 4 data
    print("Step 4 Data:")
    for date, x, y in data_final:
        print(f"{date.strftime('%Y-%m-%d')} {x} {y}")
    return data_final

def normalize_data_y(data):
    # data is a list of (date, x, y)
    max_value = max(max(abs(x), abs(y)) for date, x, y in data)
    data_normalized = [(date, x / max_value, y / max_value) for date, x, y in data]
    return data_normalized

def main():
    if len(sys.argv) != 3:
        print("Usage: python script.py X Y")
        sys.exit(1)
    filename_x = sys.argv[1]
    filename_y = sys.argv[2]

    # Process data X
    data_x = read_data_x(filename_x)
    data_x_normalized = process_data_x(data_x)

    # Process data Y
    data_y = read_data_y(filename_y)
    data_y_processed = process_data_y(data_y)
    # Normalize data_y to [-1,1]
    data_y_normalized = normalize_data_y(data_y_processed)

    # Extract x and y coordinates and dates for plotting
    x_x = [x for x, y, year in data_x_normalized]
    y_x = [y for x, y, year in data_x_normalized]
    dates_x = [year for x, y, year in data_x_normalized]

    x_y = [x for date, x, y in data_y_normalized]
    y_y = [y for date, x, y in data_y_normalized]
    dates_y = [date for date, x, y in data_y_normalized]

    # For color gradients based on date, we can normalize dates to numbers
    dates_x_num = dates_x
    dates_y_num = mdates.date2num(dates_y)

    # Plotting
    plt.figure(figsize=(8, 8))
    plt.xlim(-1, 1)
    plt.ylim(-1, 1)

    # Create color gradients
    # For data_x, bright tone
    norm_x = plt.Normalize(min(dates_x_num), max(dates_x_num))
    colors_x = plt.cm.autumn(norm_x(dates_x_num))

    # For data_y, dark tone
    norm_y = plt.Normalize(min(dates_y_num), max(dates_y_num))
    colors_y = plt.cm.winter(norm_y(dates_y_num))

    # Plot data_x
    for i in range(len(x_x)-1):
        plt.plot(x_x[i:i+2], y_x[i:i+2], color=colors_x[i], linewidth=2)
    # Plot data_y
    for i in range(len(x_y)-1):
        plt.plot(x_y[i:i+2], y_y[i:i+2], color=colors_y[i], linewidth=2)

    plt.legend(['Data X', 'Data Y'])
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.title('Plot of Data X and Data Y')

    # Save the plot
    plt.savefig('output.png')
    plt.show()

if __name__ == '__main__':
    main()
