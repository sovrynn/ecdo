# prompt

write a python script that does the following. It should take two input arg filenames. From that filename, it should read the content from both. The first will be fed line by line to GPT using the user prompt in the second. Then, the script should take the result, which should be  a number. if its not, fail. Then, it should take the numbers and sort them from lowest to highest. Then it should bucket them in intervals of 10 (each bucket corresponds to the number of numbers in that bucket's interval). Then it should print the result to an output txt file, with the bucket range lower interval, the bucket range higher interval, and the number of numbers in that interval, separated by space, one per line, lowest interval to highest interval sorted.

Use the following template:
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