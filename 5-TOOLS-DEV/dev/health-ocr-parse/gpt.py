import sys
import re
from openai import OpenAI

if len(sys.argv) != 3:
    print("Usage: script.py data_file prompt_file")
    sys.exit(1)

data_filename = sys.argv[1]
prompt_filename = sys.argv[2]

with open(data_filename, 'r', encoding='utf-8') as f:
    data = f.read().strip()

with open(prompt_filename, 'r', encoding='utf-8') as f:
    prompt_content = f.read().strip()

# Split data into paragraphs separated by blank lines
paragraphs = re.split(r'\n\s*\n', data)

client = OpenAI()

outputs = []

for idx, paragraph in enumerate(paragraphs, start=1):
    print(f"Processing paragraph {idx} of {len(paragraphs)}")
    full_prompt = prompt_content + "\n" + paragraph

    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": full_prompt}
    ]

    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages
    )

    output = completion.choices[0].message.content
    output_line = ' '.join(output.strip().split())
    outputs.append(output_line)

with open('output.txt', 'w', encoding='utf-8') as f:
    for output_line in outputs:
        f.write(output_line + '\n')
