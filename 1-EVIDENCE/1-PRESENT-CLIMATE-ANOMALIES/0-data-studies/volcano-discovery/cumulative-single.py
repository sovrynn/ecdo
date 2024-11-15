import csv
import os

# Years from 2008 to 2024 inclusive
years = range(2008, 2025)

# Directory containing the per-year CSV files
csv_dir = 'csv-year'

# Prepare a list to hold the cumulative data
cumulative_data = []

for year in years:
    csv_file = os.path.join(csv_dir, f"{year}.csv")

    # Check if the CSV file exists
    if not os.path.isfile(csv_file):
        print(f"CSV file for {year} not found in {csv_dir}.")
        continue

    # Initialize sums for the year
    news_sum = 0
    vaac_sum = 0
    total_sum = 0

    # Open and read the CSV file
    with open(csv_file, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)

        # Iterate over the rows
        for row in reader:
            # Sum the News column
            try:
                news_value = int(row['News'])
            except ValueError:
                news_value = 0
            news_sum += news_value

            # Sum the VAAC column, treating 'n/a' as 0
            vaac_value_str = row['VAAC']
            if vaac_value_str.strip().lower() == 'n/a':
                vaac_value = 0
            else:
                try:
                    vaac_value = int(vaac_value_str)
                except ValueError:
                    vaac_value = 0
            vaac_sum += vaac_value

            # Sum the Total column
            try:
                total_value = int(row['Total'])
            except ValueError:
                total_value = 0
            total_sum += total_value

    # Append the data for this year
    cumulative_data.append({
        'Year': year,
        'News': news_sum,
        'VAAC': vaac_sum,
        'Total': total_sum
    })

# Write the cumulative.csv file
output_file = 'cumulative.csv'
with open(output_file, 'w', newline='', encoding='utf-8') as file:
    fieldnames = ['Year', 'News', 'VAAC', 'Total']
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()

    # Write the data
    for data in cumulative_data:
        writer.writerow(data)

print(f"Cumulative data has been written to {output_file}")
