Found a really nice data source with over 6000+ coal mines as well as proposed coal mines.

https://globalenergymonitor.org/projects/global-coal-mine-tracker/

Global coal mine tracker wiki: https://www.gem.wiki/Global_Coal_Mine_Tracker

Wow I have to ask them for the data. Never mind it's automatically sent, wonderful.

It's already got lat/lon I just have to export it as a csv and generate the KML.

# Prompt

Write a python script that takes one input arg a relative filename. It is a csv file, the first row is the column labels, the rest are data rows.

The script should create a KML file that has one marker per data row.

The coords for each marker are in the Latitude and Longitude columns. Print out any row that has empty values for either of these columns.

The description of the marker should be a string in the form (using cdata):
<p><b>Coal Mine: A</b></p>
<p>Source: B</p>

Where A is replaced by the column "Mine Name" value, and B is replaced by the "GEM Wiki URLs" value.

Parameterize the marker icon, marker size, marker color, KML output filename, and KML name at the top of the script.

Create the output KML at the parameterized KML output filename.

# Manually removed

Bad characters from these rows

M5452,,China,Gansu Ningxi No. 1 Coal Mine,,甘肃庆阳宁西一号矿井,https://www.gem.wiki/%E7%94%98%E8%82%83%E5%BA%86%E9%98%B3%E5%AE%81%E8%A5%BF%E4%B8%80%E5%8F%B7%E7%9F%BF%E4%BA%95,Proposed,Pre-Permit,New,,-,-,-,-,7,*,,,Underground,-,78.83,456,Estimate,-,Estimate,Bituminous,Thermal,-,2022年06月10日,1012,-,-,-,Qingyang Coal Field,甘肃省庆阳市宁县、西峰区,Qingyang,Gansu,Eastern Asia,Asia,35.511481,107.894662,Approximate,,,,,,110.8,0.074,6.1,2.2
M5453,,China,Gansu Ningxi No. 2 Coal Mine,,甘肃庆阳宁西二号矿井,https://www.gem.wiki/%E7%94%98%E8%82%83%E5%BA%86%E9%98%B3%E5%AE%81%E8%A5%BF%E4%BA%8C%E5%8F%B7%E7%9F%BF%E4%BA%95,Proposed,Pre-Permit,New,,-,-,-,-,5,*,,,Underground,-,79.94,456,Estimate,-,Estimate,Bituminous,Thermal,-,2022年06月10日,857,-,-,-,Qingyang Coal Field,甘肃省庆阳市宁县,Qingyang,Gansu,Eastern Asia,Asia,35.47903,107.828881,Approximate,,,,,,79.2,0.053,4.4,1.6
M5454,,China,Gansu Ningxi No. 3 Coal Mine,,甘肃庆阳宁西三号矿井,https://www.gem.wiki/%E7%94%98%E8%82%83%E5%BA%86%E9%98%B3%E5%AE%81%E8%A5%BF%E4%B8%89%E5%8F%B7%E7%9F%BF%E4%BA%95,Proposed,Pre-Permit,New,,-,-,-,-,8,*,,,Underground,-,198.75,456,Estimate,-,Estimate,Bituminous,Thermal,-,2022年06月10日,1637,-,-,-,Qingyang Coal Field,甘肃省庆阳市宁县、西峰区、泾川县,Qingyang,Gansu,Eastern Asia,Asia,35.497257,107.730838,Approximate,,,,,,126.7,0.085,7,2.5

        <description><![CDATA[<p><b>Coal Mine: Shanxi Baigou Coal Mine</b></p>

# prompt

Write a python script that takes two input args, two relative filenames X and Y. They are csv files, the first row is the column labels, the rest are data rows.

The script should create a KML file that has one marker per data row in each of the files.

Specifically, the KML file should have two subcategories, one for the markers in each file.

The coords for each marker are in the Latitude and Longitude columns. Print out any row that has empty values for either of these columns.

The description of the marker in the first row should be a string in the form (using cdata):
<p><b>Coal Mine: A</b></p>
<p>Source: B</p>

Where A is replaced by the column "Mine Name" value, and B is replaced by the "GEM Wiki URLs" value.

The description of the marker in the second row should be a string in the form (using cdata):
<p><b>Coal Mine: A</b></p>
<p>Source: https://www.gem.wiki/</p>

Where A is replaced by the column "Mine Name" value.

Parameterize the marker icon, marker size, marker color, and KML category name separately for each file at the top of the script.
Parameterize the KML output filename at the top oft he script.

Create the output KML at the parameterized KML output filename.