import sys
import numpy as np
import pandas as pd

def convert_lon_lat_to_xy(filename):
    """
    Reads data from a file and converts longitude and latitude to x, y coordinates
    based on a polar projection centered at the North Pole.

    Parameters:
    - filename (str): The path to the input file containing 'LON LAT YEAR' data.

    Output:
    - Saves the converted data to 'NP2.txt' in the format 'x y YEAR'.
    """
    # Read the input file
    data = pd.read_csv(filename, sep=' ', header=None, names=['lon', 'lat', 'year'])

    # Adjust longitude values greater than 180 degrees
    data['lon'] = data['lon'].apply(lambda x: x - 360 if x > 180 else x)

    # Convert degrees to radians
    lon_rad = np.radians(data['lon'])
    lat_rad = np.radians(data['lat'])

    # Compute the co-latitude (distance from the North Pole)
    colat_rad = np.radians(90 - data['lat'])

    # Adjust longitude for the projection
    theta = 180 - data['lon']  # Adjust longitude to match the required mapping
    theta_rad = np.radians(theta)

    # Compute x and y coordinates
    data['x'] = colat_rad * np.sin(theta_rad)
    data['y'] = colat_rad * np.cos(theta_rad)

    # Save the output to NP2.txt
    output_filename = 'NP2.txt'
    data[['x', 'y', 'year']].to_csv(output_filename, sep=' ', index=False, header=False)
    print(f"Output saved to {output_filename}")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    convert_lon_lat_to_xy(input_filename)
