#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
pyIGRF: code to synthesise magnetic field values from any generation of the
        International Geomagnetic Reference Field (IGRF).

Refactored so that the main functionality is in a single function,
with one parameter for each piece of console input from the original script.
Also includes a simple test function call at the end.
"""
from scipy import interpolate
import igrf_utils as iut
import io_options as ioo

def compute_igrf(
    igrf_gen,            # e.g. '14'
    out_filename,        # e.g. ''
    iopt,                # 1, 2, or 3
    date,                # e.g. 2024.5
    alt,                 # altitude in km
    lat,                 # latitude in degrees
    colat,               # colatitude in degrees
    lon,                 # longitude in degrees
    itype,               # 1 => geodetic, 2 => geocentric
    sd,                  # sin(latitude) or sin(colat) depending on context
    cd                   # cos(latitude) or cos(colat)
):
    """
    Core IGRF computation function that encapsulates:
      1. Loading of the SHC file for the specified IGRF generation
      2. Interpolation of the coefficients to the desired date(s)
      3. Computation of the main field components
      4. Computation of the secular variation (SV)
      5. (Optionally) Writing the results to screen or to file,
         depending on `out_filename` and `iopt`.

    Returns
    -------
    output_dict : dict
        A dictionary of the main computed results for direct access.
        (X, Y, Z, dX, dY, dZ, dec, hoz, inc, eff, decs, hozs, incs, effs, etc.)
    """

    # 1. Load in the file of coefficients for the selected IGRF generation
    IGRF_FILE = f'./SHC_files/IGRF{igrf_gen}.SHC'
    igrf = iut.load_shcfile(IGRF_FILE, None)

    # 2. Interpolate the geomagnetic coefficients to the desired date
    f = interpolate.interp1d(igrf.time, igrf.coeffs, fill_value='extrapolate')
    coeffs = f(date)

    # 3. Compute main field components at the location(s)
    #    Br, Bt, Bp are radial, colatitudinal, and longitudinal components
    Br, Bt, Bp = iut.synth_values(coeffs.T, alt, colat, lon, igrf.parameters['nmax'])

    # 4. For the SV, find the 5-year period in which the date lies
    #    IGRF has constant SV between each 5-year period
    epoch = (date - 1900) // 5
    epoch_start = epoch * 5
    coeffs_sv = f(1900 + epoch_start + 1) - f(1900 + epoch_start)
    Brs, Bts, Bps = iut.synth_values(coeffs_sv.T, alt, colat, lon, igrf.parameters['nmax'])

    # 5. Use the main field coefficients from start of the five-year epoch
    coeffsm = f(1900 + epoch_start)
    Brm, Btm, Bpm = iut.synth_values(coeffsm.T, alt, colat, lon, igrf.parameters['nmax'])

    # 6. Rearrange to X, Y, Z
    #    By convention: X = -Btheta, Y = Bphi, Z = -Br
    X = -Bt
    Y = Bp
    Z = -Br

    # Similarly for the SV
    dX = -Bts
    dY = Bps
    dZ = -Brs

    # Main field used in the non-linear SV components
    Xm = -Btm
    Ym = Bpm
    Zm = -Brm

    # 7. Rotate back to geodetic coords if needed
    if itype == 1:
        t = X
        X = X * cd + Z * sd
        Z = Z * cd - t * sd

        t = dX
        dX = dX * cd + dZ * sd
        dZ = dZ * cd - t * sd

        t = Xm
        Xm = Xm * cd + Zm * sd
        Zm = Zm * cd - t * sd

    # 8. Compute the four non-linear components: dec, hoz, inc, eff
    dec, hoz, inc, eff = iut.xyz2dhif(X, Y, Z)

    # 9. IGRF SV coefficients are relative to the main field from the start
    #    of each five-year epoch
    decs, hozs, incs, effs = iut.xyz2dhif_sv(Xm, Ym, Zm, dX, dY, dZ)

    # 10. Write to screen or file based on iopt
    if iopt == 1:
        ioo.write1(out_filename, date, alt, lat, colat, lon,
                   X, Y, Z, dX, dY, dZ,
                   dec, hoz, inc, eff,
                   decs, hozs, incs, effs, itype, igrf_gen)
    elif iopt == 2:
        ioo.write2(out_filename, date, alt, lat, colat, lon,
                   X, Y, Z, dX, dY, dZ,
                   dec, hoz, inc, eff,
                   decs, hozs, incs, effs, itype, igrf_gen)
    else:
        ioo.write3(out_filename, date, alt, lat, colat, lon,
                   X, Y, Z, dX, dY, dZ,
                   dec, hoz, inc, eff,
                   decs, hozs, incs, effs, itype, igrf_gen)

    if out_filename:
        print(f'Results written to file: {out_filename}')
    else:
        print('Results printed to screen (no filename provided).')

    # Return a dictionary of computed results for convenience
    return {
        'X': X, 'Y': Y, 'Z': Z,
        'dX': dX, 'dY': dY, 'dZ': dZ,
        'dec': dec, 'hoz': hoz, 'inc': inc, 'f': eff,
        'decs': decs, 'hozs': hozs, 'incs': incs, 'fs': effs
    }


def test_igrf_call():
    """
    Simple test function to demonstrate calling 'compute_igrf' directly,
    bypassing user console interaction.
    We'll print the dictionary of results to screen.
    """
    # Example: generation 14, no output file, option 1, year=2025, altitude=0,
    # latitude=55, colat=35, longitude=3, geodetic, sd=sin(55°), cd=cos(55°).
    # NOTE: colatitude = 90 - latitude = 35 degrees if using geodetic lat
    # Here we just use approximate sine/cosine values for demonstration
    import math
    lat_deg = 55.0
    colat_deg = 90.0 - lat_deg  # for demonstration
    sd_ = math.sin(math.radians(lat_deg))
    cd_ = math.cos(math.radians(lat_deg))

    results = compute_igrf(
        igrf_gen='14',
        out_filename='',  # empty => print to screen
        iopt=1,
        date=2025.0,
        alt=0.0,
        lat=lat_deg,
        colat=colat_deg,
        lon=3.0,
        itype=1,
        sd=sd_,
        cd=cd_
    )

    print("TEST CALL RESULTS:")
    for k, v in results.items():
        print(f"{k}: {v:.3f}")


if __name__ == '__main__':
    # --- Original user-interaction portion; now shortened. ---
    print(' ')
    print('******************************************************')
    print('*              IGRF SYNTHESIS PROGRAM                *')
    print('******************************************************')
    print(' ')
    print('Enter number of required IGRF generation (1 to 14)')
    print('or press "Return" for IGRF-14')

    igrf_gen = input("Enter generation number: ")
    if not igrf_gen:
        print('Using IGRF-14')
        igrf_gen = '14'
    else:
        while (int(igrf_gen) < 1) or (int(igrf_gen) > 14):
            igrf_gen = input("Enter generation number: ")

    print('Enter name of output file or press "Return" for output to screen')
    out_filename = input("Enter filename: ")
    if not out_filename:
        print('Printing to screen')

    # Select computation option
    while True:
        print('Choose an option:')
        print('1 - values at one location and date')
        print('2 - values at yearly intervals at one location')
        print('3 - values on a latitude/longitude grid at one date')
        iopt = input('-> ')
        iopt = iut.check_int(iopt)
        if 1 <= iopt <= 3:
            break

    # Now gather the rest of the inputs from the ioo functions
    if iopt == 1:
        date, alt, lat, colat, lon, itype, sd, cd = ioo.option1()
    elif iopt == 2:
        date, alt, lat, colat, lon, itype, sd, cd = ioo.option2()
    else:
        date, alt, lat, colat, lon, itype, sd, cd = ioo.option3()

    # -- Call the new function to do the main IGRF computation --
    compute_igrf(
        igrf_gen=igrf_gen,
        out_filename=out_filename,
        iopt=iopt,
        date=date,
        alt=alt,
        lat=lat,
        colat=colat,
        lon=lon,
        itype=itype,
        sd=sd,
        cd=cd
    )

    # --- Finally, we do a simple test call to verify that our function ---
    print('\n\n--- Running a simple test call (hard-coded values) ---')
    test_igrf_call()
