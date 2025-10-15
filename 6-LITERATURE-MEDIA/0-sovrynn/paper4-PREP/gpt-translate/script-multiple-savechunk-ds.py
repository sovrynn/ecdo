#!/usr/bin/env python3
"""
chunked_deepseek.py

Usage:
    python chunked_deepseek.py <relative_input_file> [--chunk_lines N]

Description:
    • Reads your DeepSeek API key from 'apikeyds.txt'.
    • Reads an initial prompt from 'prompt.txt'.
    • Reads 'input.txt' for mappings: each line must be:
          first_word second_word
    • Splits <relative_input_file> into chunks of N lines each (default = 20).
    • For each mapping:
        – Replaces every 'XXX' in the prompt with first_word
        – Creates a folder named second_word
        – Sends each chunk to DeepSeek if not already done, saving each chunk's response to second_word/x.txt
        – Concatenates the replies and writes them to 'second_word.tex'
    • Prints running progress and skips already existing chunk files.
"""

import argparse
import os
import sys
from pathlib import Path
from typing import List

# --------------------------------------------------------------------------- #
# Command-line arguments
# --------------------------------------------------------------------------- #
parser = argparse.ArgumentParser(
    description="Chunk a file and stream it through DeepSeek, storing per-chunk outputs in folders."
)
parser.add_argument("input_file", help="Relative path to the source text file.")
parser.add_argument(
    "--chunk_lines",
    type=int,
    default=5,
    help="Number of lines per chunk (default: 5).",
)
args = parser.parse_args()

# --------------------------------------------------------------------------- #
# Load DeepSeek API key
# --------------------------------------------------------------------------- #
api_key_path = Path("apikeyds.txt")
if not api_key_path.is_file():
    sys.exit("Error: apikeyds.txt not found.")

api_key = api_key_path.read_text(encoding="utf-8").strip()
if not api_key:
    sys.exit("Error: apikeyds.txt is empty.")

# --------------------------------------------------------------------------- #
# Import DeepSeek client
# --------------------------------------------------------------------------- #
from openai import OpenAI
client = OpenAI(
    api_key=api_key,
    base_url="https://api.deepseek.com/v1"  # DeepSeek API endpoint
)

# --------------------------------------------------------------------------- #
# Read base prompt template
# --------------------------------------------------------------------------- #
prompt_file = Path("prompt.txt")
if not prompt_file.is_file():
    sys.exit("Error: prompt.txt not found.")

base_prompt = prompt_file.read_text(encoding="utf-8")

# --------------------------------------------------------------------------- #
# Read mapping file (input.txt)
# --------------------------------------------------------------------------- #
mapping_file = Path("input.txt")
if not mapping_file.is_file():
    sys.exit("Error: input.txt (mapping file) not found.")

raw_maps = mapping_file.read_text(encoding="utf-8").splitlines()
mappings: List[List[str]] = [
    line.split(None, 1)
    for line in raw_maps
    if line.strip() and not line.strip().startswith("#")
]

if not mappings:
    sys.exit("Error: Mapping file is empty or has no valid lines.")

# --------------------------------------------------------------------------- #
# Read & chunk the source file
# --------------------------------------------------------------------------- #
source_path = Path(args.input_file)
if not source_path.is_file():
    sys.exit(f"Error: {args.input_file!r} not found.")

lines = source_path.read_text(encoding="utf-8").splitlines(keepends=True)
chunk_size = max(args.chunk_lines, 1)
chunks = [
    "".join(lines[i : i + chunk_size])
    for i in range(0, len(lines), chunk_size)
]
total_chunks = len(chunks)
if total_chunks == 0:
    sys.exit("Error: Source file is empty.")

# --------------------------------------------------------------------------- #
# Process each mapping
# --------------------------------------------------------------------------- #
for m_idx, pair in enumerate(mappings, start=1):
    if len(pair) != 2:
        sys.stderr.write(f"⚠️  Skipping malformed mapping line {m_idx}: {pair!r}\n")
        continue

    first_word, second_word = pair
    prompt = base_prompt.replace("XXX", first_word)

    print(f"Translating {first_word}, storing in folder '{second_word}'.")

    # Create output folder
    folder = Path(second_word)
    folder.mkdir(parents=True, exist_ok=True)

    responses: List[str] = []
    # Loop through chunks
    for idx, chunk in enumerate(chunks, start=1):
        chunk_file = folder / f"{idx}.txt"
        if chunk_file.is_file():
            # Skip existing
            print(f"– Skipping chunk {idx}/{total_chunks} (already exists)")
            text = chunk_file.read_text(encoding="utf-8")
            responses.append(text)
            continue

        # Prepare and send request to DeepSeek
        try:
            print("Sending request to DeepSeek API...")
            response = client.chat.completions.create(
                model="deepseek-chat",  # Use DeepSeek model
                messages=[
                    {"role": "system", "content": prompt},
                    {"role": "user", "content": chunk}
                ],
                stream=False
            )
            output = response.choices[0].message.content
            print("Received response.")
            # Write per-chunk file
            chunk_file.write_text(output, encoding="utf-8")
            responses.append(output)
            print(f"✓ Processed chunk {idx}/{total_chunks}")
        except Exception as exc:
            sys.stderr.write(f"\n⚠️  Chunk {idx}/{total_chunks} failed for '{second_word}': {exc}\n")
            error_msg = f"[Error processing chunk {idx}: {exc}]"
            responses.append(error_msg)

    print(f"✅ All chunks handled for '{second_word}'. Concatenating...\n")

    # Write final concatenated output
    out_path = Path(f"{second_word}.tex")
    out_path.write_text("\n".join(responses), encoding="utf-8")
    print(f"✍️  Results saved to {out_path.resolve()}\n")