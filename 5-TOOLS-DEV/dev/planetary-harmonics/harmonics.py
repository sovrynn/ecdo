#!/usr/bin/python3.12
import sys
import matplotlib.pyplot as plt
import re
from itertools import combinations

def parse_frequency_arg(arg):
    """
    Parse a frequency argument of the form frequency[:label]
    Returns tuple of (frequency, label)
    """
    parts = arg.split(':', 1)
    frequency = float(parts[0])
    label = parts[1] if len(parts) > 1 else f"{frequency} Hz"
    return frequency, label

def calculate_harmonics_and_subharmonics(x, y):
    """
    Calculate the first X harmonics and subharmonics of the frequency Y.
    Args:
        x (int): Number of harmonics and subharmonics to calculate.
        y (float): Fundamental frequency.
    Returns:
        tuple: Lists of harmonics and subharmonics.
    """
    harmonics = [y * n for n in range(1, x + 1)]
    subharmonics = [y / n for n in range(1, x + 1)]
    return harmonics, subharmonics

def plot_matches(frequencies_data, matches, X, output_file=None):
    """
    Create a visual chart of the frequency matches with legend and text list below.
    Args:
        frequencies_data: List of tuples (frequency, label, harmonics, subharmonics)
        matches: List of tuples (freq1_info, freq2_info, freq1_value, freq2_value)
    """
    # Calculate the heights for each section
    chart_height = 6
    legend_height = 1.5
    text_height_per_line = 0.25
    section_margin = 0.5
    
    # Calculate text section height (including padding)
    text_height = len(matches) * text_height_per_line + 1  # +1 for header
    
    # Calculate total figure height
    total_height = chart_height + legend_height + text_height + (section_margin * 2)
    
    # Create figure
    fig = plt.figure(figsize=(14, total_height))
    
    # Create three subplot areas: chart, legend, and text
    gs = plt.GridSpec(3, 1, height_ratios=[chart_height, legend_height, text_height])
    
    # Plot the chart
    ax1 = fig.add_subplot(gs[0])
    
    # Calculate score
    total_possible_matches = len(list(combinations(range(len(frequencies_data)), 2))) * 2 * X
    score = len(matches) / total_possible_matches * 100
    
    # Plot all frequencies as points
    scatter_size = 50
    for i, (freq, label, harmonics, subharmonics) in enumerate(frequencies_data, 1):
        ax1.scatter([i]*len(harmonics), harmonics, s=scatter_size, 
                   label=f'{label} Harmonics', alpha=0.3)
        ax1.scatter([i]*len(subharmonics), subharmonics, s=scatter_size, 
                   label=f'{label} Subharmonics', alpha=0.3)
    
    # Add score and depth to legend entries
    ax1.plot([], [], ' ', label=f'Score: {score:.1f}%')
    ax1.plot([], [], ' ', label=f'Depth: {X}')
    
    # Highlight matches with lines
    for match in matches:
        if 'Harmonic' in match[0] and 'Harmonic' in match[1]:
            freq = float(match[2])
            # Extract indices from the labels
            idx1 = next(i for i, (_, label, _, _) in enumerate(frequencies_data) 
                       if label in match[0])
            idx2 = next(i for i, (_, label, _, _) in enumerate(frequencies_data) 
                       if label in match[1])
            ax1.plot([idx1 + 1, idx2 + 1], [freq, float(match[3])], 'r-', 
                    alpha=0.5, linewidth=1.5)
        elif 'Subharmonic' in match[0] and 'Subharmonic' in match[1]:
            freq = float(match[2])
            idx1 = next(i for i, (_, label, _, _) in enumerate(frequencies_data) 
                       if label in match[0])
            idx2 = next(i for i, (_, label, _, _) in enumerate(frequencies_data) 
                       if label in match[1])
            ax1.plot([idx1 + 1, idx2 + 1], [freq, float(match[3])], 'g-', 
                    alpha=0.5, linewidth=1.5)
    
    # Configure chart
    ax1.set_yscale('log')
    ax1.set_ylabel('Frequency (Hz)')
    ax1.set_xticks(range(1, len(frequencies_data) + 1))
    ax1.set_xticklabels([data[1] for data in frequencies_data])
    ax1.grid(True, alpha=0.3)
    
    # Add titles
    frequencies_str = ' vs '.join(f"{label} ({freq} Hz)" 
                                for freq, label, _, _ in frequencies_data)
    plt.suptitle('Harmonic Resonance', fontsize=16, y=0.98)
    subtitle = f'Comparing {frequencies_str}\n' + \
              'Matching frequencies connected by lines (red: harmonic matches, green: subharmonic matches)'
    ax1.set_title(subtitle, fontsize=10, pad=10)

    # Create legend subplot
    ax2 = fig.add_subplot(gs[1])
    ax2.axis('off')
    legend = ax2.legend(*ax1.get_legend_handles_labels(), 
                       loc='center', 
                       ncol=4,
                       bbox_to_anchor=(0.5, 0.5),
                       frameon=True,
                       fancybox=True,
                       shadow=True)

    # Add text list of matches
    ax3 = fig.add_subplot(gs[2])
    ax3.axis('off')
    
    # Create the text content
    text_content = "Matches found:\n\n"
    for match in matches:
        text_content += f"• {match[0]} ({match[2]} Hz) ≈ {match[1]} ({match[3]} Hz)\n"
    
    ax3.text(0.05, 0.95, text_content, 
             va='top', ha='left', 
             fontfamily='monospace',
             transform=ax3.transAxes)

    # Adjust layout
    plt.subplots_adjust(hspace=0.4)
    
    # Generate output filename if not provided
    if output_file is None:
        labels = '-'.join(data[1] for data in frequencies_data)
        output_file = f'matches-{labels}.png'
    
    # Save with tight layout
    plt.savefig(output_file, bbox_inches='tight', dpi=300)
    print(f"\nChart saved as '{output_file}'")

