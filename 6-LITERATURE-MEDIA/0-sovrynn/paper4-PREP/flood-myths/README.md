# prompt

Write a script that does the following: it should take one input arg a relative file.

For every line that starts with a "-", the script should do the following, it should take all teh text between the starting dash and the first colon ":". It should strip it . then it should take the last word in the line which will be a link and put it in a latex href url \href{}{} where the link is the parsed link and the text is "Story Link". then it should combine the first parsed word with the url (separated by a space) and then append it to \item. It should write all these lines to output.txt

