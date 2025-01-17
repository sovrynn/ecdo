import argparse
import re
import sys
import os

def parse_arguments():
    """
    Parse command-line arguments.
    Returns:
        Namespace: Parsed arguments with input and output filenames.
    """
    parser = argparse.ArgumentParser(description='Extract href values from a file and write full URLs to another file.')
    parser.add_argument('input_file', help='Relative path to the input file (X)')
    parser.add_argument('output_file', help='Relative path to the output file (Y)')
    return parser.parse_args()

def extract_hrefs(content):
    """
    Extract all href values from the content matching <a href="Z">.
    Args:
        content (str): The content of the input file.
    Returns:
        list: A list of extracted href values (Z).
    """
    # Regex pattern to match <a href="Z">
    pattern = r'<a\s+href=["\']([^"\']+)["\']>'
    return re.findall(pattern, content)

def build_full_urls(hrefs, base_url):
    """
    Append each href value to the base URL.
    Args:
        hrefs (list): List of href values (Z).
        base_url (str): The base URL to append to.
    Returns:
        list: List of full URLs.
    """
    return [base_url + href for href in hrefs]

def write_to_file(urls, output_file):
    """
    Write each URL to the output file, one per line.
    Args:
        urls (list): List of full URLs.
        output_file (str): Path to the output file.
    """
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            for url in urls:
                f.write(url + '\n')
        print(f"Successfully wrote {len(urls)} URLs to '{output_file}'.")
    except IOError as e:
        print(f"Error writing to file '{output_file}': {e}", file=sys.stderr)
        sys.exit(1)

def main():
    args = parse_arguments()
    
    # Check if input file exists
    if not os.path.isfile(args.input_file):
        print(f"Input file '{args.input_file}' does not exist.", file=sys.stderr)
        sys.exit(1)
    
    try:
        with open(args.input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except IOError as e:
        print(f"Error reading file '{args.input_file}': {e}", file=sys.stderr)
        sys.exit(1)
    
    hrefs = extract_hrefs(content)
    
    if not hrefs:
        print("No href values found in the input file.")
        sys.exit(0)
    
    base_url = "http://www.talkorigins.org/faqs/flood-myths.html"
    full_urls = build_full_urls(hrefs, base_url)
    
    write_to_file(full_urls, args.output_file)

if __name__ == "__main__":
    main()
