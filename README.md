# ECDO (Exothermic Core-Mantle Decoupling - Dzhanibekov Oscillation)

This repo is intended to be a thoughtbank for brainstorming the [ECDO thesis](https://theethicalskeptic.com/2024/05/23/master-exothermic-core-mantle-decoupling-dzhanibekov-oscillation-theory/), created by the [Ethical Skeptic](https://theethicalskeptic.com/), and all things related to it.

https://github.com/user-attachments/assets/03e31c9e-7d54-4c65-996a-0a635caf3394

See [here](https://github.com/sovrynn/ecdo/tree/master/6-LITERATURE-MEDIA/nobulart/ecdo-visualizations) for the full-res visualization.

Organization of the repo is mainly done through self-explanatory directory/file names. Information is written into `README.md` (Markdown) files, and embedded media is placed into `img/` folders at each step of the directory tree.

## Contents

Major folders:
- `0-FOUNDATION-THEORY`: Scientific knowledge, theories, and in-depth breakdown of the ECDO thesis.
- `1-EVIDENCE`: A monolithic folder for FACTUAL evidence.

Minor folders:
- `2-LOCATION-ANALYSIS`: Location-specific flood and ECDO analysis.
- `3-FORECASTING`: Predicting the timing of the impending ECDO event.

Auxiliary folders:
- `4-DANGERS-PREPPING`: All matters ECDO-prepping.
- `5-TOOLS-DEV`: Technical resources for ECDO.
- `6-LITERATURE-MEDIA`: Literature and media related to the ECDO, organized by author.
- `7-TRANSLATIONS`: Non-English ECDO writeups.

## ECDO Newcomer Guide

1. **What is the ECDO?**
	- Mandatory reading: Ethical Skeptic's original thesis (`LITERATURE-MEDIA/0-ethical-skeptic`)
	- In-depth ECDO thesis breakdown (WIP): `FULL-THEORY-BREAKDOWN`
2. **What is the evidence for the ECDO?**
	- All manner of ECDO evidence: `EVIDENCE`
3. **How do we know it could be happening soon?**
	- Timeframe predictions: `FORECASTING`
    - Present climate anomalies: `EVIDENCE/PRESENT-CLIMATE-ANOMALIES`
    - Impending cosmic alignments: `EVIDENCE/IMPENDING-COSMIC-ALIGNMENTS`

# Contribution Guide

## Key: Where do I put my info?

If you're not sure where to put things, it probably belongs in `EVIDENCE`. Almost anything that could potentially be used to justify an ECDO event belongs there first and other places second.
- `FOUNDATION-THEORY` is for prerequisite knowledge, speculative scientific theories, and explanation of the ECDO thesis.
- `LOCATION-ANALYSIS` is only for location-specific analysis. This is the one place where it's fine or even recommended to have significant overlap with `EVIDENCE` to have comprehensive analysis. But the evidence should first go into `EVIDENCE`.

The key here is to make judicious use of backlinks. There is bound to be overlap. The solution is to put info in the proper folder, and use backlinks to reference it in other locations. My preferred method for backlinks is to just mention the folder path (ex: `EVIDENCE/physical-evidence`) but you could also use a web URL link within the repo.

Put notable literature and media (ex: books, research papers) related to ECDO in `LITERATURE-MEDIA`, and then backlink them in your analysis.

## Formatting guidelines

Content (`README.md`) guidelines:
- Ideally, these should consist of polished analysis about ONE topic instead of being used as messy notepads. Put unrefined ideas into `"TODO"` sections.
- No need to fracture these up prematurely. Only when it helps.
- When possible, add citations, links, backlinks, and hard copies of sources.
- TODOs always go at the very bottom in their own main section.
- Citations should go at the bottom right before TODOs.

Other guidelines:
- Name folders and files properly. Use lowercase dash-separated names instead of camel case.
- Follow the conventions you see. Use `README.md` files for text and `img` folders for graphics.
- Do not dump images into the repo without embedding them in some kind of analysis.

## Using git

In order to contribute, you'll need to be able to use git:
- fork the repo
- make your changes in your fork
- create a pull request to the original repo

All pull requests will be reviewed to ensure they follow the contribution guidelines.

## Embedding Images into Markdown

Two ways:
1. Use this snippet (replace `PATH` with the path to the image, for example `img/australia.jpg`). `alt` and `Title` are shown when the image fails to load and on hover, respectively:

```
![alt](PATH "Title")
```

2. Use HTML directly if you want to change the size of the image (replace `PATH` and `ALT` with desired values, as well as width):

```
<img src="PATH" alt="ALT" style="width:50%;"/>`
```

For GIFs:

```
![alt](PATH)
```

## Repo text search (grep, find)

To search for a word or phrase in the repo, use this command-line command in the top-level `ecdo` folder (Replace `WORD` with the phrase you want to search for:

```
grep -nr "WORD" --include="*.md" .
```

To search for a specific filename pattern, use:

```
find . -name "[pattern]"
```

## TODO sections

Whenever you would like to add a reference to something you would like to investigate in the future, add it in a "TODO" section at the very bottom of the page. This will also allow you to easily reference a list of potential topics to look into by using `grep` on "TODO".

## Translations

Translations can be put in `/translation` folders within the relevant directory.

# Primary Contributors

- Repo owner and maintainer: [Sovrynn](https://sovrynn.github.io)
- Theories, analysis, research, and visualizations: [Craig Stone](https://nobulart.com)
- Research: [aa-hermit](https://github.com/aa-hermit)
