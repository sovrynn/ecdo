import sys
import pandas as pd

def process_data(input_path, output_path):
    # Read data from file starting from the 9th line, ignoring earlier lines
    data = pd.read_csv(input_path, delim_whitespace=True, skiprows=8, header=None, names=["date", "x", "y"])
    
    # Convert date column to datetime
    data["date"] = pd.to_datetime(data["date"], format="%Y-%m-%d")

    
    # Sort data by date to ensure chronological order
    data = data.sort_values("date")
    
    # Calculate 36-month (3-year) moving averages for x and y, including current point
    data["x"] = data["x"].rolling(window=120, min_periods=1).mean()
    data["y"] = data["y"].rolling(window=120, min_periods=1).mean()

    # Filter out rows before the year 1848
    data = data[data["date"].dt.year >= 1856]
    
    # Write the result to the output file in the specified format
    with open(output_path, 'w') as file:
        for _, row in data.iterrows():
            file.write(f"{row['date'].strftime('%Y-%m-%d')} {row['x']:.6f} {row['y']:.6f}\n")

if __name__ == "__main__":
    # Get input and output file paths from command line arguments
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    # Process data
    process_data(input_file, output_file)
