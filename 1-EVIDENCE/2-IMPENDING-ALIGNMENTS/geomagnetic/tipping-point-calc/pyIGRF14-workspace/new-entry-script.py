from scipy import interpolate
import igrf_utils as iut
import io_options as ioo


def do_stuffs(igrf_gen, igrf, name, iopt, date, alt, lat, colat, lon, itype, sd, cd):
        
    # Interpolate the geomagnetic coefficients to the desired date(s)
    # -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    f = interpolate.interp1d(igrf.time, igrf.coeffs, fill_value='extrapolate')
    coeffs = f(date)    
    
    # Compute the main field B_r, B_theta and B_phi value for the location(s) 
    Br, Bt, Bp = iut.synth_values(coeffs.T, alt, colat, lon,
                              igrf.parameters['nmax'])
    
    # For the SV, find the 5 year period in which the date lies and compute
    # the SV within that period. IGRF has constant SV between each 5 year period
    # We don't need to subtract 1900 but it makes it clearer:
    epoch = (date-1900)//5    
    epoch_start = epoch*5
    # Add 1900 back on plus 1 year to account for SV in nT per year (nT/yr):
    coeffs_sv = f(1900+epoch_start+1) - f(1900+epoch_start)   
    Brs, Bts, Bps = iut.synth_values(coeffs_sv.T, alt, colat, lon,
                              igrf.parameters['nmax'])
    
    # Use the main field coefficients from the start of each five epoch
    # to compute the SV for Dec, Inc, Hor and Total Field (F) 
    # [Note: these are non-linear components of X, Y and Z so treat separately]
    coeffsm = f(1900+epoch_start);
    Brm, Btm, Bpm = iut.synth_values(coeffsm.T, alt, colat, lon,
                              igrf.parameters['nmax'])
    
    
    # Rearrange to X, Y, Z components 
    X = -Bt; Y = Bp; Z = -Br
    # For the SV
    dX = -Bts; dY = Bps; dZ = -Brs 
    Xm = -Btm; Ym = Bpm; Zm = -Brm
    # Rotate back to geodetic coords if needed
    if (itype == 1):
        t = X; X = X*cd + Z*sd;  Z = Z*cd - t*sd
        t = dX; dX = dX*cd + dZ*sd;  dZ = dZ*cd - t*sd
        t = Xm; Xm = Xm*cd + Zm*sd;  Zm = Zm*cd - t*sd
        
    # Compute the four non-linear components 
    dec, hoz, inc, eff = iut.xyz2dhif(X,Y,Z)
    # The IGRF SV coefficients are relative to the main field components 
    # at the start of each five year epoch e.g. 2010, 2015, 2020
    decs, hozs, incs, effs = iut.xyz2dhif_sv(Xm, Ym, Zm, dX, dY, dZ)
    
    
    # Finally, parse the outputs for writing to screen or file
    # if iopt == 1:
    #     ioo.write1(name, date, alt, lat, colat, lon, X, Y, Z, dX, dY, dZ, \
    #               dec, hoz, inc, eff, decs, hozs, incs, effs, itype, igrf_gen)
    #     if name:
    #         print('Written to file: ' + name )

    return eff


def monolith_func(lat, lon, date):  
    
    igrf_gen = '14'

    # Load in the file of coefficients
    IGRF_FILE = r'./SHC_files/IGRF' + igrf_gen + '.SHC'
    igrf = iut.load_shcfile(IGRF_FILE, None)
    
    name = ""
    
    iopt = 1

    # Hardcode altitude
    alt = 6371.2

    # Calculate colat the same way as in option1()
    colat = 90 - lat

    # Hardcode itype as 2
    itype = 2

    # For itype == 2 in the original code, sd and cd are 0
    sd = 0
    cd = 0
        
    # date: float, decimal date in years
    # alt: float, altitude in km
    # lat: float, latitude
    # colat: float, colatitude
    # lon: float, longitude
    # itype: int, 2 for sphere
    # sd: float, no clue!
    # cd: float, no clue!

    # print(f'Date {type(date)}: {date}')
    # print(f'Alt {type(alt)}: {alt}')
    # print(f'Lat {type(lat)}: {lat}')
    # print(f'Colat {type(colat)}: {colat}')
    # print(f'Lon {type(lon)}: {lon}')
    # print(f'Itype {type(itype)}: {itype}')
    # print(f'Sd {type(sd)}: {sd}')
    # print(f'Cd {type(cd)}: {cd}')
        
    return do_stuffs(igrf_gen, igrf, name, iopt, date, alt, lat, colat, lon, itype, sd, cd)

if __name__ == '__main__':
    i = 1900
    while i <= 1990:
        print(f'{i} {monolith_func(-30, 30, i)}')
        i += 1