import math
import numpy as np

# ASSUMPTION: SUN IS ON THE RIGHT, EARTH IS ON THE LEFT

def cap_value(value, min_value, max_value):
    """
    Caps the value within the specified range to prevent floating point errors.
    """
    return max(min(value, max_value), min_value)

def cap_angle(angle, angle_range):
    """
    Caps the angle within the specified range [-180, 180] or [-90, 90].
    Adjusts angles outside the range by adding or subtracting 360 degrees.
    """
    min_angle, max_angle = angle_range
    while angle < min_angle:
        angle += 360
    while angle > max_angle:
        angle -= 360
    return angle

def lat_lon_to_unit_vector(lat, lon):
    """
    1. Given a latitude and longitude, calculate the unit vector to the point based at the center of the Earth.
       - The Earth is assumed to be a sphere with a radius of 1.
       - Coordinate System:
         - Positive z-axis points towards the North Pole.
         - Longitude 0° is along the negative y-axis.
         - Longitude 90° East is along the positive x-axis.
         - Longitude 90° West is along the negative x-axis.
       - Returns a tuple (dx, dy, dz) representing the unit vector.
    """
    # Convert degrees to radians
    lat_rad = math.radians(lat)
    lon_rad = math.radians(lon)
    phi = lon_rad - math.pi / 2  # Adjust longitude to match the coordinate system
    
    # Calculate the unit vector components
    x = math.cos(lat_rad) * math.cos(phi)
    y = math.cos(lat_rad) * math.sin(phi)
    z = math.sin(lat_rad)
    
    # Cap the vector components to [-1, 1] to prevent floating point errors
    x = cap_value(x, -1.0, 1.0)
    y = cap_value(y, -1.0, 1.0)
    z = cap_value(z, -1.0, 1.0)
    
    return (x, y, z)

def rotate_vector_around_z(vector):
    """
    2. Given a unit vector, rotate the vector in single degree increments about the z-axis,
       and return the corresponding vectors as a list of 360 tuples.
    """
    x0, y0, z0 = vector
    rotated_vectors = []
    for angle_deg in range(359, -1, -1):
        angle_rad = math.radians(angle_deg)
        cos_theta = math.cos(angle_rad)
        sin_theta = math.sin(angle_rad)
        
        # Rotate around z-axis
        x = x0 * cos_theta - y0 * sin_theta
        y = x0 * sin_theta + y0 * cos_theta
        z = z0  # z-component remains the same
        
        # Cap the vector components to [-1, 1]
        x = cap_value(x, -1.0, 1.0)
        y = cap_value(y, -1.0, 1.0)
        z = cap_value(z, -1.0, 1.0)
        
        rotated_vectors.append((x, y, z))
    return rotated_vectors

def rotate_vector(vector, yaw_deg, pitch_deg, roll_deg):
    """
    3. Given a unit vector, and rotation angles for yaw, pitch, and roll,
       rotate the vector by the corresponding yaw, pitch, and roll values, and return as a tuple.
       - Yaw: Rotation around the z-axis.
       - Pitch: Rotation around the y-axis.
       - Roll: Rotation around the x-axis.
    """
    x, y, z = vector
    # Convert degrees to radians
    yaw = math.radians(yaw_deg)
    pitch = math.radians(pitch_deg)
    roll = math.radians(roll_deg)
    
    # Rotation matrices
    # Roll (around x-axis)
    cos_roll = math.cos(roll)
    sin_roll = math.sin(roll)
    R_x = [
        [1, 0, 0],
        [0, cos_roll, -sin_roll],
        [0, sin_roll, cos_roll]
    ]
    # Pitch (around y-axis)
    cos_pitch = math.cos(pitch)
    sin_pitch = math.sin(pitch)
    R_y = [
        [cos_pitch, 0, sin_pitch],
        [0, 1, 0],
        [-sin_pitch, 0, cos_pitch]
    ]
    # Yaw (around z-axis)
    cos_yaw = math.cos(yaw)
    sin_yaw = math.sin(yaw)
    R_z = [
        [cos_yaw, -sin_yaw, 0],
        [sin_yaw, cos_yaw, 0],
        [0, 0, 1]
    ]
    
    # Combine the rotation matrices: R = R_z * R_y * R_x
    def matrix_multiply(A, B):
        """Multiplies two 3x3 matrices."""
        result = [[sum(a*b for a,b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]
        return result
    
    R_zy = matrix_multiply(R_z, R_y)
    R = matrix_multiply(R_zy, R_x)
    
    # Apply the combined rotation matrix to the vector
    x_new = R[0][0]*x + R[0][1]*y + R[0][2]*z
    y_new = R[1][0]*x + R[1][1]*y + R[1][2]*z
    z_new = R[2][0]*x + R[2][1]*y + R[2][2]*z
    
    # Cap the vector components to [-1, 1]
    x_new = cap_value(x_new, -1.0, 1.0)
    y_new = cap_value(y_new, -1.0, 1.0)
    z_new = cap_value(z_new, -1.0, 1.0)
    
    return (x_new, y_new, z_new)

def unit_vector_to_lat_lon(x, y, z):
    """
    4. Given a unit vector, calculate the latitude and longitude.
       - Coordinate System:
         - Positive z-axis points towards the North Pole.
         - Longitude 0° is along the negative y-axis.
         - Longitude 90° East is along the positive x-axis.
       - Returns a tuple (latitude, longitude).
    """
    # Normalize the vector to ensure it is a unit vector
    magnitude = math.sqrt(x**2 + y**2 + z**2)
    x /= magnitude
    y /= magnitude
    z /= magnitude
    
    # Calculate latitude from z-component
    lat_rad = math.asin(z)
    lat = math.degrees(lat_rad)
    
    # Calculate longitude
    phi = math.atan2(y, x)
    lon_rad = phi + math.pi / 2  # Adjust for the coordinate system
    # Normalize longitude to be between -π and π
    if lon_rad > math.pi:
        lon_rad -= 2 * math.pi
    elif lon_rad < -math.pi:
        lon_rad += 2 * math.pi
    lon = math.degrees(lon_rad)
    
    # Cap latitude and longitude to their ranges
    lat = cap_value(lat, -90.0, 90.0)
    lon = cap_value(lon, -180.0, 180.0)
    
    return (lat, lon)

# more than 90 is nighttime, less than 90 daytime
# 90 is sunset/sunrise
# 80 is just above horizon
# 0 is smack below sun
def angle_with_x_axis(vector):
    """
    5. Given a unit vector, calculate the angle between the vector and the x-axis.
       - Returns the angle in degrees.
    """
    x, y, z = vector
    # Ensure the vector is normalized
    magnitude = math.sqrt(x**2 + y**2 + z**2)
    x /= magnitude
    y /= magnitude
    z /= magnitude
    
    # Calculate the angle using the dot product
    dot_product = x * 1 + y * 0 + z * 0  # x-axis unit vector is (1, 0, 0)
    # Cap the dot product to [-1, 1] to prevent domain errors
    dot_product = cap_value(dot_product, -1.0, 1.0)
    
    # Calculate the angle in radians and convert to degrees
    angle_rad = math.acos(dot_product)
    angle_deg = math.degrees(angle_rad)
    
    return angle_deg

# MASTER FUNC 1
# this will return the lat/lon of the unit vectors once taking into account axial tilt
# longitude 0 and 180 is where the sun rises and sets
# this assumes the earth is on the left and the sun is on the right
def orbital_lat_lon(lat, lon, yaw, pitch, roll):
    unit_vector = lat_lon_to_unit_vector(lat, lon)
    rotated_vectors = rotate_vector_around_z(unit_vector)
    tilted_vectors = [rotate_vector(v, yaw, pitch, roll) for v in rotated_vectors]
    output = []
    for i in range(360):
        a,b,c = tilted_vectors[i]
        output.append(unit_vector_to_lat_lon(a,b,c))
    return output

def calculate_north_surface_vector(V):
    """
    Given a unit vector V from the origin pointing to point P,
    calculate the unit vector K that lies on the plane perpendicular to V
    and points toward the positive z-axis from point P.

    Parameters:
    V (tuple or list): A unit vector (Vx, Vy, Vz).

    Returns:
    tuple: The unit vector K (Kx, Ky, Kz).
    """
    # Convert V to a NumPy array
    V = np.array(V, dtype=float)
    # Ensure V is a unit vector
    V = V / np.linalg.norm(V)

    # Vector W pointing from point P towards the positive z-axis
    # W = (0, 0, 1) - P = (0, 0, 1) - V
    W = np.array([0, 0, 1]) - V

    # Project W onto the plane perpendicular to V
    # The projection of W onto the plane is given by:
    # K = W - (W ⋅ V) * V
    dot_product = np.dot(W, V)
    K = W - dot_product * V

    # Normalize K to make it a unit vector
    K_norm = np.linalg.norm(K)
    if K_norm == 0:
        raise ValueError("The vector K has zero length; cannot normalize.")
    K = K / K_norm

    return tuple(K)

# so this calculates the bearing of the sun setting and rising
# just check the longitude values 0 (sun rises) and 180 (sun sets)
# if bearing is 90 it means sun is rising directly in the east
# if bearing is 270 it means its setting directly in the west
def calculate_bearing(J, K):
    # Ensure J and K are numpy arrays
    J = np.array(J)
    K = np.array(K)

    # Normalize J and K to ensure they are unit vectors
    J = J / np.linalg.norm(J)
    K = K / np.linalg.norm(K)

    # Step 1: Project K onto Plane Y (perpendicular to J)
    K_proj = K - np.dot(K, J) * J

    # Step 2: Normalize K_proj to get U (bearing 0 direction)
    U = K_proj / np.linalg.norm(K_proj)

    # Step 3: Compute V as the cross product of J and U
    V = np.cross(J, U)

    # Step 4: Project the x-axis unit vector onto Plane Y to get L
    I = np.array([1, 0, 0])  # x-axis unit vector
    L = I - np.dot(I, J) * J

    # Step 5: Compute components of L in U and V directions
    L_u = np.dot(L, U)
    L_v = np.dot(L, V)

    # Step 6: Compute the bearing θ between K and L on Plane Y
    theta = np.arctan2(L_v, L_u)  # Result in radians

    # # Optionally, convert θ to degrees
    # theta_degrees = np.degrees(theta) % 360

    # Adjust the angle to ensure it increases clockwise
    theta_clockwise = (-theta) % (2 * np.pi)  # Convert to clockwise angle

    # Convert to degrees
    theta_degrees = np.degrees(theta_clockwise)

    return theta_degrees

def rotate_point(lat, lon, yaw, pitch, roll):
    """
    Rotates a point on Earth's surface using specified yaw, pitch, and roll angles.

    Parameters:
    - lat (float): Latitude of the point in degrees.
    - lon (float): Longitude of the point in degrees.
    - yaw (float): Rotation around the Z-axis in degrees.
    - pitch (float): Rotation around the Y-axis in degrees.
    - roll (float): Rotation around the X-axis in degrees.

    Returns:
    - new_lat (float): Latitude of the rotated point in degrees.
    - new_lon (float): Longitude of the rotated point in degrees.
    """

    # Convert angles from degrees to radians
    lat_rad = math.radians(lat)
    lon_rad = math.radians(lon)
    yaw_rad = math.radians(yaw)
    pitch_rad = math.radians(pitch)
    roll_rad = math.radians(roll)

    # Convert latitude and longitude to Cartesian coordinates
    x = math.cos(lat_rad) * math.cos(lon_rad)
    y = math.cos(lat_rad) * math.sin(lon_rad)
    z = math.sin(lat_rad)

    # Rotation matrices
    def rotation_matrix_x(angle):
        return [
            [1, 0, 0],
            [0, math.cos(angle), -math.sin(angle)],
            [0, math.sin(angle),  math.cos(angle)]
        ]

    def rotation_matrix_y(angle):
        return [
            [ math.cos(angle), 0, math.sin(angle)],
            [0, 1, 0],
            [-math.sin(angle), 0, math.cos(angle)]
        ]

    def rotation_matrix_z(angle):
        return [
            [math.cos(angle), -math.sin(angle), 0],
            [math.sin(angle),  math.cos(angle), 0],
            [0, 0, 1]
        ]

    # Compute the composite rotation matrix
    Rz = rotation_matrix_z(yaw_rad)
    Ry = rotation_matrix_y(pitch_rad)
    Rx = rotation_matrix_x(roll_rad)

    # R = Rz * Ry * Rx
    def matrix_multiply(A, B):
        result = [[0]*len(B[0]) for _ in range(len(A))]
        for i in range(len(A)):
            for j in range(len(B[0])):
                for k in range(len(B)):
                    result[i][j] += A[i][k] * B[k][j]
        return result

    # First multiply Ry and Rx
    Ryx = matrix_multiply(Ry, Rx)
    # Then multiply Rz and (Ry * Rx)
    R = matrix_multiply(Rz, Ryx)

    # Apply rotation to the point
    x_rot = R[0][0]*x + R[0][1]*y + R[0][2]*z
    y_rot = R[1][0]*x + R[1][1]*y + R[1][2]*z
    z_rot = R[2][0]*x + R[2][1]*y + R[2][2]*z

    # Convert rotated Cartesian coordinates back to latitude and longitude
    hyp = math.hypot(x_rot, y_rot)
    new_lat_rad = math.atan2(z_rot, hyp)
    new_lon_rad = math.atan2(y_rot, x_rot)

    # Convert radians back to degrees
    new_lat = math.degrees(new_lat_rad)
    new_lon = math.degrees(new_lon_rad)

    return new_lat, new_lon

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

def calculate_bearing(lat, lon, vector):
    """
    Calculates the bearing of a unit vector originating from a point on Earth's surface.

    Parameters:
    - lat (float): Latitude of the point in degrees.
    - lon (float): Longitude of the point in degrees.
    - vector (tuple or list): Unit vector (Vx, Vy, Vz) in ECEF coordinates.

    Returns:
    - bearing (float): Bearing with respect to north in degrees.
                       0° is north, 90° is west, 180° is south, 270° is east.
    """

    # Convert latitude and longitude from degrees to radians
    lat_rad = math.radians(lat)
    lon_rad = math.radians(lon)

    # Calculate local ENU (East, North, Up) axes in ECEF coordinates
    # East vector (E)
    E = (-math.sin(lon_rad), math.cos(lon_rad), 0)

    # North vector (N)
    N = (-math.sin(lat_rad)*math.cos(lon_rad),
         -math.sin(lat_rad)*math.sin(lon_rad),
          math.cos(lat_rad))

    # Extract the unit vector components
    Vx, Vy, Vz = vector

    # Calculate the projection of the vector onto the East and North directions
    east_component = Vx * E[0] + Vy * E[1] + Vz * E[2]
    north_component = Vx * N[0] + Vy * N[1] + Vz * N[2]

    # Calculate the bearing from the north and east components
    # Adjust the arctangent to match the compass bearing convention
    bearing_rad = math.atan2(east_component, north_component)
    bearing_deg = (math.degrees(bearing_rad) + 360) % 360

    return bearing_deg

def angular_distance(v1, v2):
    """
    Calculate the angular distance between two vectors originating from the same point.
    
    Parameters:
    v1 (array-like): First vector.
    v2 (array-like): Second vector.
    
    Returns:
    float: Angular distance in radians.
    """
    # Convert vectors to numpy arrays if they aren't already
    v1 = np.array(v1)
    v2 = np.array(v2)
    
    # Calculate the dot product of the two vectors
    dot_product = np.dot(v1, v2)
    
    # Calculate the magnitudes (norms) of the vectors
    magnitude_v1 = np.linalg.norm(v1)
    magnitude_v2 = np.linalg.norm(v2)
    
    # Calculate the cosine of the angle
    cos_theta = dot_product / (magnitude_v1 * magnitude_v2)
    
    # Ensure the value is within the valid range for arccos due to floating point precision errors
    cos_theta = np.clip(cos_theta, -1.0, 1.0)
    
    # Calculate the angular distance (angle in radians)
    angle = np.arccos(cos_theta)
    
    return np.degrees(angle)

# Example usage
if __name__ == "__main__":
    inputs = read_inputs('input.txt')
    lat = inputs.get('lat', 0.0)
    lon = inputs.get('lon', 0.0)
    yaw = inputs.get('yaw', 0.0)
    pitch = inputs.get('pitch', 0.0)
    roll = inputs.get('roll', 0.0)

    # Function 1: Convert latitude and longitude to unit vector
    unit_vector = lat_lon_to_unit_vector(lat, lon)
    print(f"Unit Vector (dx, dy, dz): {unit_vector}")

    vn = calculate_north_surface_vector(unit_vector)
    print(f"North vector: {vn}")

    # rotate the north vector
    north_goes_to = rotate_vector(vn, yaw, pitch, roll)

    # find the new north vector
    rlat, rlon = rotate_point(lat, lon, yaw, pitch, roll)
    print(f"lon: {rlon}")
    rvec = lat_lon_to_unit_vector(rlat, rlon)
    rvn = calculate_north_surface_vector(rvec)

    # test north vector bearing (should be 0)
    bearing = calculate_bearing(lat, lon, vn)
    print(f"Bearing: {bearing}")

    # calculate the new bearing of the north vector
    bearing = calculate_bearing(lat, lon, north_goes_to)
    print(bearing)