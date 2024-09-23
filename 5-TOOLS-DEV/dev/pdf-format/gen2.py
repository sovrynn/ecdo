# This script reformats text copied from PDFs, combining lines within paragraphs
# while preserving paragraph breaks indicated by blank lines.

def reformat_text(input_file, output_file):
    try:
        with open(input_file, 'r') as f:
            lines = f.readlines()

        paragraphs = []
        current_paragraph_lines = []

        for line in lines:
            if line.strip() == '':
                if current_paragraph_lines:
                    paragraphs.append(current_paragraph_lines)
                    current_paragraph_lines = []
            else:
                current_paragraph_lines.append(line.rstrip('\n'))

        # Add the last paragraph if any
        if current_paragraph_lines:
            paragraphs.append(current_paragraph_lines)

        # Process each paragraph
        processed_paragraphs = []
        for paragraph_lines in paragraphs:
            # Remove leading/trailing spaces in each line
            stripped_lines = [line.strip() for line in paragraph_lines]
            # Combine lines into a single string with spaces
            paragraph_text = ' '.join(stripped_lines)
            processed_paragraphs.append(paragraph_text)

        # Write the processed paragraphs to the output file
        with open(output_file, 'w') as f:
            for idx, paragraph in enumerate(processed_paragraphs):
                f.write(paragraph)
                if idx < len(processed_paragraphs) - 1:
                    # Add a blank line to separate paragraphs
                    f.write('\n\n')

        print("Text reformatted successfully. Output written to", output_file)

    except FileNotFoundError:
        print("Input file not found.")

# Usage: Pass input and output file paths as arguments
reformat_text("input.txt", "output.txt")
