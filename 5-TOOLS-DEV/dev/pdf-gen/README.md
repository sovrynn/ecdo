# PDF Generator

This folder is for script(s) that take Markdown and generate PDFs, embedding images.

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

Citations can only be done through the LLM, not programmatically, aside from the painstaking manual method.

Line spacing doesn't work properly.

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