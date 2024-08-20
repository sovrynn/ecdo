# ECDO (Exothermic Core-Mantle Decoupling - Dzhanibekov Oscillation)

This repo is intended to be a thoughtbank for brainstorming the [ECDO thesis](https://theethicalskeptic.com/2024/05/23/master-exothermic-core-mantle-decoupling-dzhanibekov-oscillation-theory/), created by the [Ethical Skeptic](https://theethicalskeptic.com/), and all things related to it.

Organization of the repo is mainly done through self-explanatory directory/file names. Information is written into Markdown (`.md`) files named `README.md`, and images/videos are placed into `img/` folders at each step of the directory tree.

Emphasis is placed on optimal data organization which minimizes redundancy and optimizes finding information. At the same time, the repo is an evolving structure that will change and grow as more information is added.

## Main Folder Contents

Following are the main folders of the repo along with their purpose. There is bound to be some overlap but I have made the categories as discrete as possible.

1. `0-ORIGINAL-THESIS`: A container for Ethical Skeptic's original ECDO thesis.
2. `1-FULL-THEORY-BREAKDOWN`: An in-depth breakdown and scientific analysis of the ECDO thesis.
3. `2-ADHOC-EVIDENCE`: A collection of evidence of past/upcoming ECDO events.
4. `3-MONITORING-PRESENT-ROTATION`: Information pertaining to the impending ECDO event.
5. `4-LOCATION-MAPPING`: Mapping out how different areas of the world will fare during an ECDO event.
6. `5-DANGERS-PREPPING`: All matters pertaining to preparing for an ECDO event aside from location.
7. `6-TOOLS-DATA-DEV`: Technical resources to help map out the ECDO event.

## ECDO Newcomer Guide

1. What is the ECDO?
	- The first mandatory reading is [Ethical Skeptic's original thesis](https://github.com/sovrynn/ecdo/tree/master/0-ORIGINAL-THESIS).
	- Next, check [1-FULL-THEORY-BREAKDOWN](https://github.com/sovrynn/ecdo/tree/master/1-FULL-THESIS-BREAKDOWN) for an in-depth breakdown of the ECDO thesis. Specifically, [1-FULL-THEORY-BREAKDOWN/s1-to-s2](https://github.com/sovrynn/ecdo/tree/master/1-FULL-THESIS-BREAKDOWN/s1-to-s2) is a breakdown of the S1 -> S2 rotation which would be worth looking at.
2. What is the evidence for the ECDO?
	- Ethical Skeptic's original thesis has some evidence for the ECDO.
	- [2-ADHOC-EVIDENCE](https://github.com/sovrynn/ecdo/tree/master/2-ADHOC-EVIDENCE) is filled with evidence for the ECDO.
	- Some locations in [4-LOCATION-MAPPING](https://github.com/sovrynn/ecdo/tree/master/4-LOCATION-MAPPING) have info on physical landmarks that could have been caused by previous ECDO events.
3. How do we know it could be happening soon?
	- Check [3-MONITORING-PRESENT-ROTATION/date-and-triggers](https://github.com/sovrynn/ecdo/tree/master/3-MONITORING-PRESENT-ROTATION/date-and-triggers) for predictions on the timeframe of the impending ECDO along with potential triggers.

## Basic Contribution Guidelines

1. Put information in the proper location in the proper format
	- Information goes in the folder where it belongs and nowhere else. If a new folder needs to be made, do it in the proper location.
	- Folders and files should always be named properly, with concise and meaningful names. To put multiple words into a filename, connect the words with dashes (`-`). Names should always be lowercase, not camel case.
	- Text goes into `README.md` files, and graphic files into `img/` folders. Feel free to inline images into the Markdown.
2. Don't add noise
	- In order to make this repo as high signal as possible, avoid adding in low-signal content such as sloppy analysis or information that lacks context/explanation. Instead, content should be precise, without errors, data-driven, and well-written.
	- Use English, with proper spelling and grammar.
	- When possible, add links and references.

## Additional Contribution Guidelines

- `README.md` files should be about ONE topic analyzed at ONE level of abstraction
	- `README.md` files are not data dumps. Don't tack on data to a `README.md` file just because you don't where else to put it.
	- `README.md` files should be a polished analysis of one specific topic. They should be organized into proper sections.
	- `README.md` files should never be an amalgamation of different topics. That is a sign the `README.md` file should be broken down into several smaller topics.
- Images should almost always be embedded in `README.md` files as part of an analysis or explanation
	- Some images may be meaningful on their own, but most require/benefit from an accompanying explanation. Don't dump images in `img/` folders without embedding them in Markdown, especially if the content of the image is not obvious from a glance.

## Misc Contribution Guidelines

Information in other languages can be put in `/translation` folders within the relevant directory.

## How to Contribute

In order to contribute, you'll need to be able to use git.

The high-level steps are:
- fork the repo
- make your changes in your fork
- create a pull request to the original repo

All pull requests will be reviewed to ensure they follow the contribution guidelines.

## Embedding Images into Markdown

Two ways:
1. You can embed an image in Markdown using this snippet (replace `PATH` with the path to the image, for example `img/australia.jpg`). `alt` and `Title` are shown when the image fails to load and on hover, respectively:
	- `![alt](PATH "Title")`
2. You can also use HTML directly in Markdown if you want to change the size of the image. Use this snippet (replace `PATH` and `ALT` with desired values, as well as width):
	- `<img src="PATH" alt="ALT" style="width:50%;"/>`

There are text editors such as Visual Studio Code that allow you to preview Markdown (render it) to help you check for Markdown errors and style the README.md how you wish locally.

For GIFs:
- `![alt](PATH)`

## TODO wishlist, top priorities

- Global maps showing:
	- the circular paths of oceanic displacement around the two pivots
- Google Earth scripting
