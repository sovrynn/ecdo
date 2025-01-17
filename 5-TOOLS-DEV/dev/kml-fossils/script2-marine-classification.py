import os
import sys
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
import random

def main():
    if len(sys.argv) != 3:
        print("Usage: python process_files.py <input_directory_X> <output_directory_Y>")
        sys.exit(1)

    input_dir = sys.argv[1]
    output_dir = sys.argv[2]

    # Validate directories
    if not os.path.isdir(input_dir):
        print(f"Error: Input directory '{input_dir}' does not exist.")
        sys.exit(1)

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Read system prompt and user prompt
    with open('systemprompt.txt', 'r', encoding='utf-8') as f:
        system_prompt = f.read().strip()

    with open('prompt.txt', 'r', encoding='utf-8') as f:
        user_prompt = f.read().strip()

    # Load model and tokenizer
    model_name = "huihui-ai/Qwen2.5-32B-Instruct-abliterated"
    # model_name = "huihui-ai/Qwen2.5-14B-Instruct-abliterated-v2"

    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype='auto',
        device_map="auto"
    )
    tokenizer = AutoTokenizer.from_pretrained(model_name)

    # Get list of files in input_dir
    files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
    total_files = len(files)

    print(f"Processing {total_files} files...\n")

    random.shuffle(files)
    for idx, filename in enumerate(files, start=1):
        input_file_path = os.path.join(input_dir, filename)
        output_file_path = os.path.join(output_dir, filename)

        if os.path.exists(output_file_path):
            print(f'Found a copy of {output_file_path}')
            continue

        print(f'Processing {input_file_path}')

        # Read content of the file
        with open(input_file_path, 'r', encoding='utf-8') as f:
            file_content = f.read().strip()

        # Append the content to the user prompt
        prompt = f"{user_prompt}\n{file_content}"

        # Prepare messages
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt}
        ]

        # Prepare text using the tokenizer's chat template
        text = tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=True
        )

        # Tokenize the text and move tensors to the model's device
        model_inputs = tokenizer([text], return_tensors="pt").to(model.device)

        # Generate response
        generated_ids = model.generate(
            **model_inputs,
            max_new_tokens=100
        )

        # Extract the generated response (excluding the input prompt)
        generated_ids = [
            output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
        ]

        response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]

        print('-----------------------------------------------------')
        print(f'Prompt: {prompt}')
        print(f'Response: {response}')
        print('-----------------------------------------------------')

        # Write the output to the same filename in directory Y
        with open(output_file_path, 'w', encoding='utf-8') as f:
            f.write(response.strip())

        # Show progress
        print(f"Processed {output_file_path}: {idx}/{total_files} files")

    print("\nProcessing completed.")

if __name__ == "__main__":
    main()
