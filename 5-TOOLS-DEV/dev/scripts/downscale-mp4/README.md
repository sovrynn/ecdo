# Python script for downscaling MP4 files

Downscales videos with a target size of under 10 MB. Reduces bitrate and resolution proportionally using ffmpeg. In the code the target size is set to 9.4 MB as the output files seem to have ~0.5 MB extra size.

Purpose is for uploading to Github READMEs.

It takes a directory path as input, checks all the MP4 files, scales down the ones that are over 10 MB, adds `S_` prefix to the filename, and writes them to the same directory it read from.

Replace the directory path at the bottom of the script.

## Issues

Github doesn't support MPEG-4 simple profile codec, it seems. Need to use H.264.
