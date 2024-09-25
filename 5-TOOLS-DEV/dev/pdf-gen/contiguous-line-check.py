import sys

def find_contiguous_lines(filepath):
    try:
        with open(filepath, 'r') as file:
            lines = file.readlines()
        
        contiguous_pairs = 0
        
        # Iterate through the lines, checking for contiguous pairs
        for i in range(len(lines) - 1):
            current_line = lines[i].strip()
            next_line = lines[i + 1].strip()
            
            # Check if both current and next lines are non-empty
            if current_line and next_line:
                # Check if they are not separated by a newline (both lines should be non-empty)
                if lines[i + 1].startswith('\n') == False:
                    print(f"Contiguous lines found:\n{current_line}\n{next_line}\n")
                    contiguous_pairs += 1

        print(f"Total number of contiguous line pairs: {contiguous_pairs}")

    except FileNotFoundError:
        print(f"Error: The file '{filepath}' does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python script_name.py <relative_filepath>")
        sys.exit(1)

    input_filepath = sys.argv[1]
    find_contiguous_lines(input_filepath)
