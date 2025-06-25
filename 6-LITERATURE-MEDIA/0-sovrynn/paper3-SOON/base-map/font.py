# list_fonts.py
from matplotlib import font_manager

names = set()
for font in font_manager.fontManager.ttflist:
    names.add(font.name)

# print all CJK‐looking families
for name in sorted(names):
    if any(tok in name for tok in ('Noto','Nanum','WenQuanYi','Gothic','Hei')):
        print(name)