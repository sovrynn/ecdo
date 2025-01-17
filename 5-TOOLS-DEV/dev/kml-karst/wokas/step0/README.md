# Step 0 filtering, data shape

Certain files have duplicates (2 copies) for differing temporal resolution. One can simply be discarded.

All units are in m^3/s, so I think I just take the average, no matter what the resolution is.

When there's no measurement, the default value is NA. Treat it as 0.

What I'll do is I'll average all the measurements. THen I'll only get the unique ones. Then I'll see the distribution.

# Script 0

first, I need to verify the format

## Prompt

write a python script that does the following. It should take one input arg, a relative directory, inside, it should scan every .csv file and verify several things.

First, it should verify that line 9 starts with "Timestamp". If it doesn't print the file out to console.

Next, it should verify that lines 6 and 7 are:
#Time format   :	%d.%m.%Y
#Discharge unit:	m^3/s

respectively.

Then, it should verify that line 10 starts with a date in the format %d.%m.%Y

Should any of these checks fail, print out to console.

# Script 1

write a python script that takes two input args, relative directory X and Y. In relative directory X it should read all .csv files using chardet (the method you just proposed). THen it should convert them to a standard utf8 encoding and print out each file with the same filename to directory Y.

# Script 2

Then average all the measurements boi.

## Prompt

Write a python script that does the following. It should take two input args, both relative directories, X and Y.

It should scan X for all .csv files. In them, it should start parsing on line 10 till the end of the file. It should take the last word on each line, which is a float. If it is NA, then convert the value to 0.

It should average them, creating a single value.

It should also parse line 4. Make sure line 4 starts with the string "#Name          :". Then, parse all the text that comes after (strip it).

It should also parse line 5. Make sure line 5 starts with the string "#LAT	LON      :". Then, verify that this is followed by two words on the line. Parse these words as floats.

Finally, for each input csv file, create an output file. The first line should have the text extracted from line 4. The second line should have the first float parsed from line 5. The third line should have the second float parsed from line 5. The fourth line should have the averaged calculated value.

Print this output to a file with the same filename in directory Y.

Finally print out a total tally of all processed output files.

# Script 3

Write a python script that does the following. It should take two input args, relative directories X and Y.

In X, it should scan for all .csv files with "(A)" in the name. It should verify that there is another filename with the same filename except replacing "(A)" with "(B)".

The script should replace the fourth line of the file with "(A)", with the average of the previously existing fourth line of "(A)" file with the fourth line of "(B)" file. Both lines should just have one float on them.

Then, the script should copy over the new "(A)" file to directory Y, and not the "(B)" file.

Files that don't have an "(A)" or "(B)" should just be copied from X to Y without modification.

Finally print out a tally of the number of files created in Y, along with the number of (A) (B) file pairs processed.

# Script 4

Write a python script that takes one input arg a relative directory.

In that directory it should scan for all csv files and extract the value from the fourth line of each which should be a single float.

Print out the filename of all files that have a negative or 0 value on the fourth line.

Then the script should calculate severa values and print them out to console.

Total number of values.

Min and max values.

Then divide the max value by 10 into 10 equal-length ranges, bucket the values into the ranges, and print out the number of values per range.

Print out the average and median values.

Then, redo the same thing for the first bucket - divide it into 10 equal length ranges, bucket, calculate average and median, and print out to console.

## output

```
python script4.py WoKaS_Hydrograph_Datasets-processed-unique/
=== Files with negative or zero values (<= 0) ===
DE-0017@Schlögelsmühle-Hallerbrunnen.csv
AT-0013@Schreiende Brunnen.csv
DE-0023@Brunnbergquellen 9-19.csv

=== Overall Statistics ===
Total number of values: 407
Minimum value: -4.552704074235174e+96
Maximum value: 127.4841156337856
Average value: -1.1186005096400918e+94
Median value: 0.5378534694607033

=== Bucket Counts (0 to Max) ===
Bucket 1 [0.00, 12.75): 388
Bucket 2 [12.75, 25.50): 12
Bucket 3 [25.50, 38.25): 1
Bucket 4 [38.25, 50.99): 1
Bucket 5 [50.99, 63.74): 0
Bucket 6 [63.74, 76.49): 1
Bucket 7 [76.49, 89.24): 0
Bucket 8 [89.24, 101.99): 0
Bucket 9 [101.99, 114.74): 0
Bucket 10 [114.74, 127.48]: 1

=== Analysis of First Bucket ===
Total number of values in the first bucket: 388
Minimum value: 0.00015318589743589742
Maximum value: 12.237605081099936
Average value: 1.501906071718749
Median value: 0.5016178986995209

=== Bucket Counts (First Bucket Subdivided) ===
Sub-bucket 1 [0.00, 1.27): 264
Sub-bucket 2 [1.27, 2.55): 52
Sub-bucket 3 [2.55, 3.82): 24
Sub-bucket 4 [3.82, 5.10): 14
Sub-bucket 5 [5.10, 6.37): 8
Sub-bucket 6 [6.37, 7.65): 12
Sub-bucket 7 [7.65, 8.92): 3
Sub-bucket 8 [8.92, 10.20): 6
Sub-bucket 9 [10.20, 11.47): 3
Sub-bucket 10 [11.47, 12.75]: 2
```

