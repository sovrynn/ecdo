import os

def find_empty_files(directory):
    empty_files = []

    counter = 0
    
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        
        if os.path.isfile(filepath):  # Ensure it's a file, not a directory
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read().strip()
                if not content:  # Check if file is empty after stripping
                    print(filename)
                    counter += 1

    print(f'Empty file count: {counter}')
    
    return empty_files

def main():
    current_directory = os.getcwd()
    empty_files = find_empty_files(current_directory)
    
    # if empty_files:
    #     print("Empty files (after stripping whitespace):")
    #     for file in empty_files:
    #         print(file)
    # else:
    #     print("No empty files found.")

if __name__ == "__main__":
    main()
