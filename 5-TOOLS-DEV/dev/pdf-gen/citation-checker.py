import sys
import re

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_markdown_filepath>")
        sys.exit(1)

    filepath = sys.argv[1]

    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()

        # Find all citations in the format [number], ignoring empty brackets []
        pattern = r'\[(\d+)\]'
        citations = re.findall(pattern, content)
        citations = [int(num) for num in citations]
        unique_citations = set(citations)

        if not citations:
            print("No citations found.")
            sys.exit(0)

        highest_citation = max(unique_citations)
        total_citations = len(unique_citations)

        # Find missing citations from 1 to the highest citation
        all_citations = set(range(1, highest_citation + 1))
        missing_citations = sorted(all_citations - unique_citations)
        total_missing = len(missing_citations)

        print(f"Number of citations: {total_citations}")
        print(f"Total number of missing citations: {total_missing}")

        if total_missing > 0:
            print("Missing citation numbers:")
            print(", ".join(map(str, missing_citations)))
        else:
            print("No missing citations.")

    except FileNotFoundError:
        print(f"File '{filepath}' not found.")
        sys.exit(1)

if __name__ == "__main__":
    main()
