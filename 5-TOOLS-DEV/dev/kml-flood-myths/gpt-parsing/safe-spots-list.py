import os
import sys

def main():
    # If you want to run this as: python script.py /path/to/X /path/to/Y /path/to/Z
    if len(sys.argv) != 4:
        print("Usage: python script.py <X_dir> <Y_dir> <Z_dir>")
        sys.exit(1)

    X_dir = sys.argv[1]
    Y_dir = sys.argv[2]
    Z_dir = sys.argv[3]

    # Iterate over every .txt file in X_dir
    for x_filename in os.listdir(X_dir):
        if not x_filename.endswith(".txt"):
            continue  # skip non-txt files

        x_path = os.path.join(X_dir, x_filename)
        y_path = os.path.join(Y_dir, x_filename)  # same name in Y

        # Read lines from X
        with open(x_path, "r", encoding="utf-8") as f_x:
            x_lines = f_x.read().splitlines()

        # Read lines from Y
        # We expect that for every line in X, there are 2 lines in Y
        with open(y_path, "r", encoding="utf-8") as f_y:
            y_lines = f_y.read().splitlines()

        # Prepare the output lines for this file
        output_lines = []
        for i, x_line in enumerate(x_lines):
            # The lines in Y that correspond to x_line:
            #   x_line index i -> y_lines[2*i], y_lines[2*i + 1]
            # Add a safety check if Y doesn't have enough lines:
            if 2*i + 1 >= len(y_lines):
                # Not enough lines in Y, skip or break
                continue

            y_line_1 = y_lines[2*i]
            y_line_2 = y_lines[2*i + 1]

            # Extract the text after the last '#' in x_line
            if '#' in x_line:
                part_after_hash = x_line.rsplit('#', 1)[-1].strip()
            else:
                part_after_hash = x_line.strip()

            # Construct the path for the corresponding file in Z
            z_file_name = part_after_hash + ".txt"
            z_path = os.path.join(Z_dir, z_file_name)

            # If the Z file doesn't exist, skip
            if not os.path.isfile(z_path):
                continue

            # Read the Z file content
            with open(z_path, "r", encoding="utf-8") as f_z:
                z_content = f_z.read().strip()

            # Build one line of output
            output_line = f"- {y_line_1}: {z_content} {x_line}"
            output_lines.append(output_line)

        # Print the multi-line string for this X file
        print(f"{x_filename}:")
        for line in output_lines:
            print(line)
        print()  # blank line between files (optional)

if __name__ == "__main__":
    main()
