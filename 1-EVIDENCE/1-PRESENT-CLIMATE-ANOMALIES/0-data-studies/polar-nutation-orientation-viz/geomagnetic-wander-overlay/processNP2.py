import sys
import pandas as pd

def normalize_relative_to_first_row(filename):
    # Read the data from the file
    data = pd.read_csv(filename, sep=' ', header=None, names=['x', 'y', 'year'])

    # Save the X and Y values of the first row
    first_x = data.loc[0, 'x']
    first_y = data.loc[0, 'y']

    # Subtract the first row's X and Y values from every row's X and Y
    data['x'] = data['x'] - first_x
    data['y'] = data['y'] - first_y

    # Write the output to NP3.txt
    output_filename = 'NP3.txt'
    data.to_csv(output_filename, sep=' ', index=False, header=False)
    print(f"Normalized data saved to {output_filename}")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python normalize_relative_to_first_row.py <filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    normalize_relative_to_first_row(input_filename)
