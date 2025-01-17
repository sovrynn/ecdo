So I need to figure out how to do this.

Based on my attempts as well as the URL generator it seems the only way to get taxonomy data is by working with individual occurrences

Which would mean I'd need to try plotting all the occcurrences or cluster them myself

Anyways just wrangling with the data for now.

# Fields to show

classext,ident,ecospace,coords,stratext,lithext,geo,ctaph

classext: the "taxonomic classification of the occurence": phylum, class, order, family, genus, alng with the relevant taxon identifiers

ident (NOT NEEDED)

ecospace: Information about ecological space that this organism occupies or occupied. This has only been filled in for a relatively few taxa. Here is a list of values.

coords

stratext (DON'T INCLUDE?)  	

Detailed information about the stratigraphic context of the occurrence. This includes all of the information from strat plus extra fields.

lithext:  	

Detailed information about the lithological context of the occurrence. This includes all of the information from lith plus extra fields.

geo: Information about the geological context of the occurrence (includes env)., Information about the geological context of the occurrence (includes env).

ctaph:  	

Information about the taphonomy of the occurrence and the mode of preservation of the fossils in the associated collection.

# Fields that get returned

identified_name

The taxonomic name by which this occurrence was identified. This field will be omitted for responses in the compact voabulary if it is identical to the value of accepted_name.

accepted_name

The value of this field will be the accepted taxonomic name corresponding to the identified name.

phylum

The name of the phylum in which this occurrence is classified.

# Taxonomy

full 	

This is a shortcut for including all of the information that defines this record. Currently, this includes the following blocks: attr, app, common, parent size, class, ecospace, otaph, etbasis, refattr. If we subsequently add new data fields to this record then full will include those as well. So if you are publishing a URL, it might be a good idea to include show=full.
attr 	

The attribution of this taxonomic name (author and year)
app 	

The age of first and last appearance of this taxon from all of the occurrences recorded in this database
common 	

The common name of this taxon, if one is entered in the database.
parent 	

If the classification of this taxon has been entered into the database, the name of the parent taxon, or its senior synonym if there is one.
immparent 	

You can use this instead of parent if you wish to know the immediate parent taxon. If the immediate parent is a junior synonym, both it and its senior synonym will be displayed.
acconly 	

Only return accepted names, and suppress the fields difference, accepted_name, accepted_rank, and accepted_no, because they are only relevant for non-accepted names.
size 	

The number of subtaxa appearing in this database, including the taxon itself.
class 	

The classification of this taxon: phylum, class, order, family, genus. Also includes the type taxon, if one is entered in the database. This information is also included in the nav block, so do not specify both at once.
classext 	

Like class, but also includes the relevant taxon identifiers.
subcounts 	

The number of subtaxa known to this database, summarized by rank.
ecospace 	

Information about ecological space that this organism occupies or occupied. This has only been filled in for a relatively few taxa. Here is a list of values.
ttaph 	

Information about the taphonomy of this organism. You can also use the alias taphonomy. Here is a list of values.
etbasis 	

Annotates the output block ecospace, indicating at which taxonomic level each piece of information was entered.
seq 	

The sequence numbers that mark this taxon's position in the tree.
img 	

The identifier of the image (if any) associated with this taxon. These images are sourced from phylopic.org.
ref 	

The reference from which this taxonomic name was entered, as formatted text.
refattr 	

The author(s) and year of publication of the reference. Note that this may be different from the attribution of the name itself, if the reference is a secondary source.
ent 	

The identifiers of the people who authorized, entered and modified this record
entname 	

The names of the people who authorized, entered and modified this record
crmod 	

The created and modified timestamps for the collection record

# Verdict

It's not that complicated

You either get all the taxa, in chunks so this api doesn't fail, filter the taxa, get the occurrences for each taxa, then plot them

OR you get all the occurrences in chunks, individually filter each occurrence, and then plot them

The first way minimizes data transfer. But you may have to account for some double counting
