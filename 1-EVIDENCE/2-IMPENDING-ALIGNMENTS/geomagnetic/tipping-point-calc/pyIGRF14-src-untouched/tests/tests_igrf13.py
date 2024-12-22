#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr  4 18:29:16 2020
@author: Ciaran Beggan (British Geological Survey)

Uses pytest

 in a terminal, run :
     
    >> py.test igrf13_tests.py
   or 
   in Spyder: In [1]: !py.test tests/igrf13_tests.py
   or 
   >> In [1]: !python -m pytest tests

pytest will find these test scripts, run them and alert you to any errors


Test values and examples for running synth_values for IGRF-13
    # Generate some test values for date, lat, lon and altitude
    date = np.arange(1900,2025, 15, dtype='int32')
    lat =  90-np.arange(-85,85, 20, dtype='int32')
    lon = np.arange(-150, 150, 30, dtype='int32')
    alt = np.arange(6300, 6750, 50, dtype='int32')
    for d, clt, ln, a in zip(date, lat, lon, alt):
        print('{},{},{},{}'.format(d,clt,ln,a))

    There are 9 tests in total.  Values have been checked independently 
    against igrf.f and D. Kerridge Jupyter Notebook implementation (2019)

"""


from scipy import interpolate
import igrf_utils as iut
import numpy as np
from numpy.testing import assert_allclose
import pytest

IGRF_FILE = r'./IGRF13.shc'
igrf = iut.load_shcfile(IGRF_FILE, None)
f = interpolate.interp1d(igrf.time, igrf.coeffs)

@pytest.mark.parametrize('date, lat, lon, alt, expected_Bxyz',                       
           [ (1900, 175, -150, 6300, np.array([-5072.93,10620.34,-67233.55]) ),
             (1915, 155, -120, 6350, np.array([14692.62,12387.97,-59640.81]) ),
             (1930, 135, -90, 6400,  np.array([23925.47,10358.94,-30640.98]) ),
             (1945, 115, -60, 6450,  np.array([23642.86, -200.29, -7607.92]) ),
             (1960, 95, -30, 6500,   np.array([23647.00,-9302.27, -3610.73]) ),
             (1975, 75, 0, 6550,     np.array([30050.59,-3367.82,  6332.69]) ),
             (1990, 55, 30, 6600,    np.array([25224.81, 1058.25, 30965.61]) ),
             (2005, 35, 60, 6650,    np.array([14718.37, 2842.99, 46050.88]) ),
             (2020, 15, 90, 6700,    np.array([ 3732.49, 1293.25, 50833.96]) )
             ])

def test_synth_values(date, lat, lon, alt, expected_Bxyz ):

        coeffs = f(date) 
        
        # Compute the Br, Btheta and Bphi value for this location 
        found = iut.synth_values(coeffs.T, alt, lat, lon,
                          igrf.parameters['nmax'])
        foundxyz = np.array([ -found[1], found[2], -found[0] ])
        assert_allclose(foundxyz, expected_Bxyz, rtol=1e-02, atol=1e-02)
