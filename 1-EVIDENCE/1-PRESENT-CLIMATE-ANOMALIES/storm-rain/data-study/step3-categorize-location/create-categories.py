import os
import sys
import string

# Check if filename argument is provided
if len(sys.argv) != 2:
    print("Usage: python script.py <relative_filename>")
    sys.exit(1)

# Get the filename from the command line arguments
filename = sys.argv[1]

# Create the output directory if it doesn't exist
output_dir = "station-categories"
os.makedirs(output_dir, exist_ok=True)

# Initialize a dictionary with lists for each letter of the alphabet
buckets = {letter: [] for letter in string.ascii_lowercase}

try:
    # Open the input file and process each line
    with open(filename, 'r') as file:
        for line in file:
            # Extract the first word (space-separated)
            first_word = line.split()[0]

            # Extract the 5th "word" (characters 42 to 72), and strip extra spaces
            fifth_word = line[41:72].strip()

            # Get the first letter of the first word, in lowercase
            first_letter = first_word[0].lower()

            # Check if the first letter is an alphabet character, then add to the appropriate bucket
            if first_letter in buckets:
                buckets[first_letter].append(fifth_word)

    # Write each list to its corresponding output file
    for letter, fifth_words in buckets.items():
        if fifth_words:  # Only create files for letters that have entries
            with open(os.path.join(output_dir, f"{letter}.txt"), 'w') as output_file:
                output_file.write("\n".join(fifth_words))
            print(f"Created file: {letter}.txt with {len(fifth_words)} entries.")

except FileNotFoundError:
    print(f"File {filename} not found.")
except Exception as e:
    print(f"An error occurred: {e}")
