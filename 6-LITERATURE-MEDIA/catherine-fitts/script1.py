#!/usr/bin/env python3
import argparse
import re
import sys

def parse_and_reformat(input_path, output_path='output.txt'):
    # Match MM:SS or HH:MM:SS at start, then capture the rest of the line
    ts_regex = re.compile(r'^(\d{1,2}:\d{2}(?::\d{2})?)(.*)$')

    entries = []
    with open(input_path, 'r', encoding='utf-8') as f:
        for raw in f:
            line = raw.rstrip('\n')
            if not line.strip():
                continue

            m = ts_regex.match(line)
            if m:
                ts, rest = m.groups()
                text = rest.strip()
                entries.append({'ts': ts, 'text': text})
            else:
                # continuation
                if not entries:
                    # no timestamp yet → ignore
                    continue
                # append with a single space
                entries[-1]['text'] += ' ' + line.strip()

    # write out
    with open(output_path, 'w', encoding='utf-8') as out:
        for i, e in enumerate(entries):
            name = 'Carlson' if i % 2 == 0 else 'Fitts'
            out.write(f"{name} ({e['ts']}): {e['text']}\n\n")

def main():
    p = argparse.ArgumentParser(
        description="Merge lines under each timestamp and alternate speakers Carlson/Fitts."
    )
    p.add_argument('input_file', help="Path to the transcript text file")
    args = p.parse_args()

    try:
        parse_and_reformat(args.input_file)
        print("Wrote reformatted transcript to output.txt")
    except Exception as err:
        print("Error:", err, file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
