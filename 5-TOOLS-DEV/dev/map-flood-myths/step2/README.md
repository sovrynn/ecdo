# Prompt

Write a python script that takes two input args, two relative directories X and Y. It should scan in X for all .txt files.

For each .txt file, the script should read in the input. It will be an unordered markdown list. 

The script should process that list from top to bottom. For each entry in that list, you should remove the list entry formatting ("- " for unordered markdown list). Then, you should assume you have a function geocode_address(address) which takes one input arg, a string. That function will return a tuple of two floats A and B. The script should call that function using the value of the list entry.

Then, the script should create an output file in Y with the same filename as the one it is reading from in X. It should add an output line of "A,B" to the output file for every list entry in the input file.

Print out a progress update when each file is done processing.
