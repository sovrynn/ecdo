import os
import sys
from pathlib import Path
import importlib.util

def main():
    if len(sys.argv) != 3:
        print("Usage: python script.py <directory_D> <user_prompt_file_U>")
        sys.exit(1)

    directory_D = sys.argv[1]
    user_prompt_file_U = sys.argv[2]

    # Read the user prompt U
    with open(user_prompt_file_U, 'r', encoding='utf-8') as f:
        user_prompt_U = f.read()

    # Create the output directory if it doesn't exist
    output_dir = os.path.join(directory_D, 'output')
    os.makedirs(output_dir, exist_ok=True)

    # Get all .txt files in directory D
    txt_files = [f for f in os.listdir(directory_D) if f.endswith('.txt')]
    total_files = len(txt_files)

    if total_files == 0:
        print("No .txt files found in the specified directory.")
        sys.exit(1)

    # Load the module from file using importlib
    module_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../file-prompt-module/file-prompt-module.py'))

    spec = importlib.util.spec_from_file_location("file_prompt_module", module_path)
    file_prompt_module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(file_prompt_module)

    # Iterate over all .txt files with a progress indicator
    for index, filename in enumerate(txt_files, start=1):
        file_path = os.path.join(directory_D, filename)

        # Read the content of the .txt file
        with open(file_path, 'r', encoding='utf-8') as f:
            file_content = f.read()

        # Create the new user prompt by appending the file content to U
        new_user_prompt = user_prompt_U + "\n\n" + file_content

        # Default system prompt
        system_prompt = "You are a helpful assistant answering queries for educational purposes."

        # Console progress indicator
        print(f"Processing file {index}/{total_files}: {filename}")

        # Get the summarization string from GPT
        output = file_prompt_module.prompt_with_file(system_prompt, new_user_prompt, file_path)

        # Process the output to strip markdown and trim content
        start_marker = "```markdown"
        end_marker = "```"

        start_index = output.find(start_marker)
        end_index = output.find(end_marker, start_index + len(start_marker))

        if start_index != -1 and end_index != -1:
            # Extract content between the markdown markers
            processed_content = output[start_index + len(start_marker):end_index].strip()
        else:
            print(f"Markdown markers not found properly in output for {filename}. Skipping file.")
            continue

        # Write the processed content to output/F.txt
        output_file_path = os.path.join(output_dir, filename)
        with open(output_file_path, 'w', encoding='utf-8') as f:
            f.write(processed_content)

    print("Processing complete.")

if __name__ == "__main__":
    main()
