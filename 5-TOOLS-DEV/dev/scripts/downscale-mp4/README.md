# Python script for downscaling MP4 files

Downscales videos with a target size of under 10 MB. Reduces bitrate and resolution proportionally using ffmpeg.

Purpose is for uploading to Github READMEs.

It scans a folder for all the MP4 files, scales down the ones that are over 10 MB, adds `S_` prefix to the filename, and writes them to an output directory.

## Installing ffmpeg on Linux

Might need to link the free and non-free RPM Fusion repositories, and then install ffmpeg using dnf.

> sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
> sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
> sudo dnf update
> sudo dnf install ffmpeg

## Usage

The input and output directories are both customizable via command line args, just pass them in as the first and second args when running the script, no dashes or extra characters.

> python3 downscale-mp4.py [input dir] [output dir]

If you don't pass one or both of them in, the script will default to the current folder.

## MB size discrepancies

Possibility for discrepancy with 1000 vs 1024 KB size for MB. If there is, change the target size constant from 9.9 to 9.7 in the script.

## Notes

Github doesn't support MPEG-4 simple profile codec, it seems. Need to use H.264.