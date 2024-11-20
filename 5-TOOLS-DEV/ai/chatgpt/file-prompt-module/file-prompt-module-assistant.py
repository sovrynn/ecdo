import openai
client = openai.OpenAI()

def run_prompt_with_file(prompt, assistant_prompt, filepath):
    # Upload the file
    file = client.files.create(
        file=open(filepath, "rb"),
        purpose='assistants'
    )

    print('Uploaded file')
    
    # Create an assistant
    assistant = client.beta.assistants.create(
        name="Custom Assistant",
        description=assistant_prompt,
        model="gpt-4o",
        tools=[{"type": "code_interpreter"}],
        tool_resources={
            "code_interpreter": {
                "file_ids": [file.id]
            }
        }
    )
    
    # Create a thread
    thread = client.beta.threads.create()
    
    # Add a message to the thread
    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=prompt
    )
    
    # Create a run
    run = client.beta.threads.runs.create_and_poll(
        thread_id=thread.id,
        assistant_id=assistant.id
    )
    
    # Get messages
    if run.status == 'completed': 
        messages = client.beta.threads.messages.list(
            thread_id=thread.id
        )
        # Return the first msg
        for msg in messages.data:
            if msg.role == 'assistant':
                return msg.content
    else:
        return f"Run status: {run.status}"

msg = run_prompt_with_file("Summarize the content of the attached file for me. Return it to me in a markdown code block.", "You are a helpful assistant", "../README.md")
print(msg)

with open("output.txt", "w") as file:
    file.write(msg)