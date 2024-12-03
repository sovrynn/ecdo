import os
import sys

def extract_until_second_h1(input_dir, output_dir):
    # Ensure the output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    # Process each file in the input directory
    for file_name in os.listdir(input_dir):
        input_file_path = os.path.join(input_dir, file_name)
        output_file_path = os.path.join(output_dir, file_name)

        # Only process files (skip directories)
        if not os.path.isfile(input_file_path):
            continue

        try:
            with open(input_file_path, 'r', encoding='utf-8') as infile:
                lines = infile.readlines()
            
            extracted_lines = []
            h1_count = 0
            for line in lines:
                # Check if the line contains an h1 markdown header at the start
                if line.startswith('# '):
                    h1_count += 1
                
                # Stop collecting lines if the second h1 header is found
                if h1_count == 2:
                    break
                
                extracted_lines.append(line)
            
            # Write the extracted lines to the corresponding file in output_dir
            with open(output_file_path, 'w', encoding='utf-8') as outfile:
                outfile.writelines(extracted_lines)

        except Exception as e:
            print(f"Error processing file {file_name}: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_dir> <output_dir>")
        sys.exit(1)
    
    input_dir = sys.argv[1]
    output_dir = sys.argv[2]
    
    if not os.path.isdir(input_dir):
        print(f"Error: Input directory '{input_dir}' does not exist.")
        sys.exit(1)
    
    extract_until_second_h1(input_dir, output_dir)
