import sys

INTERVAL = 100

def process_file(input_filename):
    # Initialize dictionary to store tally counts for 250-year intervals
    tally = {}
    
    # Open the input file for reading
    with open(input_filename, 'r') as infile:
        for line in infile:
            line = line.strip()
            if line.isdigit():
                number = int(line)
                
                # Determine the 250-year interval the number falls into
                lower_bound = (number // INTERVAL) * INTERVAL
                upper_bound = lower_bound + INTERVAL - 1
                
                # Update the tally count for the interval
                if (lower_bound, upper_bound) not in tally:
                    tally[(lower_bound, upper_bound)] = 0
                tally[(lower_bound, upper_bound)] += 1

    # Open the output file for writing the result
    with open('output.txt', 'w') as outfile:
        for (lower_bound, upper_bound), count in sorted(tally.items()):
            output_str = f"Count from {lower_bound} to {upper_bound} YBP: {count}"
            print(output_str)
            outfile.write(output_str + "\n")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
    else:
        input_filename = sys.argv[1]
        process_file(input_filename)
