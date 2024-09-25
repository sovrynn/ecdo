# Prompts

## Translation

Translate the following markdown excerpt into []. Follow the following formatting guidelines:
- Don't translate exhibit markers (ex: 7D)
- Don't translate numbers in numerical form. Only translate counting words (ex: first)
- Don't translate acronyms
- Don't translate single letters
- Don't translate link addresses, but do translate the link text (inside brackets)
- Don't translate image embeddings
- Don't translate "epoche vanguards gnosis"
- Don't translate citation numbers, which are in lone bracket pairs
- Aside from the above exceptions, don't leave a single word untranslated

Here is the markdown excerpt. Translate it and return it to me in the same markdown formatting, with the words translated, in a markdown code block:

## PDF Formatting

Can you format this properly? Keep the header formatting, as well as paragraph formatting. but make these changes:
- combine paragraphs split up across multiple lines into one.
- Remove random numbers in the text (originally citations).
- Capitalize the headers properly. Add periods when I shorten chapter -> ch, for example.
keep the rest of the text verbatim. Return the result in a code window that I can copy. heres the text:

## Repo content accumulation script for feeding into custom GPTs (prompted to o1-preview)

I want to write a script that persuses a directory and from the content, generates textual files that can be uploaded to ChatGPT to create a custom GPT. The method will be very simple - append all the content in files ending with `.md` together, demarcated by filename, and write them to a set of output files, split up so that each file passes the GPT token and filesize caps.

Use the following steps:
- Parameterize the script using variables, assigned together:
1. SEARCH_DIR: the directory to recursively search
2. FILE_SIZE_LIMIT: the limit file size, exclusive, which will be the limit for all output files, in MB
3. FILE_TOKEN_LIMIT: the limit token count, exclusive, which will be the limit for all output files
4. FILE_NUM_LIMIT: the total number of output text files, past which the script should fail
- Recursively iterate through the repo, reading all .md files, accumulating the content of each .md file to an output file as you go rather than in separate steps, since the output file content could be rather large. Whenever the current output file reaches the token limit or file size limit, close the file and start writing to a new file. Before and after writing the file content, add file start/end demarcators in the format: "FILE {relative file path} START" and "FILE {relative file path} END". Do not split up each file into multiple output files; put the whole thing into one output file. If that would make the output file pass the token or size limit, start a new output file.
- Name output files in the format 'content{file_num}.txt'. Each potential value for file num should have the same amount of characters, based on the character count of the file size limit. Append 0 to smaller-digitcount numbers to achieve this.
- In order to estimate token count for the output, use the following guidelines. Make sure to include the token count for the custom file start/end demarcators in the token calculations as well:
1. 1 token ~= 4 chars in English
2. 1 token ~= ¾ words
3. 100 tokens ~= 75 words
4. 1-2 sentence ~= 30 tokens
5. 1 paragraph ~= 100 tokens
6. 1,500 words ~= 2048 tokens
Write the output files to a folder named 'output'.

## Custom GPT creation prompt

Learn from this content. It contains information about a phenomenon ECDO (exothermic core-mantle decoupling dzhanibekov oscillation). This is the accumulated textual content of .md files from a github repo that contains research about the ECDO. Files are demarcated with start/end delimiters ('FILE START {filename}', 'FILE END {filename}'). Images and PDFs that are linked are not included in the content, but you can see their filenames since they are embedded in the Markdown.