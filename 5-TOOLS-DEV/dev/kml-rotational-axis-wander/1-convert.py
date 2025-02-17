import json
import math
import sys

def main():
    # Expect exactly one argument: the path to the JSON input
    if len(sys.argv) != 2:
        print("Usage: python convert.py <input_file.json>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = "output.txt"
    
    # Earth's approximate mean radius in km
    EARTH_RADIUS = 6371.0
    
    # Read the JSON data
    with open(input_file, 'r') as f:
        data = json.load(f)
    
    # The structure presumably has a top-level "values" list
    values = data["values"]
    
    results = []
    
    for entry in values:
        date_str = entry["date"]  # e.g. "18560101"
        x = entry["x"]
        y = -1 * entry["y"]
        
        # Extract the year from date_str (YYYYMMDD)
        year = int(date_str[:4])
        
        # Convert x, y to kilometers (1 unit = 1000 km)
        dx_km = x * 3000.0
        dy_km = y * 3000.0
        
        # Compute total displacement from North Pole
        r = math.sqrt(dx_km**2 + dy_km**2)
        
        # Angular distance in radians
        alpha = r / EARTH_RADIUS
        # Convert to degrees
        alpha_deg = math.degrees(alpha)
        
        # Latitude = 90 - alpha_deg
        lat = 90.0 - alpha_deg
        
        # Bearing from prime meridian (in radians)
        # Note: arctan2 takes arguments (y, x) in many languages,
        # but here we interpret the first argument as 'x component'
        # and second as 'y component'. 
        # We want the angle measured from the y-axis, so we do:
        bearing_radians = math.atan2(dx_km, dy_km)
        # Convert to degrees
        lon = math.degrees(bearing_radians)
        
        # Store result to be sorted later
        results.append((year, lat, lon))
    
    # Sort by year, just in case the input wasn't already sorted
    results.sort(key=lambda x: x[0])
    
    # Write out to output file in the format "lat lon year"
    with open(output_file, 'w') as outf:
        for (year, lat, lon) in results:
            outf.write(f"{lat:.6f} {lon:.6f} {year}\n")
    
    print(f"Wrote results to {output_file}")

if __name__ == "__main__":
    main()
