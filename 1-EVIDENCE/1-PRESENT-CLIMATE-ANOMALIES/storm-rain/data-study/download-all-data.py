import sys
import os
import subprocess

def download_csv_files(filename, output_dir):
    # Base URL for downloading CSV files
    base_url = "https://www.ncei.noaa.gov/data/global-historical-climatology-network-daily/access/"
    
    # Check if the provided filename exists
    if not os.path.isfile(filename):
        print(f"Error: The file '{filename}' does not exist.")
        return

    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created directory: {output_dir}")

    # Read file contents and strip any extra whitespace
    with open(filename, 'r') as file:
        csv_filenames = [line.strip() for line in file if line.strip()]

    total_files = len(csv_filenames)
    downloaded_count = 0
    skipped_count = 0

    # Loop through each CSV filename and download it
    for i, csv_filename in enumerate(csv_filenames, 1):
        url = base_url + csv_filename
        output_path = os.path.join(output_dir, csv_filename)

        # Skip download if file already exists
        if os.path.exists(output_path):
            print(f"Skipping download for {csv_filename}: File already exists")
            skipped_count += 1
            continue
        
        # Download the CSV file using wget
        result = subprocess.run(["wget", "-q", "-O", output_path, url])

        # Check if the download was successful
        if result.returncode == 0:
            downloaded_count += 1
        else:
            print(f"Failed to download: {csv_filename}")

        # Calculate progress percentage
        progress = int((i / total_files) * 100)
        if progress % 1 == 0:
            print(f"Progress: Downloaded {i} of {total_files} files ({progress}%)")

    print(f"Download complete: {downloaded_count} out of {total_files} files downloaded.")

if __name__ == "__main__":
    # Check if both filename and directory arguments are provided
    if len(sys.argv) != 3:
        print("Usage: python script.py <filename> <output_directory>")
    else:
        input_filename = sys.argv[1]
        output_directory = sys.argv[2]
        download_csv_files(input_filename, output_directory)
