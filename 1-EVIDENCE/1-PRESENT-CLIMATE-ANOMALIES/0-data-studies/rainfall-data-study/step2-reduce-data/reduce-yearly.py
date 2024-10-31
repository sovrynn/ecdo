import os
import sys
import pandas as pd

def main():
    # Check for correct number of input arguments
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_directory> <output_directory>")
        sys.exit(1)

    input_dir = sys.argv[1]
    output_dir = sys.argv[2]

    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Initialize statistics
    total_files = 0
    processed_files = 0
    skipped_files = {
        'missing_columns': 0,
        'earliest_date': 0,
        'latest_date': 0,
        'other': 0,
    }

    # List all CSV files in the input directory
    csv_files = [f for f in os.listdir(input_dir) if f.endswith('.csv')]
    total_files = len(csv_files)

    counter = 1
    total = len(csv_files)

    for filename in csv_files:
        print(f'{counter}/{total}')
        counter += 1
        
        input_path = os.path.join(input_dir, filename)
        try:
            # Read the CSV file
            df = pd.read_csv(input_path)

            # Check for required columns
            if 'DATE' not in df.columns or 'PRCP' not in df.columns:
                skipped_files['missing_columns'] += 1
                continue

            # Convert DATE column to datetime
            df['DATE'] = pd.to_datetime(df['DATE'], errors='coerce')
            df = df.dropna(subset=['DATE'])

            # Check earliest and latest dates
            earliest_date = df['DATE'].min()
            latest_date = df['DATE'].max()

            if earliest_date.year >= 2001:
                skipped_files['earliest_date'] += 1
                continue
            if latest_date.year <= 2019:
                skipped_files['latest_date'] += 1
                continue

            # Keep only relevant columns
            columns_to_keep = ['DATE', 'PRCP']
            if 'TMAX' in df.columns:
                columns_to_keep.append('TMAX')
            if 'TMIN' in df.columns:
                columns_to_keep.append('TMIN')
            df = df[columns_to_keep]

            # Add a 'Year' column
            df['Year'] = df['DATE'].dt.year

            # Group by 'Year'
            grouped = df.groupby('Year')

            # Aggregate data to yearly granularity
            agg_dict = {'PRCP': 'sum'}
            if 'TMAX' in df.columns:
                agg_dict['TMAX'] = 'mean'
            if 'TMIN' in df.columns:
                agg_dict['TMIN'] = 'mean'

            df_yearly = grouped.agg(agg_dict)

            # Add NROWS column to count the number of rows per year
            df_yearly['NROWS'] = grouped.size()

            # Reset index to make 'Year' a column again
            df_yearly = df_yearly.reset_index()

            # Rename 'Year' column back to 'DATE'
            df_yearly.rename(columns={'Year': 'DATE'}, inplace=True)

            # Reorder columns
            final_columns = ['DATE', 'PRCP', 'TMAX', 'TMIN', 'NROWS']
            final_columns = [col for col in final_columns if col in df_yearly.columns]
            df_yearly = df_yearly[final_columns]

            # Save the processed CSV to the output directory
            output_path = os.path.join(output_dir, filename)
            df_yearly.to_csv(output_path, index=False)

            processed_files += 1

        except Exception as e:
            skipped_files['other'] += 1
            continue

    # Print statistics
    print(f"Total CSV files in input directory: {total_files}")
    print(f"Successfully processed files: {processed_files}")
    print("Skipped files:")
    for reason, count in skipped_files.items():
        print(f"  {reason}: {count}")

if __name__ == "__main__":
    main()
