import os
import sys
import re
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Image,
    ListFlowable,
    ListItem,
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from PIL import Image as PILImage


def read_parameters(input_file_path):
    with open(input_file_path, "r") as f:
        lines = f.read().splitlines()
    if len(lines) < 10:
        print("Error: Not enough parameters in the input file.")
        sys.exit(1)
    input_dir = lines[0]
    page_margins = float(lines[1]) * inch
    font_name = lines[2]
    base_font_size = float(lines[3])
    smallest_header_font_size = float(lines[4])
    header_scaling_increment = float(lines[5])
    header_bold_boolean = bool(int(lines[6]))
    image_margin = float(lines[7]) * inch
    image_footer_margin = float(lines[8]) * inch
    line_spacing = float(lines[9])

    params = {
        "input_dir": input_dir,
        "page_margins": page_margins,
        "font_name": font_name,
        "base_font_size": base_font_size,
        "smallest_header_font_size": smallest_header_font_size,
        "header_scaling_increment": header_scaling_increment,
        "header_bold_boolean": header_bold_boolean,
        "image_margin": image_margin,
        "image_footer_margin": image_footer_margin,
        "line_spacing": line_spacing,
    }
    return params


def find_smallest_header_level(markdown_text):
    header_levels = set()
    for line in markdown_text.splitlines():
        header_match = re.match(r"^(#{1,6})\s+", line)
        if header_match:
            level = len(header_match.group(1))
            header_levels.add(level)
    if header_levels:
        return max(header_levels)
    else:
        return None  # No headers found


def process_inline_styles(text):
    # Handle italic: *text*
    text = re.sub(r"\*(.*?)\*", r"<i>\1</i>", text)
    # Handle bold: **text**
    text = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", text)
    # Handle links: [text](url)
    text = re.sub(r"\[(.*?)\]\((.*?)\)", r'<u><a href="\2">\1</a></u>', text)
    return text


def convert_image(image_path):
    supported_formats = (".jpg", ".jpeg", ".png")
    if image_path.lower().endswith(supported_formats):
        return image_path  # Supported format
    else:
        # Convert image to PNG
        new_image_path = os.path.splitext(image_path)[0] + ".png"
        with PILImage.open(image_path) as img:
            img.save(new_image_path, "PNG")
        return new_image_path


def get_image_size(image_path, scale, params):
    img = ImageReader(image_path)
    img_width_px, img_height_px = img.getSize()
    # Convert pixels to points (1 px = 1 point at 72 dpi)
    img_width_pt = img_width_px * scale
    img_height_pt = img_height_px * scale
    # Calculate available width and height in points
    page_width, page_height = letter  # in points
    available_width = (
        page_width - 2 * params["page_margins"] - 2 * params["image_margin"]
    )
    available_height = page_height - 2 * params["page_margins"]
    # Adjust image size to fit within available space
    img_aspect = img_width_pt / img_height_pt
    if img_width_pt > available_width:
        img_width_pt = available_width
        img_height_pt = img_width_pt / img_aspect
    if img_height_pt > available_height:
        img_height_pt = available_height
        img_width_pt = img_height_pt * img_aspect
    return img_width_pt, img_height_pt


