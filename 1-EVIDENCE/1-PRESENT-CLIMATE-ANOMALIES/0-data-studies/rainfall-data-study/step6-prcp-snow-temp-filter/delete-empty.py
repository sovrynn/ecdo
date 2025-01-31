import os

def remove_empty_files(directory):
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        if os.path.isfile(filepath):
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read().strip()
                if not content:
                    os.remove(filepath)
                    print(f"Deleted file: {filename}")

def main():
    current_dir = os.getcwd()
    remove_empty_files(current_dir)

if __name__ == "__main__":
    main()
