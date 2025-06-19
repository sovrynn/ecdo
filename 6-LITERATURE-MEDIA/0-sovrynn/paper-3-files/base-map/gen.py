#!/usr/bin/env python3
"""
Script to plot coordinates from three files on a Lambert Conformal map.
Usage: python map_plotter.py file1.txt file2.txt file3.txt
Each file should contain latitude and longitude per line, space-separated.
"""
import sys
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import cartopy.feature as cfeature

# Parameters
# Define marker icons, colors, sizes, and labels for each input file
MARKER_SPECS = [
    {'icon': 'o', 'color': 'red',   'size': 50,  'label': 'Underground Bases'},
    {'icon': '^', 'color': 'blue',  'size': 80,  'label': 'Undersea Bases'},
    {'icon': 'o', 'color': 'yellow', 'size': 100, 'label': 'Submarine Tunnels'},
]
# Title of the map
TITLE = 'Map Title'
# Buffer around points in degrees (0 = tightest fit)
BUFFER_DEG = 5

# Validate input arguments
if len(sys.argv) != 4:
    print(f"Usage: {sys.argv[0]} file1 file2 file3")
    sys.exit(1)

# Function to read coordinates (latitude longitude) from a file
def read_coords(filename):
    coords = []
    with open(filename) as f:
        for line in f:
            parts = line.strip().split()
            if len(parts) >= 2:
                lat, lon = map(float, parts[:2])  # expect lat lon
                coords.append((lon, lat))        # store as (lon, lat)
    return coords

# Read datasets and aggregate coordinates
all_coords = []
datasets = []
for filename in sys.argv[1:]:
    coords = read_coords(filename)
    if not coords:
        print(f"Warning: No coordinates found in {filename}")
    datasets.append(coords)
    all_coords.extend(coords)

if not all_coords:
    print("No coordinates to plot. Exiting.")
    sys.exit(1)

# Compute map extent based on aggregated coordinates
lons = [c[0] for c in all_coords]
lats = [c[1] for c in all_coords]
min_lon, max_lon = min(lons), max(lons)
min_lat, max_lat = min(lats), max(lats)
buffer = BUFFER_DEG
extent = [min_lon - buffer, max_lon + buffer, min_lat - buffer, max_lat + buffer]
central_lon = (min_lon + max_lon) / 2
central_lat = (min_lat + max_lat) / 2

# Set up Lambert Conformal map projection
# Use lat extremes as standard parallels within valid [-90, 90]
std_parallels = (max(min_lat, -89.9), min(max_lat, 89.9))
proj = ccrs.LambertConformal(
    central_longitude=central_lon,
    central_latitude=central_lat,
    standard_parallels=std_parallels
)

fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(1, 1, 1, projection=proj)
ax.set_extent(extent, crs=ccrs.PlateCarree())

# Add map features
ax.add_feature(cfeature.LAND, facecolor='lightgray')
ax.add_feature(cfeature.OCEAN, facecolor='lightblue')
ax.add_feature(cfeature.COASTLINE)
ax.add_feature(cfeature.BORDERS, linestyle=':')

# Plot points from each dataset
for coords, spec in zip(datasets, MARKER_SPECS):
    if coords:
        xs = [c[0] for c in coords]
        ys = [c[1] for c in coords]
        ax.scatter(xs, ys,
                   transform=ccrs.PlateCarree(),
                   marker=spec['icon'],
                   color=spec['color'],
                   s=spec['size'],
                   label=spec['label'],
                   edgecolor='black', linewidth=0.5)

# Add legend and title
ax.legend(loc='upper right')
plt.title(TITLE)

# Save output to PNG
output_file = 'output.png'
plt.savefig(output_file, dpi=300, bbox_inches='tight')
print(f"Map saved to {output_file}")
