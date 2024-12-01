import sys
import os
import re

def find_ecdo_path(start_path):
    current_path = os.path.abspath(start_path)
    while True:
        if os.path.basename(current_path) == 'ecdo':
            return current_path
        parent = os.path.dirname(current_path)
        if parent == current_path:
            # Reached the root directory without finding 'ecdo'
            return None
        current_path = parent

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <relative_filename>")
        sys.exit(1)

    relative_filename = sys.argv[1]
    file_path = os.path.abspath(relative_filename)

    ecdo_path = find_ecdo_path(file_path)
    if ecdo_path is None:
        print("Could not find 'ecdo' folder in the directory hierarchy.")
        sys.exit(1)

    # Compute path relative to 'ecdo' directory
    X_relative_to_ecdo = os.path.relpath(file_path, ecdo_path).replace(os.sep, '/')

    headers = []
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line.startswith('# '):
                header_text = line[2:].strip()
                headers.append(header_text)

    markdown_links = []
    for header_text in headers:
        # Remove all non-textual characters (except dashes and numbers), lowercase, and replace spaces with dashes
        header_text_processed = re.sub(r'[^A-Za-z0-9\s-]|(?:\s*\[.*?\]\(.*?\)\s*$)', '', header_text)
        header_text_processed = header_text_processed.lower()
        Y = header_text_processed.replace(' ', '-')
        link_url = f"https://github.com/sovrynn/ecdo/blob/master/{X_relative_to_ecdo}#{Y}-top"
        link_text = header_text
        markdown_link = f"[{link_text}]({link_url})"
        markdown_links.append(markdown_link)

    markdown_output = "# GPT Summary: Table of Contents\n\n"
    for link in markdown_links:
        markdown_output += f"- {link}\n"

    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(script_dir, 'output.txt')

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(markdown_output)

    # Return the markdown code block
    print("```markdown")
    print(markdown_output)
    print("```")

        # Read the existing contents of the file
    with open(file_path, 'r') as file:
        original_content = file.read()
    
    # Write the new content (prepend) followed by the original content
    with open(file_path, 'w') as file:
        file.write(markdown_output + '\n' + original_content)

if __name__ == "__main__":
    main()
