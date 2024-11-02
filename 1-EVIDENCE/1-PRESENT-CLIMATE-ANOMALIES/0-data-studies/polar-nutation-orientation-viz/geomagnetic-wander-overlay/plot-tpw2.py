import sys
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import matplotlib.colors as mcolors
from datetime import datetime

def plot_time_series(filename):
    # Read data from the file
    data = pd.read_csv(filename, sep=' ', header=None, names=['date', 'x', 'y'])
    
    # Convert date strings to datetime objects
    data['date'] = pd.to_datetime(data['date'], format='%Y-%m-%d')
    
    # Set up the plot
    fig, ax = plt.subplots(figsize=(8, 8))
    
    # Center the coordinate system at the origin
    max_x = max(abs(data['x'].min()), abs(data['x'].max()))
    max_y = max(abs(data['y'].min()), abs(data['y'].max()))
    ax.set_xlim(-max_x, max_x)
    ax.set_ylim(-max_y, max_y)
    ax.axhline(0, color='black', linewidth=0.5)
    ax.axvline(0, color='black', linewidth=0.5)
    
    # Create a color gradient based on dates
    norm = mcolors.Normalize(vmin=mdates.date2num(data['date'].min()), vmax=mdates.date2num(data['date'].max()))
    cmap = plt.get_cmap('viridis')
    
    # Plot the data with the color gradient
    sc = ax.scatter(data['x'], data['y'], c=mdates.date2num(data['date']), cmap=cmap, norm=norm)
    
    # Add colorbar as a legend for the dates
    cbar = plt.colorbar(sc, ax=ax, orientation='vertical')
    cbar.set_label('Date')
    cbar.ax.yaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))
    
    # Rotate colorbar date labels
    for label in cbar.ax.get_yticklabels():
        label.set_rotation(45)
        label.set_ha('right')
    
    # Labels and title
    ax.set_xlabel('X Value')
    ax.set_ylabel('Y Value')
    ax.set_title('2D Time Series Plot')
    
    # Save the plot to output.png
    plt.savefig('output.png', bbox_inches='tight')
    plt.close()

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)
    
    filename = sys.argv[1]
    plot_time_series(filename)
