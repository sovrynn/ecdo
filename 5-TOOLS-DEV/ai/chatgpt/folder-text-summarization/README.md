# GPT Folder Text Summarization

## Prompt

Write a python script that does the following. It should take two input args a relative directory D and a local file that contains a user prompt U. From that directory it should read all .txt files, summarize them using GPT, and write it to an output file.

Assume you have a python module at path "../file-prompt-module.py". There is a function 

def prompt_with_file(system_prompt, user_prompt, filename):

That takes a system prompt, user prompt, and filename (all strings) and returns a summarization string using GPT.

Use that function on all the files ending in .txt within D along with the U user prompt. Do this by appending the content of the file to the U user prompt to create a new user prompt. Use a default system_prompt "You are a helpful assistant answering queries for educational purposes." along with that new user prompt.

Once you receive the output for a certain file, you need to strip markdown formatting characters and trim the output. Do this by scanning for "```markdown" and "```". There should only be one such pair in the file. Trim the output to all text within (exclusive) those markdown delimiters.

Then, for each file F.txt you fed to GPT, write the output content to output/F.txt. Create the output directory if it doesn't exist.