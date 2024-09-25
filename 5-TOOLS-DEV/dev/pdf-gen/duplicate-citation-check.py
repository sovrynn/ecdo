import sys
import re
from collections import defaultdict

def main():
    if len(sys.argv) != 2:
        print("Usage: python check_duplicate_citations.py <relative_markdown_filepath>")
        sys.exit(1)

    filepath = sys.argv[1]

    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            lines = file.readlines()

        citation_lines = defaultdict(list)
        pattern = r'\[(\d+)\]'

        for line_num, line in enumerate(lines, start=1):
            citations = re.findall(pattern, line)
            for citation in citations:
                citation_lines[int(citation)].append(line_num)

        duplicates = {num: locs for num, locs in citation_lines.items() if len(locs) > 1}
        total_duplicates = len(duplicates)

        print(f"Total duplicate citations: {total_duplicates}")

        if total_duplicates > 0:
            print("Duplicate citations found on the following lines:")
            for citation_num, line_nums in duplicates.items():
                lines_str = ', '.join(map(str, line_nums))
                print(f"Citation [{citation_num}] appears on lines: {lines_str}")
        else:
            print("No duplicate citations found.")

    except FileNotFoundError:
        print(f"File '{filepath}' not found.")
        sys.exit(1)

if __name__ == "__main__":
    main()
