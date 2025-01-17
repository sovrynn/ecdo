This whole hectares times 10 hing is confusing me. And what is this "extent per pixel in absolute area" even mean. Kindly explain. Okay now I see there are separate datasets for absolute area and relative area:

Excerpt from the document: GLWD v2 data can be downloaded in three separate zip-files, each prepared both in Geodatabase and
GeoTIFF format. Each zip-file in Geodatabase format contains one geodatabase which stores multiple
grids; each zip-file in GeoTIFF format contains one folder which stores multiple grids.
• GLWD_v2_delta_area_by_class_ha (either Geodatabase or GeoTIFF folder)
Contains all 33 wetland classes (plus drylands) as individual grids showing the extent of the wetland
class per pixel in absolute area (i.e., hectares times 10). Individual grid names and contents are:
o GLWD_v2_delta_class_[01…33]_ha_x10
absolute area of wetland class, in hectares times 10 (i.e., value 15 means 1.5 ha)
o GLWD_v2_delta_class_00_ha_x10
absolute area of dryland (non-wetland) class, in hectares times 10 (i.e., value 15 means 1.5 ha)
• GLWD_v2_delta_area_by_class_pct (either Geodatabase or GeoTIFF folder)
Contains all 33 wetland classes (plus drylands) as individual grids showing the extent of the wetland
class per pixel in relative area (i.e., percent of pixel area). Individual grid names and contents are:
o GLWD_v2_delta_class_[01…33]_pct
relative area of wetland class, in percent of pixel area
o GLWD_v2_delta_class_00_pct
relative area of dryland (non-wetland) class, in percent of pixel area
• GLWD_v2_delta_combined_classes (either Geodatabase or GeoTIFF folder)
Contains several global grids assembled by combining all 33 wetland grids. Individual grid names and
contents are:
o GLWD_v2_delta_area_ha_x10
absolute area of all wetland classes combined, in hectares times 10 (i.e., value 15 means 1.5 ha)
o GLWD_v2_delta_area_pct
relative area of all wetland classes combined, in percent of pixel area
o GLWD_v2_delta_main_class
dominant wetland class within pixel (in cases of ties, the lower wetland class is chosen); value 0
indicates inland pixels without any wetland coverage
o GLWD_v2_delta_main_class_50pct
dominant wetland class within pixel, only for pixels where the total wetland extent exceeds 50%
(in cases of ties, the lower wetland class is chosen); value 0 indicates inland pixels where dryland
(non-wetland) dominates