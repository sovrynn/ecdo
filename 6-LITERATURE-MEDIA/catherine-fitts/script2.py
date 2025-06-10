#!/usr/bin/env python3
import argparse
import sys
from openai import OpenAI

def parse_and_replace(input_path, prompt_path='prompt.txt', output_path='output.txt'):
    # Load base prompt
    try:
        with open(prompt_path, 'r', encoding='utf-8') as pf:
            base_prompt = pf.read().rstrip('\n')
    except FileNotFoundError:
        print(f"Error: Prompt file '{prompt_path}' not found.", file=sys.stderr)
        sys.exit(1)

    # Read all lines from input
    try:
        with open(input_path, 'r', encoding='utf-8') as inf:
            lines = inf.readlines()
    except FileNotFoundError:
        print(f"Error: Input file '{input_path}' not found.", file=sys.stderr)
        sys.exit(1)

    # Count non-empty lines for progress reporting
    non_empty_count = sum(1 for l in lines if l.strip())
    processed = 0

    client = OpenAI()
    output_lines = []

    for line in lines:
        raw = line.rstrip('\n')
        if raw.strip():  # only process non-empty lines
            if ": " in raw:
                prefix, rest = raw.split(": ", 1)
                prompt_text = base_prompt + rest
                # Call ChatGPT
                print('--------')
                print(prompt_text)
                print('---------')
                try:
                    response = client.chat.completions.create(
                        model="gpt-4.1-nano",
                        messages=[{"role":"user", "content": prompt_text}]
                    )
                    new_text = response.choices[0].message.content
                except Exception as e:
                    print(f"API error on line {processed+1}: {e}", file=sys.stderr)
                    new_text = rest  # fallback to original

                new_line = f"{prefix}: {new_text}"
                print(new_line)
                print('----------')
            else:
                new_line = raw

            processed += 1
            # Progress indicator
            print(f"Processed {processed}/{non_empty_count} lines", end='\r', file=sys.stderr, flush=True)
        else:
            new_line = ''

        output_lines.append(new_line)

    # After processing, ensure progress line ends
    print(file=sys.stderr)

    # Write all lines to output file
    with open(output_path, 'w', encoding='utf-8') as outf:
        for ln in output_lines:
            outf.write(ln + "\n")


def main():
    parser = argparse.ArgumentParser(
        description="Parse each line after the first ': ', call GPT to transform it, and save result."
    )
    parser.add_argument(
        'input_file',
        help="Relative path to the input text file"
    )
    parser.add_argument(
        '--prompt', '-p',
        default='prompt.txt',
        help="Path to the base prompt file (default: prompt.txt)"
    )
    parser.add_argument(
        '--output', '-o',
        default='output.txt',
        help="Path for the output file (default: output.txt)"
    )
    args = parser.parse_args()

    parse_and_replace(args.input_file, args.prompt, args.output)

if __name__ == '__main__':
    main()
