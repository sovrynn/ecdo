Totally lost here.

I don't even remember what form the original data was in.

I believe I downloaded the taxons by continent, and had a huge number, and then classified them one by one...

## prompt OG

This is a row from a csv database containing various attributes about a fossil taxon. Based on the classification of the fossil, tell me whether the fossil is a marine fossil or not. Return only "yes" or "no" and nothing else. Here is the csv row:

## prompt new

This is a row from a csv database containing various attributes about a fossil taxon. Based on the classification of the fossil, tell me whether the fossil is a marine (saline) fossil or not. Specifically, if the fossil ONLY lived in freshwater requirements, return "no", and return "yes" if it lived in salty oceanic environments. Return only "yes" or "no" (word only) and nothing else. Here is the csv row:

# Query strings

Then I grouped them into query string chunks that the API would support. This is done simply by concatenating the filtered filenames, as these are the taxon ids

# downnloading from api

Then I downloaded the fossil collections from the API

I did this with collection geosummary before, but decided just collections gives much better granularity

# graphing

Then I just graphed them.