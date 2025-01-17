import os
import sys
import argparse

def chunk_list(lst, chunk_size):
    """
    Yields successive chunks of size `chunk_size` from the list `lst`.
    """
    for i in range(0, len(lst), chunk_size):
        yield lst[i:i+chunk_size]

def process_txt_files(directory, chunk_size):
    """
    Processes .txt files in the given directory by removing the .txt extension,
    splitting them into chunks of size `chunk_size`, concatenating each chunk
    with commas, and writing each chunk on a new line to output.txt.

    :param directory: Path to the target directory.
    :param chunk_size: Maximum number of filenames in each chunk.
    """
    if not os.path.isdir(directory):
        print(f"Error: The directory '{directory}' does not exist or is not a directory.")
        sys.exit(1)

    try:
        # List all files in the directory
        files = os.listdir(directory)
        
        # Filter to include only .txt files
        txt_files = [
            f for f in files 
            if f.endswith('.txt') and os.path.isfile(os.path.join(directory, f))
        ]
        
        # Remove the .txt suffix
        filenames_without_suffix = [os.path.splitext(f)[0] for f in txt_files]
        
        # Define the path for output.txt (placed in the current working directory)
        output_path = os.path.join(os.getcwd(), 'output.txt')
        
        # Write the concatenated strings in chunks to output.txt
        with open(output_path, 'w') as output_file:
            # Split filenames into chunks of size `chunk_size`
            for chunk in chunk_list(filenames_without_suffix, chunk_size):
                # Concatenate the filenames with commas
                line = ','.join(chunk)
                output_file.write(line + '\n')
        
        print(f"Successfully wrote the chunked filenames to '{output_path}'.")
    
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

def main():
    # Set up argument parsing
    parser = argparse.ArgumentParser(description='Process and chunk .txt files in a directory.')
    parser.add_argument('directory', type=str, help='Path to the target directory.')
    parser.add_argument('chunk_size', type=int, help='Maximum number of filenames in each chunk.')
    
    args = parser.parse_args()
    
    # Process the .txt files
    process_txt_files(args.directory, args.chunk_size)

if __name__ == "__main__":
    main()
