#!/usr/bin/env python3
"""
chunked_gpt.py

Usage:
    python chunked_gpt.py <relative_input_file> [--chunk_lines N]

Description:
    • Reads your OpenAI API key from 'apikey.txt'.
    • Reads an initial prompt from 'prompt.txt'.
    • Splits <relative_input_file> into chunks of N lines each (default = 200).
    • For each chunk, appends it to the base prompt and sends it to ChatGPT
      using the boilerplate:
          from openai import OpenAI
          client = OpenAI()
          response = client.responses.create(...)
    • Concatenates responses in the order sent and writes them to 'output.txt'.
    • Prints a running “X / Y chunks processed” indicator in the console.
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
    description="Chunk a file and stream it through GPT, concatenating replies."
)
parser.add_argument("input_file", help="Relative path to the source text file.")
parser.add_argument(
    "--chunk_lines",
    type=int,
    default=20,
    help="Number of lines per chunk (default: 200).",
)
args = parser.parse_args()

# --------------------------------------------------------------------------- #
# Load API key
# --------------------------------------------------------------------------- #
api_key_path = Path("apikey.txt")
if not api_key_path.is_file():
    sys.exit("Error: apikey.txt not found.")

api_key = api_key_path.read_text(encoding="utf-8").strip()
if not api_key:
    sys.exit("Error: apikey.txt is empty.")

# --------------------------------------------------------------------------- #
# Import OpenAI client after the key is available
# --------------------------------------------------------------------------- #
from openai import OpenAI  # pylint: disable=import-error

client = OpenAI(api_key=api_key)

# --------------------------------------------------------------------------- #
# Read prompt and source file
# --------------------------------------------------------------------------- #
prompt_file = Path("prompt.txt")
if not prompt_file.is_file():
    sys.exit("Error: prompt.txt not found.")

base_prompt = prompt_file.read_text(encoding="utf-8")

source_path = Path(args.input_file)
if not source_path.is_file():
    sys.exit(f"Error: {args.input_file!s} not found.")

lines: List[str] = source_path.read_text(encoding="utf-8").splitlines(keepends=True)
chunk_size = max(args.chunk_lines, 1)

# --------------------------------------------------------------------------- #
# Split into chunks
# --------------------------------------------------------------------------- #
chunks: List[str] = [
    "".join(lines[i : i + chunk_size])
    for i in range(0, len(lines), chunk_size)
]
total_chunks = len(chunks)

if total_chunks == 0:
    sys.exit("Error: Input file is empty.")

# --------------------------------------------------------------------------- #
# Send each chunk to ChatGPT and collect outputs
# --------------------------------------------------------------------------- #
responses: List[str] = []

for idx, chunk in enumerate(chunks, start=1):
    combined_prompt = f"{base_prompt}\n\n{chunk}"
    try:
        response = client.responses.create(
            model="gpt-4.1",
            input=combined_prompt,
        )
        responses.append(response.output_text)
    except Exception as exc:  # pylint: disable=broad-except
        sys.stderr.write(f"\n⚠️  Chunk {idx} failed: {exc}\n")
        responses.append(f"[Error processing chunk {idx}: {exc}]")

    # Progress indicator
    print(f"\rProcessed {idx}/{total_chunks} chunks...", end="", flush=True)

print("\n✅ All chunks processed.")

# --------------------------------------------------------------------------- #
# Write concatenated output
# --------------------------------------------------------------------------- #
output_path = Path("output.txt")
output_path.write_text("\n".join(responses), encoding="utf-8")
print(f"✍️  Results saved to {output_path.resolve()}")
