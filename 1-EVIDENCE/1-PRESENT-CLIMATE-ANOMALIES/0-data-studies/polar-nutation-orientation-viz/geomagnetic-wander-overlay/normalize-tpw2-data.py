import sys
import pandas as pd

def normalize_coordinates(filename):
    # Read data from the file
    data = pd.read_csv(filename, sep=' ', header=None, names=['date', 'x', 'y'])
    
    # Save the initial row's x and y values
    initial_x = data['x'].iloc[0]
    initial_y = data['y'].iloc[0]
    
    # Subtract the initial x and y values from all rows
    data['x'] = data['x'] - initial_x
    data['y'] = data['y'] - initial_y
    
    # Save the normalized data to a new file
    output_filename = 'tpw3-10year-origin-normalized.txt'
    data.to_csv(output_filename, sep=' ', index=False, header=False)
    print(f"Normalized data saved to {output_filename}")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)
    
    filename = sys.argv[1]
    normalize_coordinates(filename)
