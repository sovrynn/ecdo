So a lot of times I'm getting really wack looking fits where it'll follow the curve till 2025 and then go into a fat downward parabola with a sharp short uptick at the end.

Example parameter values:
A   = 73731287.2859
B   = -19554.8481
tc  = 2069.8131
D   = 566.3958
f   = 0.1780
phi = 12.0732
Derp: 2069.8130531547217

In a "healthy" looking fit, the parameters are:
  A   = 280712489.7540
  B   = -46312959.9987
  tc  = 2059.1938
  D   = -0.0196
  f   = 1.0905
  phi = 2.3136

I kinda want to make sure of things here. Don't want to get some ducked up fit.

# Option 1: Random starts

I could try running this across say 10000 values and finding good graphs. Okay it should only be like 100.

## Results

So I tried this with 2 different values each for the 5 parameters resulting in 32 new permutations.

Nothing new.

I'll try one more time.

# Option 2: Global optimization

Check out dual annealing: https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.dual_annealing.html#scipy.optimize.dual_annealing

I'll have to try it just to be sure.