API REF https://paleobiodb.org/data1.2/

Paleobiology Database: https://paleobiodb.org/

Docs: https://paleobiodb.org/data1.2/

It all uses their API. Downloading the data is simply done by generating an API link and then calling the API.

I'll just get all the fossil collections I think, rather than trying to recompile individual fossils.

Fossil collections API: https://paleobiodb.org/data1.2/colls_doc.html

# Geographic summary of fossil collections

api ref: https://paleobiodb.org/data1.2/colls/summary_doc.html

Resolution level: https://paleobiodb.org/data1.2/config.txt?show=clusters

I think cluster level 2 looks good:

"config_section","cluster_level","degrees","count","max_colls","max_occs"
"clu","1","6.00000","828","5814","45913"
"clu","2","2.00000","3846","2256","16799"
"clu","3","0.50000","18287","932","12096"

https://paleobiodb.org/data1.2/occs/geosum.csv?level=2&all_records

# Prompt

Write a python script that takes one input arg a relative filename. It's a csv file. The script should create a KML file with one marker per data row.

The first row are the column labels, the rest of the raws are data points.

The "lng" column is the longitude and the "lat" column is the latitude.

Parameterize the marker icon, marker size, marker color, KML output filename, and KML name at the top of the script.

# Prompt

WRite a python script that takes one input arg a relative filename. It's a csv file.

The script should remove all rows where column n_occs is less than THRESHOLD, parameterized in the script. n_occs is a string so you'll have to parse it into a float.

Write the output csv to filtered.csv

# NEXT STEP

Maybe I should try only plotting marine fossils.

Not a bad idea.

# Taxonomy

https://paleobiodb.org/data1.2/taxa/list.txt?all_taxa

Wtf. 80 mb to download the full list? What is this insanity?

https://paleobiodb.org/data1.2/taxa/list.txt?taxon_name=whale&common=EN

# My options.

So I can download the taxonomy for a fossil occurrence, actually

Then I can plug it into gpt and ask whether its a marine fossil or not, or perhaps more specifically, an oceanic fossil

Taxonomic names API ref: https://paleobiodb.org/data1.2/taxa_doc.html

/data1.2/occs/taxa.txt?base_name=Cetacea&interval=Miocene&show=attr

https://paleobiodb.org/data1.2/occs/geosum.csv?level=2&all_records

https://paleobiodb.org/data1.2/occs/taxa.txt?level=2&all_records

# Regrouping.

So it doesn't seem like I can access the taxonomy data when I make fossil occurrence queries.

Since I don't actually know the taxonomy....

My other option is to download all the fossil occurrences with the taxonomy, and then filter it myself. But its not clear that their api supports such large responses.

I'm in a bit of a pickle...

Another option is to query the taxonomy of each fossil occurrence programatically.

# Fossil occurrences api

https://paleobiodb.org/data1.2/occs_doc.html

# Fossil collections api

https://paleobiodb.org/data1.2/colls_doc.html

I can use either. I can select various metadata of the fossil collection to bring down.

# Show

classext,ident,ecospace,coords,stratext,lithext,geo,ctaph

https://paleobiodb.org/data1.2/occs/geosum.csv?level=2&all_records&show=classext,ident,ecospace,coords,stratext,lithext,geo,ctaph