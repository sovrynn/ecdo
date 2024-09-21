import os
import glob
import sys
import re
from datetime import datetime

def get_images_sorted_by_creation_time(directory):
    """
    Gets all images in the specified directory sorted by creation time.
    
    :param directory: Path to the directory containing images.
    :return: List of image file paths sorted by creation time.
    """
    # Find all .png and .jpg files in the directory
    image_files = glob.glob(os.path.join(directory, '*.png')) + glob.glob(os.path.join(directory, '*.jpg'))
    
    # Sort files by creation time
    image_files.sort(key=lambda x: os.path.getctime(x))
    
    return image_files

def rename_images(directory, base_name):
    """
    Renames images in the specified directory by the given base name.
    
    :param directory: Path to the directory containing images.
    :param base_name: Base name to use for renaming images.
    """
    # Get images sorted by creation time
    images = get_images_sorted_by_creation_time(directory)
    
    for index, image_path in enumerate(images, start=1):
        # Extract file extension
        _, ext = os.path.splitext(image_path)
        if ext.lower() not in ['.png', '.jpg']:
            continue
        
        # Define new filename
        new_filename = f"{base_name}{index}{ext}"
        new_file_path = os.path.join(directory, new_filename)
        
        # Rename the file
        os.rename(image_path, new_file_path)
        print(f"Renamed '{image_path}' to '{new_file_path}'")

def main():
    if len(sys.argv) != 3:
        print("Usage: python script.py <directory> <base_name>")
        sys.exit(1)
    
    directory = sys.argv[1]
    base_name = sys.argv[2]
    
    if not os.path.isdir(directory):
        print(f"Error: Directory '{directory}' does not exist.")
        sys.exit(1)
    
    rename_images(directory, base_name)

if __name__ == "__main__":
    main()
