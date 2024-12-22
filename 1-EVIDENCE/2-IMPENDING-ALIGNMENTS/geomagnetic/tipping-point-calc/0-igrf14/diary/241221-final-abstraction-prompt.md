This function gets a bunch of user input values, makes some calculations, and returns a series of values.

Based off of this code, I want you to write a new function that is similar:
- it should take 3 inputs
	- lat
	- lon
	- date
- Then it shouldn't ask the user for any inputs. Instead it should use hardcoded values, or calculate the rest of the needed values, the same way the function I'm about to give you calculates them:
	- altitude should be 6371.2
	- colat should be calculated from the input lat
	- itype should be 2
	- sd should be calculated how the function calculates it
	- cd should be calculated how the function calculates it
- Then, return the same set of values.

Here's the function:

def option1():
    '''
    Option 1 is the simplest: a single point and time
    '''
    while 1:   
        print('Enter value for format of latitudes and longitudes: ')
        print('1 - in degrees & minutes')
        print('2 - in decimal degrees')
        idm = input('->').rstrip()
        idm = iut.check_int(idm)       
        if idm < 1 or idm > 2: continue
        else:
            break

#    if iopt == 1:  # Start with a simple example, values at one location and time

    while 1:
        print('Enter value for coordinate system:')
        print('1 - geodetic (shape of Earth using the WGS-84 ellipsoid)')
        print('2 - geocentric (shape of Earth is approximated by a sphere)')
        itype = input('->').rstrip()
        itype = iut.check_int(itype)
        if itype < 1 or itype > 2: continue
        else:
            break
        
    if idm == 1:
        print( 'Enter latitude & longitude in degrees & minutes')
        print( '(if either latitude or longitude is between -1')
        print( 'and 0 degrees, enter the minutes as negative).')
        print( 'Enter integers for degrees, floats for the minutes if needed' )
        LTD,LTM,LND,LNM = input('-> ').rstrip().split(' ')  
        latd = iut.check_int(LTD)
        latm = iut.check_float(LTM)
        lond = iut.check_int(LND)
        lonm = iut.check_float(LNM)
        
        lat, lon = iut.check_lat_lon_bounds(latd,latm,lond,lonm)
        colat = 90-lat
    else:
        print( 'Enter latitude & longitude in decimal degrees')
        LTD,LND = input('-> ').rstrip().split(' ') 
        latd = iut.check_float(LTD)
        lond = iut.check_float(LND)
        
        lat, lon = iut.check_lat_lon_bounds(latd,0,lond,0)
        colat = 90-lat
        
    while 1:
        if itype==1:
            alt = input( 'Enter altitude in km: ').rstrip()
            alt = iut.check_float(alt)
            alt, colat, sd, cd = iut.gg_to_geo(alt, colat)
        else:
            alt = input( 'Enter radial distance in km (>3485 km): ').rstrip()
            alt = iut.check_float(alt)
            sd = 0; cd = 0
        
        if (itype == 2) and (alt < 3485):
            print('Alt must be greater then CMB radius (3485 km)').rstrip()
            continue
        else:
            break
        
    while 1: 
        date = input('Enter decimal date in years 1900-2030: ').rstrip()
        date = iut.check_float(date)
        if date < 1900 or date > 2035: continue
        else:
            break   

    return date, alt, lat, colat, lon, itype, sd, cd