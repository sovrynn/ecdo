So I suppose this might not be too simple. Going to lean on o1 for this. Everything that gets calculated should be easily verifiable.

It's not too complex really - it's a math equation with a few unknowns.

# Attempt 1 - o1

This script fails miserably.

# Fit 1 - complex version, got lucky (have it saved in one of the scripts)

    p0 = [
        1.0e4,       # A  ~ offset
        -1.0e3,      # B  ~ scale factor for ln(tc - t)
        2050,  # tc ~ a bit beyond the last data time
        1,         # D  ~ amplitude of log-periodic oscillation
        1,         # f  ~ frequency
        1.0          # phi ~ phase shift
    ]

Best-fit parameters:
  A   = 280712489.7540
  B   = -46312959.9987
  tc  = 2059.1938
  D   = -0.0196
  f   = 1.0905
  phi = 2.3136

Correlation coefficient (r) = 0.9965
p-value for r               = 0.0000e+00

Critical time = 2059.2

# Fit 2 - simple

    p0 = [
        1000000,       # A  ~ offset
        5000000,      # B  ~ scale factor for ln(tc - t)
        2100,  # tc ~ a bit beyond the last data time
        -2,         # p
    ]

simplefit-simple-graph.py:42: RuntimeWarning: overflow encountered in power
  return A + B * ((tc - t) ** p)
Completed fitting
Data:
Best-fit parameters:
A   = -13480925.5479
B   = 299385767048664.1250
tc  = 2358.5984
p   = -2.5233

At 2170 it covers the whole world.

Correlation coefficient (r) = 0.9956
p-value for r               = 0.0000e+00