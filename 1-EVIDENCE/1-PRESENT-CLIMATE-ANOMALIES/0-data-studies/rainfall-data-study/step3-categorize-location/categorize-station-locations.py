import os
import sys
import openai
import pandas as pd

# Check if directory and prompt file arguments are provided
if len(sys.argv) != 3:
    print("Usage: python script.py <relative_directory> <prompt_filename>")
    sys.exit(1)

# Get the directory and prompt file from the command line arguments
directory = sys.argv[1]
prompt_filename = sys.argv[2]

# Load the initial prompt content from the provided file
try:
    with open(prompt_filename, 'r') as prompt_file:
        base_prompt = prompt_file.read().strip()
except FileNotFoundError:
    print(f"Prompt file {prompt_filename} not found.")
    sys.exit(1)

# Function to read CSV content and convert it to string format for the prompt
def get_csv_content_as_string(filepath):
    df = pd.read_csv(filepath)
    return df.to_string(index=False)

# Process each CSV file in the directory
for filename in os.listdir(directory):
    if filename.endswith('.csv'):
        csv_filepath = os.path.join(directory, filename)
        
        # Generate the full prompt by appending CSV content to the base prompt
        csv_content = get_csv_content_as_string(csv_filepath)
        full_prompt = f"{base_prompt}\n\n{csv_content}"
        
        # Send the prompt to OpenAI ChatCompletion
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",  # Or "gpt-4" if available and needed
                messages=[
                    {"role": "user", "content": full_prompt}
                ]
            )
            # Extract the generated response text
            answer = response['choices'][0]['message']['content'].strip()
            
            # Define the output filename with "-category.txt" suffix
            output_filename = os.path.join(directory, f"{os.path.splitext(filename)[0]}-category.txt")
            
            # Save the response to the output file
            with open(output_filename, 'w') as output_file:
                output_file.write(answer)
            print(f"Response for {filename} saved to {output_filename}.")
        
        except Exception as e:
            print(f"An error occurred while processing {filename}: {e}")
