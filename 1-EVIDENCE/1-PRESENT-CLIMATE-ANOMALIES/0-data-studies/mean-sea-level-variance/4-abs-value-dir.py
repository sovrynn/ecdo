import sys
import os
import csv

def main():
    # 1. Check that a directory path was provided
    if len(sys.argv) < 2:
        print("Usage: python process_csv.py <directory>")
        sys.exit(1)
    
    input_dir = sys.argv[1]
    
    # 2. Create the output directory (if it doesn't exist)
    output_dir = "data-intannvar-scrape-absval"
    os.makedirs(output_dir, exist_ok=True)
    
    # 3. Loop through all files in the input directory
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(".txt"):
            input_filepath = os.path.join(input_dir, filename)
            output_filepath = os.path.join(output_dir, filename)
            
            # 4. Process each CSV: skip first 6 lines, then parse
            with open(input_filepath, "r", newline="") as fin:
                # Skip the first 6 lines
                for _ in range(6):
                    fin.readline()
                
                reader = csv.reader(fin)
                
                # 5. Write the processed data to the new file
                with open(output_filepath, "w", newline="") as fout:
                    for row in reader:
                        # Expecting row like [year, month, value]
                        year  = row[0].strip()
                        month = row[1].strip()
                        value = float(row[2])
                        
                        value_abs = abs(value)
                        
                        # Format: "YYYY-MM value"
                        line_out = f"{year}-{month} {value_abs}\n"
                        fout.write(line_out)
            
            print(f"Processed: {input_filepath} → {output_filepath}")

if __name__ == "__main__":
    main()
