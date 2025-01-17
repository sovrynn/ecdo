import os
import sys
import random
import csv

def main():
    if len(sys.argv) != 3:
        print("Usage: python script.py <folder_X> <folder_Y>")
        sys.exit(1)

    folder_X = sys.argv[1]
    folder_Y = sys.argv[2]
    output_folder = "test-marine-classification-randomly"

    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Get list of files in folder X
    try:
        files_X = [f for f in os.listdir(folder_X) if os.path.isfile(os.path.join(folder_X, f))]
    except FileNotFoundError:
        print(f"Error: Folder X '{folder_X}' does not exist.")
        sys.exit(1)

    if len(files_X) < 30:
        print(f"Error: Folder X '{folder_X}' contains fewer than 30 files.")
        sys.exit(1)

    for iteration in range(1, 6):
        # Select 30 random files from folder X
        selected_files = random.sample(files_X, 30)
        values_Y = []

        for filename in selected_files:
            path_Y = os.path.join(folder_Y, filename)
            if not os.path.isfile(path_Y):
                print(f"Warning: File '{filename}' not found in folder Y '{folder_Y}'. Skipping.")
                continue

            try:
                with open(path_Y, 'r', newline='', encoding='utf-8') as csvfile:
                    reader = csv.reader(csvfile)
                    first_row = next(reader, None)
                    if first_row and len(first_row) >= 6:
                        value = first_row[5]  # 6th value (0-based index)
                        values_Y.append(value)
                    else:
                        print(f"Warning: File '{filename}' in Y does not have at least 6 columns.")
            except Exception as e:
                print(f"Warning: Could not read file '{filename}' in Y. Error: {e}")

        # Define the output file path
        output_file = os.path.join(output_folder, f"{iteration}.txt")

        # Append the values to the output file
        try:
            with open(output_file, 'a', encoding='utf-8') as f_out:
                for value in values_Y:
                    f_out.write(f"{value}\n")
            print(f"Iteration {iteration}: Appended {len(values_Y)} values to '{output_file}'.")
        except Exception as e:
            print(f"Error: Could not write to file '{output_file}'. Error: {e}")

if __name__ == "__main__":
    main()
