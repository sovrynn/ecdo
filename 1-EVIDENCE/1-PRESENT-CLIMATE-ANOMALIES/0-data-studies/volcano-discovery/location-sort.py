import csv
import os
import re

# Define input and output directories
input_dir = 'csv-year'
output_dir = 'csv-location'

# Ensure the output directory exists
os.makedirs(output_dir, exist_ok=True)

# Dictionary to store data by location name
location_data = {}

# Years from 2008 to 2024 inclusive
years = range(2008, 2025)

# Process each year file
for year in years:
    input_file = os.path.join(input_dir, f"{year}.csv")

    # Check if the input CSV file exists
    if not os.path.isfile(input_file):
        print(f"File {input_file} not found. Skipping.")
        continue

    # Open and read the CSV file
    with open(input_file, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)

        # Iterate through each row in the CSV
        for row in reader:
            name = row['Name']
            news = row['News']
            vaac = row['VAAC']
            total = row['Total']

            # Initialize the data list for the name if not already present
            if name not in location_data:
                location_data[name] = []

            # Append the data for this year
            location_data[name].append({
                'Year': year,
                'News': news,
                'VAAC': vaac,
                'Total': total
            })

# Now write out the data for each location
for name, data_list in location_data.items():
    # Sanitize the filename to remove invalid characters
    sanitized_name = re.sub(r'[<>:"/\\|?*]', '_', name)
    output_file = os.path.join(output_dir, f"{sanitized_name}.csv")

    # Open the output CSV file for writing
    with open(output_file, 'w', newline='', encoding='utf-8') as file:
        fieldnames = ['Year', 'News', 'VAAC', 'Total']
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()

        # Write each year's data for this location
        for data in data_list:
            writer.writerow(data)

    print(f"Data for {name} has been written to {output_file}")
