#!/usr/bin/env python3

import sys
import re

def main():
    # 1. Check for the filename argument
    if len(sys.argv) < 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)
    
    input_filename = sys.argv[1]
    output_filename = "output.txt"
    
    # 2. Read the entire file content
    with open(input_filename, "r") as fin:
        content = fin.read()
    
    # 3. Use regex to find all 7-digit numbers
    #    \b ensures we match whole numbers
    #    \d{7} means exactly 7 digits
    seven_digit_numbers = re.findall(r"\b\d{7}\b", content)
    
    # 4. Write each match on its own line in output.txt
    with open(output_filename, "w") as fout:
        for number in seven_digit_numbers:
            fout.write(number + "\n")
    
    print(f"Found {len(seven_digit_numbers)} 7-digit numbers. Results written to '{output_filename}'.")

if __name__ == "__main__":
    main()
