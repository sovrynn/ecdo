from openai import OpenAI

# Initialize the OpenAI client
client = OpenAI()

# if you ask for a markdown code block you need to remove the triple backticks (first and last line)
def prompt_with_file(system_prompt, user_prompt, filename):
    """
    Prompts GPT-4o with a system prompt, a user prompt, and the contents of a file.
    
    Parameters:
        system_prompt (str): The system prompt to define the assistant's behavior.
        user_prompt (str): The user prompt for the assistant.
        filename (str): Path to the local file whose contents will be appended to the user prompt.
    
    Returns:
        str: The assistant's response.
    """
    # Read the file contents
    try:
        with open(filename, "r") as file:
            file_contents = file.read()
    except FileNotFoundError:
        return "Error: File not found."
    except Exception as e:
        return f"Error reading file: {str(e)}"
    
    # Append file contents to the user prompt
    full_user_prompt = f"{user_prompt}\n\nFile contents:\n{file_contents}"
    
    # Create the chat completion
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": full_user_prompt}
        ]
    )
    
    # Return the assistant's response
    return completion.choices[0].message.content

msg = prompt_with_file("You are a helpful assistant.", "Summarize the following content in a concise but detailed way. Return it in a markdown code block: ", "../api/README.md")
print(msg)

with open("output.txt", "w") as file:
    file.write(msg)