#!/usr/bin/env bash

# Usage: ./compile.sh 1|2 filename_without_ext
#    1 = pdflatex, 2 = xelatex

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <1|2> <filename_without_ext>"
  exit 1
fi

case "$1" in
  1) ENGINE="pdflatex" ;;
  2) ENGINE="xelatex" ;;
  *) 
    echo "Error: first argument must be 1 (pdflatex) or 2 (xelatex)"
    exit 1
    ;;
esac

FILE="$2"

# compile sequence
"$ENGINE" "${FILE}.tex"
bibtex "$FILE"
"$ENGINE" "${FILE}.tex"
"$ENGINE" "${FILE}.tex"
