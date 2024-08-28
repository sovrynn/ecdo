# ECDO (Exothermic Core-Mantle Decoupling - Dzhanibekov Oscillation)

This repo is intended to be a thoughtbank for brainstorming the [ECDO thesis](https://theethicalskeptic.com/2024/05/23/master-exothermic-core-mantle-decoupling-dzhanibekov-oscillation-theory/), created by the [Ethical Skeptic](https://theethicalskeptic.com/), and all things related to it.

Organization of the repo is mainly done through self-explanatory directory/file names. Information is written into Markdown (`.md`) files named `README.md`, and images/videos are placed into `img/` folders at each step of the directory tree.

## Contents

Following are the main folders of the repo along with their purpose. There is bound to be some overlap but I have made the categories as discrete as possible.

Major folders:
- `0-FULL-THESIS-BREAKDOWN`: An in-depth breakdown and scientific analysis of the ECDO thesis.
- `1-ADHOC-EVIDENCE`: A monolithic folder for all evidence of potential past and future ECDO events.

Minor folders:
- `2-LOCATION-MAPPING`: Mapping out how different areas of the world will fare during an ECDO event.
- `3-MONITORING-PRESENT-ROTATION`: Predicting the timing of the impending ECDO event.

Auxiliary folders:
- `4-DANGERS-PREPPING`: All matters ECDO-prepping, except location.
- `5-TOOLS-DATA-DEV`: Technical resources for ECDO.
- `6-LITERATURE`: Literature related to the ECDO, organized by author. 

## ECDO Newcomer Guide

1. What is the ECDO?
	- Mandatory reading: Ethical Skeptic's original thesis (`LITERATURE/0-ethical-skeptic`)
	- In-depth ECDO thesis breakdown (WIP): `FULL-THEORY-BREAKDOWN`
		- Breakdown of S1 -> S2 rotation: `FULL-THEORY-BREAKDOWN/s1-to-s2`
2. What is the evidence for the ECDO?
	- All manner of ECDO evidence: `ADHOC-EVIDENCE`
	- Location-specific evidence (ex: physical landmarks): `LOCATION-MAPPING`
3. How do we know it could be happening soon?
	- Predictions on the timeframe of the impending ECDO: `MONITORING-PRESENT-ROTATION/date-and-triggers`
	- Analysis on ECDO frequency: `FULL-THESIS-BREAKDOWN/ecdo-frequency`

# Contribution Guide

## Key: Where do I put my info?

Almost anything that could be used to justify an ECDO event belongs in `ADHOC-EVIDENCE`.
- `MONITORING-PRESENT-ROTATION` is only for speculative data feeds that show *something* is changing *now*. All historical material belongs in `ADHOC-EVIDENCE` from where you can backlink it.
- `LOCATION-MAPPING` is only for speculative analysis on how locations will fare in the ECDO. All physical evidence of ECDO belongs first in `ADHOC-EVIDENCE`.

The key here is to make judicious use of backlinks. There is bound to be overlap. The solution is to put info in the proper folder, and use backlinks to reference it in other locations. My preferred method for backlinks is to just mention the folder path (ex: `ADHOC-EVIDENCE/physical-evidence`) but you could also use a web URL link within the repo.

Put all literature (ex: books, research papers) related to ECDO in `LITERATURE`, and then backlink them in your analysis.

## Formatting guidelines

Content (`README.md`) guidelines:
- Ideally, these should consist of polished analysis about ONE topic instead of being used as notepads. Put potential leads into `"TODO"` sections.
- When possible, add citations, links, backlinks, and hard copies of sources.

Other guidelines:
- Name folders and files properly. Use lowercase dash-separated names instead of camel case.
- Follow the conventions you see. Use `README.md` files for text and `img` folders for graphics.
- Do not dump images into the repo without embedding them in some kind of analysis.

## Using git

In order to contribute, you'll need to be able to use git.

The high-level steps are:
- fork the repo
- make your changes in your fork
- create a pull request to the original repo

All pull requests will be reviewed to ensure they follow the contribution guidelines.

## Embedding Images into Markdown

Two ways:
1. Use this snippet (replace `PATH` with the path to the image, for example `img/australia.jpg`). `alt` and `Title` are shown when the image fails to load and on hover, respectively:
	- `![alt](PATH "Title")`
2. Use HTML directly if you want to change the size of the image (replace `PATH` and `ALT` with desired values, as well as width):
	- `<img src="PATH" alt="ALT" style="width:50%;"/>`

There are text editors such as Visual Studio Code that allow you to preview Markdown (render it) to help you check for Markdown errors and style the README.md how you wish locally.

For GIFs:
- `![alt](PATH)`

## Repo text search using grep

To search for a word or phrase in the repo, use this command-line command in the top-level `ecdo` folder:
- `grep -nr "WORD" --include="*.md" .`

Replace `WORD` with the phrase you want to search for.

## Adding TODOs

Whenever you add a reference to something you would like to investigate in the future, add a "TODO" (capitalized) somewhere (ex: in the section header).

This will allow you to easily reference a list of potential topics to look into by using `grep` on "TODO".

## Translations

Translations can be put in `/translation` folders within the relevant directory.

## TODO

- Global maps showing:
	- the circular paths of oceanic displacement around the two pivots
- Google Earth scripting
