import os
import math
from scipy import interpolate
import igrf_utils as iut
import io_options as ioo


def do_stuffs(igrf_gen, igrf, name, iopt, date, alt, lat, colat, lon, itype, sd, cd):
    # Interpolate the geomagnetic coefficients to the desired date(s)
    f = interpolate.interp1d(igrf.time, igrf.coeffs, fill_value='extrapolate')
    coeffs = f(date)    
    
    # Compute the main field B_r, B_theta and B_phi value for the location(s)
    Br, Bt, Bp = iut.synth_values(coeffs.T, alt, colat, lon,
                                  igrf.parameters['nmax'])
    
    # For the SV, find the 5-year period in which the date lies
    epoch = (date - 1900) // 5
    epoch_start = epoch * 5
    coeffs_sv = f(1900 + epoch_start + 1) - f(1900 + epoch_start)
    Brs, Bts, Bps = iut.synth_values(coeffs_sv.T, alt, colat, lon,
                                     igrf.parameters['nmax'])
    
    # Use main field at the start of each five-year epoch to compute the SV
    coeffsm = f(1900 + epoch_start)
    Brm, Btm, Bpm = iut.synth_values(coeffsm.T, alt, colat, lon,
                                     igrf.parameters['nmax'])
    
    # Rearrange to X, Y, Z
    X = -Bt
    Y = Bp
    Z = -Br
    dX = -Bts
    dY = Bps
    dZ = -Brs
    Xm = -Btm
    Ym = Bpm
    Zm = -Brm
    
    # For itype == 1 there’s geodetic rotation, but here itype=2 => no rotation needed.
    # So we skip that part (sd=0, cd=0).
    
    # Convert X,Y,Z to total field
    _, _, _, eff = iut.xyz2dhif(X, Y, Z)
    
    return eff


def get_total_field_value(lat, lon, date):
    """
    Given lat, lon and decimal `date` (e.g. 2000),
    returns the total geomagnetic field (nT).
    """
    igrf_gen = '14'  # Using IGRF-14 coefficients

    # Load in the file of coefficients (ensure the path is correct for your setup)
    IGRF_FILE = r'./SHC_files/IGRF' + igrf_gen + '.SHC'
    igrf = iut.load_shcfile(IGRF_FILE, None)
    
    name = ""
    iopt = 1

    # Altitude on Earth's surface ~6371.2 km from center
    alt = 6371.2

    # Colatitude = 90 - latitude
    colat = 90 - lat

    # itype = 2 => Spherical coordinate
    itype = 2

    # For itype == 2 in original code, sd = 0, cd = 0
    sd = 0
    cd = 0
    
    return do_stuffs(igrf_gen, igrf, name, iopt, date, alt, lat, colat, lon, itype, sd, cd)


def main():
    # List of years to process
    start = 2024
    years = [start, start + 1]
    
    # Number of grid cells per year
    total_cells = 180 * 360  # 64,800
    
    # Run the same process for each year in the list
    for year in years:
        processed_count = 0
        output_file = f"field-values-{year}.txt"
        
        with open(output_file, "w", encoding="utf-8") as outf:
            # Loop latitude from -90 to 89
            for lat in range(-90, 90):
                mid_lat = lat + 0.5
                # Loop longitude from -180 to 179
                for lon in range(-180, 180):
                    mid_lon = lon + 0.5
                    
                    # Get total field value for this lat/lon and this year
                    val = get_total_field_value(mid_lat, mid_lon, year)
                    
                    # Write output line: LAT LON VALUE
                    outf.write(f"{mid_lat} {mid_lon} {val}\n")
                    
                    # Update progress
                    processed_count += 1
                    if processed_count % 500 == 0:
                        percent_done = (processed_count / total_cells) * 100
                        print(
                            f"Year {year}: Processed "
                            f"{processed_count} / {total_cells} cells "
                            f"({percent_done:.2f}%)"
                        )
        
        print(
            f"Year {year} complete. "
            f"Wrote {processed_count} lines to {output_file}."
        )


if __name__ == "__main__":
    main()
