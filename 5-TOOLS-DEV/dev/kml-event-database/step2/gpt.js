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

async function main() {
  // 1) Parse directory from command line
  if (process.argv.length < 3) {
    console.error("Usage: node script.js <relative_directory>");
    process.exit(1);
  }

  const inputDir = process.argv[2];

  // 2) Create output directory if it doesn't exist
  const outputDir = path.join(process.cwd(), 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // 3) Read all files in the input directory
  let files;
  try {
    files = fs.readdirSync(inputDir);
  } catch (err) {
    console.error("Error reading directory:", err);
    process.exit(1);
  }

  // 4) Filter to only .txt files
  files = files.filter((file) => path.extname(file).toLowerCase() === '.txt');

  // Define our system prompt once
  const systemPrompt = "You are a helpful assistant";

  let index = 1;
  for (const file of files) {
    try {
      // 5) Read the file content to use as user prompt
      const filePath = path.join(inputDir, file);
      const userPrompt = fs.readFileSync(filePath, 'utf8');

      // 6) Call ChatGPT
      const response = await callChatGPT(systemPrompt, userPrompt);

      // 7) Write the response to the output directory, same filename
      const outputPath = path.join(outputDir, file);
      fs.writeFileSync(outputPath, response, 'utf8');

      // 8) Print progress
      console.log(`Processed file ${index}/${files.length}: ${file}`);
      index++;
    } catch (error) {
      console.error(`Error processing file '${file}': ${error.message}`);
    }
  }

  console.log('All files processed.');
}

// Invoke main
main().catch((error) => {
  console.error('Unexpected error:', error);
  process.exit(1);
});
