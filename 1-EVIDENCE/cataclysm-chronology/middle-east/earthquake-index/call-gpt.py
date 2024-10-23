import sys
import openai
import math
from collections import defaultdict

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

    numbers = []

    counter = 0
    for idx, line in enumerate(lines):
        line = line.strip()
        counter += 1
        if counter % 10 == 0:
            print(counter)
        if not line:
            continue  # Skip empty lines

        # Prepare the prompt by inserting the line into the user prompt template
        user_prompt = user_prompt_template.format(input=line)
        system_prompt = ""  # You can add a system prompt if needed

        # Send the prompt to GPT
        try:
            result_text = call_chatgpt(system_prompt, user_prompt)
            # Try to parse the result as a number
            number = float(result_text)
            numbers.append(number)
        except ValueError:
            print(f"Error: The result for line {idx+1} is not a valid number.")
            sys.exit(1)
        except Exception as e:
            print(f"Error processing line {idx+1}: {e}")
            sys.exit(1)

    # Sort the numbers from lowest to highest
    numbers.sort()

    # Function to determine the bucket for a given number
    def get_bucket(number):
        lower = 10 * math.floor(number / 10)
        upper = lower + 10
        return (lower, upper)

    # Bucket the numbers and count occurrences in each bucket
    bucket_counts = defaultdict(int)

    for number in numbers:
        bucket = get_bucket(number)
        bucket_counts[bucket] += 1

    # Write the results to 'output.txt'
    with open('output.txt', 'w') as f:
        for bucket in sorted(bucket_counts.keys()):
            lower, upper = bucket
            count = bucket_counts[bucket]
            f.write(f"{lower} {upper} {count}\n")

if __name__ == "__main__":
    main()
