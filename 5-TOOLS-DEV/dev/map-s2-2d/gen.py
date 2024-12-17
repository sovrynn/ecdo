import cartopy.crs as ccrs
import cartopy.feature as cfeature
import matplotlib.pyplot as plt
import numpy as np

def plot_rotated_pole_cartopy(lat_pole, lon_pole):
    """
    Plots a map using the rotated_pole projection with Cartopy.
    
    :param lat_pole: Latitude of the new pole (degrees)
    :param lon_pole: Longitude of the new pole (degrees)
    """
    plt.figure(figsize=(12, 6))
    
    # Create a rotated_pole projection
    projection = ccrs.RotatedPole(pole_latitude=lat_pole, pole_longitude=lon_pole)
    
    ax = plt.axes(projection=projection)
    
    # Draw map features
    ax.coastlines()
    ax.add_feature(cfeature.BORDERS)
    ax.add_feature(cfeature.LAND, edgecolor='black')
    ax.add_feature(cfeature.OCEAN)
    
    # Optionally, add gridlines
    ax.gridlines(draw_labels=True, dms=False, x_inline=False, y_inline=False,
                 linewidth=1, color='gray', alpha=0.5)
    
    # Set title
    plt.title(f'Rotated Pole Projection\nPole at Latitude {lat_pole}°, Longitude {lon_pole}°')
    
    # Show plot
    plt.show()

def plot_rotated_pole_custom_grid(lat_pole, lon_pole):
    """
    Plots a map using the rotated_pole projection with Cartopy.
    Manually adds grid lines to appear flat and vertical relative to the rotated pole.
    
    :param lat_pole: Latitude of the new pole (degrees)
    :param lon_pole: Longitude of the new pole (degrees)
    """
    fig = plt.figure(figsize=(12, 6))
    
    # Create a rotated_pole projection with Cartopy
    projection = ccrs.RotatedPole(pole_latitude=lat_pole, pole_longitude=lon_pole)
    
    ax = plt.axes(projection=projection)
    
    # Add map features
    ax.coastlines()
    ax.add_feature(cfeature.BORDERS)
    ax.add_feature(cfeature.LAND, edgecolor='black')
    ax.add_feature(cfeature.OCEAN)
    
    # Define latitude and longitude ranges for grid lines
    latitudes = np.arange(-90, 91, 30)
    longitudes = np.arange(-180, 181, 60)

    plt.title(f'ECDO S2: Rotated Pole Projection\nPole at Latitude {lat_pole}°, Longitude {lon_pole}°')
    
    # # Plot latitude lines
    # for lat in latitudes:
    #     x, y = projection.transform_point(0, lat, src_crs=ccrs.PlateCarree())
    #     print(f"lat: {x} {y}")
    #     ax.plot([x, x], [-90, 90], color='gray', linestyle='--', linewidth=1)
    
    # # Plot longitude lines
    # for lon in longitudes:
    #     x, y = projection.transform_point(lon, 0, src_crs=ccrs.PlateCarree())
    #     print(f"lon: {x} {y}")
    #     ax.plot([-180, 180], [y, y], color='gray', linestyle='--', linewidth=1)
    
    for x in longitudes:
        ax.plot([x, x], [-90, 90], color='gray', linestyle='--', linewidth=1)

    for y in latitudes:
        ax.plot([-180, 180], [y, y], color='gray', linestyle='--', linewidth=1)


    label_ax = fig.add_axes([0.07, 0.11, 0.1, 0.76], frameon=False)  # [left, bottom, width, height]
    label_ax.set_xticks([])  # Hide x ticks
    label_ax.set_yticks([])  # Hide y ticks
    label_ax.set_xlim(-1, 1)  # Arbitrary limits to position labels
    label_ax.set_ylim(-90, 90)  # Latitude range

    # Add labels on the left side
    for y in latitudes:
        label_ax.text(0, y, f'{y}°', horizontalalignment='right', verticalalignment='center', color='black', fontsize=10)
    
    plt.show()

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

# Example usage
plot_rotated_pole_custom_grid(lat_pole=(-1 * 14), lon_pole=31)
 