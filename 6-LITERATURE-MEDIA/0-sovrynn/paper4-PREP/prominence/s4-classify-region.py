#!/usr/bin/env python3
"""
append_gpt_digit.py

Given one input text file, this script:

1. Reads every line.
2. Builds a prompt consisting of the contents of prompt.txt followed by the
   current line.
3. Sends the prompt to GPT‑4.1 **until** it replies with exactly one digit (0‑9).
4. Appends “#<digit>” to the original line.
5. Writes all modified lines to output.txt (overwriting if it exists).
6. Shows a running progress counter of [processed/total].

Requirements
------------
• `pip install openai` (v1+).  
• `apikey.txt` – your OpenAI key on its first line.  
• `prompt.txt` – base prompt text.

Usage
-----
```bash
python append_gpt_digit.py <input_file>
"""
import sys
import os
from time import sleep
from openai import OpenAI

# --------------------------------------------------------------------------- #
# Helper functions
# --------------------------------------------------------------------------- #
def load_text(path: str) -> str:
    """Return the entire file (UTF‑8) with trailing whitespace stripped."""
    with open(path, "r", encoding="utf-8") as fh:
        return fh.read().strip()

def ensure_single_digit(client: OpenAI, prompt: str) -> str:
    """
    Query GPT‑4.1 until the model returns exactly one digit (0‑9).
    If the response is unexpected, prints a warning and retries.
    """
    while True:
        response = client.responses.create(model="gpt-4.1", input=prompt)
        ans = response.output_text.strip()
        if len(ans) == 1 and ans.isdigit():
            return ans
        print(f"  ↪ Received '{ans}' (not a single digit). Retrying …")
        sleep(1)  # brief back‑off

# --------------------------------------------------------------------------- #
# Main script
# --------------------------------------------------------------------------- #
def main() -> None:
    if len(sys.argv) != 2:
        print("Usage: python append_gpt_digit.py <input_file>")
        sys.exit(1)

    in_path = sys.argv[1]
    if not os.path.isfile(in_path):
        print(f"Error: '{in_path}' is not a file.")
        sys.exit(1)

    # Load credentials and prompt
    api_key = load_text("apikey.txt")
    base_prompt = load_text("prompt.txt")

    os.environ["OPENAI_API_KEY"] = api_key
    client = OpenAI()

    # Read all lines, preserving order (strip trailing newlines)
    with open(in_path, "r", encoding="utf-8") as fh:
        lines = [ln.rstrip("\n") for ln in fh]

    total = len(lines)
    modified_lines = []

    for idx, line in enumerate(lines, start=1):
        prompt = f"{base_prompt} {line}"
        print(prompt)
        digit = ensure_single_digit(client, prompt)
        modified_lines.append(f"{line}#{digit}")
        print(f"[{idx}/{total}] processed")

    # Write results
    with open("output.txt", "w", encoding="utf-8") as out:
        out.write("\n".join(modified_lines) + "\n")

    print(f"Done. Wrote {total} line(s) to output.txt")

if __name__ == "__main__":
    main()
