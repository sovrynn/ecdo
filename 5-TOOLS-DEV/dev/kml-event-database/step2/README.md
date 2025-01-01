This is where I query for the nearest present day location. Use GPT.

You'll have to prompt well for this one.

# Step 1

Generate the prompts for each

## Script prompt

Write a python script that does the following. It should take two input args a relative filename J and relative directory K.

The relative filename is a CSV file. That data should be read into code. The first row is column labels and the rest are data.

For each row in the csv file, you should generate a row id (the first data row is id 1, second data row id 2, etc). Then, prepend 0(s) to it so it becomes a 3 digit id. For csv file with id A, look in directory K for a file named A.txt.

Then, take the textual content of prompt.txt. In the textual content, replace the capital letter X (should only be a single instance) with the first column value in the row. Replace capital Y with the 3rd column value in the row. Replace capital Z with the content of A.txt.

Write the formatted textual content to file A.txt in relative directory output.

## Generate Prompt template

Based on the following information related to a certain kind of event or occurrence, I want you to provide me the geographically closest present day location. It could be a city, a beach, an island, etc. But I want you to be as specific as possible based on the information I give you. Avoid returning countries. Return only the location. Here's the information:

Basic description of event: X

Basic location of event: Y

Specific data/information/context related to event: Z

# Step 2

Send the prompts over to GPTs

## Script generatino prompt

Write a js script that takes one input arg a relative directory. In that relative directory it should scan for all txt files. For each file it should call a function asking gpt for a response using the content of the text file as the userprompt. For the systemprompt just use "You are a helpful assistant". Write the response for each text file to a text file with the same name in directory output. Print out a progress indicator as you go along. Use this for boilerplate:

import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI();

// Function to call OpenAI's ChatGPT API
async function callChatGPT(systemPrompt, userPrompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",  // Adjust the model name as needed
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    // Return the response content from the API
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error calling ChatGPT API:', error.message);
    throw error;
  }
}

# Update notes

I changed the prompt to ask GPT to also return a containing country and continent. So Google doesn't get stumped on a random obscure city name.