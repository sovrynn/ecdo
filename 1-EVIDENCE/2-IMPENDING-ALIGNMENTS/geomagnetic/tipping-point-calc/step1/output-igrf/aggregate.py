import os

def extract_year_and_number():
    output_file = "timeseries-all.txt"
    data = []

    # Scan the current directory for files matching the pattern YEAR.txt
    for file_name in os.listdir():
        if file_name.endswith(".txt") and file_name[:-4].isdigit() and len(file_name[:-4]) == 4:
            year = int(file_name[:-4])
            try:
                with open(file_name, 'r') as file:
                    first_line = file.readline().strip()
                    number = float(first_line)  # Try converting the first line to a float
                    data.append((year, number))
            except (ValueError, IOError):
                print(f"Skipping file {file_name} due to invalid format or read error.")

    # Sort the data by year (ascending)
    data.sort()

    # Write the sorted data to the output file
    try:
        with open(output_file, 'w') as out_file:
            for year, number in data:
                out_file.write(f"{year} {number}\n")
        print(f"Data successfully written to {output_file}")
    except IOError as e:
        print(f"Error writing to {output_file}: {e}")

if __name__ == "__main__":
    extract_year_and_number()