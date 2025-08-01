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
    {'icon': 'o', 'color': 'yellow', 'size': 50, 'label': 'Submarine Tunnels'},
]
MARKER_SPECS = [
    {'icon': 'o', 'color': 'red',   'size': 50,  'label': '地下基地'},
    {'icon': '^', 'color': 'blue',  'size': 80,  'label': '水下基地'},
    {'icon': 'o', 'color': 'yellow', 'size': 50, 'label': '潜艇隧道'},
]
MARKER_SPECS = [
    {'icon': 'o', 'color': 'red',   'size': 50,  'label': '지하 기지'},
    {'icon': '^', 'color': 'blue',  'size': 80,  'label': '해저 기지'},
    {'icon': 'o', 'color': 'yellow', 'size': 50, 'label': '해저 터널'},
]
# Title of the map
TITLE = 'American Underground and Undersea Bases (Partial List)'
TITLE = '美国地下和水下基地（部分列表）'
TITLE = '미국 지하 및 해저 기지(일부 목록)'

plt.rcParams['font.sans-serif'] = [
    'Noto Sans CJK JP',    # Simplified Chinese
    'Noto Sans CJK TC',    # Traditional Chinese
    'Noto Sans CJK KR',    # Korean
    'NanumGothic',         # Korean sans
    'NanumMyeongjo',       # Korean serif
    'WenQuanYi Zen Hei',   # Chinese
]
plt.rcParams['font.family'] = 'sans-serif'
# allow minus sign to show up properly
plt.rcParams['axes.unicode_minus'] = False


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
std_parallels = (max(min_lat, -89.9), min(max_lat, 89.9))
proj = ccrs.LambertConformal(
    central_longitude=central_lon,
    central_latitude=central_lat,
    standard_parallels=std_parallels
)

fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(1, 1, 1, projection=proj)
ax.set_extent(extent, crs=ccrs.PlateCarree())

# Add base map features with explicit zorders
ax.add_feature(cfeature.LAND, facecolor='lightgray', zorder=0)
ax.add_feature(cfeature.OCEAN, facecolor='lightblue', zorder=0)
ax.add_feature(cfeature.COASTLINE, zorder=1)
ax.add_feature(cfeature.BORDERS, linestyle=':', zorder=1)
# Add US state borders below markers
ax.add_feature(cfeature.STATES, linestyle='-', edgecolor='gray', zorder=2)

# Plot points from each dataset with higher zorder
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
                   edgecolor='black', linewidth=0.5,
                   zorder=5)

# Add legend and title on top of markers and borders
legend = ax.legend(loc='upper right', frameon=True)
legend.set_zorder(6)
plt.title(TITLE,fontsize=18)

# Save output to PNG
output_file = 'output.png'
plt.savefig(output_file, dpi=300, bbox_inches='tight')
print(f"Map saved to {output_file}")
