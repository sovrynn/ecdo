import sys
import os
import glob
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py <X>")
        sys.exit(1)

    X = sys.argv[1]

    # Initialize the Basemap projection
    # Example: Mercator projection centered on (lon_0=0)
    m = Basemap(projection='merc', 
                llcrnrlat=-75, urcrnrlat=80,  # modify this to change how low it goes
                llcrnrlon=-180, urcrnrlon=180, 
                lat_ts=20, resolution='c')

    # Draw map details
    m.drawcoastlines()
    m.drawcountries()
    m.fillcontinents(color='lightgray', lake_color='white')
    m.drawmapboundary(fill_color='white')

    # Iterate over all .txt files in the directory X
    txt_files = glob.glob(os.path.join(X, '*.txt'))
    for txt_file in txt_files:
        with open(txt_file, 'r', encoding='utf-8') as infile:
            for line in infile:
                line = line.strip()
                if line:
                    lat_str, lon_str = line.split(',')
                    lat = float(lat_str)
                    lon = float(lon_str)

                    # Convert lat/lon to map coordinates
                    x, y = m(lon, lat)
                    # Plot a red marker (small circle) on the map
                    plt.plot(x, y, 'ro', markersize=2)

    # Add a title to the map
    plt.title("Flood Stories From Around The World", fontsize=14, fontweight='bold', pad=10)

    # Add a footer at the bottom of the figure
    # 0.5: Horizontal center of the figure.
    # 0.02: Positioned at 2% from the bottom (relative to the figure)
    footer_text = "Source: TalkOrigins"
    plt.text(0.5, 0.08, footer_text, fontsize=10, color='gray',
             ha='center', transform=plt.gcf().transFigure)

    # Save the figure to output.png
    plt.savefig('output.png', dpi=300)
    print("Map saved to output.png")

if __name__ == "__main__":
    main()
