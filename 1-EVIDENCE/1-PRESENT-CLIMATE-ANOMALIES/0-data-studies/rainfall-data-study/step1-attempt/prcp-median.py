import sys
import statistics

def calculate_median(filename):
    # Specify the column indices to extract (0-based index, so 5 is the 6th word)
    columns_to_extract = [5,6,7]  # Change this list to specify different columns

    # Initialize a dictionary to hold lists of numbers for each column
    column_numbers = {col: [] for col in columns_to_extract}

    # Open the file and read lines starting from the second line
    with open(filename, 'r') as file:
        lines = file.readlines()[1:]  # Skip the first line

        # Process each line
        for line in lines:
            words = line.strip().split()

            # For each specified column, check if it exists and is a number
            for col in columns_to_extract:
                if len(words) > col:
                    try:
                        # Try to convert the word to a float and add to the list for that column
                        number = float(words[col])
                        column_numbers[col].append(number)
                    except ValueError:
                        # Skip if the word is not a number
                        continue

    # Calculate and print the median for each specified column
    for col in columns_to_extract:
        if column_numbers[col]:
            median_value = statistics.median(column_numbers[col])
            print(f"The median for column {col + 1} (0-based index {col}) is: {median_value}")
        else:
            print(f"No valid numbers found in column {col + 1} (0-based index {col}) to calculate the median.")

if __name__ == "__main__":
    # Check if filename argument is provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
    else:
        filename = sys.argv[1]
        calculate_median(filename)
