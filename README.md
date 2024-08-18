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
- clone the latest version of the repository to your local machine
- make a new git branch
- make your changes
- create a pull request

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
