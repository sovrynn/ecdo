import sys
import pandas as pd

def normalize_data(filename):
    # Read the data from the file
    data = pd.read_csv(filename, sep=' ', header=None, names=['x', 'y', 'year'])

    # Find the largest absolute value of X and Y
    max_abs_value = max(data[['x', 'y']].abs().max())
    
    # Normalize X and Y values by dividing by the largest absolute value
    data['x'] = data['x'] / max_abs_value
    data['y'] = data['y'] / max_abs_value

    # Write the normalized data to NP3.txt
    output_filename = 'NP4.txt'
    data.to_csv(output_filename, sep=' ', index=False, header=False)
    print(f"Normalized data saved to {output_filename}")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python normalize_xy_data.py <filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    normalize_data(input_filename)
