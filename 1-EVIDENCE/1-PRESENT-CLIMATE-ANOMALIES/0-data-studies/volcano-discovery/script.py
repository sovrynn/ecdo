import os
from bs4 import BeautifulSoup
import csv

# Years from 2008 to 2024 inclusive
years = range(2008, 2025)

# Directories
html_dir = 'html'
csv_dir = 'csv'

# Ensure the CSV directory exists
os.makedirs(csv_dir, exist_ok=True)

for year in years:
    html_file = os.path.join(html_dir, f"{year}.html")
    
    # Check if the HTML file exists
    if not os.path.isfile(html_file):
        print(f"HTML file for {year} not found in {html_dir}.")
        continue
    
    # Read the HTML content from the file
    with open(html_file, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the table in the HTML
    table = soup.find('table')
    if not table:
        print(f"No table found in {html_file}.")
        continue
    
    # Find all rows in the table
    rows = table.find_all('tr')
    if len(rows) < 2:
        print(f"No data rows found in {html_file}.")
        continue
    
    # Prepare the CSV file path
    csv_file = os.path.join(csv_dir, f"{year}.csv")
    
    # Open CSV file for writing
    with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        # Write the header
        writer.writerow(["Name", "News", "VAAC", "Total"])
        
        # Iterate over the data rows (skip the header row)
        for row in rows[1:]:
            cols = row.find_all('td')
            if len(cols) < 5:
                continue  # Skip rows that don't have enough columns
            
            # Extract data
            name_tag = cols[0].find('a')
            name = name_tag.text.strip() if name_tag else cols[0].text.strip()
            news = cols[2].text.strip()
            vaac = cols[3].text.strip()
            total = cols[4].text.strip()
            
            # Write the row to the CSV file
            writer.writerow([name, news, vaac, total])
        
    print(f"Data for {year} has been written to {csv_file}")
