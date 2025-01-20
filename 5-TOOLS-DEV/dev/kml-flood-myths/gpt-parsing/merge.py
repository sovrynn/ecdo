#!/usr/bin/env python3

import sys
import os
import shutil

def main():
    if len(sys.argv) < 3:
        print("Usage: python copy_new_files.py <X_DIR> <Y_DIR>")
        sys.exit(1)

    X_DIR = sys.argv[1]
    Y_DIR = sys.argv[2]

    # Ensure X_DIR and Y_DIR exist
    if not os.path.isdir(X_DIR):
        print(f"Error: Directory '{X_DIR}' does not exist.")
        sys.exit(1)
    if not os.path.isdir(Y_DIR):
        print(f"Error: Directory '{Y_DIR}' does not exist.")
        sys.exit(1)

    files_copied = []

    # Iterate over the items in Y_DIR
    for item in os.listdir(Y_DIR):
        y_item_path = os.path.join(Y_DIR, item)

        # Only handle files (skip subdirectories if present)
        if os.path.isfile(y_item_path):
            x_item_path = os.path.join(X_DIR, item)

            # If file doesn't exist in X_DIR, copy it
            if not os.path.exists(x_item_path):
                shutil.copy2(y_item_path, x_item_path)
                files_copied.append(item)
                print(f"Copied: {item}")

    # Print total number of files copied
    print(f"\nTotal files copied: {len(files_copied)}")


if __name__ == "__main__":
    main()
