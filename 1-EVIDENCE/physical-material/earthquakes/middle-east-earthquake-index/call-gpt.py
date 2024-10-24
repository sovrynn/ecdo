import sys
import openai
import math
from collections import defaultdict
import re

# Function to call OpenAI's ChatGPT API
def call_chatgpt(system_prompt, user_prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",  # Adjust the model name as needed
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        )
        # Return the response content from the API
        return response.choices[0].message.content.strip()
    except Exception as e:
        print('Error calling ChatGPT API:', e)
        raise e

def main():
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_file1> <input_file2>")
        sys.exit(1)

    input_file1 = sys.argv[1]
    input_file2 = sys.argv[2]

    # Read content from the first input file
    with open(input_file1, 'r') as f:
        lines = f.readlines()

    # Read user prompt template from the second input file
    with open(input_file2, 'r') as f:
        user_prompt_template = f.read()

    output_lines = []
    pattern = r'^\d+\s*(BC|AD)$'

    counter = 0
    for idx, line in enumerate(lines):
        line = line.strip()
        counter += 1
        if counter % 10 == 0:
            print(counter)
        if not line:
            continue  # Skip empty lines

        # Prepare the prompt by inserting the line into the user prompt template
        user_prompt = user_prompt_template + line
        system_prompt = ""  # You can add a system prompt if needed

        # Send the prompt to GPT
        try:
            result_text = call_chatgpt(system_prompt, user_prompt)
            # Try to parse the result as a number
            output_lines.append(f'{result_text}: {line}')
            # if re.match(pattern, result_text) or result_text == "-1":
            #     if result_text != -1:
            #         output_lines.append(f'{result_text}: {line}')
            # else:
            #     print(result_text)
            #     raise ValueError()
        except ValueError:
            print(f"Error: The result for line {idx+1} is not a valid number.")
            sys.exit(1)
        except Exception as e:
            print(f"Error processing line {idx+1}: {e}")
            sys.exit(1)

    # Write the results to 'output.txt'
    with open('output.txt', 'w') as f:
        for line in output_lines:
            f.write(line)
            f.write("\n")

if __name__ == "__main__":
    main()
