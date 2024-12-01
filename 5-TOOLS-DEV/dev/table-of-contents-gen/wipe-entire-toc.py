import os
import argparse
from pathlib import Path

def remove_gpt_summary_sections(directory: Path):
    """
    Removes all H1 headers with the text "GPT Summary: Table of Contents" and their contents
    from all .md files in the specified directory, excluding README.md.
    
    Args:
        directory (Path): The directory to search for .md files.
    """
    # Define the header to search for
    target_header = "# GPT Summary: Table of Contents"
    
    # Find all .md files excluding README.md (case-insensitive)
    md_files = [file for file in directory.glob("*.md") if file.name.lower() != "readme.md"]
    
    if not md_files:
        print(f"No Markdown files found to process in '{directory}'.")
        return
    
    for md_file in md_files:
        try:
            with md_file.open("r", encoding="utf-8") as f:
                lines = f.readlines()
        except Exception as e:
            print(f"Error reading {md_file.name}: {e}")
            continue
        
        new_lines = []
        skip = False
        removal_count = 0
        i = 0
        total_lines = len(lines)
        
        while i < total_lines:
            line = lines[i]
            if not skip and line.strip() == target_header:
                skip = True
                removal_count += 1
                i += 1  # Move to the next line after the header
                continue
            elif skip:
                # Check if the current line is another H1 header
                if line.startswith("# ") and line.strip() != target_header:
                    skip = False
                    new_lines.append(line)
                else:
                    # Continue skipping lines
                    i += 1
                    continue
            if not skip:
                new_lines.append(line)
            i += 1
        
        # Write back the modified content if any removals were made
        if removal_count > 0:
            try:
                with md_file.open("w", encoding="utf-8") as f:
                    f.writelines(new_lines)
                print(f"Processed '{md_file.name}': Removed {removal_count} section(s).")
            except Exception as e:
                print(f"Error writing to {md_file.name}: {e}")
        else:
            print(f"Processed '{md_file.name}': No sections removed.")

def main():
    # Set up argument parsing
    parser = argparse.ArgumentParser(
        description="Remove all H1 headers with text 'GPT Summary: Table of Contents' and their contents from Markdown files in a specified directory."
    )
    parser.add_argument(
        "directory",
        type=str,
        nargs="?",
        default=".",
        help="Relative path to the target directory (default: current directory)."
    )
    
    args = parser.parse_args()
    relative_dir = args.directory
    
    # Convert relative path to absolute Path object
    target_dir = Path(relative_dir).resolve()
    
    # Check if the directory exists and is a directory
    if not target_dir.exists():
        print(f"Error: The directory '{relative_dir}' does not exist.")
        return
    if not target_dir.is_dir():
        print(f"Error: The path '{relative_dir}' is not a directory.")
        return
    
    # Call the function to process the files
    remove_gpt_summary_sections(target_dir)

if __name__ == "__main__":
    main()
