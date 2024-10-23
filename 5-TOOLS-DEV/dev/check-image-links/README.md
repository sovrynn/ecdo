Put the script in the root ECDO folder. It'll print everything out.

## Prompt

Write me a python script that does the following. It should start from the local relative directory structure. At each level, it should check the README.md file. In that file, it should search for image links, which can be of the format ![](L) or ![](L). I want you to extract L from that. If a file at that relative filename doesn't exist, in that local relative directory, fail and print out the filename. Then, traverse lower recursively in the directory tree, within all folders as they exist, and do the same thing. If no files fail, print out success.