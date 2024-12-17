import sys
import os

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_directory>")
        sys.exit(1)

    directory = sys.argv[1]

    if not os.path.isdir(directory):
        print(f"Error: '{directory}' is not a directory.")
        sys.exit(1)

    total_count = 0

    # Iterate through all files in the given directory
    for filename in os.listdir(directory):
        if filename.lower().endswith('.txt'):
            file_path = os.path.join(directory, filename)

            # Count non-empty lines in this file
            with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
                count = sum(1 for line in f if line.strip())

            print(f"{filename}: {count}")
            total_count += count

    print(f"Total non-empty lines: {total_count}")

if __name__ == "__main__":
    main()
