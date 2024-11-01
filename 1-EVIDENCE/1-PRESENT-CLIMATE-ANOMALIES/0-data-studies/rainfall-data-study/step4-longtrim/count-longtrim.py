import os

def count_csv_files_in_longtrim_dirs():
    total_csv_count = 0
    
    # Walk through the current directory
    for root, dirs, files in os.walk('.'):
        # Check if the directory name ends with 'longtrim'
        if root.endswith('longtrim'):
            # Count .csv files in the directory
            csv_count = sum(1 for file in files if file.endswith('.csv'))
            total_csv_count += csv_count

    print(f"Total CSV files in all 'longtrim' directories: {total_csv_count}")

# Run the function
count_csv_files_in_longtrim_dirs()
