import sys

def calculate_averages(filename):
    # Initialize lists to store the 4th, 5th, and 6th words
    fourth_words = []
    fifth_words = []
    sixth_words = []

    # Open and read the file line by line
    with open(filename, 'r') as file:
        for line in file:
            words = line.strip().split()
            
            # Check if the line has at least 6 words
            if len(words) < 6:
                continue

            # Append the 4th, 5th, and 6th words (converted to float) to their respective lists
            try:
                fourth_words.append(float(words[3]))
                fifth_words.append(float(words[4]))
                sixth_words.append(float(words[5]))
            except ValueError:
                # Skip lines where the 4th, 5th, or 6th words are not numbers
                print(f"Skipping line due to non-numeric data: {line.strip()}")
                continue

    # Calculate and print the averages
    if fourth_words:
        print("Average of precipitation regression slopes:  ", sum(fourth_words) / len(fourth_words) * 365)
    else:
        print("No valid 4th word data to calculate average.")

    if fifth_words:
        print("Average of max temperature regression slopes:", sum(fifth_words) / len(fifth_words) * 365)
    else:
        print("No valid 5th word data to calculate average.")

    if sixth_words:
        print("Average of min temperature regression slopes:", sum(sixth_words) / len(sixth_words) * 365)
    else:
        print("No valid 6th word data to calculate average.")

if __name__ == "__main__":
    # Check if filename argument is provided
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
    else:
        filename = sys.argv[1]
        calculate_averages(filename)