if __name__ == "__main__":
    # Check for minimum number of arguments
    if len(sys.argv) < 3:
        print("Usage: python harmonics_calculator.py <X> <Y1[:label1]> <Y2[:label2]> [Y3[:label3] ...]")
        print("Example: python harmonics_calculator.py 10 440:A4 523.25:C5 659.25:E5")
        sys.exit(1)

    try:
        # Parse command-line arguments
        X = int(sys.argv[1])
        frequency_args = sys.argv[2:]
        
        # Parse all frequency arguments
        frequencies_data = []
        for arg in frequency_args:
            freq, label = parse_frequency_arg(arg)
            if freq <= 0:
                raise ValueError(f"Frequency must be positive: {freq}")
            harmonics, subharmonics = calculate_harmonics_and_subharmonics(X, freq)
            frequencies_data.append((freq, label, harmonics, subharmonics))

        if X <= 0:
            raise ValueError("X must be positive.")

        # Find matches between all pairs of frequencies
        matches = []
        for i, (freq1, label1, harm1, sub1) in enumerate(frequencies_data):
            for j, (freq2, label2, harm2, sub2) in enumerate(frequencies_data[i+1:], i+1):
                # Check harmonics matches
                for hi, h1 in enumerate(harm1):
                    for hj, h2 in enumerate(harm2):
                        if abs(h1 - h2) / max(h1, h2) <= 0.01:
                            matches.append((
                                f"Harmonic {hi+1} of {label1}",
                                f"Harmonic {hj+1} of {label2}",
                                f"{h1:.1f}",
                                f"{h2:.1f}"
                            ))

                # Check subharmonics matches
                for si, s1 in enumerate(sub1):
                    for sj, s2 in enumerate(sub2):
                        if abs(s1 - s2) / max(s1, s2) <= 0.01:
                            matches.append((
                                f"Subharmonic {si+1} of {label1}",
                                f"Subharmonic {sj+1} of {label2}",
                                f"{s1:.1f}",
                                f"{s2:.1f}"
                            ))

        # Output results
        print(f"\nAnalyzing the first {X} harmonics and subharmonics of {len(frequencies_data)} frequencies:")
        for freq, label, _, _ in frequencies_data:
            print(f"- {label}: {freq} Hz")
        
        total_possible_matches = len(list(combinations(range(len(frequencies_data)), 2))) * 2 * X
        print(f"\nTotal possible matches: {total_possible_matches}")
        
        if matches:
            match_count = len(matches)
            match_percentage = (match_count / total_possible_matches) * 100
            print(f"Matches found: {match_count} ({match_percentage:.1f}% of possible matches)\n")
            
            for match in matches:
                print(f"- {match[0]} ({match[2]} Hz) ≈ {match[1]} ({match[3]} Hz)")
            
            # Create and save the chart
            plot_matches(frequencies_data, matches, X)
        else:
            print("No matches found within 1% tolerance. (0% of possible matches)")

    except ValueError as e:
        print(f"Error: {e}")
        sys.exit(1)