import sys
from collections import defaultdict

def count_paragraphs(filename):
    # Dictionary to store counts and line numbers of paragraphs by number of lines
    paragraph_data = defaultdict(lambda: {"count": 0, "line_numbers": []})

    with open(filename, 'r', encoding='utf-8') as file:
        content = file.read()

    # Split the content by double newlines (blank lines) to get paragraphs
    paragraphs = [para for para in content.split('\n\n') if para.strip()]

    # Initialize the line tracker
    current_line = 1

    for paragraph in paragraphs:
        # Calculate the number of lines in the current paragraph
        num_lines = len(paragraph.strip().split('\n'))

        # Store the count and the starting line number of this paragraph
        paragraph_data[num_lines]["count"] += 1
        paragraph_data[num_lines]["line_numbers"].append(current_line)

        # Update the current line tracker (add the number of lines in the paragraph + 1 for the blank line)
        current_line += num_lines + 1

    # Print the results sorted by number of lines in paragraphs
    for num_lines in sorted(paragraph_data):
        count = paragraph_data[num_lines]["count"]
        line_numbers = paragraph_data[num_lines]["line_numbers"]
        line_numbers_str = ', '.join(map(str, line_numbers))
        print(f"{num_lines} lines: {count} paragraphs (Line numbers: {line_numbers_str})")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python paragraph_counter_with_line_numbers.py <filename>")
        sys.exit(1)

    filename = sys.argv[1]
    count_paragraphs(filename)
