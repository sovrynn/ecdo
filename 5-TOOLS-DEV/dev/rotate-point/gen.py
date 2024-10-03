from math import sin, cos, radians, degrees, atan2, sqrt
import numpy as np
import simplekml
from geopy.distance import geodesic
import math
from geopy.point import Point
from geopy.distance import distance

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

a = 0
b = 121
x = 22.51
y = 30.73

j,k = rotate(a, b, x, y, 104)
print(f"Rotated point: ({j}, {k})")