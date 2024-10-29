import os
import sys
import openai

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

# Function to read .txt file content as a string
def get_text_content_as_string(filepath):
    with open(filepath, 'r') as file:
        return file.read().strip()

# Process each .txt file in the directory
for filename in os.listdir(directory):
    if filename.endswith('.txt'):
        txt_filepath = os.path.join(directory, filename)
        
        # Generate the full prompt by appending text file content to the base prompt
        txt_content = get_text_content_as_string(txt_filepath)
        full_prompt = f"{base_prompt}\n\n{txt_content}"
        
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
