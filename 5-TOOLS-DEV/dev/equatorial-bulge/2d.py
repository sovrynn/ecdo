from math import sin, cos, radians, degrees, atan2, sqrt
import numpy as np
import simplekml
from geopy.distance import geodesic
import math
from geopy.point import Point
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap
import matplotlib.cm as cm
import matplotlib.colors as mcolors
import geopy as geopy

def rotate_point(start_lat, start_lon, bearing, distance_km):
    # Define the start point
    start_point = Point(start_lat, start_lon)
    
    # Compute the destination point using geodesic distance
    destination_point = geodesic(kilometers=distance_km).destination(start_point, bearing)
    
    return destination_point.latitude, destination_point.longitude

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

def rotate_closer(lat_a, lon_a, lat_x, lon_x, angle):
    """
    Rotate point (lat_x, lon_x) around (lat_a, lon_a) by the given angle in degrees.
    """
    # Calculate distance and bearing from A to X
    initial_distance = geopy.distance.distance((lat_a, lon_a), (lat_x, lon_x)).km
    bearing = calculate_bearing(Point(lat_a, lon_a), Point(lat_x, lon_x))
    
    new_distance = angle / 90 * initial_distance
    
    # Calculate new point using new bearing and original distance
    new_point = geopy.distance.distance(kilometers=new_distance).destination((lat_a, lon_a), bearing)
    
    return new_point.latitude, new_point.longitude

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
    new_point = geopy.distance.distance(kilometers=initial_distance).destination(Point(lat_a, lon_a), new_bearing)
    
    return new_point.latitude, new_point.longitude

def add_point_kml(point, kml, thickness=40, color='red'):
    lons = point[1]
    lats = point[0]
    x, y = kml(lons, lats)
    # linewidth=size
    kml.plot(x, y, marker='o', color=color, linestyle='-', markersize=thickness, label='Sample Line')

COLORMAP = 'turbo_r'

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

def get_color_from_heatmap_abrupt(value, cmap_abrupt):
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
    
    # Return the color as an RGBA tuple
    color = cmap_abrupt(value)
    
    return color

