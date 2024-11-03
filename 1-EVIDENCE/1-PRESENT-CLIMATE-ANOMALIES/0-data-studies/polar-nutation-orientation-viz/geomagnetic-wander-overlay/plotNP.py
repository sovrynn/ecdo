import sys
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors
import numpy as np

def plot_2d_timeseries(filename):
    # Read the data
    data = pd.read_csv(filename, sep=' ', header=None, names=['x', 'y', 'year'])
    
    # Ensure that 'year' is numeric
    data['year'] = pd.to_numeric(data['year'])
    
    # Normalize the years for color mapping
    norm = mcolors.Normalize(vmin=data['year'].min(), vmax=data['year'].max())
    cmap = plt.get_cmap('viridis')  # You can change this colormap if you prefer
    
    # Set up the plot
    fig, ax = plt.subplots(figsize=(8, 6))
    
    # Create a scatter plot with color mapping based on 'year'
    sc = ax.scatter(data['x'], data['y'], c=data['year'], cmap=cmap, norm=norm, s=50, edgecolor='k')
    
    # Add a colorbar to show the date gradient
    cbar = plt.colorbar(sc, ax=ax)
    cbar.set_label('Year')
    
    # Labels and title
    ax.set_xlabel('X')
    ax.set_ylabel('Y')
    ax.set_title('2D Timeseries Plot with Date Gradient')
    
    # Save the plot to output.png
    plt.savefig('output.png', bbox_inches='tight')
    plt.close()
    print("Plot saved as output.png")
    
if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python plot_2d_timeseries.py <filename>")
        sys.exit(1)
        
    filename = sys.argv[1]
    plot_2d_timeseries(filename)
