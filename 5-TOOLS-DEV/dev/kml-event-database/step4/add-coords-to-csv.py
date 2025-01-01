#!/usr/bin/env python3

import sys
import os
import csv

def generate_id(row_number):
    """Generate a 3-digit ID based on the row number."""
    return str(row_number).zfill(3)

def read_lat_lon(file_path):
    """
    Read the first line from the given file and extract latitude and longitude.
    Returns a tuple (lat, lon) if successful, otherwise (None, None).
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            first_line = f.readline().strip()
            parts = first_line.split()
            if len(parts) >= 2:
                lat, lon = parts[0], parts[1]
                return lat, lon
            else:
                print(f"Warning: File '{file_path}' does not contain enough data.")
                return None, None
    except FileNotFoundError:
        print(f"Warning: File '{file_path}' not found.")
        return None, None
    except Exception as e:
        print(f"Warning: Error reading '{file_path}': {e}")
        return None, None

def main():
    # Check command-line arguments
    if len(sys.argv) != 3:
        print("Usage: python add_lat_lon.py <input_csv> <directory_J>")
        sys.exit(1)
    
    input_csv = sys.argv[1]
    directory_J = sys.argv[2]
    
    # Verify input CSV exists
    if not os.path.isfile(input_csv):
        print(f"Error: CSV file '{input_csv}' does not exist.")
        sys.exit(1)
    
    # Verify directory_J exists and is a directory
    if not os.path.isdir(directory_J):
        print(f"Error: Directory '{directory_J}' does not exist or is not a directory.")
        sys.exit(1)
    
    # Prepare to read the CSV
    try:
        with open(input_csv, 'r', encoding='utf-8-sig') as csvfile:
            reader = csv.DictReader(csvfile)
            fieldnames = reader.fieldnames if reader.fieldnames else []
            
            # Add new columns
            if 'Lat' not in fieldnames:
                fieldnames.append('Lat')
            if 'Lon' not in fieldnames:
                fieldnames.append('Lon')
            
            rows = list(reader)
    except Exception as e:
        print(f"Error reading CSV file '{input_csv}': {e}")
        sys.exit(1)
    
    # Process each row and append Lat and Lon
    processed_rows = []
    total_rows = len(rows)
    for idx, row in enumerate(rows, start=1):
        id_str = generate_id(idx)
        txt_filename = f"{id_str}.txt"
        txt_path = os.path.join(directory_J, txt_filename)
        
        lat, lon = read_lat_lon(txt_path)
        
        # Add Lat and Lon to the row
        row['Lat'] = lat if lat is not None else ''
        row['Lon'] = lon if lon is not None else ''
        
        processed_rows.append(row)
        
        # Print progress
        print(f"Processed row {idx}/{total_rows}: ID {id_str}")
    
    # Write to output.csv
    output_csv = 'output.csv'
    try:
        with open(output_csv, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(processed_rows)
        print(f"\nAll rows processed. Output written to '{output_csv}'.")
    except Exception as e:
        print(f"Error writing to '{output_csv}': {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
