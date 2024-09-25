import sys
import re

def main():
    if len(sys.argv) != 2:
        print("Usage: script.py <relative_markdown_filepath>")
        sys.exit(1)

    filepath = sys.argv[1]

    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()

        counter = [0]

        def replace_image_path(match):
            counter[0] += 1
            return f"![](img/{counter[0]}.webp)"

        pattern = r'!\[\]\((.*?)\)'
        new_content = re.sub(pattern, replace_image_path, content)

        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)

        print(f"Processed '{filepath}' and updated image paths.")

    except FileNotFoundError:
        print(f"File '{filepath}' not found.")
        sys.exit(1)

if __name__ == "__main__":
    main()
