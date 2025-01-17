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
    
    # Define directories and output file
    input_dir = os.path.dirname(input_csv)
    output_csv = os.path.join(input_dir, "data-all-locations.csv")
    empty_coord_dir = os.path.join(input_dir, "empty-coord-locations")
    
    # Check if the empty-coord-locations directory exists
    if not os.path.isdir(empty_coord_dir):
        print(f"Error: Directory '{empty_coord_dir}' does not exist.")
        sys.exit(1)
    
    rows_edited = 0
    
    try:
        # Read the input CSV
        with open(input_csv, mode='r', newline='', encoding='utf-8') as infile:
            reader = csv.DictReader(infile)
            fieldnames = reader.fieldnames
            
            if fieldnames is None:
                print("Error: The input CSV file is empty or malformed.")
                sys.exit(1)
            
            # Ensure required columns exist
            required_columns = ["Unit ID", "Latitude", "Longitude"]
            for column in required_columns:
                if column not in fieldnames:
                    print(f"Error: Required column '{column}' is missing in the CSV file.")
                    sys.exit(1)
            
            # Prepare data for writing
            updated_rows = []
            for row in reader:
                latitude = row.get("Latitude", "").strip()
                longitude = row.get("Longitude", "").strip()
                
                if not latitude or not longitude:
                    unit_id = row.get("Unit ID", "").strip()
                    if not unit_id:
                        print("Warning: Row with missing 'Unit ID' encountered. Skipping row.")
                        updated_rows.append(row)
                        continue
                    
                    coord_file = os.path.join(empty_coord_dir, f"{unit_id}.txt")
                    
                    if not os.path.isfile(coord_file):
                        print(f"Warning: Coordinate file '{coord_file}' does not exist. Skipping row with Unit ID '{unit_id}'.")
                        updated_rows.append(row)
                        continue
                    
                    try:
                        with open(coord_file, mode='r', encoding='utf-8') as cf:
                            first_line = cf.readline().strip()
                            if not first_line:
                                print(f"Warning: Coordinate file '{coord_file}' is empty. Skipping row with Unit ID '{unit_id}'.")
                                updated_rows.append(row)
                                continue
                            
                            parts = first_line.split()
                            if len(parts) < 2:
                                print(f"Warning: Coordinate file '{coord_file}' does not contain both latitude and longitude. Skipping row with Unit ID '{unit_id}'.")
                                updated_rows.append(row)
                                continue
                            
                            new_latitude, new_longitude = parts[0], parts[1]
                            row["Latitude"] = new_latitude
                            row["Longitude"] = new_longitude
                            rows_edited += 1
                    except Exception as e:
                        print(f"Warning: Failed to read '{coord_file}'. Error: {e}. Skipping row with Unit ID '{unit_id}'.")
                        updated_rows.append(row)
                        continue
                
                updated_rows.append(row)
        
        # Write to the output CSV
        with open(output_csv, mode='w', newline='', encoding='utf-8') as outfile:
            writer = csv.DictWriter(outfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(updated_rows)
        
        print(f"Total rows edited: {rows_edited}")
        print(f"Updated CSV written to '{output_csv}'.")
    
    except Exception as e:
        print(f"An error occurred during processing: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