def parse_markdown(markdown_text, styles, params):
    elements = []
    lines = markdown_text.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i].rstrip()
        if not line:
            # Blank line, add spacer
            elements.append(Spacer(1, params["line_spacing"] * params["base_font_size"]))
            i += 1
            continue
        header_match = re.match(r"^(#{1,6})\s*(.*)", line)
        if header_match:
            header_level = len(header_match.group(1))
            header_text = header_match.group(2).strip()
            # Apply bold and italic formatting
            header_text = process_inline_styles(header_text)
            # Get the style for this header level
            style_name = f"Heading{header_level}"
            if style_name in styles:
                style = styles[style_name]
            else:
                style = styles["Normal"]
            para = Paragraph(header_text, style)
            elements.append(para)
            i += 1
            continue
        image_match = re.match(r"^!\[.*?\]\((.*?)\)(?:\s+([0-9.]+))?", line)
        if image_match:
            image_path = image_match.group(1).strip()
            scale = float(image_match.group(2)) if image_match.group(2) else 1.0
            # Handle relative paths
            image_path = os.path.join(params["current_md_dir"], image_path)
            # Convert unsupported image formats if necessary
            image_path = convert_image(image_path)
            # Get image size
            img_width, img_height = get_image_size(image_path, scale, params)
            # Create image flowable
            img = Image(image_path, width=img_width, height=img_height)
            img.hAlign = "CENTER"
            elements.append(img)
            i += 1
            # Check for image footer
            if i < len(lines) and lines[i].startswith("!Exhibit"):
                footer_text = lines[i][8:].strip()
                # Apply bold and italic formatting
                footer_text = process_inline_styles(footer_text)
                # Create a centered paragraph with additional margins
                footer_style = ParagraphStyle(
                    name="ImageFooter",
                    parent=styles["Normal"],
                    fontName=params["font_name"],
                    fontSize=params["base_font_size"],
                    leading=params["base_font_size"] * params["line_spacing"],
                    leftIndent=params["image_footer_margin"],
                    rightIndent=params["image_footer_margin"],
                    alignment=TA_CENTER,
                )
                footer_para = Paragraph(footer_text, footer_style)
                elements.append(footer_para)
                i += 1
            continue
            
        # # Check for numbered list item
        # list_match = re.match(r"^(\d+)\.\s+(.*)", line)
        # if list_match:
        #     # Start a new list if not already in one
        #     list_items = []
        #     while i < len(lines):
        #         list_line = lines[i].rstrip()
        #         list_match = re.match(r"^(\d+)\.\s+(.*)", list_line)
        #         if list_match:
        #             item_text = list_match.group(2).strip()
        #             item_text = process_inline_styles(item_text)
        #             list_item = ListItem(Paragraph(item_text, styles["Normal"]))
        #             list_items.append(list_item)
        #             i += 1
        #         else:
        #             break
        #     list_flowable = ListFlowable(
        #         list_items, bulletType="1", start="1", leftIndent=0
        #     )
        #     elements.append(list_flowable)
        #     continue
        # else:
        #     # Regular paragraph
        #     para_text = line.strip()
        #     # Apply bold and italic formatting
        #     para_text = process_inline_styles(para_text)
        #     para = Paragraph(para_text, styles["Normal"])
        #     elements.append(para)
        #     i += 1

        # Regular paragraph
        para_text = line.strip()
        # Apply bold and italic formatting
        para_text = process_inline_styles(para_text)
        para = Paragraph(para_text, styles["Normal"])
        elements.append(para)
        i += 1

        # list_match = re.match(r"^(\d+)\.\s+(.*)", line)
        # bullet_match = re.match(r"^-\s+(.*)", line)
        # if list_match or bullet_match:
        #     # Determine bullet type
        #     bullet_type = '1' if list_match else 'bullet'
        #     # Start a new list
        #     list_items = []
        #     while i < len(lines):
        #         list_line = lines[i].rstrip()
        #         list_match = re.match(r"^(\d+)\.\s+(.*)", list_line)
        #         bullet_match = re.match(r"^-\s+(.*)", list_line)
        #         if list_match or bullet_match:
        #             if list_match:
        #                 item_text = list_match.group(2).strip()
        #             else:
        #                 item_text = bullet_match.group(1).strip()
        #             item_text = process_inline_styles(item_text)
        #             list_item = ListItem(Paragraph(item_text, styles["Normal"]))
        #             list_items.append(list_item)
        #             i += 1
        #         else:
        #             break
        #     list_flowable = ListFlowable(
        #         list_items, bulletType=bullet_type, start='1', leftIndent=0
        #     )
        #     elements.append(list_flowable)
        #     continue
        # else:
        #     # Regular paragraph
        #     para_text = line.strip()
        #     # Apply bold and italic formatting
        #     para_text = process_inline_styles(para_text)
        #     para = Paragraph(para_text, styles["Normal"])
        #     elements.append(para)
        #     i += 1
    return elements


