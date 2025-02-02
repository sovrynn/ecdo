import argparse
import sys
import matplotlib.pyplot as plt

def read_timeseries(filename):
    """
    Reads a time series file and returns two lists: years and values.

    Each line in the file should have the format: YEAR VALUE
    """
    years = []
    values = []
    try:
        with open(filename, 'r') as file:
            for line_number, line in enumerate(file, start=1):
                # Skip empty lines
                if not line.strip():
                    continue
                parts = line.strip().split()
                if len(parts) != 2:
                    print(f"Warning: Line {line_number} is malformed: '{line.strip()}'")
                    continue
                try:
                    year = int(parts[0])
                    value = float(parts[1])
                    years.append(year)
                    values.append(value)
                except ValueError:
                    print(f"Warning: Line {line_number} has invalid data types: '{line.strip()}'")
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        sys.exit(1)
    except Exception as e:
        print(f"An error occurred while reading the file: {e}")
        sys.exit(1)
    
    if not years:
        print("Error: No valid data found in the file.")
        sys.exit(1)
    
    return years, values

def plot_timeseries(years, values, output_filename='output.png'):
    """
    Plots the time series data and saves the plot to a file.

    The values are transformed by (VALUE / 510100000) * 100 to represent
    Surface Area Coverage Percentage.
    """
    # Transform the y-values
    transformed_values = [(value / 510100000) * 100 for value in values]
    
    plt.figure(figsize=(10, 6))
    plt.plot(years, transformed_values, marker='o', linestyle='-', color='b')
    plt.title('South Atlantic Anomaly Surface Area Extent 1590-2025 (Data Source: GUFM1, IGRF)')
    plt.xlabel('Year')
    plt.ylabel('Earth Surface Area Coverage %')
    plt.grid(True)
    plt.tight_layout()
    try:
        plt.savefig(output_filename)
        print(f"Plot saved as '{output_filename}'.")
    except Exception as e:
        print(f"An error occurred while saving the plot: {e}")
        sys.exit(1)
    plt.close()

def main():
    parser = argparse.ArgumentParser(description='Plot a time series from a file.')
    parser.add_argument('filename', type=str, help='Relative path to the time series data file.')
    args = parser.parse_args()

    years, values = read_timeseries(args.filename)
    plot_timeseries(years, values)

if __name__ == "__main__":
    main()
