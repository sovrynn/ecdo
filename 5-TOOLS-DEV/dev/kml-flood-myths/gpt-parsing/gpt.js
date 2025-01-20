#!/usr/bin/env node

import fs from "fs";
import path from "path";
import OpenAI from "openai";

// Usage: node script.js <relative_directory>
// Example: node script.js input
async function main() {
  // Verify user provided the target directory
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error("Usage: node script.js <relative_directory>");
    process.exit(1);
  }

  const inputDirectory = args[0];

  // Read the base prompt from prompt.txt
  let basePrompt;
  try {
    basePrompt = fs.readFileSync("prompt.txt", "utf-8");
  } catch (error) {
    console.error(`Error reading prompt.txt: ${error}`);
    process.exit(1);
  }

  // Create an output directory if it doesn't exist
  const outputDirectory = "output";
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  // Collect all .txt files from the specified directory
  let txtFiles;
  try {
    txtFiles = fs
      .readdirSync(inputDirectory)
      .filter((file) => file.endsWith(".txt"));
  } catch (error) {
    console.error(`Error reading directory ${inputDirectory}: ${error}`);
    process.exit(1);
  }

  // Initialize the OpenAI client
  const openai = new OpenAI();

  // Process each .txt file
  for (let i = 0; i < txtFiles.length; i++) {
    const txtFile = txtFiles[i];
    console.log(`Processing file ${i + 1}/${txtFiles.length}: ${txtFile}`);

    const filePath = path.join(inputDirectory, txtFile);
    let fileContent;
    try {
      fileContent = fs.readFileSync(filePath, "utf-8");
    } catch (error) {
      console.error(`Error reading file ${txtFile}: ${error}`);
      continue;
    }

    // Create the user prompt by appending the file content
    const userPrompt = `${basePrompt}\n${fileContent}`;

    // Send request to GPT
    let completion;
    try {
      completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userPrompt },
        ],
      });
    } catch (error) {
      console.error(`Error calling OpenAI API for file ${txtFile}: ${error}`);
      continue;
    }

    // Extract GPT response
    const gptOutput = completion.choices[0].message.content || "";

    // Write the GPT output to the corresponding file in the 'output' directory
    const outputPath = path.join(outputDirectory, txtFile);
    try {
      fs.writeFileSync(outputPath, gptOutput, "utf-8");
    } catch (error) {
      console.error(`Error writing to output file ${txtFile}: ${error}`);
    }
  }
}

main();
