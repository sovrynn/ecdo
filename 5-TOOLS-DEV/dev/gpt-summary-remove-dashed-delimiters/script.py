import sys

def remove_dash_blank_lines(filename):
    try:
        with open(filename, 'r') as file:
            lines = file.readlines()

        instances_removed = 0
        new_lines = []
        i = 0

        while i < len(lines):
            if lines[i].strip() == "---" and (i + 1 < len(lines)) and lines[i + 1].strip() == "":
                instances_removed += 1
                i += 2  # Skip the "---" and blank line
            else:
                new_lines.append(lines[i])
                i += 1

        # Write the updated content back to the file
        with open(filename, 'w') as file:
            file.writelines(new_lines)

        print(f"Removed {instances_removed} instances of the specified pattern.")
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
    else:
        filename = sys.argv[1]
        remove_dash_blank_lines(filename)
