import os
import sys

# Parameters
SEARCH_DIR = '../../../..'  # Directory to recursively search
FILE_SIZE_LIMIT = 512  # MB, exclusive limit for output files
FILE_TOKEN_LIMIT = 1500000  # Tokens, exclusive limit for output files
FILE_NUM_LIMIT = 20  # Maximum number of output files

# Create output directory if it doesn't exist
output_dir = 'output'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Get list of all .md files recursively
md_files = []
for root, dirs, files in os.walk(SEARCH_DIR):
    for file in files:
        if file.endswith('.md'):
            md_files.append(os.path.join(root, file))

# Determine number of digits for output file numbering
num_digits = len(str(FILE_NUM_LIMIT))

current_output_file_num = 1
current_output_file_size = 0  # in bytes
current_output_file_token_count = 0
current_output_file = None

def open_new_output_file():
    global current_output_file, current_output_file_num
    if current_output_file:
        current_output_file.close()
    if current_output_file_num > FILE_NUM_LIMIT:
        print(f"Exceeded the maximum number of output files: {FILE_NUM_LIMIT}")
        sys.exit(1)
    file_number_str = str(current_output_file_num).zfill(num_digits)
    output_file_path = os.path.join(output_dir, f'content{file_number_str}.txt')
    current_output_file = open(output_file_path, 'w', encoding='utf-8')
    current_output_file_num += 1
    return output_file_path

# Open the first output file
output_file_path = open_new_output_file()
print(f"Writing to {output_file_path}")

for md_file in md_files:
    # Relative file path
    relative_path = os.path.relpath(md_file, SEARCH_DIR)
    
    # Read content
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Prepare demarcators
    start_demarcator = f"FILE {relative_path} START\n"
    end_demarcator = f"FILE {relative_path} END\n"
    
    # Full content to be added
    full_content = start_demarcator + content + '\n' + end_demarcator + '\n'
    
    # Estimate token count
    full_content_chars = len(full_content)
    full_content_tokens = full_content_chars / 4  # 1 token ≈ 4 chars
    
    # Size in bytes
    full_content_size = len(full_content.encode('utf-8'))  # bytes
    
    # Size in MB
    full_content_size_mb = full_content_size / (1024 * 1024)
    
    # Check if adding this content exceeds limits
    if (current_output_file_size + full_content_size > FILE_SIZE_LIMIT * 1024 * 1024) or \
       (current_output_file_token_count + full_content_tokens > FILE_TOKEN_LIMIT):
        # Start a new output file
        output_file_path = open_new_output_file()
        print(f"Writing to {output_file_path}")
        current_output_file_size = 0
        current_output_file_token_count = 0
    
    # Do not split files between output files
    if full_content_size > FILE_SIZE_LIMIT * 1024 * 1024 or full_content_tokens > FILE_TOKEN_LIMIT:
        print(f"File {relative_path} exceeds the individual file size or token limit.")
        sys.exit(1)
    
    # Write the content to the current output file
    current_output_file.write(full_content)
    
    # Update the counters
    current_output_file_size += full_content_size
    current_output_file_token_count += full_content_tokens

# Close the last output file
if current_output_file:
    current_output_file.close()
