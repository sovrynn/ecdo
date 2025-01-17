import xlrd

file_path = "GVP_Volcano_List_Holocene_202501021531.xlsx"

import pandas as pd

try:
    data = pd.read_excel(file_path, engine="openpyxl")
    print(data)
except Exception as e:
    print(f"Error reading file: {e}")

with open(file_path, "rb") as f:
    header = f.read(8)
    print(header)

# Open the workbook
try:
    workbook = xlrd.open_workbook(file_path)
    for sheet in workbook.sheets():
        print(f"Sheet Name: {sheet.name}")
        for row in range(sheet.nrows):
            print(sheet.row_values(row))
except Exception as e:
    print(f"Error reading file: {e}")
