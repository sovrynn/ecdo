import math

def spherical_cell_area(lat_min, lat_max, lon_min, lon_max, R=6371.0):
    """
    Approximates the area of a lat-lon box on a sphere of radius R.
    lat_min, lat_max, lon_min, lon_max in degrees
    Returns area in square kilometers.
    """
    # Convert degrees to radians
    lat_min_rad = math.radians(lat_min)
    lat_max_rad = math.radians(lat_max)
    lon_min_rad = math.radians(lon_min)
    lon_max_rad = math.radians(lon_max)

    # Calculate delta longitude and difference in sin(lat)
    delta_lon = lon_max_rad - lon_min_rad
    delta_sin_lat = math.sin(lat_max_rad) - math.sin(lat_min_rad)

    # Area formula
    area = (R**2) * abs(delta_lon) * abs(delta_sin_lat)
    return area

# Example usage
A = spherical_cell_area(0, 1, 10, 11)  # 1° x 1° cell near lat=0°, lon=10°
print(f"Approx area (km^2): {A}")

A = spherical_cell_area(30, 31, 10, 11)  # 1° x 1° cell near lat=0°, lon=10°
print(f"Approx area (km^2): {A}")

A = spherical_cell_area(60, 61, 10, 11)  # 1° x 1° cell near lat=0°, lon=10°
print(f"Approx area (km^2): {A}")

A = spherical_cell_area(70, 71, 10, 11)  # 1° x 1° cell near lat=0°, lon=10°
print(f"Approx area (km^2): {A}")
A = spherical_cell_area(80, 81, 10, 11)  # 1° x 1° cell near lat=0°, lon=10°
print(f"Approx area (km^2): {A}")
A = spherical_cell_area(0, 0.5, 10, 10.5)  # 1° x 1° cell near lat=0°, lon=10°
print(f"Approx area (km^2): {A}")
A = spherical_cell_area(-90, -89, -180, -179)  # 1° x 1° cell near lat=0°, lon=10°
print(f"Approx area (km^2): {A}")

A = spherical_cell_area(10, 11, 10, 11)  # 1° x 1° cell near lat=0°, lon=10°
print(f"Approx area (km^2): {A}")