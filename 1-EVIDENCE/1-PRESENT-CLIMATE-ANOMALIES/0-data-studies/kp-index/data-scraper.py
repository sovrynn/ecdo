import os
import subprocess

# Directory to save the files
output_folder = "data-quiet-disturbed"
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Base URL format for files
# base_url = "https://datapub.gfz-potsdam.de/download/10.5880.Kp.0001/Kp_definitive/Kp_def"
base_url = "https://datapub.gfz-potsdam.de/download/10.5880.Kp.0001/Quiet_Disturbed_Days/QD_days"

# Start and end years
start_year = 1932
end_year = 2024

# Total number of files to download
total_files = end_year - start_year + 1

# Loop through each year and download the file using wget
for i, year in enumerate(range(start_year, end_year + 1), start=1):
    # Construct the URL and file path
    # url = f"{base_url}{year}.wdc"
    # output_path = os.path.join(output_folder, f"Kp_def{year}.wdc")

    url = f"{base_url}{year}.txt"
    output_path = os.path.join(output_folder, f"QD_days{year}.txt")

    # Use wget to download the file
    result = subprocess.run(["wget", "-q", "-O", output_path, url])

    # Check if the download was successful
    if result.returncode == 0:
        print(f"[{year}] Downloaded successfully.")
    else:
        print(f"[{year}] Failed to download.")

    # Progress indicator
    progress = (i / total_files) * 100
    print(f"Progress: {progress:.2f}%")

print("All downloads completed.")
