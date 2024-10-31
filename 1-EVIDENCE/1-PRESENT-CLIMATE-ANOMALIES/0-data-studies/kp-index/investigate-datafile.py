import sys
import numpy as np

# Check if the filename argument is provided
if len(sys.argv) != 2:
    print("Usage: python script.py <relative_filename>")
    sys.exit(1)

# Get the filename from the command-line arguments
filename = sys.argv[1]

# Initialize a list to store the parsed values
values = []

try:
    # Open the specified file
    with open(filename, 'r') as file:
        # Process each line in the file
        for line in file:
            # Skip lines that start with "#"
            if line.startswith("#"):
                continue
            
            # Extract the 56th, 57th, and 58th characters (1-indexed), then convert to integer
            try:
                value = int(line[55:58])
                print(value)  # Print each parsed value to console
                values.append(value)
            except ValueError:
                continue  # Skip lines with invalid data in these columns
    
    # Calculate and print the average of all parsed values
    if values:
        average_value = np.mean(values)
        print(f"Average Value: {average_value:.2f}")
    else:
        print("No valid data found in the file.")

except FileNotFoundError:
    print(f"Error: File '{filename}' not found.")
except Exception as e:
    print(f"An error occurred: {e}")
