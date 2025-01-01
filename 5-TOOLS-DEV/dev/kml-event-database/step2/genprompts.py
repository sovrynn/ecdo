#!/usr/bin/env python3

import sys
import os
import csv

def main():
    # Check command-line arguments
    if len(sys.argv) < 3:
        print("Usage: python process_csv.py <csv_filename> <directory_K>")
        sys.exit(1)

    csv_filename = sys.argv[1]     # e.g., data.csv
    directory_K = sys.argv[2]      # e.g., input_txts/

    # Read the entire prompt template once
    prompt_path = "location-prompt-template.txt"
    if not os.path.exists(prompt_path):
        print(f"Error: {prompt_path} not found.")
        sys.exit(1)
    
    with open(prompt_path, 'r', encoding='utf-8') as prompt_file:
        prompt_text = prompt_file.read()

    # Create output directory if it doesn't exist
    output_dir = "output"
    os.makedirs(output_dir, exist_ok=True)

    # Open the CSV file and iterate over rows
    try:
        with open(csv_filename, 'r', encoding='utf-8-sig') as f:
            reader = csv.reader(f)
            header = next(reader, None)  # Skip header row
            
            row_id = 1  # First data row -> ID 1
            for row in reader:
                # Ensure the row has enough columns
                if len(row) < 3:
                    print(f"Skipping row {row_id} because it has fewer than 3 columns.")
                    row_id += 1
                    continue
                
                # Generate 3-digit ID
                row_id_str = str(row_id).zfill(3)

                # Construct the path for this row’s input text file
                input_txt_path = os.path.join(directory_K, f"{row_id_str}.txt")
                
                # Read the content for Z (if file doesn't exist, use empty string or handle error)
                if os.path.isfile(input_txt_path):
                    with open(input_txt_path, 'r', encoding='utf-8') as infile:
                        z_content = infile.read()
                else:
                    z_content = ""  # or raise an exception, depending on your needs

                # Perform replacements in the prompt text
                # X -> first column value, Y -> third column value, Z -> text from input_txt_path
                new_text = prompt_text
                new_text = new_text.replace("X", row[0], 1)   # Replace only one instance
                new_text = new_text.replace("Y", row[2], 1)
                new_text = new_text.replace("Z", z_content, 1)

                # Write output to output/<3-digit-id>.txt
                output_txt_path = os.path.join(output_dir, f"{row_id_str}.txt")
                with open(output_txt_path, 'w', encoding='utf-8') as outfile:
                    outfile.write(new_text)

                row_id += 1

        print("Processing complete. Check the 'output' folder for results.")

    except FileNotFoundError:
        print(f"Error: CSV file '{csv_filename}' not found.")
        sys.exit(1)
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
