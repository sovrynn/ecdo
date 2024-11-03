import sys
import pandas as pd

def normalize_to_one(filename):
    # Read data from the file
    data = pd.read_csv(filename, sep=' ', header=None, names=['date', 'x', 'y'])
    
    # Find the largest absolute value in x or y
    max_value = max(abs(data['x']).max(), abs(data['y']).max())
    print(f"Largest absolute value (x or y): {max_value}")
    
    # Divide all x and y values by the largest absolute value
    data['x'] = data['x'] / max_value
    data['y'] = data['y'] / max_value
    
    # Save the normalized data to a new file
    output_filename = 'tpw4-10year-1-normalized.txt'
    data.to_csv(output_filename, sep=' ', index=False, header=False)
    print(f"Normalized data saved to {output_filename}")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)
    
    filename = sys.argv[1]
    normalize_to_one(filename)
