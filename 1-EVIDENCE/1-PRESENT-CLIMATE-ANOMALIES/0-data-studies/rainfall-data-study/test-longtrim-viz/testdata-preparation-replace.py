import pandas as pd
import sys

def replace_prcp_values(filename):
    # Read the CSV file into a DataFrame
    df = pd.read_csv(filename)
    
    # Ensure the columns 'DATE' and 'PRCP' are present
    if 'DATE' not in df.columns or 'PRCP' not in df.columns:
        print("Error: CSV must contain 'DATE' and 'PRCP' columns.")
        return

    # Sort the DataFrame by DATE to ensure we're starting from the earliest year
    df = df.sort_values(by='DATE').reset_index(drop=True)
    
    # Replace PRCP values with incrementing 0.5 values starting from 0
    df['PRCP'] = [-1 * i for i in range(len(df))]

    # Write the modified DataFrame back to the original CSV file
    df.to_csv(filename, index=False)
    print(f"Successfully updated '{filename}' with new PRCP values.")

if __name__ == "__main__":
    # Ensure a filename argument was provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_filename>")
    else:
        filename = sys.argv[1]
        replace_prcp_values(filename)
