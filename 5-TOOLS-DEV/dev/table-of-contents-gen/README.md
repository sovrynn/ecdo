# Script

Requirement is that all of, the table of content links you want to generate, are in H1 Markdown headers, and there are no other headers.

## Prompt

Write a python script that does the following. It should take one input arg, a relative filename.

From that filename, it should read it, and parse all single hashtag markdown headers. The text of those headers will be used to create a list of links, returned in markdown format. Each header will correspond to one link, with the text of the link being the text of the header, and the link pointing to the header on the same page.

In order to construct the link URL, traverse upwards in the directory structure from the specified file until it finds folder 'ecdo'. The path to the filename starting with and including the ecdo folder is denoted X. Then, the link will be of the format https://github.com/sovrynn/X#Y, where Y is the stripped text of the markdown header in question, but spaces separated with dashes.

Then, create a markdown code block like:
# Table of Contents

- link 1
- link 2
...
- last link

Write this to output.txt in the same folder as the script

And return it in a markdown code block.

# Script 2

Write a python script that does the following. It takes one input arg, a relative filename. It is in markdown format. It should add a link with text "(top)" and URL u (parameterized in the code) to every h1 markdown header, separated by a space, except the first one.

# Script 3

Write a python script that does the following. It takes one input arg, a relative filename. It should remove every line that is not a list entry (starting with a dash) in the content of the first markdown header (the file is in markdown format), modifying the original file.

# give me a command that runs python X Y, where X is a script and Y is a local directory, and runs it for every .md file except README.md in Y

find Y -maxdepth 1 -type f -name "*.md" ! -name "README.md" -exec python X {} \;