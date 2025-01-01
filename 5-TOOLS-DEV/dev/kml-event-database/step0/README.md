# PRompt add hyperlinks to google spreadsheet

So, the hyperlinks are embedded in column A. The first row (the column labels) doesn't have a link but the rest do.

Can you write the google sheet script for me to extract the links? Any format is fine really, just keep them in the same order they're in in the spreadsheet

Can you modify it so it adds the links in a new column inserted after A rather than overwrwiting B?

# Prompt only keep unique links

Write a python script that takes one input arg, a relative filename.

That filename is a csv file. First row is column labels, every other row is a data point.

I want you to go down the rows from top to bottom. For every row, check the second column, it has label "Extracted Links".

For every row, for its value V in the second column, delete all other rows with the same value V in the second column.

Print out all such deleted rows to console.

Make sure not to mess up by iterating over deleted rows.

At the end, print out the total numebr of deleted rows.

Write the output modified csv to output.csv. Don't modify the original file.