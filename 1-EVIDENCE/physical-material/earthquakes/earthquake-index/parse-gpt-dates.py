import re
import sys

def convert_to_ybp(date_str):
    # Handling AD and BC formats
    if 'AD' in date_str:
        year = int(re.search(r'(\d+)', date_str).group(1))
        return 2000 - year
    elif 'BC' in date_str:
        year = int(re.search(r'(\d+)', date_str).group(1))
        return 2000 + year
    elif date_str == '-1':
        return '-'  # YBP for year -1 is 2000
    return None

def process_file(input_filename):
    output_filename = 'output.txt'
    
    with open(input_filename, 'r') as infile, open(output_filename, 'w') as outfile:
        for line in infile:
            match = re.match(r'(AD \d+|\d+ AD|BC \d+|\d+ BC|-1):', line)
            if match:
                date_str = match.group(0).replace(':', '').strip()
                if 'AD' in date_str or 'BC' in date_str or date_str == '-1':
                    if 'AD' in date_str:
                        date_str = date_str.replace(' AD', 'AD')
                    elif ' BC' in date_str:
                        date_str = date_str.replace(' BC', 'BC')
                    ybp = convert_to_ybp(date_str)
                    outfile.write(f"{ybp}\n")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
    else:
        input_filename = sys.argv[1]
        process_file(input_filename)
