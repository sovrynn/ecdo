#!/usr/bin/env python3
"""
compare_citations.py

Scan two LaTeX files, collect every numeric citation found inside
\\cite{…} commands, and print the citation numbers that do **not**
appear in both files (the symmetric difference).

Usage
-----
# with the default file names in the current directory
$ python compare_citations.py

# or explicitly specify two paths
$ python compare_citations.py 2korean.tex old2.tex
"""
import re
import sys
from pathlib import Path


CITE_RE = re.compile(r'\\cite\{([^}]*)\}')        # grab the comma‑separated body


def extract_numbers(path: str) -> set[str]:
    """Return a set of the bare citation numbers contained in every \\cite{…}."""
    text = Path(path).read_text(encoding="utf-8", errors="ignore")
    hits = CITE_RE.findall(text)                  # every {...} inside \cite
    numbers: set[str] = set()

    for group in hits:
        for token in group.split(","):
            token = token.strip()
            if token:                             # eliminate blanks
                numbers.add(token)
    return numbers


def main(file_a: str = "2korean.tex", file_b: str = "old2.tex") -> None:
    set_a = extract_numbers(file_a)
    set_b = extract_numbers(file_b)

    only_a = sorted(set_a - set_b, key=int)       # unique to first file
    only_b = sorted(set_b - set_a, key=int)       # unique to second file

    if not (only_a or only_b):
        print("✅ All citation numbers appear in both files.")
        return

    if only_a:
        print(f"⚠️  Citations only in {file_a}: {', '.join(only_a)}")
    if only_b:
        print(f"⚠️  Citations only in {file_b}: {', '.join(only_b)}")


if __name__ == "__main__":
    if len(sys.argv) == 3:        # filenames supplied by user
        main(sys.argv[1], sys.argv[2])
    else:                         # fall back to defaults
        main()
