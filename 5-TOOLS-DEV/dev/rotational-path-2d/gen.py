from math import sin, cos, radians, degrees, atan2, sqrt
import numpy as np
import simplekml
from geopy.distance import geodesic
import math
from geopy.point import Point
from geopy.distance import distance
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap
import matplotlib.cm as cm
import matplotlib.colors as mcolors

'''
Even more perfect anti-example of clean code.
'''

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

def split_by_180_meridian(points):
    """
    Split a list of lat/lon points into sublists such that no sublist crosses the 180° E meridian.
    
    Parameters:
    - points: List of tuples, where each tuple is (latitude, longitude).
    
    Returns:
    - A list of lists, where each sublist contains points that do not cross the 180° E meridian.
    """
    def crosses_180(lon1, lon2):
        """
        Check if a line segment crosses the 180° E meridian.
        """
        # Normalize longitudes to the range [-180, 180]
        lon1 = ((lon1 + 180) % 360) - 180
        lon2 = ((lon2 + 180) % 360) - 180
        return (lon1 > 0 > lon2) or (lon2 > 0 > lon1)
    
    result = []
    current_segment = []
    
    for i in range(len(points) - 1):
        current_segment.append(points[i])
        lon1 = points[i][1]
        lon2 = points[i + 1][1]
        
        if crosses_180(lon1, lon2):
            # Add the next point to the current segment and end the segment
            # current_segment.append(points[i + 1])
            result.append(current_segment)
            current_segment = []
    
    # Add the last segment
    if current_segment:
        current_segment.append(points[-1])
        result.append(current_segment)
    
    return result

def add_to_m_no_check(m, points, color, thickness):
    """
    Adds a LineString to a KML object with the given points, color, and thickness.
    
    Args:
        kml_obj (simplekml.Kml): The KML object to add the LineString to.
        points (list of tuples): List of (latitude, longitude) tuples defining the LineString.
        color (str): Color in KML format (e.g., 'ff0000ff' for red).
        thickness (float): Thickness of the LineString line.
    """
    # Create a LineString
    lons = [point[1] for point in points]
    lats = [point[0] for point in points]
    x, y = m(lons, lats)
    m.plot(x, y, marker='', color=color, linestyle='-', linewidth=thickness, markersize=5, label='Sample Line')

def add_linestring_to_kml(kml_obj, points, color, thickness):
    points = split_by_180_meridian(points)
    for pointz in points:
        add_to_m_no_check(kml_obj, pointz, color, thickness)

def add_point_kml(point, kml, thickness, color='red'):
    lons = point[1]
    lats = point[0]
    x, y = kml(lons, lats)
    # linewidth=size
    kml.plot(x, y, marker='o', color=color, linestyle='-', markersize=thickness, label='Sample Line')

def add_xpoint_kml(point, kml, length, thickness):
    lons = point[1]
    lats = point[0]
    x, y = kml(lons, lats)
    # linewidth=size
    kml.plot(x, y, marker='x', color='red', linestyle='-', markeredgewidth=thickness, markersize=length, label='Sample Line')

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

