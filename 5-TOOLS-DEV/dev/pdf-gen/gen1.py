import os
import sys
import markdown
import re
import cairo
import gi
import glob
from PIL import Image
gi.require_version('Rsvg', '2.0')
from gi.repository import Rsvg

from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Image as RLImage, ListFlowable, ListItem
from reportlab.lib.enums import TA_LEFT, TA_CENTER

def read_parameters(param_file):
    with open(param_file, 'r') as f:
        lines = [line.strip() for line in f.readlines()]
        params = {
            'input_dir': lines[0],
            'page_margins': float(lines[1]) * inch,
            'font': lines[2],
            'base_font_size': float(lines[3]),
            'smallest_header_size': float(lines[4]),
            'header_scaling_increment': float(lines[5]),
            'header_bold': bool(int(lines[6])),
            'image_margin': float(lines[7]) * inch,
            'image_footer_margin': float(lines[8]) * inch,
            'line_spacing': float(lines[9])
        }
    return params

def register_font(font_name):
    try:
        pdfmetrics.registerFont(TTFont(font_name, f"{font_name}.ttf"))
    except Exception as e:
        print(f"Error registering font '{font_name}': {e}")
        sys.exit(1)

def parse_markdown(md_content, params):
    # Custom parsing to handle images and footers
    md_lines = md_content.split('\n')
    elements = []
    i = 0
    styles = get_styles(params)

    while i < len(md_lines):
        line = md_lines[i]
        # Headers
        header_match = re.match(r'^(#{1,6})\s+(.*)', line)
        if header_match:
            header_level = len(header_match.group(1))
            header_text = header_match.group(2)
            font_size = params['smallest_header_size'] + params['header_scaling_increment'] * (6 - header_level)
            style_name = f'Heading{header_level}'
            styles.add(ParagraphStyle(
                name=style_name,
                fontName=params['font'],
                fontSize=font_size,
                leading=font_size + params['line_spacing'],
                alignment=TA_LEFT,
                spaceAfter=params['line_spacing'],
                spaceBefore=params['line_spacing'],
                textColor='black',
                **({'fontWeight': 'bold'} if params['header_bold'] else {})
            ))
            elements.append(Paragraph(header_text, styles[style_name]))
            i += 1
            continue

        # Images
        image_match = re.match(r'!\[.*\]\((.*)\)(?:\s+([\d.]+))?', line)
        if image_match:
            image_path = os.path.join(params['input_dir'], image_match.group(1))
            scale = float(image_match.group(2)) if image_match.group(2) else 1.0
            img = RLImage(image_path)
            img.drawHeight = img.drawHeight * scale
            img.drawWidth = img.drawWidth * scale
            img.hAlign = 'CENTER'
            elements.append(Spacer(1, params['line_spacing']))
            elements.append(img)
            elements.append(Spacer(1, params['line_spacing']))
            # Check for image footer
            if i + 1 < len(md_lines) and md_lines[i + 1].startswith('!Exhibit'):
                footer_text = md_lines[i + 1][8:].strip()
                footer_style = ParagraphStyle(
                    name='ImageFooter',
                    fontName=params['font'],
                    fontSize=params['base_font_size'],
                    leading=params['base_font_size'] + params['line_spacing'],
                    alignment=TA_CENTER,
                    leftIndent=params['image_footer_margin'],
                    rightIndent=params['image_footer_margin'],
                    spaceAfter=params['line_spacing'],
                    spaceBefore=params['line_spacing'],
                )
                elements.append(Paragraph(footer_text, footer_style))
                i += 1
            i += 1
            continue

        # Lists
        if re.match(r'^\d+\.\s+', line):
            list_items = []
            while i < len(md_lines) and re.match(r'^\d+\.\s+', md_lines[i]):
                item_text = re.sub(r'^\d+\.\s+', '', md_lines[i])
                list_items.append(Paragraph(item_text, styles['Normal']))
                i += 1
            elements.append(ListFlowable(
                [ListItem(item) for item in list_items],
                bulletType='1',
                start='1',
                leftIndent=20
            ))
            continue

        # Bold and Italic text
        formatted_line = markdown.markdown(line)
        elements.append(Paragraph(formatted_line, styles['Normal']))
        i += 1

    return elements

def get_styles(params):
    styles = getSampleStyleSheet()
    styles['Normal'].fontName = params['font']
    styles['Normal'].fontSize = params['base_font_size']
    styles['Normal'].leading = params['base_font_size'] + params['line_spacing']
    styles['Normal'].alignment = TA_LEFT
    return styles

def generate_pdf(md_file, output_file, params):
    with open(md_file, 'r', encoding='utf-8') as f:
        md_content = f.read()
    elements = parse_markdown(md_content, params)
    doc = SimpleDocTemplate(
        output_file,
        pagesize=letter,
        leftMargin=params['page_margins'],
        rightMargin=params['page_margins'],
        topMargin=params['page_margins'],
        bottomMargin=params['page_margins']
    )
    doc.build(elements)

def main():
    if len(sys.argv) != 2:
        print("Usage: python script.py parameters.txt")
        sys.exit(1)
    param_file = sys.argv[1]
    params = read_parameters(param_file)
    register_font(params['font'])

    md_files = glob.glob(os.path.join(params['input_dir'], '*.md'))
    for idx, md_file in enumerate(md_files, 1):
        output_file = f'output{idx}.pdf'
        generate_pdf(md_file, output_file, params)
        print(f'Generated {output_file} from {md_file}')

if __name__ == '__main__':
    main()
