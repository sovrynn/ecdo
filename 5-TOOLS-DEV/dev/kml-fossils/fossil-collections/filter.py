import pandas as pd
import argparse
import sys

def parse_arguments():
    """
    Parse command-line arguments.
    """
    parser = argparse.ArgumentParser(description='Filter CSV rows based on n_occs threshold.')
    parser.add_argument('input_file', help='Relative path to the input CSV file.')
    return parser.parse_args()

def main():
    # Define the threshold value
    THRESHOLD = 100.0  # You can adjust this value as needed

    # Parse command-line arguments
    args = parse_arguments()
    input_file = args.input_file
    output_file = f'filtered-{int(THRESHOLD)}.csv'

    try:
        # Read the CSV file
        df = pd.read_csv(input_file)
    except FileNotFoundError:
        print(f"Error: The file '{input_file}' does not exist.")
        sys.exit(1)
    except pd.errors.EmptyDataError:
        print(f"Error: The file '{input_file}' is empty.")
        sys.exit(1)
    except pd.errors.ParserError:
        print(f"Error: The file '{input_file}' does not appear to be in CSV format.")
        sys.exit(1)

    # Check if 'n_occs' column exists
    if 'n_occs' not in df.columns:
        print("Error: The input CSV does not contain a 'n_occs' column.")
        sys.exit(1)

    # Convert 'n_occs' column to float, coercing errors to NaN
    df['n_occs'] = pd.to_numeric(df['n_occs'], errors='coerce')

    # Drop rows where 'n_occs' could not be converted to float
    initial_row_count = len(df)
    df = df.dropna(subset=['n_occs'])
    after_dropna_row_count = len(df)
    dropped_rows = initial_row_count - after_dropna_row_count
    if dropped_rows > 0:
        print(f"Warning: Dropped {dropped_rows} rows due to invalid 'n_occs' values.")

    # Filter rows based on the threshold
    filtered_df = df[df['n_occs'] >= THRESHOLD]

    # Write the filtered DataFrame to 'filtered.csv'
    try:
        filtered_df.to_csv(output_file, index=False)
        print(f"Filtered data has been written to '{output_file}'.")
    except Exception as e:
        print(f"Error: Failed to write to '{output_file}'. {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
