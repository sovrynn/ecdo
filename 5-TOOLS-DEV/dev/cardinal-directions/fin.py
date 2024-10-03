from math import sin, cos, radians, degrees, atan2, sqrt
import numpy as np
import simplekml
from geopy.distance import geodesic
import math
from geopy.point import Point
from geopy.distance import distance

def wrap(lat, lon):
	if lat > 90:
		lat = 90 - (lat - 90)
	if lat < -90:
		lat = -90 + (-90 - lat)
	if lon > 180:
		lon = 180 - (lon - 180)
	if lon < -180:
		lon = -180 + (-180 - lat)
	return (lat, lon)

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

def calculate_rhumb_bearing(origin_lat, origin_lon, dest_lat, dest_lon):
    """
    Calculate the rhumb line (constant bearing) bearing from origin to destination.

    Parameters:
    - origin_lat (float): Latitude of the origin point in degrees.
    - origin_lon (float): Longitude of the origin point in degrees.
    - dest_lat (float): Latitude of the destination point in degrees.
    - dest_lon (float): Longitude of the destination point in degrees.

    Returns:
    - bearing (float): Rhumb line bearing from origin to destination in degrees.
                       The bearing is normalized to 0° ≤ bearing < 360°.
    """
    if origin_lat == dest_lat and origin_lon == dest_lon:
        return None  # Bearing is undefined

    # Convert degrees to radians
    phi1 = math.radians(origin_lat)
    phi2 = math.radians(dest_lat)
    delta_lambda = math.radians(dest_lon - origin_lon)

    # Handle longitude crossing the antimeridian
    if delta_lambda > math.pi:
        delta_lambda -= 2 * math.pi
    elif delta_lambda < -math.pi:
        delta_lambda += 2 * math.pi

    # Calculate delta psi for Mercator projection
    delta_psi = math.log(math.tan(phi2 / 2 + math.pi / 4) / math.tan(phi1 / 2 + math.pi / 4))

    # Calculate the bearing
    bearing = math.degrees(math.atan2(delta_lambda, delta_psi))

    # Normalize bearing to 0° ≤ bearing < 360°
    bearing = (bearing + 360) % 360

    return bearing

# rotate
# calculate bearing
LAT = 22.5
LON = 30.73
nlat, nlon = wrap(LAT + 1, LON)
n2lat, n2lon = wrap(LAT + 10, LON)

rLAT, rLON = rotate(0, 121, LAT, LON, 104)
# newnlat, newnlon = wrap(rLAT + 1, 31)
rnlat, rnlon = rotate(0, 121, nlat, nlon, 104)
rn2lat, rn2lon = rotate(0, 121, n2lat, n2lon, 104)

print(f"Point: {LAT} {LON}")
print(f"Rotated point: {rLAT} {rLON}")
print(f"Rotated north reference: {rnlat} {rnlon}")

print(f"s2 rhumb bearing to old north: {calculate_rhumb_bearing(rLAT, rLON, rnlat, rnlon)}")
