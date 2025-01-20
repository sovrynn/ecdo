#!/usr/bin/env node

import fs from "fs";
import path from "path";

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

  // Create an output directory if it doesn't exist
  const outputDirectory = "stories-rawhtml";
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

  // Randomize the order in which files will be processed
  txtFiles.sort(() => Math.random() - 0.5);

  // Initialize the OpenAI client
  console.log(txtFiles.length)

  // Process each .txt file in random order
  for (let i = 0; i < txtFiles.length; i++) {
    const txtFile = txtFiles[i];
    
    // Check if output file already exists
    const outputPath = path.join(outputDirectory, txtFile);
    if (fs.existsSync(outputPath)) {
      // console.log(`Output file already exists for "${txtFile}". Skipping...`);
      continue;
    }

    console.log('hmm?')
    console.log(`Processing file ${i + 1}/${txtFiles.length}: ${txtFile}`);

  }
}

main();
