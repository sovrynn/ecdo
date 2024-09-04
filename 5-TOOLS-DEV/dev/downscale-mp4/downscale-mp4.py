import os
import subprocess
import math
import re
import sys

def get_file_size(file_path):
    """Returns the size of the file in bytes."""
    return os.path.getsize(file_path)

def get_video_bitrate(file_path):
    """Returns the video bitrate of the file in kbps."""
    command = [
        'ffmpeg',
        '-i', file_path,
        '-f', 'null',
        '-'
    ]
    result = subprocess.run(command, stderr=subprocess.PIPE, text=True)
    
    # Extract bitrate using regex from stderr output
    bitrate_pattern = re.compile(r'bitrate: (\d+) kb/s')
    match = bitrate_pattern.search(result.stderr)
    
    if match:
        return int(match.group(1))
    else:
        raise ValueError("Unable to determine video bitrate")

def get_video_duration(file_path):
    """Returns the duration of the video in seconds."""
    command = [
        'ffmpeg',
        '-i', file_path,
        '-f', 'null',
        '-'
    ]
    result = subprocess.run(command, stderr=subprocess.PIPE, text=True)
    
    # Extract duration using regex from stderr output
    duration_pattern = re.compile(r'Duration: (\d+):(\d+):(\d+.\d+)')
    match = duration_pattern.search(result.stderr)
    
    if match:
        hours, minutes, seconds = map(float, match.groups())
        return hours * 3600 + minutes * 60 + seconds
    else:
        raise ValueError("Unable to determine video duration")

def calculate_new_bitrate(current_bitrate, target_size_mb, duration_sec):
    """Calculates the new bitrate to achieve the target size."""
    target_size_bytes = target_size_mb * 1024 * 1024
    new_bitrate = (target_size_bytes * 8) / duration_sec  # in bits per second
    return new_bitrate / 1024  # convert to kbps

def get_video_resolution1(file_path):
    """Returns the resolution of the video as (width, height)."""
    command = [
        'ffmpeg',
        '-i', file_path,
        '-f', 'null',
        '-'
    ]
    result = subprocess.run(command, stderr=subprocess.PIPE, text=True)
    
    # Try to extract resolution from stderr output
    resolution_pattern = re.compile(r'(\d+)x(\d+)')
    match = resolution_pattern.search(result.stderr)
    
    if match:
        width, height = map(int, match.groups())
        if width > 0 and height > 0:
            return width, height
        else:
            raise ValueError("Resolution values are not valid.")
    else:
        raise ValueError("Unable to determine video resolution")

def get_video_resolution(file_path):
    """Returns the resolution of the video as (width, height)."""
    command = [
        'ffmpeg',
        '-i', file_path,
        '-f', 'null',
        '-'
    ]
    result = subprocess.run(command, stderr=subprocess.PIPE, text=True)
    
    # Check different patterns for resolution extraction
    resolution_patterns = [
        re.compile(r'(\d{2,4})x(\d{2,4})'),  # Matches "widthxheight"
        re.compile(r'(\d{2,4})x(\d{2,4})\s+'),  # Matches "widthxheight " with trailing space
        re.compile(r'Resolution\s*:\s*(\d{2,4})x(\d{2,4})'),  # Some custom patterns
        re.compile(r'Video:\s*\w+,\s*(\d{2,4})x(\d{2,4})')  # More specific to video codec output
    ]
    
    for pattern in resolution_patterns:
        match = pattern.search(result.stderr)
        if match:
            width, height = map(int, match.groups())
            if width > 0 and height > 0:
                print(f"{width} {height}")
                return width, height
    
    raise ValueError("Unable to determine video resolution")

def reduce_resolution_and_bitrate(input_file, output_file, scale_factor, bitrate):
    """Uses FFmpeg to reduce the resolution and bitrate of the video."""
    # Determine new resolution based on scale factor
    width, height = get_video_resolution(input_file)
    print(f"{width} {height}")
    new_width = width // scale_factor
    new_height = height // scale_factor
    print(f"{new_width} {new_height}")
    print(scale_factor)
    
    # FFmpeg command to scale the resolution and adjust the bitrate
    command = [
        'ffmpeg',
        '-i', input_file,
        '-vf', f'scale={new_width}:{new_height}',
        '-c:v', 'h264', # h.264 codec
        '-b:v', f'{bitrate}k',
        '-c:a', 'aac',
        '-b:a', '128k',
        output_file
    ]
    
    # Execute the FFmpeg command
    subprocess.run(command, check=True)

def process_videos(directory, output_directory):
    """Iterates through all .mp4 files in the directory and processes them."""
    target_size_mb = 9.9  # Updated target size
    limit_size_mb = 10
    for file_name in os.listdir(directory):
        if file_name.endswith('.mp4'):
            file_path = os.path.join(directory, file_name)
            file_size_mb = get_file_size(file_path) / (1024 * 1024)  # Convert bytes to MB
            
            if file_size_mb > limit_size_mb:
                # Get current bitrate and duration
                current_bitrate = get_video_bitrate(file_path)
                duration_sec = get_video_duration(file_path)
                
                # Calculate the new bitrate
                new_bitrate = calculate_new_bitrate(current_bitrate, target_size_mb, duration_sec)
                
                # Determine the scale factor based on bitrate reduction
                scale_factor = int(math.sqrt(current_bitrate / new_bitrate))
                
                # Create output file name with prefix "S_"
                output_file_name = 'S_' + file_name
                output_file_path = os.path.join(output_directory, output_file_name)
                
                # Reduce resolution and bitrate
                reduce_resolution_and_bitrate(file_path, output_file_path, scale_factor, int(new_bitrate))
                
                print(f"Processed {file_name} -> {output_file_name}")

if __name__ == "__main__":
    # Specify the directory containing the .mp4 files
    directory = '.'  # Update this path
    output_directory = directory

    if len(sys.argv) > 1:
        # The first argument after the script name
        directory = sys.argv[1]
    if len(sys.argv) > 2:
        output_directory = sys.argv[2]
    
    print(f"Input directory: {directory}")
    print(f"Output directory: {output_directory}")

    process_videos(directory, output_directory)
