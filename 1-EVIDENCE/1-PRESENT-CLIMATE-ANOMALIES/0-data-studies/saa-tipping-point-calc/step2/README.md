# How to run

fit4.py is the file. This creates the tipping point line on the side

# Notes

This part is another difficult part. I'll have to:
- figure out that tipping point equation
- fit it to the data, also getting confidence intervals
- account for possible overfitting, noise, or margins of error that could skew the result I'm getting

I do think it's ridiculous that they modeled the global sea level using the tipping point equation. What do they think is going to happen, global sea level to infinity? And if that fit gave such a "high statistical confidence" then how much personal confidence should we take in the adjacent SAA tipping point fit?

# How to do

I honestly have no idea how to do this I've never really done it before particularly with an equation this complex

# Verification

I haven't truly "verified" this one. But it seems likely that I've found the correct fit.

There are many kinds of fits:
- fits with massive weird parabola + upticks
- fits with strange upticks that go to extremely long timeframes
- fits that go downwards
- flat fits

Leaving those all aside, there's only one fit I've seen that completes within a century, and is monotonic without any weird jumps. That's what I've decided is the correct fit.

I tried dual annealing but it didn't work.

I tried a very small number of "random starts" and ended up at the same sets of failures described above, with the one kind of "successful" fit.

Finally my tc calculation for 2010 is 2038, which is within 5 years of the Desantis calculation. I spliced gufm1 and igrf at year 1945, which could explain the difference - I don't know when they spliced it. It seems like they spliced it at year 1990 if I had to guess, which is when gufm1 ends.

# How to run this stuff

So the optimizer I'm using; scipy curve fit, is very finicky. It needs the starting values to be close to the optimal values (locally optimum) otherwise it'll gradient descent to some weird spot. See fit5 folder for examples.

Specifically, you should set tc's starting value to 1 bigger than your max year in the data (which may differ from run to run!). Otherwise it'll act up.

# Biggest annoyance

My 2010 critical time estimate is 2038-9, whereas the one in the paper is 2033. Where is this discrepancy coming from?

I tried both a 1945 and 1990 splice and these both have 2038-9 as their critical time. Should I try a 1900 splice? I doubt that will change anything. Perhaps I'll try it.