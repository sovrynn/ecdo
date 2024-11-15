import csv
import os

# Define the input directory
input_dir = 'csv-year'

# Function to process the CSV files
def clean_csv_files():
    # Iterate through all files in the input directory
    for filename in os.listdir(input_dir):
        if filename.endswith('.csv'):
            input_file = os.path.join(input_dir, filename)

            # Read the CSV file and process it
            with open(input_file, 'r', encoding='utf-8') as file:
                reader = csv.DictReader(file)
                rows = []

                # Keep track of any non-numeric values found
                non_numeric_values = []

                # Process each row
                for row in reader:
                    # Process the columns News, VAAC, and Total
                    for column in ['News', 'VAAC', 'Total']:
                        value = row[column].strip()

                        # Replace "-" and "n/a" with "0"
                        if value == '-' or value.lower() == 'n/a':
                            row[column] = '0'
                        else:
                            # Check if the value is numeric
                            if not value.isdigit():
                                non_numeric_values.append(value)

                    # Add the cleaned row to the list
                    rows.append(row)

                # Print non-numeric values if found
                if non_numeric_values:
                    print(f"Non-numeric values found in {filename}: {set(non_numeric_values)}")

            # Write the cleaned data back to the same file
            with open(input_file, 'w', newline='', encoding='utf-8') as file:
                fieldnames = ['Name', 'News', 'VAAC', 'Total']
                writer = csv.DictWriter(file, fieldnames=fieldnames)
                writer.writeheader()
                writer.writerows(rows)

            print(f"Processed and cleaned file: {filename}")

# Run the function
if __name__ == "__main__":
    clean_csv_files()
