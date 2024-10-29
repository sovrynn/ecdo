import os
import sys

# Define the maximum number of lines per piece
MAX_LINES_PER_PIECE = 1400

# Check if directory argument is provided
if len(sys.argv) != 2:
    print("Usage: python script.py <relative_directory>")
    sys.exit(1)

# Get the directory from the command line argument
directory = sys.argv[1]

# Create the output directory if it doesn't exist
output_dir = "station-category-pieces"
os.makedirs(output_dir, exist_ok=True)

# List of single-letter filenames (a.txt, b.txt, etc.)
letters = [f"{chr(i)}.txt" for i in range(ord('a'), ord('z') + 1)]

# Track progress
processed_files = 0
total_files = len(letters)

# Process each letter file
for letter_file in letters:
    letter_path = os.path.join(directory, letter_file)
    category_file_path = os.path.join(directory, f"{letter_file[0]}-category.txt")
    
    # Only process if the letter file exists and there is no corresponding category file
    if os.path.exists(letter_path) and not os.path.exists(category_file_path):
        try:
            # Read all lines from the original file
            with open(letter_path, 'r') as file:
                lines = file.readlines()
            
            # Calculate the number of pieces needed
            num_pieces = (len(lines) + MAX_LINES_PER_PIECE - 1) // MAX_LINES_PER_PIECE
            
            # Split the lines into pieces and write each piece to a new file
            for i in range(num_pieces):
                piece_filename = f"{letter_file[0]}-piece{i + 1}.txt"
                piece_path = os.path.join(output_dir, piece_filename)
                
                # Calculate the line range for this piece
                start_index = i * MAX_LINES_PER_PIECE
                end_index = min(start_index + MAX_LINES_PER_PIECE, len(lines))
                
                # Write the lines to the piece file
                with open(piece_path, 'w') as piece_file:
                    piece_file.writelines(lines[start_index:end_index])
                
                print(f"Created {piece_filename} with lines {start_index + 1}-{end_index}.")
            
            processed_files += 1
            print(f"Processed file {processed_files}/{total_files}: {letter_file} split into {num_pieces} pieces.")
        
        except Exception as e:
            print(f"An error occurred while processing {letter_file}: {e}")

# Final summary
print(f"\nCompleted processing. {processed_files} files were split into pieces.")
