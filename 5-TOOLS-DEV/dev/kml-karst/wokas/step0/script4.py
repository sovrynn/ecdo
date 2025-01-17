#!/usr/bin/env python3

import argparse
import sys
import statistics
from pathlib import Path

def parse_arguments():
    """
    Parse command-line arguments.
    """
    parser = argparse.ArgumentParser(
        description="Analyze the fourth line of all .csv files in a directory."
    )
    parser.add_argument(
        "input_dir",
        type=str,
        help="Relative path to the directory containing .csv files."
    )
    return parser.parse_args()

def find_csv_files(directory):
    """
    Recursively find all .csv files in the given directory.

    Args:
        directory (Path): Path object of the base directory.

    Returns:
        list of Path: List containing paths to .csv files.
    """
    return list(directory.rglob("*.csv"))

def read_fourth_line_as_float(file_path):
    """
    Reads the fourth line of a file and attempts to parse it as a float.

    Args:
        file_path (Path): The .csv file path.

    Returns:
        float or None: The float value if the line is valid, otherwise None.
    """
    try:
        with file_path.open("r", encoding="utf-8") as f:
            lines = f.readlines()
        if len(lines) < 4:
            print(f"Warning: {file_path} has fewer than 4 lines. Skipping.")
            return None
        
        # Extract the fourth line, strip whitespace, and convert to float
        fourth_line = lines[3].strip()
        return float(fourth_line)
    except ValueError:
        print(f"Warning: The fourth line in {file_path} is not a valid float. Skipping.")
        return None
    except Exception as e:
        print(f"Error reading {file_path}: {e}. Skipping.")
        return None

def bucket_values(values, bucket_min, bucket_max, num_buckets=10):
    """
    Divides the range [bucket_min, bucket_max] into num_buckets equal intervals
    and counts the number of values falling into each bucket.

    Args:
        values (list of float): The float values to bucket.
        bucket_min (float): The lower bound of the bucketing range.
        bucket_max (float): The upper bound of the bucketing range.
        num_buckets (int): Number of buckets to create.

    Returns:
        list of int: A list of length num_buckets, indicating the count in each bucket.
    """
    if bucket_max <= bucket_min:
        # If the range is zero or invalid, place all values in one bucket.
        buckets = [0] * num_buckets
        for _ in values:
            buckets[0] += 1
        return buckets

    range_width = (bucket_max - bucket_min) / num_buckets
    buckets = [0] * num_buckets
    for val in values:
        # If val == bucket_max, place it in the last bucket
        if val == bucket_max:
            buckets[-1] += 1
        else:
            # Determine bucket index by integer division
            index = int((val - bucket_min) // range_width)
            # Bound index to [0, num_buckets-1]
            if index < 0:
                index = 0
            elif index >= num_buckets:
                index = num_buckets - 1
            buckets[index] += 1
    return buckets

def main():
    # Parse arguments
    args = parse_arguments()
    input_dir = Path(args.input_dir).resolve()

    # Validate directory
    if not input_dir.is_dir():
        print(f"Error: {input_dir} does not exist or is not a directory.")
        sys.exit(1)

    # Find all CSV files
    csv_files = find_csv_files(input_dir)
    if not csv_files:
        print(f"No .csv files found in {input_dir}.")
        sys.exit(0)

    # Read floats from the fourth line of each CSV
    all_values = []
    negative_or_zero_files = []
    for csv_file in csv_files:
        val = read_fourth_line_as_float(csv_file)
        if val is not None:
            all_values.append(val)
            # Check if val <= 0, record filename
            if val <= 0:
                negative_or_zero_files.append(csv_file.name)

    # Print filenames with negative or zero values
    if negative_or_zero_files:
        print("=== Files with negative or zero values (<= 0) ===")
        for fname in negative_or_zero_files:
            print(fname)
    else:
        print("No files had negative or zero values in the fourth line.")

    # If no valid float values, exit
    if not all_values:
        print("\nNo valid float values were extracted from any .csv file.")
        sys.exit(0)

    # Calculate overall statistics
    total_values = len(all_values)
    min_val = min(all_values)
    max_val = max(all_values)
    avg_val = sum(all_values) / total_values
    median_val = statistics.median(all_values)

    # Print basic stats
    print("\n=== Overall Statistics ===")
    print(f"Total number of values: {total_values}")
    print(f"Minimum value: {min_val}")
    print(f"Maximum value: {max_val}")
    print(f"Average value: {avg_val}")
    print(f"Median value: {median_val}")

    # Bucket from 0 to max_val
    print("\n=== Bucket Counts (0 to Max) ===")
    if max_val > 0:
        # Filter only values >= 0 for bucketing from 0..max
        non_negative_vals = [v for v in all_values if v >= 0]
        buckets = bucket_values(non_negative_vals, 0.0, max_val, num_buckets=10)
        range_width = max_val / 10
        for i in range(10):
            lower_bound = i * range_width
            upper_bound = (i + 1) * range_width
            if i == 9:
                bucket_range = f"[{lower_bound:.2f}, {upper_bound:.2f}]"
            else:
                bucket_range = f"[{lower_bound:.2f}, {upper_bound:.2f})"
            print(f"Bucket {i+1} {bucket_range}: {buckets[i]}")
    else:
        print("Maximum value <= 0, so bucketing from 0 to max is not meaningful.")

    # --- Repeat analysis for the first bucket ---
    #
    # 1) Identify the first bucket's range: [0, range_width)
    # 2) Extract values in that range
    # 3) Compute stats and sub-bucket them

    if max_val > 0:
        first_bucket_max = max_val / 10  # width of the first bucket
        first_bucket_vals = [v for v in all_values if 0 <= v < first_bucket_max]

        if first_bucket_vals:
            # Basic stats for the first bucket
            fb_total = len(first_bucket_vals)
            fb_min = min(first_bucket_vals)
            fb_max = max(first_bucket_vals)
            fb_avg = sum(first_bucket_vals) / fb_total
            fb_median = statistics.median(first_bucket_vals)

            print("\n=== Analysis of First Bucket ===")
            print(f"Total number of values in the first bucket: {fb_total}")
            print(f"Minimum value: {fb_min}")
            print(f"Maximum value: {fb_max}")
            print(f"Average value: {fb_avg}")
            print(f"Median value: {fb_median}")

            # Bucket the first bucket into 10 sub-ranges
            print("\n=== Bucket Counts (First Bucket Subdivided) ===")
            sub_buckets = bucket_values(first_bucket_vals, 0.0, first_bucket_max, num_buckets=10)
            sub_range_width = first_bucket_max / 10
            for i in range(10):
                lower_bound = i * sub_range_width
                upper_bound = (i + 1) * sub_range_width
                if i == 9:
                    sub_bucket_range = f"[{lower_bound:.2f}, {upper_bound:.2f}]"
                else:
                    sub_bucket_range = f"[{lower_bound:.2f}, {upper_bound:.2f})"
                print(f"Sub-bucket {i+1} {sub_bucket_range}: {sub_buckets[i]}")
        else:
            print("\nNo values fell into the first bucket range [0, 0.1*max_val].")
    else:
        print("\nNo valid positive range to analyze in the first bucket.")

if __name__ == "__main__":
    main()
