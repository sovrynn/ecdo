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

Google API best for this I would think.

# Step 3

Simple python script.