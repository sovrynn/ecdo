# Filename: calculate_geographic_north.py

# Fix the rotational axis vertically, calculate the 360 planar north bearings.
# No theatrics here. Just increment the xy bearing.

# Next, rotate the planar north bearing the desired amount. Again, no theatrics.
# Simply append the rotational axis angles to xy and z.

# Finally, we need to calculate the angle between the Sun and the planar north.
# This could range from 0 (directly above) to 90 (horizontal, sunset/sunrise) to more than 90 (nighttime) all the way up till 180.
# This is easy. Just fix the sun on the x axis and then do some simple maths.

import math

def read_inputs(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()
        inputs = {}
        for line in lines:
            parts = line.strip().split()
            if parts:
                key = parts[0]
                value = float(parts[1])
                inputs[key] = value
    return inputs

def rotate_vector(xy, z, bearing_deg, vertical_deg):
    xy += 180
    xy -= bearing_deg
    if xy < 0:
        xy = 360 + xy
    xy -= 180

    z -= vertical_deg
    if z > 90:
        z = 90 - (z - 90)
    if z < -90:
        z = -90 + (-90 - z)
    
    return xy, z

def calculate_geographic_north(lat_deg, lon_deg, bearing_deg, vertical_deg):
    output_lines = []

    # step 1
    new_output_lines = []
    for X in range(0, 361, 1):
        a,_ = rotate_vector(lon_deg, lat_deg, X, 0)
        new_output_lines.append((X, a, lat_deg))
    output_lines = new_output_lines

    # step 2
    # new_output_lines = []
    # for a,b,c in output_lines:
    #     nb, nc = rotate_vector(b,c, bearing_deg, vertical_deg)
    #     new_output_lines.append((a,nb,nc))
    # output_lines = new_output_lines

    # step 3

    # output formatting
    new_output_lines = []
    for a, b, c in output_lines:
        # Format output
        X_str = f"{a:3d}"
        Y_str = f"{b:7.2f}"
        Z_str = f"{c:7.2f}"
        output_line = f"Orbital bearing: {X_str}, Planar north xy bearing: {Y_str}, Planar north z bearing: {Z_str}"
        new_output_lines.append(output_line)

    return new_output_lines

def main():
    inputs = read_inputs('input.txt')
    lat = inputs.get('lat', 0.0)
    lon = inputs.get('lon', 0.0)
    bearing = inputs.get('bearing', 0.0)
    vertical = inputs.get('vertical', 0.0)
    
    results = calculate_geographic_north(lat, lon, bearing, vertical)
    
    with open('output.txt', 'w') as file:
        for line in results:
            file.write(line + '\n')
    
    print("Calculation complete. Results are in 'output.txt'.")

if __name__ == "__main__":
    main()
