import sys

def extract_csv_names(input_filename):
    # List to store matching CSV file names
    csv_names = []

    # Open the input file and read it line by line
    with open(input_filename, 'r') as file:
        for line in file:
            # Split the line to get the first word
            words = line.strip().split()
            if words:
                first_word = words[0]
                # Check if the first word ends with ".csv"
                if first_word.endswith(".csv"):
                    csv_names.append(first_word)

    # Write the results to csv-names.txt
    with open('csv-names.txt', 'w') as output_file:
        for name in csv_names:
            output_file.write(name + "\n")

if __name__ == "__main__":
    # Check if filename argument is provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <input_filename>")
    else:
        input_filename = sys.argv[1]
        extract_csv_names(input_filename)
