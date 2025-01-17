import os
import sys

def count_lines_in_file(file_path):
    """
    Counts the number of lines in a given file.

    Args:
        file_path (str): Path to the file.

    Returns:
        int: Number of lines in the file.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            return len(lines)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return 0

def concatenate_files(directory):
    """
    Concatenates all lines from files in the specified directory after stripping them.

    Args:
        directory (str): Relative path to the directory.

    Returns:
        tuple: A tuple containing the concatenated content and the total number of lines.
    """
    concatenated_content = []
    total_lines = 0

    # List all entries in the directory
    try:
        entries = os.listdir(directory)
    except FileNotFoundError:
        print(f"Directory '{directory}' not found.")
        sys.exit(1)
    except NotADirectoryError:
        print(f"'{directory}' is not a directory.")
        sys.exit(1)
    except PermissionError:
        print(f"Permission denied to access '{directory}'.")
        sys.exit(1)

    # Iterate over each entry in the directory
    for entry in entries:
        file_path = os.path.join(directory, entry)

        # Process only files
        if os.path.isfile(file_path):
            line_count = count_lines_in_file(file_path)
            print(f"{entry}: {line_count} lines")

            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    # Strip each line and add to the concatenated content
                    stripped_lines = [line.strip() for line in f]
                    concatenated_content.extend(stripped_lines)
                    total_lines += len(stripped_lines)
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

    return "\n".join(concatenated_content), total_lines

def main():
    # Check if the directory argument is provided
    if len(sys.argv) != 2:
        print("Usage: python line_counter.py <relative_directory>")
        sys.exit(1)

    directory = sys.argv[1]

    # Concatenate files and get total lines
    concatenated_text, total_lines = concatenate_files(directory)

    # Write concatenated content to output.txt
    output_file = 'output.txt'
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(concatenated_text + '\n')  # Ensure the file ends with a newline
    except Exception as e:
        print(f"Error writing to {output_file}: {e}")
        sys.exit(1)

    print(f"Total number of lines written to {output_file}: {total_lines}")

if __name__ == "__main__":
    main()
