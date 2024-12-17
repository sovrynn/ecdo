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
import sys
import os
import glob
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap


def main():

    if len(sys.argv) != 2:
        print("Usage: python script.py <X>")
        sys.exit(1)

    input_dir = sys.argv[1]

    def rotate_point(lat_a, lon_a, lat_x, lon_x, M, N):
        def rotate(lat_a, lon_a, lat_x, lon_x, angle):
            initial_distance = geodesic((lat_a, lon_a), (lat_x, lon_x)).km
            bearing = calculate_bearing(Point(lat_a, lon_a), Point(lat_x, lon_x))
            new_bearing = (bearing + angle) % 360
            new_point = distance(kilometers=initial_distance).destination(Point(lat_a, lon_a), new_bearing)
            return new_point.latitude, new_point.longitude
        
        def calculate_bearing(start_point, end_point):
            lat1, lon1 = map(math.radians, [start_point.latitude, start_point.longitude])
            lat2, lon2 = map(math.radians, [end_point.latitude, end_point.longitude])
            d_lon = lon2 - lon1
            y = math.sin(d_lon) * math.cos(lat2)
            x = (math.cos(lat1) * math.sin(lat2) - 
                 math.sin(lat1) * math.cos(lat2) * math.cos(d_lon))
            bearing = math.atan2(y, x)
            return (math.degrees(bearing) + 360) % 360

        result_points = []
        for angle in range(-N, M + 1):
            new_lat, new_lon = rotate(lat_a, lon_a, lat_x, lon_x, angle)
            result_points.append((new_lat, new_lon))
        
        return result_points

    def split_by_180_meridian(points):
        def crosses_180(lon1, lon2):
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
                result.append(current_segment)
                current_segment = []
        
        if current_segment:
            current_segment.append(points[-1])
            result.append(current_segment)
        
        return result

    def add_to_m_no_check(m, points, color, thickness):
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
        kml.plot(x, y, marker='o', color=color, linestyle='-', markersize=thickness, label='Sample Line')

    def add_dia_kml(point, kml, thickness, color='red'):
        lons = point[1]
        lats = point[0]
        x, y = kml(lons, lats)
        kml.plot(x, y, marker='v', color=color, linestyle='-', markersize=thickness, label='Sample Line')

    def add_triangle_kml(point, kml, thickness, color='blue'):
        lons = point[1]
        lats = point[0]
        x, y = kml(lons, lats)
        kml.plot(x, y, marker='^', color=color, linestyle='-', markersize=thickness, label='Sample Line')

    def add_xpoint_kml(point, kml, length, thickness):
        lons = point[1]
        lats = point[0]
        x, y = kml(lons, lats)
        kml.plot(x, y, marker='x', color='red', linestyle='-', markeredgewidth=thickness, markersize=length, label='Sample Line')

    def reverse(point):
        return (point[1], point[0])

    def calculate_bearing(start_point, end_point):
        lat1, lon1 = map(math.radians, [start_point.latitude, start_point.longitude])
        lat2, lon2 = map(math.radians, [end_point.latitude, end_point.longitude])
        d_lon = lon2 - lon1
        y = math.sin(d_lon) * math.cos(lat2)
        x = (math.cos(lat1) * math.sin(lat2) - 
             math.sin(lat1) * math.cos(lat2) * math.cos(d_lon))
        bearing = math.atan2(y, x)
        return (math.degrees(bearing) + 360) % 360

    def move_point_closer(lat_x, lon_x, lat_a, lon_a, K):
        point_a = Point(lat_a, lon_a)
        point_x = Point(lat_x, lon_x)
        
        bearing = calculate_bearing(point_x, point_a)
        initial_distance = geodesic(point_x, point_a).km
        new_distance = initial_distance - K
        if new_distance < 0:
            raise ValueError("Distance K is too large, resulting in a negative distance.")
        
        new_point = distance(kilometers=new_distance).destination(point_x, bearing)
        
        return new_point.latitude, new_point.longitude

    def haversine(lat1, lon1, lat2, lon2):
        R = 6371.0
        lat1_rad = math.radians(lat1)
        lon1_rad = math.radians(lon1)
        lat2_rad = math.radians(lat2)
        lon2_rad = math.radians(lon2)
        
        dlat = lat2_rad - lat1_rad
        dlon = lon2_rad - lon1_rad
        a = math.sin(dlat / 2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon / 2)**2
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
        distance = R * c
        return distance

    def get_pivot_ratio(lat, lon):
        dist = min(haversine(lat, lon, 0, 121), haversine(lat, lon, 0, -59))
        max_speed = 1927
        speed = 11564 * math.sin(math.radians(dist / 111.2)) / 6
        ratio = speed / max_speed
        if ratio > 1:
            ratio = 1
        return ratio

    BO = "#fff200"
    RED = "#ff0000"
    LB = "#00c8ff"
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
        print("Warning: Not all values provided, using default values for the remaining parameters.")

    llcrnrlat = max(x - rlat, llcrnrlat)
    urcrnrlat = min(x + rlat, urcrnrlat)
    llcrnrlon = max(y - rlon, llcrnrlon)
    urcrnrlon = min(y + rlon, urcrnrlon)

    res = 20
    fig = plt.figure(figsize=(res, res * 0.5625))
    ax = fig.add_axes([0.03, 0.03, 0.86, 0.90]) 
    plt.axis('tight')
    plt.subplots_adjust(left=0.03, bottom=0.03, right=0.97, top=0.94, wspace=0, hspace=0)
    plt.title('Flood Myths and ECDO Rotation Path/Speed', fontsize=28, pad=20)

    kml = Basemap(projection='merc', llcrnrlat=llcrnrlat, urcrnrlat=urcrnrlat,
                  llcrnrlon=llcrnrlon, urcrnrlon=urcrnrlon, lat_ts=20, resolution='l')

    kml.drawcoastlines()
    kml.drawcountries()

    color = "#e6e6e6"
    ocean_color = '#d4f7fa'

    kml.drawmapboundary(fill_color=ocean_color)
    kml.fillcontinents(color=color, lake_color=ocean_color)
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

    if ew not in ["east", "west"]:
      raise ValueError("First line should either be 'east' or 'west'")

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
        if not (0 <= value <= 1):
            print(value)
            raise ValueError("Value must be between 0 and 1")
        cmap = cm.get_cmap(COLORMAP)
        color = cmap(value)
        return color

    def add_to_kml(a, b, x, y, m, n, kml, color, thickness):
        points = rotate_point(a, b, x, y, m, n)
        ratio = get_pivot_ratio(x, y)
        color_ratio = -1 * ratio + 1
        color = get_color_from_heatmap(color_ratio)
        add_linestring_to_kml(kml, points, color, thickness)
        return points

    MAINF = RED
    SF = MAINF
    MAINB = '#2eabff'
    SB = MAINB
    MAINDF = MAINB
    SDF = MAINDF

    def plot_triple_lines(a, b, x, y, right, left, kml, RED, GREEN, PINK, DB, MG, LB, WTHICK, WTHIN, THICK, THIN, k, j):
        points = add_to_kml(a, b, x, y, right, 0, kml, MAINF, THICK)
        add_to_kml(a, b, x, y, 0, left, kml, MAINB, WTHICK)
        dest = points[-1]
        add_to_kml(a, b, dest[0], dest[1], right, 0, kml, MAINDF, WTHICK)
        for i in range(1, j + 1):
            center1 = move_point_closer(a, b, x, y, k * i)
            points = add_to_kml(a, b, center1[0], center1[1], right, 0, kml, SF, THIN)
            add_to_kml(a, b, center1[0], center1[1], 0, left, kml, SB, WTHIN)
            add_to_kml(a, b, points[-1][0], points[-1][1], right, 0, kml, SDF, WTHIN)

            center2 = move_point_closer(a, b, x, y, -1 * (k * i))
            points = add_to_kml(a, b, center2[0], center2[1], right, 0, kml, SF, THIN)
            add_to_kml(a, b, center2[0], center2[1], 0, left, kml, SB, WTHIN)
            add_to_kml(a, b, points[-1][0], points[-1][1], right, 0, kml, SDF, WTHIN)

        return dest

    def plot_360_lines(a, b, x, y, right, left, kml, RED, GREEN, PINK, DB, MG, LB, WTHICK, WTHIN, THICK, THIN, k, j):
        points = add_to_kml(a, b, x, y, right, 0, kml, MAINF, THICK)
        add_to_kml(a, b, x, y, 0, 261, kml, MAINB, WTHICK)
        dest = rotate_point(a, b, x, y, 104, 0)[-1]
        for i in range(1, j + 1):
            center1 = move_point_closer(a, b, x, y, k * i)
            points = add_to_kml(a, b, center1[0], center1[1], right, 0, kml, MAINF, THIN)
            add_to_kml(a, b, center1[0], center1[1], 0, 261, kml, MAINB, WTHIN)

            center2 = move_point_closer(a, b, x, y, -1 * (k * i))
            points = add_to_kml(a, b, center2[0], center2[1], right, 0, kml, MAINF, THIN)
            add_to_kml(a, b, center2[0], center2[1], 0, 261, kml, MAINB, WTHIN)
        return dest

    if fullrot == 104:
        dest = plot_triple_lines(a, b, x, y, right, left, kml, RED, GREEN, PINK, DB, MG, LB, WTHICK, WTHIN, THICK, THIN, k, j)
    else:
        dest = plot_360_lines(a, b, x, y, right, left, kml, RED, GREEN, PINK, DB, MG, LB, WTHICK, WTHIN, THICK, THIN, k, j)

    txt_files = glob.glob(os.path.join(input_dir, '*.txt'))
    for txt_file in txt_files:
        with open(txt_file, 'r', encoding='utf-8') as infile:
            for line in infile:
                line = line.strip()
                if line:
                    lat_str, lon_str = line.split(',')
                    lat = float(lat_str)
                    lon = float(lon_str)
                    add_dia_kml((lat,lon), kml, 6)

    add_point_kml((0, 121),kml, marker_size, color='blue')
    add_point_kml((0, -59), kml, marker_size, color='blue')
    if use_marker:
        add_triangle_kml((x,y),kml, marker_size, color='blue')
        add_triangle_kml(dest,kml, marker_size, color='blue')

    # Create a gradient colorbar
    cbar_ax = fig.add_axes([0.835, 0.18, 0.025, 0.56]) 
    norm = mcolors.Normalize(vmin=0, vmax=1927)
    sm = cm.ScalarMappable(cmap='turbo_r', norm=norm)
    sm.set_array([])

    cbar = plt.colorbar(sm, cax=cbar_ax)
    cbar.ax.tick_params(labelsize=12)
    cbar.ax.set_title('ECDO Rotation\n Speed (6 hr)\n in avg. km/h', fontsize=12, pad=24)
    cbar.ax.set_yticks([0, 250, 500, 750, 1000, 1250, 1500, 1750, 1927])
    cbar.ax.set_yticklabels(['0', '250 (69 m/s)', '500 (139 m/s)', '750 (208 m/s)','1000 (278 m/s)', '1250 (347 m/s)', '1500 (417 m/s)', '1750 (486 m/s)', '1927 (535 m/s)'])

    # ---

    # Keep the "Legend" header fixed
    fig.text(0.835, 0.93, "Legend", fontsize=14, fontweight='bold', ha='left', va='top')

    # Move the legend axis down to create vertical space between the "Legend" header and the legend items.
    # Previously it might have been [0.835, 0.80, 0.15, 0.12], so we lower the y-start from 0.80 to 0.78 for example.
    legend_ax = fig.add_axes([0.835, 0.78, 0.15, 0.12]) 
    legend_ax.axis('off')

    legend_handles = [
        plt.Line2D([0], [0], marker='v', color='red', markersize=10, label='Flood Myth', linewidth=0),
        plt.Line2D([0], [0], marker='o', color='blue', markersize=10, label='ECDO Pivots', linewidth=0),
        plt.Line2D([0], [0], marker='^', color='blue', markersize=10, label='Khafre S1/S2', linewidth=0),
    ]

    legend_ax.legend(handles=legend_handles, loc='upper left', frameon=False, ncol=1)

    # ---

    # # Legend axis above the colorbar
    # legend_ax = fig.add_axes([0.835, 0.80, 0.15, 0.12])
    # legend_ax.axis('off')

    # legend_handles = [
    #     plt.Line2D([0], [0], marker='v', color='red', markersize=10, label='Flood Myth', linewidth=0),
    #     plt.Line2D([0], [0], marker='o', color='blue', markersize=10, label='ECDO Pivots', linewidth=0),
    #     plt.Line2D([0], [0], marker='^', color='blue', markersize=10, label='Khafre S1/S2', linewidth=0),
    # ]

    # legend_ax.legend(handles=legend_handles, loc='upper left', frameon=False, ncol=1)

    # # **ADDED LEGEND HEADER ABOVE THE LEGEND**
    # # The legend is at [0.835, 0.80, 0.15, 0.12], so let's place the header slightly above it.
    # fig.text(0.835, 0.93, "Legend", fontsize=14, fontweight='bold', ha='left', va='top')

    # ---

    # Footer below the gradient legend
    fig.text(0.835, 0.15, "Flood Myths Source: TalkOrigins", fontsize=10, color='gray', ha='left', va='top')

    OUTPUT = 'output.png'
    plt.savefig(OUTPUT, format='png', dpi=300)
    print(f"Saved to '{OUTPUT}'.")
    plt.show()

if __name__ == "__main__":
    main()
