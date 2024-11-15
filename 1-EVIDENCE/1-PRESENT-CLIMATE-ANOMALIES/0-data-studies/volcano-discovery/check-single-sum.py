import csv
import sys

def sum_csv_columns(filename):
    # Initialize sums
    news_sum = 0
    vaac_sum = 0
    total_sum = 0

    try:
        # Open the CSV file
        with open(filename, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)

            # Iterate through each row in the CSV
            for row in reader:
                # Sum the News column
                try:
                    news_value = int(row['News'])
                except ValueError:
                    news_value = 0
                news_sum += news_value

                # Sum the VAAC column, treating 'n/a' as 0
                vaac_value_str = row['VAAC']
                if vaac_value_str.strip().lower() == 'n/a':
                    vaac_value = 0
                else:
                    try:
                        vaac_value = int(vaac_value_str)
                    except ValueError:
                        vaac_value = 0
                vaac_sum += vaac_value

                # Sum the Total column
                try:
                    total_value = int(row['Total'])
                except ValueError:
                    total_value = 0
                total_sum += total_value

        # Print the results
        print(f"Sum of News: {news_sum}")
        print(f"Sum of VAAC: {vaac_sum}")
        print(f"Sum of Total: {total_sum}")

    except FileNotFoundError:
        print(f"File not found: {filename}")
    except KeyError as e:
        print(f"Missing column in CSV: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python sum_csv_columns.py <filename>")
    else:
        sum_csv_columns(sys.argv[1])