def create_abrupt_gradient_colormap():
    """
    Create a custom colormap with an abrupt phase shift.
    
    Returns:
    LinearSegmentedColormap: Custom colormap with abrupt color transition.
    """
    # Define colors for the two gradients
    colors1 = [(0, 'blue'), (1, 'green')]  # Gradient from green to yellow
    colors2 = [(0, 'orange'), (1, 'red')]     # Gradient from pink to red

    # Define the positions where the gradients should transition
    n_bins = 100  # Number of bins for the gradient
    color_list = []

    # Add the first gradient
    for pos, color in colors1:
        color_list.extend([color] * int(n_bins * pos))
    
    # Add the abrupt phase shift
    color_list.extend([colors2[0][1]] * (n_bins // 2))

    # Add the second gradient
    for pos, color in colors2:
        color_list.extend([color] * int(n_bins * pos))

    # Ensure the list length is exactly n_bins
    color_list = color_list[:n_bins]

    # Create a colormap from the color list
    cmap = mcolors.LinearSegmentedColormap.from_list('abrupt_gradient', color_list, N=n_bins)
    return cmap

abrupt_cmap = create_abrupt_gradient_colormap()

def add_point_kml(point, kml, thickness=2, color='red'):
    lons = point[1]
    lats = point[0]
    x, y = kml(lons, lats)
    # linewidth=size
    kml.plot(x, y, marker='o', color=color, linestyle='-', markersize=thickness, label='Sample Line')

res = 20
fig = plt.figure(figsize=(res, res * 0.5625))

# so this changes the basemap position afaik, it creates a little box for it.
# its always going to be awkwardly away from the legend when you do this BUT
# this ensures you'll never have the map overlapping the legend
ax = fig.add_axes([0.03, 0.03, 0.90, 0.89])  # when you have a title
# ax = fig.add_axes([0.03, 0.03, 0.86, 0.94])  # OG Values
plt.axis('tight')

plt.subplots_adjust(left=0.03, bottom=0.03, right=0.97, top=0.94, wspace=0, hspace=0)

# Set the title
# plt.subplots_adjust(left=0.03, bottom=0.03, right=0.97, top=0.87, wspace=0, hspace=0)
plt.title('ECDO S1 -> S2 Equatorial Bulge Shift', fontsize=28, pad=20)

llcrnrlat=-80
urcrnrlat=80
llcrnrlon=-180
urcrnrlon=180

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

def draw_quarter_circle(p1, p2, d):
    dist = 0
    while dist < 90:
        x, y = rotate_closer(p1[0], p1[1], p2[0], p2[1], dist)
        add_point_kml((x, y), kml)
        dist += d

# TODO draw the stuffs here
def draw_great_circle(ps, d):
    draw_quarter_circle(ps[0], ps[1], d)
    draw_quarter_circle(ps[1], ps[2], d)
    draw_quarter_circle(ps[2], ps[3], d)
    draw_quarter_circle(ps[3], ps[0], d)

def generate_point_pairs(inc):
    point_pairs = []
    for i in range(0, 180, inc):
        point1 = (-90 + i, 31)
        point2 = (90 - i, -149)
        point_pairs.append((point1, point2))
    return point_pairs

def mercator_latitudes(R):
    """
    Generate R latitudes evenly spaced on a Mercator projection from 0 to 90 degrees inclusive.

    Parameters:
    R (int): Number of latitudes to generate.

    Returns:
    list of floats: List of R latitudes evenly spaced on a Mercator projection.
    """
    if R <= 0:
        raise ValueError("R must be a positive integer")
    
    # Generate evenly spaced values in the Mercator space from 0 to 1
    mercator_values = np.linspace(0, 1, R)
    
    # Convert Mercator space values to latitudes
    latitudes = []
    for value in mercator_values:
        # Calculate the corresponding latitude
        mercator_y = np.log(np.tan(np.pi / 4 + np.pi / 180 * value * 90 / 2))
        latitude = np.degrees(2 * np.arctan(np.exp(mercator_y)) - np.pi / 2)
        
        # Clip latitude to the range 0 to 90
        latitude = min(max(latitude, 0), 90)
        
        latitudes.append(latitude)
    
    return latitudes

def mercator_latitudes_with_true_scale(R, true_scale_lat=20):
    """
    Generate R latitudes evenly spaced in the Mercator projection from 0 to 90 degrees inclusive.
    Adjust for latitude of true scale.

    Parameters:
    R (int): Number of latitudes to generate.
    true_scale_lat (float): Latitude of true scale in degrees.

    Returns:
    list of floats: List of R latitudes evenly spaced on a Mercator projection.
    """
    if R <= 0:
        raise ValueError("R must be a positive integer")

    # Convert true scale latitude to radians
    true_scale_lat_rad = np.radians(true_scale_lat)

    # Generate evenly spaced values in Mercator projection space
    mercator_values = np.linspace(0, 1, R)

    # Convert Mercator space values to latitudes
    latitudes = []
    for value in mercator_values:
        # Convert Mercator space value to Mercator y, which maps from -pi/2 to pi/2
        mercator_y = 2 * np.pi * (value - 0.5)  # This maps [0, 1] to [-pi/2, pi/2]

        # Convert Mercator y to latitude
        latitude = np.degrees(2 * np.arctan(np.exp(mercator_y)) - np.pi / 2)

        # Extend range based on true scale latitude
        if latitude > true_scale_lat:
            latitude = true_scale_lat + (latitude - true_scale_lat)
        
        # Clip latitude to the range [0, 90] degrees
        latitude = min(max(latitude, 0), 90)

        if latitude != 0:
            latitudes.append(latitude)

    return latitudes

def generate_evenly_spaced_points(r, c):
    # Initialize list to store the points
    points = []
    
    # Calculate the step size for latitude and longitude
    lon_step = 360 / (c + 1)

    for i in range(c):
        lon = min(lon_step * (i + 1), 360) - 180
        lats = mercator_latitudes_with_true_scale( r)
        for lat in lats:
            points.append((lat, lon))
        lats = mercator_latitudes_with_true_scale(r)
        lats.reverse()
        for lat in lats:
            points.append((-1 * lat, lon))
    
    return points

# -90 to 90
def get_lat_dif(p):
    x, y = rotate(0, 121, p[0], p[1], 104)
    return abs(x) - abs(p[0])

def get_lat_heatmap_value(p):
    delta = get_lat_dif(p)
    return get_color_from_heatmap((delta + 90) / 180)
    # return get_color_from_heatmap_abrupt((delta + 90) / 180, abrupt_cmap)

def plot(kml, x, y):
    print('huh')
    x1, x2 = x[0], x[1]
    y1, y2 = y[0], y[1]
    kml.plot([x1, y1], [x2, y2], marker='o', color='r', linestyle='-', linewidth=10, markersize=8)

p1 = (0, 121)
p2 = (0, -59)

gc1 = [p1, (-52, 31),p2,(52, -149)]
gc2 = [p1, (38, 31), p2, (-38, -149)]

def drawgc(kml, p):
    plot(kml, p[0], p[1])
    plot(kml, p[1], p[2])
    plot(kml, p[2], p[3])
    plot(kml, p[3], p[0])

# drawgc(kml, gc1)
# drawgc(kml, gc2)

# inc_num_circs = 45
# inc_circ = 5

# pairs = generate_point_pairs(inc_num_circs)
# for pair in pairs:
#     draw_great_circle([p1, pair[0], p2, pair[1]], inc_circ)

ps = generate_evenly_spaced_points(200, 250)
# ps = generate_evenly_spaced_points(200, 250)
for p in ps:
    add_point_kml(p, kml, 2, get_lat_heatmap_value(p))


# Create an axis for the colorbar (legend) outside the map area
# cbar_ax = fig.add_axes([0.89, 0.18, 0.025, 0.56])  # Adjust the position and size here
cbar_ax = fig.add_axes([0.85, 0.18, 0.025, 0.56])  # for titles

# Create a gradient colorbar
norm = mcolors.Normalize(vmin=(-1 * 90), vmax=90)
sm = cm.ScalarMappable(cmap='turbo', norm=norm)
sm.set_array([])

# Add the colorbar
cbar = plt.colorbar(sm, cax=cbar_ax)
cbar.ax.tick_params(labelsize=12)  # Set font size for the tick labels

# cbar.set_label('km/h', fontsize=20)

# Add a title and labels to the colorbar (legend)
cbar.ax.set_title('Degrees closer\n to equator', fontsize=16, pad=24)
cbar.ax.set_yticks([-90, -60, -30, 0, 30, 60, 90])
cbar.ax.set_yticklabels(['-90', '-60', '-30', '0', '30', '60', '90'])

    # Adjust the figure layout to ensure the colorbar is not clipped
# plt.subplots_adjust(right=0.95)  # Adjust as needed to ensure enough space




OUTPUT = 'output.png'
plt.savefig(OUTPUT, format='png', dpi=300)
print(f"Saved to '{OUTPUT}'.")
# Show the plot
plt.show()