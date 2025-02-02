import sys

def find_gaps(filename):
    try:
        with open(filename, 'r') as file:
            lines = file.readlines()

        # Extract the first word from each line and convert to integers
        numbers = []
        for line in lines:
            first_word = line.split()[0]
            if len(first_word) == 4 and first_word.isdigit():
                numbers.append(int(first_word))
            else:
                print(f"Warning: Invalid word '{first_word}' encountered. Skipping line.")

        # Check for gaps in the sequence
        if numbers:
            start = numbers[0]
            end = numbers[-1]
            full_range = set(range(start, end + 1))
            actual_set = set(numbers)
            missing_numbers = sorted(full_range - actual_set)

            if missing_numbers:
                print("Gaps found in the sequence:")
                for num in missing_numbers:
                    print(num)
            else:
                print("No gaps found. All numbers are contiguous.")
        else:
            print("No valid numbers found in the file.")

    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_filename>")
        sys.exit(1)

    input_filename = sys.argv[1]
    find_gaps(input_filename)
