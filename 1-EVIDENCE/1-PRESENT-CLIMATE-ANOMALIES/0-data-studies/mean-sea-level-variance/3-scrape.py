#!/usr/bin/env python3

import sys
import os
import requests

def main():
    # 1. Check for an input filename
    if len(sys.argv) < 2:
        print("Usage: python script.py <input_filename>")
        sys.exit(1)
    
    input_filename = sys.argv[1]
    
    # 2. Read the file lines, stripping whitespace
    with open(input_filename, "r") as fin:
        lines = [line.strip() for line in fin if line.strip()]
    
    # Make sure we have at least one 7-digit number
    if not lines:
        print(f"No valid lines found in {input_filename}. Exiting.")
        sys.exit(0)
    
    # Create output directory if it doesn't exist
    output_dir = "data-intannvar-scrape"
    os.makedirs(output_dir, exist_ok=True)
    
    # 3. Iterate over each 7-digit number, download, and save
    total_files = len(lines)
    for idx, seven_digit_number in enumerate(lines, start=1):
        url = f"https://tidesandcurrents.noaa.gov/sltrends/data/{seven_digit_number}_intannvar.csv"
        output_path = os.path.join(output_dir, f"{seven_digit_number}.txt")
        
        # Download the content
        try:
            response = requests.get(url)
            response.raise_for_status()  # Raise an error if the response is not 200 OK
        except requests.exceptions.RequestException as e:
            print(f"Error downloading {seven_digit_number} from {url}: {e}")
            continue
        
        # Save to file
        with open(output_path, "wb") as fout:
            fout.write(response.content)
        
        # Print progress
        print(f"Downloaded {idx}/{total_files} : {seven_digit_number}")

if __name__ == "__main__":
    main()
