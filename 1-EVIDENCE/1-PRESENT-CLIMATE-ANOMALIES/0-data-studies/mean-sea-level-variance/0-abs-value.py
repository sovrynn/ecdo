import sys
import os
import csv

def main():
    # 1. Get the input CSV filename from the command line
    if len(sys.argv) < 2:
        print("Usage: python process_csv.py <input.csv>")
        sys.exit(1)
    
    input_filename = sys.argv[1]
    
    # 2. Create the output directory (if it doesn't exist) for "data-abs-val"
    output_dir = "data-abs-val"
    os.makedirs(output_dir, exist_ok=True)
    
    # 3. Construct the output filename (same as input but in the data-abs-val folder)
    output_filename = os.path.join(output_dir, os.path.basename(input_filename))
    
    # 4. Open the input CSV and skip the first 6 lines (header or irrelevant)
    with open(input_filename, "r", newline="") as fin:
        # Skip the first 6 lines
        for _ in range(6):
            fin.readline()
        
        # Use csv.reader to process the remaining lines
        reader = csv.reader(fin)
        
        # 5. Open the output file for writing
        with open(output_filename, "w", newline="") as fout:
            # 6. For each data row, parse columns: year, month, value
            #    Make the value positive, then write "year-month <value>"
            for row in reader:
                # Expecting row like [year, month, value]
                year  = row[0].strip()
                month = row[1].strip()
                value = float(row[2])  # parse as float
                
                # Make the value positive (absolute value)
                value_abs = abs(value)
                
                # Output format: "year-month value"
                # e.g. "2023-05 123.45"
                line_out = f"{year}-{month} {value_abs}\n"
                
                fout.write(line_out)

if __name__ == "__main__":
    main()
