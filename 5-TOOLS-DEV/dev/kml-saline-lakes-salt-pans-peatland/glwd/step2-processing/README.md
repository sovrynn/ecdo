So, I think I definitely want to parallelize it.

I will simply make it binary. If there's a single positive value in the aggregation values, the result will be 1. Otherwise 0.

255 values ignored of course.

# First attempt

I'll use chunks of 100x100. I'll come up with a naming scheme. Each script will choose a random box and if the output file doesn't exist, it'll process it and write it to the output folder.

The number of files, combined with the unique naming scheme, will be used to verify the comprehensiveness of the output data.

Each output file will simply have a 0 or 1 along with lat/lon data.

This approach can then be easily modified to account for smaller or larger boxes.

The script will complete when it's iterated through all the boxes and all the output files are there.

## Output dimensions

Number of files: 290304 (336 * 864)

# Prompt process.py

Write a python script that does the following. It should take two input args, a relative filename X and relative directory Y. The script should also have a constant COMPRESSION_RATIO defined.

File X is a tif file. This should be read into python using rasterio. Its shape should be printed out to console. Make sure COMPRESSION_RATIO divides both the rows and columns cleanly without any remainders and print out this verification to console.

Next, the script will do the following. The rows/columns of the tif data will be divided into blocks of COMPRESSION_RATIO by COMPRESSION_RATIO grid cells. First of all, these should be processed in RANDOM order, rather than linear order, by randomly selecting a row of blocks and then randomly selecting blocks in that row, and then repeating.

WHen processing each block, the script should do the following.

First it should check if the number of output files in Y is equal to the total number of bounding blocks. If it is, the script is done, terminate.

Then, for the block, the script should create the output filename. Every block will be calculated to have a row id and column id based on its index (the block of the first column and first row will have ids 0 and 0, etc). These should then be turned into strings that all have the same number of digits by adding leading 0s to the smaller numbers. For example, if there are 500 blocks per row and 250 blocks per column, then the row and column ids should be scaled to 3 digits each by adding leading 0s to the ids with only one or two digits. Then, the output filename will be ROWID-COLUMNID.txt, replacing ROWID and COLUMNID with the scaled row and column ID strings. The script will check if this output filename exists in Y. If it does, skip it.

Then, for the block, the script should do the following:
- calculate the min lat and max lat of the boundaries of all the grid cells
- calculate the min lon and max lon of the boundaries of all the grid cells
- calculate the midpoint lat and midpoint lon by taking the average of the max/min for each
- calculate a boolean value based on the first band of data. If there are any positive values (ignore values of 255 as they are no-data values) for the first band in any of the grid cells in the block, then the boolean value should be 1. Otherwise, it should be 0.

These output values should then be written to the output filename in directory Y.  The content of the file should have:
- the first line will have min lat and max lat, space separated
- the second line will have min lon and max lon, space separated
- the third line will have midpoint lat and midpoint lon, space separated
- the fourth line will have the boolean value 0 or 1

Print out a progress indicator as you go based on the total number of output files in the output directory and the total number of output files to be completed.

# PRompt locate1s

Write a python script that does the following. It should take one input arg, a relative directory. IT should process each .txt file in that directory. On the fourth line, there is one value, 0 or 1. If the value is 1, the file should print out the 3rd line to console. Do this for all .txt files in the directory.

# Prompt aggregate1s

Write a python script that takes two input args, relative directory X. It will scan X for all .txt files. For each txt file it will check the 4th line which will have either a 0 or 1. If it's a 1, the script will append the 3rd line of the file to output content. After processing all files in X, it should write the output content, one file's values per line, to output.txt.
