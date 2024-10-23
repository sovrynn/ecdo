# Results

- Count from 0 to 99 YBP: 26
- Count from 100 to 199 YBP: 1369
- Count from 200 to 299 YBP: 475
- Count from 300 to 399 YBP: 298
- Count from 400 to 499 YBP: 192
- Count from 500 to 599 YBP: 129
- Count from 600 to 699 YBP: 116
- Count from 700 to 799 YBP: 104
- Count from 800 to 899 YBP: 112
- Count from 900 to 999 YBP: 90
- Count from 1000 to 1099 YBP: 47
- Count from 1100 to 1199 YBP: 37
- Count from 1200 to 1299 YBP: 100
- Count from 1300 to 1399 YBP: 115
- Count from 1400 to 1499 YBP: 277
- Count from 1500 to 1599 YBP: 181
- Count from 1600 to 1699 YBP: 206
- Count from 1700 to 1799 YBP: 126
- Count from 1800 to 1899 YBP: 109
- Count from 1900 to 1999 YBP: 54
- Count from 2000 to 2099 YBP: 22
- Count from 2100 to 2199 YBP: 13
- Count from 2200 to 2299 YBP: 15
- Count from 2300 to 2399 YBP: 16
- Count from 2400 to 2499 YBP: 23
- Count from 2500 to 2599 YBP: 5
- Count from 2600 to 2699 YBP: 2
- Count from 2700 to 2799 YBP: 3
- Count from 3000 to 3099 YBP: 1
- Count from 3100 to 3199 YBP: 1
- Count from 3200 to 3299 YBP: 1
- Count from 3400 to 3499 YBP: 2
- Count from 3800 to 3899 YBP: 1
- Count from 3900 to 3999 YBP: 5
- Count from 4000 to 4099 YBP: 1

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