# prompt

write a python script that does the following.

IT reads the api key from apikey.txt

It takes one input arg a relative filename

It reads a prompt from prompt.txt

It splits the content of the relative filename into chunks of X lines each (parameterized in the script) and appends it to the content of prompt.txt and then sends it to chatgpt

It concatenates the responses together in the same order they were sent

And writes the output to output.txt

Include a console progress indicator based on the total requests sent so far

Use this chatgpt boilerplate

from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    input="Write a one-sentence bedtime story about a unicorn."
)

print(response.output_text)
