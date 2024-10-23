import os
import re

missing_files = []

# Regular expression to match image links in the README.md
image_link_pattern = re.compile(r'!\[.*?\]\((.*?)\)')

for root, dirs, files in os.walk('.'):
    if 'README.md' in files:
        readme_path = os.path.join(root, 'README.md')
        with open(readme_path, 'r', encoding='utf-8') as f:
            content = f.read()
            matches = image_link_pattern.findall(content)
            for match in matches:
                # Split the content inside () by space to get L
                tokens = match.strip().split()
                if tokens:
                    L = tokens[0]
                    image_path = os.path.join(root, L)
                    if not os.path.exists(image_path):
                        missing_files.append((image_path, root))

if missing_files:
    for file in missing_files:
        print(f"Missing {file[1]} file: {file[0]}")
else:
    print("success")
