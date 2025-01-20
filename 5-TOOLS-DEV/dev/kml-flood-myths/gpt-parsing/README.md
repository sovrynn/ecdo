python3 kml-plot-names.py ../links ../labeled-data output7-manual ../stories-rawhtml

It is time.

- specific flood levels
- duration of flooding
- rain
- droughts
- orogeny
- multiple floods

# Prompt for classification

Kindly read an excerpt of a flood myth, and based on the content of the myth, return the following values, one per line, with no labels (only the values):

- specific levels or locations that the flood went up to (Ex: Tips of a few mountains, top of a certain mountain, covered all the land)
- any anomalous events that happened leading up to the flood (drought, rain, wind) and how long they lasted
- whether or not mountains rose during the flood (orogeny)
- how many floods happened
- how long the floods lasted

If there's no good answer, just leave the line empty. The output should have EXACTLY 5 lines.

Here is the flood myth excerpt:

# Prompt for the script

Given the following gpt boilerplate, write me a python script that takes one input arg, a relative directory. For every .txt file in that directory, the script should append the content in the txt file to the content in file "prompt.txt", ask gpt for a response, and save the response to a file with the same filename in local dir output.

Print a console progress indicator.

Here's the boilerplate:

import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

console.log(completion.choices[0].message);

# Prompt for plotting

link lat/lon gpt-output storyhtml

## Prompt kml

Write a python script that does the following.

It should take four input directories X Y and Z and E.

In X, there are .txt files. Every non-empty line in each .txt file is a data point.

For each line in each .txt file in X, there is a corresponding line in a txt file of the same name in Y. The first line of a txt file in X will correspond to the first line in the file in Y, second to second, etc.

Then, each line in each .txt file in X also has a corresponding file in Z and E. This is found by extracting the part of the line in X after the last hashtag, and looking for a .txt file with that filename (adding a .txt suffix) in Z ind E.

For each line in X, with the corresponding data in Y and Z and E, the script should do the following.

read the content of the corresponding file in Z.

If the content in Z is just a single 0, then skip the line in X.

Otherwise, the line will be added as a KML marker in a KML output file.

Parameterize the KML marker icon, marker size, marker color, filename, and KML document name at the top of the script so they're easily changeable.

The KML marker should not have a name, only a description. The description will be the content of the file in Z, and then the content of the file in E.

The lat/lon of the marker will be from the line in Y. The lat/lon are comma separated.

Write the output kml to output.kml.

## Prompt kml with names

Write a python script that does the following.

It should take four input directories X Y and Z and E.

In X, there are .txt files. Every non-empty line in each .txt file is a data point.

For each line in each .txt file in X, there is a corresponding two-line pair in a txt file of the same name in Y. The first line of a txt file in X will correspond to the first and second line in the file in Y, second to third and fourth, etc.

Then, each line in each .txt file in X also has a corresponding file in Z and E. This is found by extracting the part of the line in X after the last hashtag, and looking for a .txt file with that filename (adding a .txt suffix) in Z ind E.

For each line in X, with the corresponding data in Y and Z and E, the script should do the following.

read the content of the corresponding file in Z.

If the content in Z is just a single 0, then skip the line in X.

Otherwise, the line will be added as a KML marker in a KML output file.

Parameterize the KML marker icon, marker size, marker color, filename, and KML document name at the top of the script so they're easily changeable.

The KML marker should not have a name, only a description. The description will be the content of the first line in the two-line pair in Y, the content of the file in Z, and then the content of the file in E.

The lat/lon of the marker will be from the second line of the two-line pair in Y. The lat/lon are comma separated.

Write the output kml to output.kml.

# Prompt text list gen

Write a python script that does the following:

It takes three input directories X and Y and Z.

For each line in each .txt file in X, there is a corresponding two-line pair in a txt file of the same name in Y. The first line of a txt file in X will correspond to the first and second line in the file in Y, second to third and fourth, etc.

For that same line in X, if you extract the text following teh last hashtag (#) symbol, Then look for a file in Z that has that filename with a .txt extension. It should exist.

The script should generate a string, for each file in X, as the following:

"
X filename:
- Y two-pair line first line for first line in X: Z file content for first line in X
- same for second line in X
- so on
"

And print each out to console.