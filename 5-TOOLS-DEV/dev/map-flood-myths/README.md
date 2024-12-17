# Flood Myths Map

Pretty simple - what I'll do is:
1. programmatically parse the flood myths into a list of locations
2. use some kind of API to convert the locations to lat/lon
3. plot the points programmatically

This is the right approach because it allows me to change map/marker styles easily.

# Flood Myths Dataset

Talkorigins, of course: https://www.talkorigins.org/faqs/flood-myths.html

# Step 1

So on that website, you have a list at the start. That's all you need. They're organized by continent, essentially, and then they're in a list, with each list entry being comma separated. Easy to parse. Run it through an LLM to convert it to a modern day location. And off you go.

# Step 2

Google API best for this I would think. Geocoding.

# Step 3

Simple python script.

# Tally

europe.txt: 11
central-america.txt: 24
middle-east.txt: 9
australia.txt: 17
pacific-islands.txt: 17
north-america.txt: 83
africa.txt: 17
south-america.txt: 34
Total non-empty lines: 267

# Verification

The lat/lon values for each continent were verified to be in the correct range for each.

A handful of locations were selectively verified by hand and also by using separate LLM queries.