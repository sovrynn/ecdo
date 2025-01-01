So what I've got to do here is scrape the webpage content and save it to text files.

A good second step would be to clean it using an LLM. Just get the content. I'd like to use GPT for this...

# Prompt scraper

Write a python script that does the following. It should take one input arg, a relative file. It is a csv file. The first row is the column labels.

The second column in the rest of the data consists of a link.

I want you to use wget or something similar to download the webpage html content for each link. Save all output html content, one file per link, to a html file in the folder output. Name the html file the number of the row - the first data row should be 001.txt, the second 002.txt, etc. Add leading 0s to make sure the row number is 3 digits.

I want you to wait 10 seconds between each wget call.

Print out each call as you make it to the console along with the total number of files completed.

If any calls fail, don't create the output file, and just skip it. Make sure to print it out to console.

When finished, print out the total number of output files created.

## Results

It's failing on about a third...

I may have to open 40 links!!!


# Cleaning

I'll use an LLM for this...

It's very simple really.

I can use my data-beautifier for this.

Go into your llm-personal for this.

## Prompt

Take the following HTML and remove all the HTML formatting, keeping only the actual textual content: