from math import sin, cos, radians, degrees, atan2, sqrt
import numpy as np
import simplekml
from geopy.distance import geodesic
import math
from geopy.point import Point
from geopy.distance import distance


def rotate_point(lat_a, lon_a, lat_x, lon_x, M, N):
    """
    Rotate point (lat_x, lon_x) around point (lat_a, lon_a) by M degrees clockwise and N degrees counterclockwise.
    
    :param lat_a: Latitude of point A (center of rotation)
    :param lon_a: Longitude of point A
    :param lat_x: Latitude of point X (point to rotate)
    :param lon_x: Longitude of point X
    :param M: Number of degrees to rotate clockwise
    :param N: Number of degrees to rotate counterclockwise
    :return: A list of tuples (new_lat, new_lon) representing the new points' coordinates
    """
    def rotate(lat_a, lon_a, lat_x, lon_x, angle):
        """
        Rotate point (lat_x, lon_x) around (lat_a, lon_a) by the given angle in degrees.
        """
        # Calculate distance and bearing from A to X
        initial_distance = geodesic((lat_a, lon_a), (lat_x, lon_x)).km
        bearing = calculate_bearing(Point(lat_a, lon_a), Point(lat_x, lon_x))
        
        # New bearing
        new_bearing = (bearing + angle) % 360
        
        # Calculate new point using new bearing and original distance
        new_point = distance(kilometers=initial_distance).destination(Point(lat_a, lon_a), new_bearing)
        
        return new_point.latitude, new_point.longitude
    
    def calculate_bearing(start_point, end_point):
        """
        Calculate the initial bearing from start_point to end_point.
        """
        lat1, lon1 = map(math.radians, [start_point.latitude, start_point.longitude])
        lat2, lon2 = map(math.radians, [end_point.latitude, end_point.longitude])
        
        d_lon = lon2 - lon1
        y = math.sin(d_lon) * math.cos(lat2)
        x = (math.cos(lat1) * math.sin(lat2) - 
             math.sin(lat1) * math.cos(lat2) * math.cos(d_lon))
        bearing = math.atan2(y, x)
        return (math.degrees(bearing) + 360) % 360
    
    # List to hold the results
    result_points = []
    
    # Generate points from M degrees clockwise to N degrees counterclockwise
    for angle in range(-N, M + 1):
        new_lat, new_lon = rotate(lat_a, lon_a, lat_x, lon_x, angle)
        result_points.append((new_lat, new_lon))
    
    return result_points

'''
Reversing lat/lon is just ridiculous
'''
def add_linestring_to_kml(kml_obj, points, color, thickness):
    """
    Adds a LineString to a KML object with the given points, color, and thickness.
    
    Args:
        kml_obj (simplekml.Kml): The KML object to add the LineString to.
        points (list of tuples): List of (latitude, longitude) tuples defining the LineString.
        color (str): Color in KML format (e.g., 'ff0000ff' for red).
        thickness (float): Thickness of the LineString line.
    """
    # Create a LineString
    rev_points = [reverse(point) for point in points]
    linestring = kml_obj.newlinestring(coords=rev_points)
    
    # Define style for the LineString
    linestring.style.linestyle.color = color
    linestring.style.linestyle.width = thickness

def add_cross_to_kml(kml, point, color, r, thickness):
    point = reverse(point)
    line1 = [(point[0] + r, point[1]), (point[0] - r, point[1])]
    line2 = [(point[0], point[1] + r), (point[0], point[1] - r)]
    linestring = kml.newlinestring(coords=line1)
    linestring.style.linestyle.color = color
    linestring.style.linestyle.width = thickness
    linestring = kml.newlinestring(coords=line2)
    linestring.style.linestyle.color = color
    linestring.style.linestyle.width = thickness

def add_diag_cross_to_kml(kml, point, color, r, thickness):
    point = reverse(point)
    line1 = [(point[0] + r, point[1] + r), (point[0] - r, point[1] - r)]
    line2 = [(point[0] - r, point[1] + r), (point[0] + r, point[1] - r)]
    linestring = kml.newlinestring(coords=line1)
    linestring.style.linestyle.color = color
    linestring.style.linestyle.width = thickness
    linestring = kml.newlinestring(coords=line2)
    linestring.style.linestyle.color = color
    linestring.style.linestyle.width = thickness

'''
deprecated
'''
def create_kml(points, filename):
    """
    Create a KML file with red dots at the specified points.
    
    Args:
    - points: List of tuples with latitude and longitude of points.
    - filename: Name of the output KML file.
    """
    kml = simplekml.Kml()
    
    for lat, lon in points:
        # Add a point to the KML
        point = kml.newpoint(name="Point", coords=[(lon, lat)])
        point.style.iconstyle.color = simplekml.Color.red  # Red color
        point.style.iconstyle.scale = 2.0  # Increase point size

        icon_url = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png'
        point.style.iconstyle.icon.href = icon_url

    # Save KML file
    kml.save(filename)

def add_point_kml(point, kml, size):
    name = f"({point[0]:.1f}, {point[1]:.1f})"
    point = kml.newpoint(name=name, coords=[(point[1], point[0])])
    point.style.iconstyle.color = simplekml.Color.red  # Red color
    point.style.iconstyle.scale = size  # Increase point size
    # point.style.iconstyle.scale = 10

    icon_url = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png'
    point.style.iconstyle.icon.href = icon_url

'''
hilarious
'''
def reverse(point):
    return (point[1], point[0])

'''
Needed to make our extra lines
'''

def calculate_bearing(start_point, end_point):
    """
    Calculate the initial bearing from start_point to end_point.
    """
    lat1, lon1 = map(math.radians, [start_point.latitude, start_point.longitude])
    lat2, lon2 = map(math.radians, [end_point.latitude, end_point.longitude])
    
    d_lon = lon2 - lon1
    y = math.sin(d_lon) * math.cos(lat2)
    x = (math.cos(lat1) * math.sin(lat2) - 
         math.sin(lat1) * math.cos(lat2) * math.cos(d_lon))
    bearing = math.atan2(y, x)
    return (math.degrees(bearing) + 360) % 360

def move_point_closer(lat_x, lon_x, lat_a, lon_a, K):
    """
    Moves a point (lat_x, lon_x) K kilometers closer to (lat_a, lon_a).
    If K is negative, moves the point further away from (lat_a, lon_a).
    
    :param lat_a: Latitude of point A
    :param lon_a: Longitude of point A
    :param lat_x: Latitude of point X
    :param lon_x: Longitude of point X
    :param K: Distance in kilometers to move closer (positive) or further away (negative)
    :return: A tuple (new_lat, new_lon) representing the new point's coordinates
    """
    # Create Point objects
    point_a = Point(lat_a, lon_a)
    point_x = Point(lat_x, lon_x)
    
    # Calculate the bearing from X to A
    bearing = calculate_bearing(point_x, point_a)
    
    # Calculate the initial distance from X to A
    initial_distance = geodesic(point_x, point_a).km
    
    # Calculate the new distance
    new_distance = initial_distance - K
    
    # Handle case where new distance would be negative
    if new_distance < 0:
        raise ValueError("Distance K is too large, resulting in a negative distance.")
    
    # Calculate the new point that is new_distance away from point X in the direction of point A
    new_point = distance(kilometers=new_distance).destination(point_x, bearing)
    
    return new_point.latitude, new_point.longitude

def insert_lookat_into_kml(kml_filename, lat, lon, altitude=0, range=12000000):
    """
    Inserts a <LookAt> element into a KML file right after the <Document> tag.

    :param kml_filename: Path to the KML file.
    :param lat: Latitude to center the view on.
    :param lon: Longitude to center the view on.
    :param altitude: Altitude above the ground (default is 1000 meters).
    :param range: Distance from the point to the camera (default is 5000 meters).
    """
    # Define the LookAt XML element
    look_at = f"""
    <LookAt xmlns="http://www.opengis.net/kml/2.2">
        <longitude>{lon}</longitude>
        <latitude>{lat}</latitude>
        <altitude>{altitude}</altitude>
        <heading>15</heading>
        <tilt>30</tilt>
        <range>{range}</range>
    </LookAt>
    """
    
    # Read the existing KML file
    with open(kml_filename, 'r', encoding='utf-8') as file:
        kml_content = file.read()

    # Find the position to insert the LookAt element
    insert_pos = kml_content.find('</Document>')
    if insert_pos == -1:
        raise ValueError("Cannot find the end of the Document tag in the KML file.")
    
    # Insert LookAt element right after the </Document> tag
    kml_content = kml_content[:insert_pos] + look_at + kml_content[insert_pos:]
    
    # Write the modified KML back to the file
    with open(kml_filename, 'w', encoding='utf-8') as file:
        file.write(kml_content)

kml = simplekml.Kml()
OUTPUT = "output.kml"

'''
not just coords, KML reorders RGB. lovely...
'''
RED = "ff0000ff"
YELLOW = "ff00ffff"
DY = "ff07c1eb"
BLUE = "ffFFA500"
GREEN = "ff00ff00"
MG = "ff42e800"
DG = "FF31a802"
PURPLE = "ffff007f"
ORANGE = "ff1CACFF"
BO = "ff00d0ff"
THICK = 5
THIN = 2

LB = "ffffc800"
# LB = "ffeaff00"
DB = "ffff9900"

# default values
x = 30
y = 31
j = 1
k = 500
t = 3
use_marker = "y"
marker_size = 2.4

try:
    with open('input.txt', 'r') as file:
        # Attempt to read and process each line
        x = float(file.readline().strip().split()[0])
        y = float(file.readline().strip().split()[0])
        print(f"Rotating point ({x}, {y}).")
        j = int(file.readline().strip().split()[0])
        print(f"Adding {j} pairs of extra lines.")
        k = float(file.readline().strip().split()[0])
        print(f"Spacing the lines at {k} km.")
        t = float(file.readline().strip().split()[0])
        print(f"Using a line thickness of {t}.")
        use_marker = file.readline().strip().split()[0]
        if use_marker == "n":
            print("No marker will be placed.")
        elif use_marker == "y":
            print("Placing a marker at the rotating location.")
        else:
            use_marker = "y"
            raise ValueError()
        if use_marker == "y":
            marker_size = float(file.readline().strip().split()[0])
            print(f"Using a marker size of {marker_size}.")

except FileNotFoundError:
    print("Warning: 'input.txt' not found, using default values. Use 'input.txt' to customize the parameters.")

except ValueError:
    # Handle case where conversion to float or int fails
    print("Warning: Not all values provided, using default values for the remaining parameters.")

elat = 0
elon = 121
wlat = 0
wlon = -59

right = 104
left = 104

a = elat
b = elon

THICK = t
THIN = 0.4 * t
WTHICK = 0.8 * t
WTHIN = 0.4 * t

dest = (rotate_point(a, b, x, y, right, 0))[-1]

TICK_LS = 150
TICK_LB = 200
TICK_WS = 2
TICK_WB = 2.5

def add_tick(kml, lat, lon, len, thick, color):
    e1 = move_point_closer(a, b, lat, lon, len / 2)
    e2 = move_point_closer(a, b, lat, lon, -1 * len / 2)
    add_linestring_to_kml(kml, [e1, e2], color, thick)

def add_ticks(kml, points, color):
    quadrants = len(points) / 10
    for i in range(1, 10):
        point = points[int(quadrants * i)]
        if i == 2:
            add_tick(kml, point[0], point[1], TICK_LB, TICK_WB, color)
        else:
            add_tick(kml, point[0], point[1], TICK_LS, TICK_WS, color)

def add_to_kml(a, b, x, y, m, n, kml, color, thickness):
    points = rotate_point(a, b, x, y, m, n)
    add_linestring_to_kml(kml, points, color, thickness)

    # add_ticks(kml, points, color)
    return points



'''
plotting the big and small lines
'''
# -1 here instead of 0 to add space for the cross
points = add_to_kml(a, b, x, y, right, 0, kml, BO, THICK) # main location
add_to_kml(a, b, x, y, 0, left, kml, LB, WTHICK) # backwards
add_to_kml(a, b, points[-1][0], points[-1][1], right, 0, kml, GREEN, WTHICK)
for i in range(1, j + 1):
    # towards pivot
    center1 = move_point_closer(a, b, x, y, k * i)
    points = add_to_kml(a, b, center1[0], center1[1], right, 0, kml, RED, THIN) # forward lines
    add_to_kml(a, b, center1[0], center1[1], 0, left, kml, DB, WTHIN) #backward
    add_to_kml(a, b, points[-1][0], points[-1][1], right, 0, kml, MG, WTHIN)

    # away from pivot
    center2 = move_point_closer(a, b, x, y, -1 * (k * i))
    points = add_to_kml(a, b, center2[0], center2[1], right, 0, kml, RED, THIN) #forward
    add_to_kml(a, b, center2[0], center2[1], 0, left, kml, DB, WTHIN) #backward
    add_to_kml(a, b, points[-1][0], points[-1][1], right, 0, kml, MG, WTHIN)

CROSS_THICK = 5

add_cross_to_kml(kml, (elat, elon), RED, 2, CROSS_THICK) #pivots
add_cross_to_kml(kml, (wlat, wlon), RED, 2, CROSS_THICK)
POINTER_SIZE = 2.4
if use_marker == "y":
    add_point_kml((x, y), kml, marker_size)


kml.save(OUTPUT)
print("Successfully wrote output KML file to " + OUTPUT + ".")

insert_lookat_into_kml(OUTPUT, x, y)