def haversine(lat1, lon1, lat2, lon2):
    """
    Calculate the great-circle distance between two points 
    on the Earth's surface specified by latitude and longitude.
    
    Parameters:
    - lat1, lon1: Latitude and longitude of the first point (in degrees).
    - lat2, lon2: Latitude and longitude of the second point (in degrees).
    
    Returns:
    - Distance between the two points in kilometers.
    """
    
    # Radius of the Earth in kilometers
    R = 6371.0
    
    # Convert latitude and longitude from degrees to radians
    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)
    
    # Compute differences
    dlat = lat2_rad - lat1_rad
    dlon = lon2_rad - lon1_rad
    
    # Haversine formula
    a = math.sin(dlat / 2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    # Compute the distance
    distance = R * c
    
    return distance

def get_pivot_ratio(lat, lon):
    half_circ = 10020
    dist = min(haversine(lat, lon, 0, 121), haversine(lat, lon, 0, -59))

    ratio = dist/half_circ

    return ratio



'''
not just coords, KML reorders RGB. lovely...
'''
BO = "#fff200"
RED = "#ff0000"

LB = "#00c8ff"
# LB = "ffeaff00"
DB = "#0099ff"

GREEN = "#00ff00"
MG = "#00e842"

PINK = "#f525e4"
YELLOW = "#ffff00"
DY = "#ebc107"
BLUE = "#00A5FF"
DG = "#02a831"
PURPLE = "#7f00ff"
ORANGE = "#ffAC1c"
THICK = 5
THIN = 2


# default values
ew = "east"
x = 30
y = 31
llcrnrlat=-80
urcrnrlat=80
llcrnrlon=-180
urcrnrlon=180
rlat = 160
rlon = 360
j = 1
k = 500
t = 1
fullrot = 360
use_marker = "y"
marker_size = 10


try:
    with open('input.txt', 'r') as file:
        # Attempt to read and process each line
        x = float(file.readline().strip().split()[0])
        y = float(file.readline().strip().split()[0])
        print(f"Rotating point ({x}, {y}).")
        rlat = float(file.readline().strip().split()[0])
        rlon = float(file.readline().strip().split()[0])
        j = int(file.readline().strip().split()[0])
        print(f"Adding {j} pairs of extra lines.")
        k = int(file.readline().strip().split()[0])
        print(f"Spacing the lines at {k} km.")

        print('erm')
        fullrot = int(file.readline().strip().split()[0])
        print(fullrot)
        if fullrot not in [104, 360]:
            fullrot = 104
            raise ValueError()
        print('hrm')
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

llcrnrlat = max(x - rlat, llcrnrlat)
urcrnrlat = min(x + rlat, urcrnrlat)
llcrnrlon = max(y - rlon, llcrnrlon)
urcrnrlon = min(y + rlon, urcrnrlon)

# Create a new figure
res = 20
fig = plt.figure(figsize=(res, res * 0.5625))

# so this changes the basemap position afaik, it creates a little box for it.
# its always going to be awkwardly away from the legend when you do this BUT
# this ensures you'll never have the map overlapping the legend
ax = fig.add_axes([0.03, 0.03, 0.86, 0.94])  # Adjust these values as needed


# ax = plt.subplot(111,aspect = 'equal')
plt.axis('tight')

plt.subplots_adjust(left=0.03, bottom=0.03, right=0.97, top=0.94, wspace=0, hspace=0)

# Set the title
# plt.title('ECDO S1 -> S2 Rotation Path and Speed (6 hr rotation)', fontsize=28, pad=20)

# Set up the Basemap with the 'ortho' projection
# m = Basemap(projection='ortho', lat_0=0, lon_0=0)

# m = Basemap(projection='cyl', llcrnrlat=-60, urcrnrlat=90,
#             llcrnrlon=-180, urcrnrlon=180, resolution='c')

# llcrnrlat,llcrnrlon,urcrnrlat,urcrnrlon
# are the lat/lon values of the lower left and upper right corners
# of the map.
# lat_ts is the latitude of true scale.
# resolution = 'c' means use crude resolution coastlines. l = low, i = intermediate
kml = Basemap(projection='merc', llcrnrlat=llcrnrlat, urcrnrlat=urcrnrlat,
            llcrnrlon=llcrnrlon, urcrnrlon=urcrnrlon, lat_ts=20, resolution='l')

# Draw coastlines and countries
kml.drawcoastlines()
kml.drawcountries()

color = "#e6e6e6"
ocean_color = '#d4f7fa'

# Draw map boundary and fill it with a color
kml.drawmapboundary(fill_color=ocean_color)

# Fill continents with a color
kml.fillcontinents(color=color, lake_color=ocean_color)

# Draw the grid lines
kml.drawparallels(range(-90, 91, 30), labels=[1,0,0,0])
kml.drawmeridians(range(-180, 181, 60), labels=[0,0,0,1])

elat = 0
elon = 121
wlat = 0
wlon = -59

right = 104
left = 104

a = elat
b = elon

THICK = t
THIN = t
WTHICK = t
WTHIN = t
# THIN = 0.4 * t
# WTHICK = 0.8 * t
# WTHIN = 0.4 * t

# THICK = 2
# THIN = 1.5
# WTHICK = 2
# WTHIN = 1.5

if ew not in ["east", "west"]:
  raise ValueError("First line should either be 'east' or 'west' (without quotes)")

dest = "hallo"
if ew == "east":
    dest = (rotate_point(a, b, x, y, right, 0))[-1]
else:
    a = wlat
    b = wlon
    left, right = right, left
    dest = (rotate_point(a, b, x, y, 0, left))[0]

TICK_LS = 150
TICK_LB = 200
TICK_WS = 2
TICK_WB = 2.5

def add_tick(lat, lon, len, thick, color):
    e1 = move_point_closer(a, b, lat, lon, len / 2)
    e2 = move_point_closer(a, b, lat, lon, -1 * len / 2)
    add_linestring_to_kml(kml, [e1, e2], color, thick)

COLORMAP = 'turbo'

def get_color_from_heatmap(value):
    """
    Get a color from the heatmap colormap based on a normalized value.
    
    Parameters:
    - value: A number between 0 and 1.
    - colormap: Name of the colormap to use (e.g., 'viridis', 'plasma').
    
    Returns:
    - A color corresponding to the normalized value from the colormap.
    """
    # Ensure the value is within the range [0, 1]
    if not (0 <= value <= 1):
        print(value)
        raise ValueError("Value must be between 0 and 1")
    
    # Get the colormap
    cmap = cm.get_cmap(COLORMAP)
    
    # Return the color as an RGBA tuple
    color = cmap(value)
    
    return color


def add_to_kml(a, b, x, y, m, n, kml, color, thickness):
    points = rotate_point(a, b, x, y, m, n)
    # cool viz effect
    ratio = get_pivot_ratio(x, y)
    color_ratio = -1 * ratio + 1
    color = get_color_from_heatmap(color_ratio)
    add_linestring_to_kml(kml, points, color, thickness)
    # quadrants = len(points) / 4
    # for i in range(1, 4):
    #     point = points[int(quadrants * i)]
    #     if i == 2:
    #         add_tick(point[0], point[1], TICK_LB, TICK_WB, color)
    #     else:
    #         add_tick(point[0], point[1], TICK_LS, TICK_WS, color)
    return points

'''
plotting the big and small lines
'''

MAINF = RED
SF = MAINF

MAINB = '#2eabff'
SB = MAINB

MAINDF = MAINB
SDF = MAINDF

dest = (0,0)

def plot_triple_lines(a, b, x, y, right, left, kml, RED, GREEN, PINK, DB, MG, LB, WTHICK, WTHIN, THICK, THIN, k, j):
    # -1 here instead of 0 to add space for the cross
    points = add_to_kml(a, b, x, y, right, 0, kml, MAINF, THICK) # main location
    add_to_kml(a, b, x, y, 0, left, kml, MAINB, WTHICK) # backwards
    dest = points[-1] # saving to plot it
    add_to_kml(a, b, points[-1][0], points[-1][1], right, 0, kml, MAINDF, WTHICK)
    for i in range(1, j + 1):
        # towards pivot
        center1 = move_point_closer(a, b, x, y, k * i)
        points = add_to_kml(a, b, center1[0], center1[1], right, 0, kml, SF, THIN) # forward lines
        add_to_kml(a, b, center1[0], center1[1], 0, left, kml, SB, WTHIN) #backward
        add_to_kml(a, b, points[-1][0], points[-1][1], right, 0, kml, SDF, WTHIN) #green

        # away from pivot
        center2 = move_point_closer(a, b, x, y, -1 * (k * i))
        points = add_to_kml(a, b, center2[0], center2[1], right, 0, kml, SF, THIN) #forward
        add_to_kml(a, b, center2[0], center2[1], 0, left, kml, SB, WTHIN) #backward
        add_to_kml(a, b, points[-1][0], points[-1][1], right, 0, kml, SDF, WTHIN) # green

    return dest

def plot_360_lines(a, b, x, y, right, left, kml, RED, GREEN, PINK, DB, MG, LB, WTHICK, WTHIN, THICK, THIN, k, j):
    # -1 here instead of 0 to add space for the cross
    points = add_to_kml(a, b, x, y, right, 0, kml, MAINF, THICK) # main location
    add_to_kml(a, b, x, y, 0, 261, kml, MAINB, WTHICK) # backwards
    dest = rotate_point(a, b, x, y, 104, 0)[-1]
    for i in range(1, j + 1):
        # towards pivot
        center1 = move_point_closer(a, b, x, y, k * i)
        points = add_to_kml(a, b, center1[0], center1[1], right, 0, kml, MAINF, THIN) # forward lines
        add_to_kml(a, b, center1[0], center1[1], 0, 261, kml, MAINB, WTHIN) #backward
        # add_point_kml(center1,kml, marker_size * 0.2)

        # away from pivot
        center2 = move_point_closer(a, b, x, y, -1 * (k * i))
        points = add_to_kml(a, b, center2[0], center2[1], right, 0, kml, MAINF, THIN) #forward
        add_to_kml(a, b, center2[0], center2[1], 0, 261, kml, MAINB, WTHIN) #backward
        # add_point_kml(center2,kml, marker_size * 0.2)
    return dest

if fullrot == 104:
    dest = plot_triple_lines(a, b, x, y, right, left, kml, RED, GREEN, PINK, DB, MG, LB, WTHICK, WTHIN, THICK, THIN, k, j)
else:
    dest = plot_360_lines(a, b, x, y, right, left, kml, RED, GREEN, PINK, DB, MG, LB, WTHICK, WTHIN, THICK, THIN, k, j)

# length, thickness
add_point_kml((0, 121),kml, marker_size)
add_point_kml((0, -59), kml, marker_size)
if use_marker:
    add_point_kml((x,y),kml, marker_size)
    add_point_kml(dest,kml, marker_size, 'blue')


# plt.subplots_adjust(right=0.85)  # Adjust as needed to ensure enough space



# Create an axis for the colorbar (legend) outside the map area
cbar_ax = fig.add_axes([0.89, 0.18, 0.025, 0.56])  # Adjust the position and size here

# Create a gradient colorbar
norm = mcolors.Normalize(vmin=0, vmax=1927)
sm = cm.ScalarMappable(cmap='turbo_r', norm=norm)
sm.set_array([])

# Add the colorbar
cbar = plt.colorbar(sm, cax=cbar_ax)
cbar.ax.tick_params(labelsize=12)  # Set font size for the tick labels

# cbar.set_label('km/h', fontsize=20)

# Add a title and labels to the colorbar (legend)
cbar.ax.set_title('Rotation\n Speed (6 hr)\n in km/h', fontsize=16, pad=24)
cbar.ax.set_yticks([0, 250, 500, 750, 1000, 1250, 1500, 1750, 1927])
cbar.ax.set_yticklabels(['0', '250', '500', '750','1000', '1250', '1500', '1750', '1927'])

    # Adjust the figure layout to ensure the colorbar is not clipped
# plt.subplots_adjust(right=0.95)  # Adjust as needed to ensure enough space




OUTPUT = 'output.png'
plt.savefig(OUTPUT, format='png', dpi=300)
print(f"Saved to '{OUTPUT}'.")
# Show the plot
plt.show()

