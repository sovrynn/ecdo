#!/usr/bin/env python3
import sys
import csv
import os

def xml_escape(text):
    """
    Escapes special XML characters in a string (e.g., &, <, >, ", ').
    """
    if text is None:
        return ""
    replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text

def process_csv(input_filename, output_filename):
    """
    Processes the input CSV file to ensure that within the specified
    set of 19 consecutive columns, each row has exactly one TRUE and the
    rest FALSE. After the first TRUE, all remaining values are set to FALSE.
    
    Parameters:
    - input_filename: str, path to the input CSV file.
    - output_filename: str, path to the output CSV file.
    """
    # Define the range of category columns
    START_COLUMN_NAME = "Climate Disruption"
    END_COLUMN_NAME = "Other"
    NUM_CATEGORIES = 19

    # Lists to keep track of errors
    rows_with_multiple_trues = []
    rows_with_no_true = []
    rows_missing_columns = []

    # Read the input CSV
    with open(input_filename, mode='r', encoding='utf-8-sig', newline='') as infile:
        reader = csv.reader(infile)
        headers = next(reader, None)

        if headers is None:
            print("Error: The CSV file is empty.")
            sys.exit(1)

        # Find the start and end indices for the 19 category columns
        try:
            start_index = headers.index(START_COLUMN_NAME)
            end_index = headers.index(END_COLUMN_NAME)
        except ValueError as e:
            print(f"Error: {e}")
            sys.exit(1)

        # Ensure that there are exactly 19 columns from start to end
        if (end_index - start_index + 1) != NUM_CATEGORIES:
            print(f"Error: Expected {NUM_CATEGORIES} consecutive columns from '{START_COLUMN_NAME}' to '{END_COLUMN_NAME}', but found {(end_index - start_index + 1)}.")
            sys.exit(1)

        # Prepare to write the output CSV
        with open(output_filename, mode='w', encoding='utf-8', newline='') as outfile:
            writer = csv.writer(outfile)
            writer.writerow(headers)  # Write headers

            # Process each row
            for row_num, row in enumerate(reader, start=2):  # Start at 2 to account for header
                # Check if row has enough columns
                if len(row) < end_index + 1:
                    rows_missing_columns.append(row_num)
                    writer.writerow(row)  # Write the row as is
                    continue

                # Extract the 19 category values
                category_values = row[start_index:end_index+1]

                # Normalize the values to uppercase and strip whitespace
                normalized_values = [val.strip().upper() for val in category_values]

                # Find indices of all TRUE values
                true_indices = [i for i, val in enumerate(normalized_values) if val == "TRUE"]

                if len(true_indices) == 0:
                    rows_with_no_true.append(row_num)
                elif len(true_indices) > 1:
                    rows_with_multiple_trues.append(row_num)
                    # Retain only the first TRUE and set the rest to FALSE
                    first_true = true_indices[0]
                    for i in range(1, len(true_indices)):
                        category_values[true_indices[i]] = "FALSE"

                # If exactly one TRUE, no action needed
                elif len(true_indices) == 1:
                    pass  # No action needed

                # Update the row with modified category values
                row[start_index:end_index+1] = category_values

                # Verify that there is exactly one TRUE now
                updated_true_count = row[start_index:end_index+1].count("TRUE")
                if updated_true_count != 1:
                    if updated_true_count == 0:
                        rows_with_no_true.append(row_num)
                    else:
                        rows_with_multiple_trues.append(row_num)

                # Write the updated row to the output CSV
                writer.writerow(row)

    # Reporting
    if rows_missing_columns:
        print(f"Rows missing some category columns: {rows_missing_columns}")
    if rows_with_no_true:
        print(f"Rows with no TRUE in categories: {rows_with_no_true}")
    if rows_with_multiple_trues:
        print(f"Rows with multiple TRUEs (only the first TRUE was retained): {rows_with_multiple_trues}")

    # Final verification
    total_rows = rows_with_multiple_trues.__len__() + rows_with_no_true.__len__() + rows_missing_columns.__len__()
    if total_rows == 0:
        print(f"All rows have exactly one TRUE in the category columns. Output written to '{output_filename}'.")
    else:
        print(f"Processing completed with some issues. Output written to '{output_filename}'.")

def main():
    if len(sys.argv) != 2:
        print("Usage: python process_csv.py <input_csv_filename>")
        sys.exit(1)

    input_filename = sys.argv[1]

    if not os.path.isfile(input_filename):
        print(f"Error: File '{input_filename}' does not exist.")
        sys.exit(1)

    output_filename = "data-with-coords-one-category.csv"

    process_csv(input_filename, output_filename)

if __name__ == "__main__":
    main()
