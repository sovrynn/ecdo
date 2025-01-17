# Step 0 download

Using this link for all the continents

https://paleobiodb.org/data1.2/occs/taxa.csv?datainfo&rowcount&cc=AUS&show=full,classext

https://paleobiodb.org/data1.2/occs/taxa.csv?datainfo&rowcount&cc=IOC&show=full,classext
https://paleobiodb.org/data1.2/occs/taxa.csv?datainfo&rowcount&cc=NOA&show=full,classext
https://paleobiodb.org/data1.2/occs/taxa.csv?datainfo&rowcount&cc=OCE&show=full,classext
https://paleobiodb.org/data1.2/occs/taxa.csv?datainfo&rowcount&cc=SOA&show=full,classext

verify the links in the metadata porfavor

# Step 1 data prep

Just get the taxon, one file per taxon, (it'll be like 500k files), separated by folder

I suppose you should check for duplicates as well here

Use the taxon_no id as uuid and filename

## Prompt

Write a python script that does the following. It should take two input args, a relative filename and a relative directory.

It should scan the filename. It is a csv file. Ignore the first 20 lines. The 21st line is the column labels, the rest of the rows are data.

For each row, the script should create a file in the input directory. The name of the file should be X.txt where X is replaced with the value of column "taxon_no". If this file already exists, print it out to console and don't overwrite it.

The content of the file should be the entire csv row.

Print out the total number of created files, and pre-existing files that weren't overwritten.

## results

## africa

Total files created: 20697
Total pre-existing files (not overwritten): 9
Empty taxon no: 390

## antarctica

## asia

Total files created: 65067
Total pre-existing files (not overwritten): 9273
Empty taxon no: 686

## australia

Total files created: 8447
Total pre-existing files (not overwritten): 6630
Empty taxon no: 376

## europe

Total files created: 78760
Total pre-existing files (not overwritten): 27435
Empty taxon no: 882

## indian ocean

Total files created: 883
Total pre-existing files (not overwritten): 2588
Empty taxon no: 103

## north america

Total files created: 55242
Total pre-existing files (not overwritten): 26039
Empty taxon no: 775

## oceania

Total files created: 3152
Total pre-existing files (not overwritten): 5843
Empty taxon no: 162

## south america

Total files created: 11661
Total pre-existing files (not overwritten): 12131
Empty taxon no: 397

## total taxon

246450

Wow.. that will take a long time to process using gpt

# Step 2,3 query gpt

Boom boom boom this will be a ton of queries I recommend using parallelism

=== Processing Summary ===
Total files processed: 246449
Total files copied to 'marine-taxon': 146615
Total files ignored (content='no'): 99830
Total files with invalid content: 4

# step4,5   query the paleodb for occurrences for every taxon

this will take a while. 150k requests. wow.

So I can actually get the fossil collections, rather than the fossil occurrences. This will be considerably less data.

You know what's even better, is actually I can get a GEOGRAPHIC SUMMARY of fossil collections. Again, this will reduce the data size.

Okay what's EVEN better is I can add multiple taxon id to the same query. What if I can do this in one query?

https://paleobiodb.org/data1.2/occs/geosum.csv?level=2&all_records&taxon_id=

## prompt

Write a python script that does the following. It should take one input arg a relative directory. It should look inside for all .txt files. It should remove the .txt suffix, concatenate all the resulting filenames with a comma, and write the string ot output.txt

ok i need you to modify the script. instead of concatening them all into a single string, it should split them up into chunks of max length X instances, parameterized in the script. Then it should concatenate the values inside each chunk, with a comma, and write one per line to the output file.

## prompt

Write a python script that does the following. IT should take two input args a relative file and relative directory. The script should read the content of the realtive file. For every line it should prepend "https://paleobiodb.org/data1.2/occs/geosum.csv?level=2&all_records&taxon_id=" to the line, then do a wget on the line (it will download a csv file). That csv file should be renamed to the line number + .txt and then written to the second input arg (the relative directory). Print out a progress indicator to console.

# Step 6

remove duplicates, aggregate

## Prompt

Write a pyhton script that does the following. It should take one input arg a relative directory. In that directory it should parse each file. Each file is a csv file with first row being the column labels and rest being the data rows.

The script should parse the values of column "lat" and "lng" for every row, creating a set of tuples.

Then, the script should combine all these tuples from all the files but only keep unique ones.

These should be written, one per line, space separated, to unique-marine-collection-coords.txt.

Write the total number of unique coords, and duplicate coords, to console.

## output

python script6-unique-coords-aggregate.py marine-taxon-collections/
Total unique coords: 3443
Total duplicates encountered: 31747

# Step 7 plot

ezpz

you'll almost certainly have to cluster here

with 1 million records total

I can easily imagine you having to plot 700k markers or something

Which would be 10x more than the earthquake file which basically crashes the program

# Step 8

Testing the marine classifications

## Prompt

Write a python script that takes two input args, a relative folder X and Y.

It should do the following 5 times.

In X, it should choose 30 random files.

In Y, it should find a file with the same filename. The file in Y will have csv on the first row. Take the 6th value.

Append all the values from Y (30 of them) to a file, one per line, and write it to folder test-marine-classification-randomly, to files 1.txt, 2.txt, 3.txt, and 4.txt, and 5.txt based on which of the 5 times it is.