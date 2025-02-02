#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Apr  2 22:54:35 2020

@author: Ciaran Beggan (British Geological Survey)

A set of functions to parse the three input options of the IGRF code
         '1 - values at one or more locations & dates'
         '2 - values at yearly intervals at one location'
         '3 - values on a latitude/longitude grid at one date'

"""

import igrf_utils as iut
import numpy as np

degree_sign= u'\N{DEGREE SIGN}'

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

def option2():
    '''
    Option 2 is the single point at multiple integer years (2015, 2016, 2017 ...)
    and at the same altitude
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
        print( 'Enter 4 integers' )
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
        
        if ((itype == 2) and (alt < 3485)) or ((itype == 1) and (alt < -3300)) :
            print('Alt must be greater then CMB radius (3485 km)')
            continue
        else:
            break
        
    while 1: 
        dates = input('Enter start decimal date in years 1900-2030: ').rstrip()
        dates = iut.check_float(dates)
        if dates < 1900 or dates > 2035: continue
        else:
            break
    while 1:
        datee = input('Enter end decimal date in years 1900-2030: ').rstrip()
        datee = iut.check_float(datee)
        if datee < 1900 or datee > 2035: 
            continue
        elif datee < dates: continue
        else:
            break   

    date = np.arange(dates,datee+1)
    alt = np.ones(len(date),) * alt
    lat = np.ones(len(date),) * lat
    colat = np.ones(len(date),) * colat
    lon = np.ones(len(date),) * lon
    sd = np.ones(len(date),) * sd
    cd = np.ones(len(date),) * cd    
    
    return date, alt, lat, colat, lon, itype, sd, cd


def option3():
    '''
    Option 3 is a grid of points at a single time and altitude.
    Only decimal degrees are accepted. Increments are checked to be sensible.
    '''

    while 1:
        print('Enter value for coordinate system:')
        print('1 - geodetic (shape of Earth using the WGS-84 ellipsoid)')
        print('2 - geocentric (shape of Earth is approximated by a sphere)')
        itype = input('->')
        itype = iut.check_int(itype)
        if itype < 1 or itype > 2: continue
        else:
            break
        
    while 1:
        print( 'Enter starting latitude, increment/decrement and '
              'final latitude in decimal degrees')
        LTS, LTI, LTE = input('-> ').rstrip().split(' ') 
        lats = iut.check_float(LTS)
        lati = iut.check_float(LTI)
        late = iut.check_float(LTE)
        
        if lats < -90 or lats > 90 or late < -90 or late > 90: 
            continue
            
        if (abs(lati) > (abs(lats - late))): 
            print('Increment or decrement are larger than the gap between the ' 
                  'start and end points') 
            continue
        else:
                break
              
        
    while 1:
        print( 'Enter starting longitude, increment/decrement and'
              ' final longitude in decimal degrees')
        LNS, LNI, LNE = input('-> ').rstrip().split(' ') 
        lons = iut.check_float(LNS)
        loni = iut.check_float(LNI)
        lone = iut.check_float(LNE)
        
        if lons < -180 or lons > 360 or lone < -180 or lone > 360: continue
        if abs(loni) > abs((lons) - (lone)):
            print('Increment or decrement are larger than the gap between the '
                  'start and end points') 
            continue
        else:
            break
     
        
    while 1:
        if itype==1:
            alt = input( 'Enter altitude in km: ').rstrip()
            alt = iut.check_float(alt)
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

        

    # Create a meshgrid to fill in the colat/lons
    colat, lon = np.meshgrid(90-np.arange(lats,late,lati),
                             np.arange(lons,lone,loni) )
    # Arrange into a long vector for synth grid
    colat = colat.flatten()
    lon = lon.flatten()
    lat = 90-colat
    
    # Convert geodetic latitude to geocentric, if required
    if itype==1:
         alt, colat, sd, cd = iut.gg_to_geo(np.ones(len(colat),)*alt, colat[:])
    
    date = np.ones(len(lon),) * date
     
    return date, alt, lat, colat, lon, itype, sd, cd


def write1(name, date, alt, lat, colat, lon, X, Y, Z, dX, dY, dZ, \
                  dec, hoz, inc, eff, decs, hozs, incs, effs, itype, igrf_gen):
    '''
    Write out a single lat/long/alt the main field and SV values to screen or a file
    '''
    if itype == 1:
         alt, lat = iut.geo_to_gg(alt, colat)
         lat = 90-lat
    
    if not name: # Print to screen
        print('\nGeomagnetic field values at: ', str(np.round(lat, decimals=4)) 
            + degree_sign  + ' / ' + str(lon) 
            + degree_sign + ', at altitude ' 
            + str(np.round(alt, decimals=3)) + ' for ' + str(date) 
            + ' using IGRF-' + igrf_gen)
        print('Declination (D):', '{: .3f}'.format(dec), degree_sign)
        print('Inclination (I):', '{: .3f}'.format(inc), degree_sign)
        print('Horizontal intensity (H):', '{: .1f}'.format(hoz), 'nT')
        print('Total intensity (F)     :', '{: .1f}'.format(eff), 'nT')
        print('North component (X)     :', '{: .1f}'.format(X), 'nT')
        print('East component (Y)      :', '{: .1f}'.format(Y), 'nT')
        print('Vertical component (Z)  :', '{: .1f}'.format(Z), 'nT')
        print('Declination SV (D):', '{: .2f}'.format(decs), 'arcmin/yr')
        print('Inclination SV (I):', '{: .2f}'.format(incs), 'arcmin/yr')
        print('Horizontal SV (H):', '{: .1f}'.format(hozs), 'nT/yr')
        print('Total SV (F)     :', '{: .1f}'.format(effs), 'nT/yr')
        print('North SV (X)     :', '{: .1f}'.format(dX), 'nT/yr')
        print('East SV (Y)      :', '{: .1f}'.format(dY), 'nT/yr')
        print('Vertical SV (Z)  :', '{: .1f}'.format(dZ), 'nT/yr')
    else: # Print to filename 
        with open(name, 'w') as file: 
            file.writelines(['Geomagnetic field values at: ',  str(np.round(lat, decimals=4)) 
                + degree_sign +' / ' + str(lon) 
                + degree_sign + ', at altitude ' 
                + str(np.round(alt, decimals=3)) +', for ' + str(date) +'\n'])
            file.writelines(['Declination (D):', '{: 5.2f}'.format(dec), degree_sign + '\n'])
            file.writelines(['Inclination (I):', '{: 5.2f}'.format(inc), degree_sign + '\n'])
            file.writelines(['Horizontal intensity (H):', '{: 8.1f}'.format(hoz), 'nT\n'])
            file.writelines(['Total intensity (F)     :', '{: 8.1f}'.format(eff), 'nT\n'])
            file.writelines(['North component (X)     :', '{: 8.1f}'.format(X), 'nT\n'])
            file.writelines(['East component (Y)      :', '{: 8.1f}'.format(Y), 'nT\n'])
            file.writelines(['Vertical component (Z)  :', '{: 8.1f}'.format(Z), 'nT\n'])
            file.writelines(['Declination SV (D) :', '{: 5.2f}'.format(decs), 'arcmin/yr\n'])
            file.writelines(['Inclination SV (I) :', '{: 5.2f}'.format(incs),  'arcmin/yr\n'])
            file.writelines(['Horizontal SV (H)  :', '{: 7.1f}'.format(hozs), 'nT/yr\n'])
            file.writelines(['Total SV (F)       :', '{: 7.1f}'.format(effs), 'nT/yr\n'])
            file.writelines(['North SV (X)       :', '{: 7.1f}'.format(dX), 'nT/yr\n'])
            file.writelines(['East SV (Y)        :', '{: 7.1f}'.format(dY), 'nT/yr\n'])
            file.writelines(['Vertical SV (Z)    :', '{: 7.1f}'.format(dZ), 'nT/yr\n'])
            
            
def write2(name, date, alt, lat, colat, lon, X, Y, Z, dX, dY, dZ, \
                  dec, hoz, inc, eff, decs, hozs, incs, effs, itype, igrf_gen):
     '''
     Write out the main field and SV values to screen or a file for a single
     location for mutliple times
     '''
     if itype == 1:
         alt, lat = iut.geo_to_gg(alt, colat)
         lat = 90-lat
    
     if not name: # Print to screen
        print('\nGeomagnetic field values at: ', str(np.round(lat[0], decimals=4)) 
            + degree_sign  + ' / ' + str(lon[0]) 
            + degree_sign + ', at altitude ' 
            + str(np.round(alt[0], decimals=3))
            + ' using IGRF-' + igrf_gen)
        print('Date  D(' +degree_sign+')  I(' +degree_sign+')  H(nT)' 
              ' F(nT) X(nT) Y(nT)  Z(nT)     '
              'SV_D(min/yr)  SV_I(min/yr)  SV_H(nT/yr) ' 
              ' SV_F(nT/yr)  SV_X(nT/yr)  SV_Y(nT/yr)  SV_Z(nT/yr) ' )
         #for loop to write to screen ...
        for i in range(len(date)):
            print(str(date[i]), '{: .3f}'.format(dec[i]),
             '{: .3f}'.format(inc[i]),
             '{: .1f}'.format(hoz[i]), 
             '{: .1f}'.format(eff[i]),
             '{: .1f}'.format(X[i]), 
             '{: .1f}'.format(Y[i]),
             '{: .1f}'.format(Z[i]),
             '{: .2f}'.format(decs[i]), 
             '{: .2f}'.format(incs[i]),
             '{: .1f}'.format(hozs[i]), 
             '{: .1f}'.format(effs[i]),
             '{: .1f}'.format(dX[i]),
             '{: .1f}'.format(dY[i]),
             '{: .1f}'.format(dZ[i]))
     else: # Print to filename 
        with open(name, 'w') as file: 
            file.writelines(['Geomagnetic field values at: ',  str(np.round(lat[0], decimals=4)) 
                + degree_sign +' / ' + str(lon[0]) 
                + degree_sign + ', at altitude ' 
                + str(np.round(alt[0], decimals=3)) 
                + ' using IGRF-' + igrf_gen + '\n'])
            file.writelines(['Date  D(' +degree_sign+')  I(' +degree_sign+')  H(nT)' 
              ' F(nT) X(nT) Y(nT)  Z(nT)     '
              'SV_D(min/yr)  SV_I(min/yr)  SV_H(nT/yr) ' 
              ' SV_F(nT/yr)  SV_X(nT/yr)  SV_Y(nT/yr)  SV_Z(nT/yr) \n'])
            # Write out in a loop
            for i in range(len(date)):
                file.writelines([str(date[i]), ' ',
                 '{: 6.2f}'.format(dec[i]),
                 '{: 6.2f}'.format(inc[i]),
                 '{: 9.1f}'.format(hoz[i]), 
                 '{: 9.1f}'.format(eff[i]),
                 '{: 9.1f}'.format(X[i]), 
                 '{: 9.1f}'.format(Y[i]),
                 '{: 9.1f}'.format(Z[i]),
                 '{: 5.2f}'.format(decs[i]), 
                 '{: 5.2f}'.format(incs[i]),
                 '{: 7.1f}'.format(hozs[i]), 
                 '{: 7.1f}'.format(effs[i]),
                 '{: 7.1f}'.format(dX[i]),
                 '{: 7.1f}'.format(dY[i]),
                 '{: 7.1f}'.format(dZ[i]), '\n'])
    


def write3(name, date, alt, lat, colat, lon, X, Y, Z, dX, dY, dZ, \
                  dec, hoz, inc, eff, decs, hozs, incs, effs, itype, igrf_gen):
     '''
     Write out the main field and SV values to screen or a file for a grid
     location for a single time
     '''
     if itype == 1:
         alt, lat = iut.geo_to_gg(alt, colat)
         lat = 90-lat
    
     if not name: # Print to screen
        print('\nGeomagnetic field values for: ', str(date[0]) + ', at altitude ' 
            + str(np.round(alt[0], decimals=3)) 
            + ' using IGRF-' + igrf_gen)
        print('Latitude  Longitude  D(' +degree_sign+')  I(' +degree_sign+')  H(nT)' 
              ' F(nT) X(nT) Y(nT)  Z(nT)     '
              'SV_D(min/yr)  SV_I(min/yr)  SV_H(nT/yr) ' 
              ' SV_F(nT/yr)  SV_X(nT/yr)  SV_Y(nT/yr)  SV_Z(nT/yr) ' )
         #for loop to write to screen ...         
        for i in range(len(lon)):
            print(str(np.round(lat[i], decimals=4)), str(np.round(lon[i], decimals=4)), 
             '{: .3f}'.format(dec[i]),
             '{: .3f}'.format(inc[i]),
             '{: .1f}'.format(hoz[i]), 
             '{: .1f}'.format(eff[i]),
             '{: .1f}'.format(X[i]), 
             '{: .1f}'.format(Y[i]),
             '{: .1f}'.format(Z[i]),
             '{: .2f}'.format(decs[i]), 
             '{: .2f}'.format(incs[i]),
             '{: .1f}'.format(hozs[i]), 
             '{: .1f}'.format(effs[i]),
             '{: .1f}'.format(dX[i]),
             '{: .1f}'.format(dY[i]),
             '{: .1f}'.format(dZ[i]))
     else: # Print to filename 
        with open(name, 'w') as file: 
            file.writelines(['\nGeomagnetic field values for: ', str(date[0]) + ', at altitude ' 
                             + str(np.round(alt[0], decimals=3)) 
                             + ' using IGRF-' + igrf_gen])
            file.writelines(['Latitude Longitude  D(' +degree_sign+')  I(' +degree_sign+')  H(nT)' 
              ' F(nT) X(nT) Y(nT)  Z(nT)     '
              'SV_D(min/yr)  SV_I(min/yr)  SV_H(nT/yr) ' 
              ' SV_F(nT/yr)  SV_X(nT/yr)  SV_Y(nT)  SV_Z(nT/yr) \n'])
            # Write out in a loop
            for i in range(len(lon)):
                file.writelines([str(np.round(lat[i], decimals=4)), ' ', 
                                 str(np.round(lon[i], decimals=4)), ' ',
                 '{: 6.2f}'.format(dec[i]),
                 '{: 6.2f}'.format(inc[i]),
                 '{: 9.1f}'.format(hoz[i]), 
                 '{: 9.1f}'.format(eff[i]),
                 '{: 9.1f}'.format(X[i]), 
                 '{: 9.1f}'.format(Y[i]),
                 '{: 9.1f}'.format(Z[i]),
                 '{: 5.2f}'.format(decs[i]), 
                 '{: 5.2f}'.format(incs[i]),
                 '{: 7.1f}'.format(hozs[i]), 
                 '{: 7.1f}'.format(effs[i]),
                 '{: 7.1f}'.format(dX[i]),
                 '{: 7.1f}'.format(dY[i]),
                 '{: 7.1f}'.format(dZ[i]), '\n'])