# PDF Generator

This folder is for script(s) that take Markdown and generate PDFs, embedding images.

There are a lot of scripts here, usually they take input filenames in the form of an input arg, or just read from input.txt by default, and write output to output.txt, or replace the original file content.

Main scripts:
- gen-international.py: Generates the PDF. If it finds a bold font file it'll try to load both italic and bold. Currently uses A4 (thinner than standard 8.5 x 11). Reads input parameters (multiple) from input.txt.
- gen.py: Deprecated, has some (simple) bugs in it with the hardcoded formatting protocol I made (doesn't load the styles in).

Format checkers/modifiers (all take filename as input arg):
- citation-checker.py: Looks for bracket citations. Prints out the total number (up to the highest one it finds) along with any missing ones.
- contiguous-line-check.py: Looks for all contiguous line pairs and prints them out.
- duplicate-citation-check.py: Looks for duplicate bracket citations. Weird links could potentially break it.
- img-webp-rename.py: Looks for all image embeddings and renames them in order of X.webp. Specifically for TES blog, which are all webp images.
- add-numbered-list-spacing.py: Deprecated unintellegent script, matches numbered lists and adds a blank line between them.

Format savers/adders (all take filename as input arg):
- save-image-scalings.py: Saves all image embedding lines (with image scalings) to an output file, so they can be reused in other translations (with another script to add them).
- save-img-footers: Saves all manual image footer (start with double backtick) line numbers to output.txt, so they can be reused.
- add-img-footers: Reads line numbers from input.txt, takes relative filename as input arg, writes relative filename content with image footers added to output.txt.
- add-image-scalings.py: Same as adding image footers.

Citation list generator:
- gen-multiline-citations.py: Reads citations from input.txt. Multiple lines of a single citation are separated by spaces, and all separate citations are contiguous. No list numberings. It'll generate numberings on the lines.
- gen.py: Does the above but assumes all citations are on single lines.
- space-contiguous-lines.py: Adds blank lines between contiguous non-empty lines.

## Personalized formatting

Image sizes - [0,1] scaling, as a word, after the image embedding

Image footer markings - Prepend double backtick "``"

Automatically looks for image footers of format '**Exhibit *' and adds extra margins to them. Image footers not starting with that sequence need to be marked manually with double backticks.

## Instructions

Run:
- pip install reportlab markdown Pillow

Install cairo: https://formulae.brew.sh/formula/cairo

Install gi: https://pygobject.gnome.org/getting_started.html#macosx-getting-started

Install rsvg: https://superuser.com/questions/877904/installing-rsvg-on-a-mac

Prepare input file `input.txt`.

You need to download the font .tff files into this directory as well. If you're generating non-English characters that needs to be supported in the font file.

Run the script. No input args.

## Notes

For ease of use to mitigate the following anomalies, I recommend copying the directory you want to generate. Adding in the new formattings. And then deleting the directory afterwards:
- Blanklines won't get stripped. Actually a pro - it can help you adjust the spacing manually.
- It doesn't format lists in a special way. I removed it from the script because it wasn't working. Manually format them yourself.
- Header formatting doesn't work right. Use 3 header levels max.
- It can't handle webp files. It'll generate png conversion files and then embed those. Annoying if you run it on the original repo as you'll get a bunch of useless new duplicate image files.

Links outside of the citations section need to be manually checked to make sure they didn't get matched in the markdown regex. Also to detach the citations from them.

Line spacing kind of works.

Reportlab fonts: https://docs.reportlab.com/reportlab/userguide/ch3_fonts/#truetype-fonts-with-asian-characters

## Prompt creation

Write a python script that takes an input directory along with other formatting parameters read from an input file, and for each Markdown file (.md) in the input directory, generates a properly formatted PDF, which also embeds images that are embedded in the Markdown files.

The input file will have each input parameter on its own line. The following parameters will be read (all required):
- input directory relative path from where the script is run
- page margins, in inches, float
- font, string
- base font size, fontsize, float
- smallest header font size, float
- header scaling increment, in fontsize, float
- header bold boolean (1 = bold, 0 = no bold)
- image margin, in inches, float
- image footer margin, in inches, float
- line spacing, in fontsize, float

It should incorporate some basic Markdown formatting primitives:
- Headers should be scaled starting from the smallest header type included in the README file. These will have the "smallest header font size". From then on, each larger header will have its fontsize incremented by the "header scaling increment". Headers should be bolded if the "header bold boolean" is 1.
- Markdown links should be embedded in the PDF, taking into account that Markdown links have the link text X in brackets and the link URL Y in parentheses. In the PDF, create a link with link text X and link URL Y.
- Bolded (surrounded with double asterisks) and italicized (surrounded with single asterisks) markdown text should be respectively bolded and italicized in the PDF.
- Numbered lists should be included as numbered lists.

Formatting:
- All text should be left aligned.
- The PDF should have top/down/left/right margins of "page margins".
- The PDF should be 8.5 by 11 inches, and a high resolution quality.
- Use font "font".
- All text not in a header should have font size "base font size".
- Use a basic line spacing of "line spacing" throughout.
- Lines that are separated by blank lines should, also in the PDF, be separated by blank lines.

Image formatting:
- Images should be centered, with an additional left/right margin of "image margin" in addition to "page margins", and should take up the full remaining space.
- Optionally, in the Markdown, there will be a scale value, from 0 to 1, on the same line as the image embedding, following it, separated by a space. If this is found, then scale the image size by that factor.
- Optionally, if the paragraph following an image embedding starts with the special sequence "!Exhibit", this means the paragraph is an image footer. Add an additional left/right margin of "image footer margin" to to this paragraph, and center the paragraph in the remaining space.
- Embedded images will lie at the same relative path as the path in the Markdown image embedding. It could be a filetype of gif, webp, jpg/jpeg, or png. You should support all those filetypes.

Save the output PDF(s) to output[x].pdf where x is the number of that PDF out of all generated PDFs.