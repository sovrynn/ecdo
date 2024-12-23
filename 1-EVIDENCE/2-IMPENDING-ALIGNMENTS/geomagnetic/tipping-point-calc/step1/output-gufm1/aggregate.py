import os

# Output file
output_filename = "timeseries-rest.txt"

# Initialize a list to store year-number pairs
data = []

# Iterate over files in the current directory
for filename in sorted(os.listdir(".")):
    if filename.endswith(".txt") and filename[:4].isdigit() and filename[4:] == ".txt":
        try:
            year = int(filename[:4])
            if year >= 1711:  # Process only files with year 1711 or greater
                with open(filename, "r") as file:
                    first_line = file.readline().strip()
                    number = float(first_line)
                    data.append((year, number))
        except (ValueError, IOError):
            print(f"Error reading or processing file: {filename}")

# Sort the data by year (should already be sorted due to filename sorting)
data.sort()

# Write to the output file
with open(output_filename, "w") as output_file:
    for year, number in data:
        output_file.write(f"{year} {number}\n")

print(f"Data written to {output_filename}")
