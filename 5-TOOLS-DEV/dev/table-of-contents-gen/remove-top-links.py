import argparse
import re
from pathlib import Path
import sys

def remove_links_from_header(header_line):
    """
    Removes all Markdown links from the header text.
    
    Args:
        header_line (str): A line from the Markdown file starting with '# '.
    
    Returns:
        tuple: A tuple containing the modified header line and the number of links removed.
    """
    # Regular expression to find Markdown links: [text](url)
    link_pattern = re.compile(r'\[([^\]]+)\]\([^)]+\)')
    
    # Find all links in the header
    links = link_pattern.findall(header_line)
    num_links = len(links)
    
    # Replace links with just the link text
    modified_header = link_pattern.sub(r'\1', header_line)
    
    return modified_header, num_links

def process_markdown_file(file_path):
    """
    Processes a Markdown file to remove links from H1 headers starting from the second one.
    
    Args:
        file_path (Path): Path object pointing to the Markdown file.
    
    Returns:
        int: Total number of links removed from the file.
    """
    try:
        with file_path.open('r', encoding='utf-8') as file:
            lines = file.readlines()
    except Exception as e:
        print(f"Error reading '{file_path}': {e}")
        return 0
    
    modified_lines = []
    h1_header_count = 0
    total_links_removed = 0
    
    for line in lines:
        if line.startswith('# '):
            h1_header_count += 1
            if h1_header_count >= 2:
                modified_header, links_removed = remove_links_from_header(line)
                modified_lines.append(modified_header)
                total_links_removed += links_removed
            else:
                # Keep the first H1 header as-is
                modified_lines.append(line)
        else:
            # Non-H1 header lines are kept as-is
            modified_lines.append(line)
    
    if total_links_removed > 0:
        try:
            with file_path.open('w', encoding='utf-8') as file:
                file.writelines(modified_lines)
            print(f"Processed '{file_path}': Removed {total_links_removed} link(s).")
        except Exception as e:
            print(f"Error writing to '{file_path}': {e}")
    else:
        print(f"Processed '{file_path}': No links removed.")
    
    return total_links_removed

def main():
    # Set up argument parsing
    parser = argparse.ArgumentParser(
        description=(
            "Remove all Markdown links from H1 headers starting from the second one in a specified Markdown file."
        )
    )
    parser.add_argument(
        "filename",
        type=str,
        help="Relative path to the target Markdown file."
    )
    
    args = parser.parse_args()
    relative_file_path = args.filename
    
    # Convert to absolute path
    file_path = Path(relative_file_path).resolve()
    
    # Check if the file exists and is a file
    if not file_path.exists():
        print(f"Error: The file '{relative_file_path}' does not exist.")
        sys.exit(1)
    if not file_path.is_file():
        print(f"Error: The path '{relative_file_path}' is not a file.")
        sys.exit(1)
    
    # Process the Markdown file
    process_markdown_file(file_path)

if __name__ == "__main__":
    main()
