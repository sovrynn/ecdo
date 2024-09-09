# Math

## Fourier Filters

2 steps, Fourier transforms and Fourier filters.

### Fourier Transform

Converts a signal from the time domain into the frequency domain. It produces a frequency-domain representation of the signal where each component represents a specific frequency and its amplitude and phase. Together, the sum of all individual signal components (calculated using an integral across all x values) will give you back the original function.

*"Decomposition into Frequencies: The Fourier transform takes a time-domain signal (or spatial-domain in the case of images) and decomposes it into a sum of sinusoidal components (sine and cosine functions) with varying frequencies, amplitudes, and phases. Each sinusoidal component corresponds to a specific frequency in the original signal."* [1]

### Low-pass, high-pass filters

These are filters that only allow signals with frequencies lower/higher (respectively) than a certain cutoff frequency to pass through while reducing the amplitudes of frequencies higher/lower than the cutoff frequency. Essentially, low-pass filters reduce the strength of the high-frequency "noise", while high-pass filters will show the strength of the high-frequency "noise".

### Signal strength

The Fourier Filter breaks down the original signal into a function which maps frequency to sinusoidal components. You can find stronger signals by simply filtering for signals that have a higher amplitude and contribute more to the original values.

## Citations

1. ChatGPT