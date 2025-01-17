import csv
import os
import sys

def main():
    # Check if the correct number of arguments is provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_filename.csv>")
        sys.exit(1)
    
    input_csv = sys.argv[1]
    
    # Check if the input file exists
    if not os.path.isfile(input_csv):
        print(f"Error: File '{input_csv}' does not exist.")
        sys.exit(1)
    
    # Define the output directory
    output_dir = os.path.join(os.path.dirname(input_csv), "empty-coord-locations")
    
    # Create the output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    files_created = 0
    
    try:
        with open(input_csv, mode='r', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            
            # Check if required columns exist
            # Subnational unit (province, state)
            required_columns = ["Unit ID", "Unit Name", "Subnational unit (province, state)", "Country", "Latitude", "Longitude"]
            for column in required_columns:
                if column not in reader.fieldnames:
                    print(f"Error: Required column '{column}' is missing in the CSV file.")
                    sys.exit(1)
            
            subnational_empty_count = 0
            for row in reader:
                latitude = row.get("Latitude", "").strip()
                longitude = row.get("Longitude", "").strip()
                
                # Check if either Latitude or Longitude is empty
                if not latitude or not longitude:
                    unit_id = row["Unit ID"].strip()
                    unit_name = row["Unit Name"].strip()
                    subnational = row["Subnational unit (province, state)"].strip()
                    country = row["Country"].strip()
                    
                    # Prepare the content
                    content = f"{unit_name}, {subnational}, {country}"
                    if not subnational:
                        subnational_empty_count += 1
                        content = f'{unit_name}, {country}'

                    if not country:
                        print(f'Location {unit_id} has no country')
                    if not unit_name:
                        print(f'Location {unit_id} has no name')

                    # Define the output file path
                    output_file = os.path.join(output_dir, f"{unit_id}.txt")
                    
                    # Write the content to the file
                    with open(output_file, mode='w', encoding='utf-8') as f:
                        f.write(content)
                    
                    files_created += 1
            print(f'Subnational empty count: {subnational_empty_count}')

        print(f"Total files created: {files_created}")
    
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
