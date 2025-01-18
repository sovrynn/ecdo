#!/usr/bin/env python3

import sys
import os
import chardet
from bs4 import BeautifulSoup

replacement_char = '\uFFFD'  # The unicode replacement character (�)

def main():
    if len(sys.argv) < 2:
        print("Usage: python parse_dd.py <input_file>")
        sys.exit(1)

    input_file = sys.argv[1]

    # 1. Read file in binary mode
    try:
        with open(input_file, 'rb') as f:
            raw_data = f.read()
    except FileNotFoundError:
        print(f"File not found: {input_file}")
        sys.exit(1)

    # 2. Detect the file's encoding
    detection = chardet.detect(raw_data)
    detected_encoding = detection['encoding']
    if not detected_encoding:
        # Fall back to UTF-8 if detection fails
        detected_encoding = 'utf-8'

    # 3. Decode with the detected encoding, replacing invalid bytes
    content = raw_data.decode(detected_encoding, errors='replace')

    # 4. Print lines containing the replacement character
    lines = content.splitlines()
    for i, line in enumerate(lines, start=1):
        if replacement_char in line:
            print(f"Line {i} has invalid or unrecognized bytes replaced: {line}")

    # 5. Parse the (decoded) HTML with BeautifulSoup
    soup = BeautifulSoup(content, 'html.parser')

    # 6. Create output directory if it doesn't exist
    output_dir = 'output'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # 7. Find all <dt> tags
    dt_tags = soup.find_all('dt')
    file_count = 0

    # 8. Process each <dt> and its immediately following <dd>
    for dt_tag in dt_tags:
        # Get the <a> tag with an 'id'
        a_tag = dt_tag.find('a', id=True)
        if not a_tag:
            # No <a> with 'id' inside this <dt>? Skip or handle as needed
            continue

        file_id = a_tag['id']

        # Find the next sibling of <dt>; must be a <dd>
        next_sib = dt_tag.find_next_sibling()
        if next_sib and next_sib.name == 'dd':
            dd_content = next_sib.get_text()

            # Construct the output file path
            output_filename = f"{file_id}.txt"
            output_path = os.path.join(output_dir, output_filename)

            # Write the <dd> content to the output file (saved as UTF-8)
            with open(output_path, 'w', encoding='utf-8') as out_file:
                out_file.write(dd_content.strip())

            file_count += 1
        else:
            print(f"No <dd> found for <dt> with id='{file_id}'.")
            sys.exit(1)

    # 9. Print the total number of files created
    print(f"Total files created: {file_count}")

if __name__ == "__main__":
    main()
