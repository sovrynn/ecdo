import sys
from datetime import datetime, timedelta

def mjd_to_ad(mjd):
    """Convert Modified Julian Date (MJD) to AD date (YYYY-MM-DD)."""
    jd = mjd + 2400000.5  # Convert MJD to Julian Date (JD)
    base_date = datetime(1858, 11, 17)  # MJD 0 is November 17, 1858
    delta_days = timedelta(days=(jd - 2400000.5))
    ad_date = base_date + delta_days
    return ad_date.strftime("%Y-%m-%d")

def process_data(input_path, output_path):
    processed_data = []
    
    with open(input_path, 'r') as file:
        lines = file.readlines()[13:]  # Skip first 13 lines

        for line in lines:
            words = line.split()
            if len(words) < 3:
                continue
            
            mjd = float(words[0])
            x = float(words[1])
            y = float(words[2])
            
            # Convert MJD to AD date
            date = mjd_to_ad(mjd)
            
            # Switch x and y, and multiply both by -1
            x, y = -y, -x
            
            # Append formatted result
            processed_data.append(f"{date} {x:.6f} {y:.6f}")
    
    # Sort data by date in ascending order
    processed_data.sort()
    
    # Write processed data to output file
    with open(output_path, 'w') as file:
        for line in processed_data:
            file.write(line + "\n")

if __name__ == "__main__":
    # Get input and output file paths from command line arguments
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    # Process data
    process_data(input_file, output_file)
