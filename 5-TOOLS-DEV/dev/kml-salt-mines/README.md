Source: https://en.wikipedia.org/wiki/Salt_mining

# Prompt 1

parse every unique location in this list into a location for me, returning one per line. They are organized by country, with the country coming first, with a colon, and then the locations. Include the country in the output location list. Here's the list:

Austria:	Hallstatt and Salzkammergut.
Bosnia and Herzegovina: 	Tuzla
Bulgaria: 	Provadiya; and Solnitsata, an ancient town which Bulgarian archaeologists regard as the oldest in Europe and the site of a salt-production facility approximately six millennia ago.[6]
Canada: 	Sifto Salt Mine[7] in Goderich, Ontario, which, at 1.5 miles (2.4 km) wide and 2 miles (3.2 km) long, is one of the largest salt mines in the world extending 7 km2 (2.7 sq mi).[8][9][need quotation to verify]
Colombia: 	Zipaquirá
England: 	The "-wich towns" of Cheshire and Worcestershire.
Ethiopia, Eritrea, Djibouti: 	Danakil Desert, where manual labor is used.[10]
Germany: 	Rheinberg, Berchtesgaden, Heilbronn
Republic of Ireland: 	Mountcharles
Italy: 	Racalmuto, Realmonte and Petralia Soprana[11] within the production sites managed by Italkali.
Morocco: 	Société de Sel de Mohammedia (Mohammedia Rock Salt company) near Casablanca
Northern Ireland: 	Kilroot, near Carrickfergus, more than a century old and containing passages whose combined length exceeds 25 km.
Pakistan: 	Khewra Salt Mines, the world's second largest salt-mining operation, spanning over 300 km. It was first discovered by a horse of Alexander the Great. The mine is still operation till today.
Poland: 	Wieliczka and Bochnia, both established in the mid-13th century and still operating, mostly as museums. Kłodawa Salt Mine.
Romania: 	Slănic (with Salina Veche, Europe's largest salt mine), Cacica, Ocnele Mari, Salina Turda, Târgu Ocna, Ocna Sibiului, Praid and Salina Ocna Dej.
Russia: 	

    Solikamsk in Perm Krai (European Russia)
    Seregovo in the Komi Republic (European Russia)

Ukraine: 	Soledar Salt Mine in Soledar, Donetsk oblast.
United States 	

    Hutchinson, Kansas, underground mining began at Hutchinson in 1923 as the Carey Salt Company. In 1990 the Hutchinson Salt Company formed, then purchased the mine. In 2005 the Strataca salt mine museum and Underground Vaults & Storage constructed a new 650 feet (200 m) shaft to an older part of the mine for tours and storage. Also, Lyons Salt Company and Compass Minerals is located in Lyons, Kansas, and Independent Salt Company is located in Kanopolis, Kansas.
    Avery Island, Louisiana
    Cleveland, Ohio is home to the Whiskey Island mine owned by Cargill.[12] The Fairport Harbor mine owned by Morton Salt is located 30 mi (48 km) to the east.[13]
    Detroit, Michigan, 1,100 feet (340 m) beneath which the Detroit Salt Company's 1,500-acre (6 km2) subterranean complex extends[14]
    Livingston County, New York, location of American Rock Salt, the largest operating salt mine in the United States with a capacity for producing up to 18,000 tons each day.[15]
    Syracuse, New York earned the nickname "The Salt City" for its salt mining, an activity that continues in the region to the present day.[16]
    Grand Saline, Texas has a Morton Salt mine. It is one of the largest in the world.
    Houston, Texas, near Daikin Park is a newly discovered saltworks.
    Saltville, Virginia, the site of one of the Confederacy's main saltworks.

# Prompt 2

Modify this script so that instead of taking two input args as directories, it takes one input arg, a  relative file. Then, it should call the geocode_address function on every line in the relative file. Write the lat lon, one per line, space separated, in the same order, to output.txt. Here's the script:

# Prompt 3

Write a python script that takes two input args, two relative files X and Y.

It should generate a KML file that has one marker per line in X.

For every line in X, the script should get the corresponding same number line in Y (first line in X -> first line in Y, second to second, etc).

The marker should be labeled the line in X prepended with "Salt Mine: ". The marker should have coords from the line in Y. The line in Y will have lat lon, space separated.

The marker icon, marker size, label size, KML file name, and marker color should be parameterized at the top of the script.

Write the output kml to output.kml.