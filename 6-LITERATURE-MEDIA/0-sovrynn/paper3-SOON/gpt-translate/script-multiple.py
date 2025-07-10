#!/usr/bin/env python3
"""
chunked_gpt.py

Usage:
    python chunked_gpt.py <relative_input_file> [--chunk_lines N]

Description:
    • Reads your OpenAI API key from 'apikey.txt'.
    • Reads an initial prompt from 'prompt.txt'.
    • Reads 'input.txt' for mappings: each line must be:
          first_word second_word
    • Splits <relative_input_file> into chunks of N lines each (default = 20).
    • For each mapping:
        – Replaces every 'XXX' in the prompt with first_word
        – Sends each chunk to ChatGPT exactly as before
        – Concatenates the replies and writes them to 'second_word.txt'
    • Prints running progress and errors exactly as before.
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
    description="Chunk a file and stream it through GPT, concatenating replies per-mapping."
)
parser.add_argument("input_file", help="Relative path to the source text file.")
parser.add_argument(
    "--chunk_lines",
    type=int,
    default=20,
    help="Number of lines per chunk (default: 20).",
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
# Import OpenAI client
# --------------------------------------------------------------------------- #
from openai import OpenAI  # pylint: disable=import-error
client = OpenAI(api_key=api_key)

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

for m_idx, pair in enumerate(mappings, start=1):
    if len(pair) != 2:
        sys.stderr.write(f"⚠️  Skipping malformed mapping line {m_idx}: {pair!r}\n")
        continue

    first_word, second_word = pair
    prompt = base_prompt.replace("XXX", first_word)

    print(f"Translating {first_word}, writing to {second_word}.")

    # ----------------------------------------------------------------------- #
    # Read & chunk the source file exactly as before
    # ----------------------------------------------------------------------- #
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

    # ----------------------------------------------------------------------- #
    # Run each chunk through GPT with our substituted prompt
    # ----------------------------------------------------------------------- #
    responses: List[str] = []
    for idx, chunk in enumerate(chunks, start=1):
        combined = f"{prompt}\n\n{chunk}"
        try:
            resp = client.responses.create(
                model="gpt-4.1",
                input=combined,
            )
            responses.append(resp.output_text)
        except Exception as exc:
            sys.stderr.write(f"\n⚠️  Chunk {idx}/{total_chunks} failed for '{second_word}': {exc}\n")
            responses.append(f"[Error processing chunk {idx}: {exc}]")

        print(f"\rProcessed {idx}/{total_chunks} chunks for mapping {m_idx}/{len(mappings)}...", end="", flush=True)

    print()  # newline after chunk loop
    print(f"✅ All chunks processed for '{second_word}'.")

    # ----------------------------------------------------------------------- #
    # Write to second_word.txt
    # ----------------------------------------------------------------------- #
    out_path = Path(f"{second_word}.tex")
    out_path.write_text("\n".join(responses), encoding="utf-8")
    print(f"✍️  Results saved to {out_path.resolve()}\n")
