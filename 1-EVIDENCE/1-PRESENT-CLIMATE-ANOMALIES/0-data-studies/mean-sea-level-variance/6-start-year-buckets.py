import os
import sys

def main():
    if len(sys.argv) < 2:
        print("Usage: python year_bucket.py <relative_folder_path>")
        sys.exit(1)

    folder_path = sys.argv[1]
    # Convert to absolute path (optional, but helpful)
    folder_path = os.path.abspath(folder_path)

    # Dictionary to hold counts of files per year
    year_counts = {}

    # Iterate over each entry in the folder
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)

        # Only process if it's a file
        if os.path.isfile(file_path):
            # Read only the first line
            with open(file_path, 'r', encoding='utf-8') as f:
                first_line = f.readline().strip()
                
                # Skip if the file is empty
                if not first_line:
                    continue

                parts = first_line.split()
                # We expect at least two parts: "YYYY-MM" and a second value
                if len(parts) < 2:
                    continue

                # Extract year from the first 4 characters of the date
                date_str = parts[0]  # e.g. '1950-01'
                if len(date_str) >= 4:
                    year = date_str[:4]
                    year_counts[year] = year_counts.get(year, 0) + 1

    # Sort years numerically before printing
    sorted_years = sorted(year_counts.keys(), key=lambda y: int(y))

    # Print the result
    for year in sorted_years:
        print(f"{year}: {year_counts[year]}")

if __name__ == "__main__":
    main()
