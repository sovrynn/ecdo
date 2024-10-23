import os
import re

def process_readme(readme_path, dir_path):
    with open(readme_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match image links with non-empty alt text
    pattern = re.compile(r'!\[(.+?)\]\(([^)]+)\)')

    modified = False

    def replace_link(match):
        nonlocal modified
        alt_text = match.group(1)
        link_content = match.group(2)
        # Split link_content on spaces to get L
        tokens = link_content.strip().split()
        if tokens:
            L = tokens[0]
            # Build the new image link without alt text and extra parameters
            new_link = f'![]({L})'
            # Print the directory and image path that was replaced
            print(f"{os.path.relpath(dir_path)}: Replaced image link to {L}")
            modified = True
            return new_link
        else:
            # If no tokens are found, return the original match
            return match.group(0)

    new_content = pattern.sub(replace_link, content)

    if modified:
        # Write the modified content back to the README.md file
        with open(readme_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

for root, dirs, files in os.walk('.'):
    if 'README.md' in files:
        readme_path = os.path.join(root, 'README.md')
        process_readme(readme_path, root)
