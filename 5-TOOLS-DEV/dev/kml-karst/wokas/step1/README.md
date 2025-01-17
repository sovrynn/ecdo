python genkml-descriptions.py WoKaS_Hydrograph_Datasets-utf8-negative-removed-processed-unique/

# OVerview

Now I just plot the data

Range:
0-0.01: ignore?
0.01-0.1: small
0.1-1: big
1+: huge

3 colors - white, gray, black?

# Prompt

Write a python script that takes one input arg, a relative directory.

In that directory it should scan for all .csv files and create a KML file with potentially one marker per file.

For each csv file:

Consider the string on the first line to be A
The float on the second line to be B
The float on the third line to be C
The float on the fourth line to be D

If D is less than 0.01, print out its filename to console and skip it.

Next, create a marker for it in the KML file. Make the label of the marker A. Make the lat of the marker B and the lon of the marker C.

Finally the color of the marker will depend on its D value:
 -if D is less than 0.1, make it white
- else if D is less than 1, make it gray
- else if D is 1 or greater, make it black

Parameterize the colors and thresholds (0.01, 0.1, 1) at the top of the script. Also add a name to the KML file and parameterize it. Also parameterize the marker icon and size.

Also, maintain a tally of the number of markers in white gray and black. Print the tally out to console at the end along with the range of threshold values for each.

Write the output kml to output.kml.

# Output

```
python genkml.py WoKaS_Hydrograph_Datasets-utf8-negative-removed-processed-unique/
Skipping AT-0001@LTER-Zöbelboden.csv: D=0.009637753378378378 < 0.01
Skipping DE-0015@Dorfquelle Adlholz 9-21.csv: D=0.004318382576397096 < 0.01
Skipping US-0104@162 S23 E55 05BAAB1 STUMP SPRING.csv: D=0.0018544756158902032 < 0.01
Skipping IE-0005@Paulstown.csv: D=0.006795882352941177 < 0.01
Skipping US-0046@Langle Spring at U of A Exp Farm near Savoy.csv: D=0.006181768710157266 < 0.01
Skipping US-0108@BURGERMEISTER SPRING.csv: D=0.006341831332138169 < 0.01
Skipping DE-0018@Hetzlesquellen 1-5.csv: D=0.007742677716390424 < 0.01
Skipping IT-0060@Montenero I.csv: D=0.0027105263157894736 < 0.01
Skipping CH-0026@zHof Spring West.csv: D=0.0023397881054131055 < 0.01
Skipping IT-0041@Madonna della Neve Spring 1.csv: D=0.0027708333333333335 < 0.01
Skipping US-0106@162 S20 E56 31DADA1 KIUP SPRING.csv: D=0.00032836063638956673 < 0.01
Skipping DE-0021@Gori-Quelle.csv: D=0.002363740022805017 < 0.01
Skipping DE-0011@Blaubrunnen.csv: D=0.008056399468556245 < 0.01
Skipping GR-0005@Mai Vryssi.csv: D=0.004242277326086957 < 0.01
Skipping IT-0042@Madonna della Neve Spring 2.csv: D=0.006952173913043479 < 0.01
Skipping ES-0015@Yedra.csv: D=0.00696764705882353 < 0.01
Skipping IE-0021@Killaser spring.csv: D=0.0006871717929482371 < 0.01
Skipping DE-0019@Kleinalfalterbach Quelle 1.csv: D=0.005465925 < 0.01
Skipping US-0050@Hot Springs at Hot Springs, AR.csv: D=0.008366453217973477 < 0.01
Skipping IT-0059@Chirce.csv: D=0.0033250000000000003 < 0.01
Skipping CH-0025@zHof Spring North.csv: D=0.007665760055599792 < 0.01
Skipping IT-0056@Asciatizza I.csv: D=0.009894736842105263 < 0.01
Skipping CH-0001@Rappenfluh.csv: D=0.0011492888973509935 < 0.01
Skipping DE-0023@Brunnbergquellen 9-19.csv: D=0.0050925707102451295 < 0.01
Skipping US-0045@Copperhead Spring at U of A Exp Farm near Savoy.csv: D=0.0048630214847551635 < 0.01
Skipping IT-0061@Montenero II.csv: D=0.007494736842105263 < 0.01
Skipping US-0105@163 S22 E58 07ADDA1 RAINBOW SPRING.csv: D=0.0006456045847556698 < 0.01
Skipping DE-0036@Stroessendorf Quelle.csv: D=0.00015318589743589742 < 0.01
Skipping IT-0062@Vasto.csv: D=0.006710526315789474 < 0.01
Skipping US-0036@WILSON SPRING NEAR VERONA, TN.csv: D=0.004427780604878049 < 0.01
Skipping CH-0023@Martinsmatt.csv: D=0.0021804074867913877 < 0.01
Skipping US-0107@230 S17 E53 21CAC 1 Grapevine Springs.csv: D=0.0006638786122467058 < 0.01
Skipping GR-0006@Pera Vryssi.csv: D=0.0017697504673913043 < 0.01
Skipping IT-0057@Asciatizza II.csv: D=0.007174999999999999 < 0.01
==================================
Processing complete.
Output KML written to: output.kml
==================================
White markers (D < 0.1): 74
Gray markers  (0.1 <= D < 1.0): 143
Black markers (D >= 1.0): 156
Skipped markers (D < 0.01) were printed above.
```