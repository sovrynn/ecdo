One script to extract the raw data from the KML.
- name
- elevation
- prominence
- coords

One query to classify the region.

# Prompt (1227 results)

Write a script that takes one input arg a relative file which is a kml file

I have a kml file with a bunch of records that looks like this

<Placemark>
    <styleUrl>#icon0</styleUrl>
    <name>Gora Addala Shukgelmezr</name>
		<description><![CDATA[World's Ultras<BR><BR><B>NAME</B> = Gora Addala Shukgelmezr<BR><B>ELEVATION</B> = 4152<BR><B>PROMINENCE</B> = 1812<BR><B>ID</B> = AS302<BR><B>ALT_NAME</B> = <BR><B>COMMENT</B> = <BR><B>COUNTRY</B> = Russia<BR><B>AUTHORS</B> = http://www.PEAKLIST.org]]></description>
		<Point>
			<coordinates>46.25166667,42.33833333,4152</coordinates>
		</Point>
</Placemark>

For each placemark, I want you to extract hte name (from the <name> tag), the elevation and prominence numbers (from the CDATA), and the lat and lon values (from <coordinates>, which has the longitude first, and latitude second). The data for each should then be placed in a file, one value per line (5 values total) named X.txt where X is the order (number) of the placemark in the file

These shoulda ll be written to local folder data/

# prompt (365 results)

Now write a script that takes one input arg a relative folder

Each file in that folder has 5 values, one per line

The script should create an output folder data2

Then it should copy each file in the input folder to the output folder IF the value on the third line is 2000 or greater (its a number)

rite total number of output files copied to console

# prompt 3

Write a scirpt that takes one input arg a relative folder

For each file in that folder, extract the value o fthe last line

Then create a unique set of all unique values in the last lines across all files

And write the unique values to output.txt, one per line

# prompt 4

Write a python script that does teh following

It should take one input arg a relative file

For each line in that file the script should make a chatgpt query and then, separated by a hashtag, append the output of the chatgpt query to each line, and write the resulting output to output.txt

The script should read api key from apikey.txt

The script should read a prompt from prompt.txt, then append the value of the line to create the final prompt

The script should maintain a console progress indicator based on total lines processed out of total lines to process

If the script receives a response from chatgpt that is not a single digit, the scirpt should print a message to the console and then try again for that file

Use this chatgpt boilerplate:

from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    input="Write a one-sentence bedtime story about a unicorn."
)

print(response.output_text)

# prompt 5 (final)

Write a python script that takes two input args, a relative folder and a relative file, generates a latex snippet, and writes the snippet to output.txt

the basic idea is this - in each of the following subsections, a list will be created. For each file in the input folder, an entry will be inserted into one of the lists based on which region it belongs to.

\subsection{Asia 2000m Prominence Peak List}
\subsection{South America 2000m Prominence Peak List}
\subsection{Mesoamerica 2000m Prominence Peak List}
\subsection{Africa 2000m Prominence Peak List}
\subsection{Australia 2000m Prominence Peak List}
\subsection{Europe 2000m Prominence Peak List}
\subsection{North America 2000m Prominence Peak List}
\subsection{West Asia 2000m Prominence Peak List}
\subsection{Pacific Islands 2000m Prominence Peak List}
\subsection{Antarctica 2000m Prominence Peak List}

The list is like this

\begin{flushleft}
\begin{enumerate}
   \item 
\end{enumerate}
\end{flushleft}

Each file in the input folder has 6 lines, and the values from lines 1-3 and 6 (country name) will be included in the list entry

The second input arg (file) contains several lines, each line maps to one country name along with a number from 0-9 (0-indexed) denoting which of the 10 latex lists (in order) the entry should be inserted into. Each unique country name is on a line, then a hashtag, and then the number for the list

First, read each file into memory and parse the 4 values to be used. The values will be attached together in teh following manner: "[first line], [6th line], [second line] m, [third line] m" and then inserted into one of the lists based on the mapping in the second input file

After organizing the values into the 9 lists, the values should then be sorted alphabetically, first by the value of the sixth line, and then by the value of the first line, and then inserted into the latex snippet

write the output list to output.txt


# prompt 6 (map gen)

write a python script that takes one input arg a relative folder

Each file in that folder has several lines

The script should take the 4th and 5th lines and combine them with a comma, this will be the content of the output file

Then the script should write the output file with the same name to output folder output/

Write total number of files processed at the end