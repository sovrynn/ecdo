import sys

def add_blank_lines_between_nonblank_lines(input_file, output_file='output.txt'):
    with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
        previous_line_blank = True
        
        for line in infile:
            stripped_line = line.strip()
            if stripped_line:  # If the line is not blank
                if not previous_line_blank:
                    outfile.write('\n')  # Add a blank line before this line
                previous_line_blank = False
            else:
                previous_line_blank = True
            
            outfile.write(line)  # Write the current line

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_filepath>")
    else:
        input_filepath = sys.argv[1]
        add_blank_lines_between_nonblank_lines(input_filepath)