# script 5

negative value verification

# script 6

negative value zeroing

## prompt

write a python script that takes two input args relative dircetory X and Y. it should parse all .csv files in X. starting from the 10th line it should parse the last word on the line as a float. if it ever encounters a negative value it should replace it with 0. Print out all files that have negative values. Write the output file, to Y with the same filename. Make sure to also write output files even if no changes were made.

## output

```
=== Files with Negative Values ===
US-0014@SE FORK HOMOSASSA SPRING AT HOMOSASSA SPRINGS FL.csv
US-0111@(C- 2- 4)15cac-S1 MILL SPRING NR ERDA, UT.csv
DE-0034@Kirchenflussquelle.csv
US-0017@MADISON BLUE SPRING NR BLUE SPRINGS, FL.csv
GR-0013@Geropotamos.csv
IE-0013@Clarinbridge spring.csv
TR-0006@Döskaya.csv
US-0050@Hot Springs at Hot Springs, AR.csv
GR-0008@Anapodiaris.csv
DE-0023@Brunnbergquellen 9-19.csv
US-0019@BLUE SPRINGS NEAR DELL,FL.csv
US-0030@MANATEE SPRING NR CHIEFLAND FLA.csv
US-0076@Aucilla River near mouth near Nutall Rise.csv
US-0029@FANNING SPRINGS NR WILCOX FLA.csv
GR-0009@Aposelemis.csv
AT-0087@Estavelle.csv
GR-0019@Platis.csv
US-0016@HOLTON SPRINGS NEAR FT. UNION,FL.csv
DE-0035@Aschenbrunnen Pottenstein.csv
GR-0021@Stylos.csv
```

# Final results

```
python script4.py WoKaS_Hydrograph_Datasets-utf8-negative-removed-processed-unique/
No files had negative or zero values in the fourth line.

=== Overall Statistics ===
Total number of values: 407
Minimum value: 0.00015318589743589742
Maximum value: 127.4841156337856
Average value: 2.631396671094468
Median value: 0.5378534694607033

=== Bucket Counts (0 to Max) ===
Bucket 1 [0.00, 12.75): 391
Bucket 2 [12.75, 25.50): 12
Bucket 3 [25.50, 38.25): 1
Bucket 4 [38.25, 50.99): 1
Bucket 5 [50.99, 63.74): 0
Bucket 6 [63.74, 76.49): 1
Bucket 7 [76.49, 89.24): 0
Bucket 8 [89.24, 101.99): 0
Bucket 9 [101.99, 114.74): 0
Bucket 10 [114.74, 127.48]: 1

=== Analysis of First Bucket ===
Total number of values in the first bucket: 391
Minimum value: 0.00015318589743589742
Maximum value: 12.237605081099936
Average value: 1.49219716573674
Median value: 0.494721776134026

=== Bucket Counts (First Bucket Subdivided) ===
Sub-bucket 1 [0.00, 1.27): 267
Sub-bucket 2 [1.27, 2.55): 52
Sub-bucket 3 [2.55, 3.82): 24
Sub-bucket 4 [3.82, 5.10): 14
Sub-bucket 5 [5.10, 6.37): 8
Sub-bucket 6 [6.37, 7.65): 12
Sub-bucket 7 [7.65, 8.92): 3
Sub-bucket 8 [8.92, 10.20): 6
Sub-bucket 9 [10.20, 11.47): 3
Sub-bucket 10 [11.47, 12.75]: 2
```