def register_font(font_name):
    # First, check if the font is already registered
    if font_name in pdfmetrics.getRegisteredFontNames():
        return
    # Check for built-in fonts
    standard_fonts = [
        "Times-Roman",
        "Times-Bold",
        "Times-Italic",
        "Times-BoldItalic",
        "Helvetica",
        "Helvetica-Bold",
        "Helvetica-Oblique",
        "Helvetica-BoldOblique",
        "Courier",
        "Courier-Bold",
        "Courier-Oblique",
        "Courier-BoldOblique",
    ]
    if font_name in standard_fonts:
        return
    # Try to register the font assuming the TTF file is in the current directory
    font_file = f"{font_name}.ttf"
    if os.path.exists(font_file):
        pdfmetrics.registerFont(TTFont(font_name, font_file))
        # Register bold version if exists
        bold_font_file = f"{font_name}-Bold.ttf"
        if os.path.exists(bold_font_file):
            pdfmetrics.registerFont(TTFont(f"{font_name}-Bold", bold_font_file))
        else:
            pdfmetrics.registerFont(TTFont(f"{font_name}-Bold", font_file))
    else:
        print(f"Warning: Font file '{font_file}' not found. Using default font.")
        font_name = "Helvetica"


def generate_pdf(md_file_path, output_file_path, params):
    # Read markdown text
    with open(md_file_path, "r") as f:
        markdown_text = f.read()
    # Find smallest header level
    smallest_header_level = find_smallest_header_level(markdown_text)
    if smallest_header_level is None:
        smallest_header_level = 6  # Default to level 6 if no headers
    # Create styles
    styles = getSampleStyleSheet()
    # Register font
    register_font(params["font_name"])
    # Create Normal style
    normal_style = ParagraphStyle(
        name="Normal",
        fontName=params["font_name"],
        fontSize=params["base_font_size"],
        leading=params["base_font_size"] * params["line_spacing"],
        leftIndent=0,
        rightIndent=0,
        firstLineIndent=0,
        alignment=TA_LEFT,
        spaceAfter=params["line_spacing"],
    )
    if "Normal" not in styles:
        styles.add(normal_style)
    # Create header styles
    for level in range(smallest_header_level, 0, -1):
        size_increment = (smallest_header_level - level) * params["header_scaling_increment"]
        font_size = params["smallest_header_font_size"] + size_increment
        style_name = f"Heading{level}"
        header_style = ParagraphStyle(
            name=style_name,
            parent=styles["Normal"],
            fontName=params["font_name"],
            fontSize=font_size,
            leading=font_size * params["line_spacing"],
            leftIndent=0,
            rightIndent=0,
            firstLineIndent=0,
            alignment=TA_LEFT,
            spaceAfter=params["line_spacing"],
        )
        if params["header_bold_boolean"]:
            # Use bold font if available
            header_style.fontName = f"{params['font_name']}-Bold"
        if style_name not in styles:
            styles.add(header_style)
    # Update params with current markdown directory
    params["current_md_dir"] = os.path.dirname(md_file_path)
    # Parse markdown
    elements = parse_markdown(markdown_text, styles, params)
    # Create PDF
    doc = SimpleDocTemplate(
        output_file_path,
        pagesize=letter,
        leftMargin=params["page_margins"],
        rightMargin=params["page_margins"],
        topMargin=params["page_margins"],
        bottomMargin=params["page_margins"],
    )
    doc.build(elements)


def main():
    input_file_path = "input.txt"  # Change this to your input file path
    params = read_parameters(input_file_path)
    input_dir = params["input_dir"]
    md_files = [
        f
        for f in os.listdir(input_dir)
        if os.path.isfile(os.path.join(input_dir, f)) and f.lower().endswith(".md")
    ]
    for idx, md_file in enumerate(md_files):
        md_file_path = os.path.join(input_dir, md_file)
        output_file_path = f"output{idx + 1}.pdf"
        generate_pdf(md_file_path, output_file_path, params)
        print(f"Generated {output_file_path} from {md_file}")


if __name__ == "__main__":
    main()
