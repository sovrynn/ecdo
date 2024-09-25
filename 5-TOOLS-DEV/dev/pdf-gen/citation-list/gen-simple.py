# dumb version - one line number per line
# Read the input file and number each line, then write to the output file

def number_lines(input_file, output_file):
    try:
        # Open input.txt and read all lines
        with open(input_file, 'r') as infile:
            lines = infile.readlines()

        # Open output.txt and write numbered lines
        with open(output_file, 'w') as outfile:
            for i, line in enumerate(lines, start=1):
                outfile.write(f"{i}. {line}")

    except FileNotFoundError:
        print(f"Error: {input_file} not found.")

# Define file names
input_filename = 'input.txt'
output_filename = 'output.txt'

# Run the function
number_lines(input_filename, output_filename)
