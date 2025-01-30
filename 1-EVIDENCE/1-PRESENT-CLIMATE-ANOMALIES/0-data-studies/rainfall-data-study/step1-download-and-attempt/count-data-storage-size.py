import sys

def calculate_total_size(filename):
    total_size_mb = 0.0
    count = 0

    with open(filename, 'r') as file:
        for line in file:
            line = line.strip()
            if not line:
                continue  # Skip empty lines

            words = line.split()
            last_word = words[-1]

            if last_word.endswith('K'):
                try:
                    size_kb = float(last_word[:-1])
                    size_mb = size_kb / 1000.0  # Convert KB to MB
                    total_size_mb += size_mb
                    count += 1
                except ValueError:
                    continue  # Skip if conversion fails
            elif last_word.endswith('M'):
                try:
                    size_mb = float(last_word[:-1])
                    total_size_mb += size_mb
                    count += 1
                except ValueError:
                    continue  # Skip if conversion fails
            else:
                # Skip lines where the last word doesn't end with 'K' or 'M'
                continue

    print(f"Total Size (in MB): {total_size_mb}")
    print(f"Number of Entries Added: {count}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
    else:
        input_filename = sys.argv[1]
        calculate_total_size(input_filename)
