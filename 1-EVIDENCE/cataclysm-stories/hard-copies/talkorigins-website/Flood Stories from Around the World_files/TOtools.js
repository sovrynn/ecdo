/* Douglas Theobald, 2003-07-21                       */
/* -/_|:|_|_\-                                        */
/* JavaScript functions to actively display 3|V|4!|_  */
/* This writes out the contact info, linked           */
/*                                                    */
/*  If any webmaster want to copy this scheme it is   */
/*  STRONGLY urged for them to rename the functions   */
/*  and make a modification like changing to order of */
/*  of the arguments, adding a dummy arguments, or    */
/*  whatever.  These kinds of schemes only work if    */
/*  every site uses a unique scheme so that a human   */
/*  is forced to figure out the protection for each   */
/*  and every web site.                               */

function atsign()
{
    return ("&#64;");
}

function revtext(string)
{ 
    var backwards = ""; 
    var i;
    for (i = 0; i < string.length; i++)
    {
        backwards = string.charAt(i) + backwards; // add one at a time to the new string in revtext order 
    }
    return (backwards);
}

function dec2hex(n)
{
    var s = "";
    s = (n.toString(16));
    s = s.toUpperCase();
    return(s);
}

function Unicode(s)
{
    var uni = "";
    var i;
    for(i = 0; i < s.length; i++)
    {
        uni += ("&#x" + dec2hex(s.charCodeAt(i)) + ";");
    }
    return (uni);
}

function Uno(username, domain, extension, realName)
{
    if("theobald".charCodeAt(0) != 116) /* this is for "Links" which doesn't implement this function */
    {
        var mtTag;
        var username  = revtext(username);
        var domain    = revtext(domain);
        var extension = revtext(extension);
        var address   = username + atsign() + domain + "." + extension;
    
        var firstHalf  =   "<a href=\"mailto:"
                         + address
                         + "\">";
    
        if(realName.length > 0 )
        {
            var realName = revtext(realName);
            mtTag = firstHalf
                  + realName
                  + "<\/a>";
        }
        else
        {
            mtTag = firstHalf
                  + username
                  + " A<!---->T "
                  + domain
                  + " DO<!---->T "
                  + extension
                  + "<\/a>";
        }
        document.write(mtTag);
    }
    else
    {
        var mtTag;
        var username  = Unicode(revtext(username));
        var domain    = Unicode(revtext(domain));
        var extension = Unicode(revtext(extension));
        var address   = username + atsign() + domain + "." + extension;
    
        var firstHalf  =   "<a href=\""
                         + "&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;" // maleto:
                         + address
                         + "\">";
    
        if(realName.length > 0 )
        {
            var realName = revtext(realName);
            mtTag = firstHalf
                  + realName
                  + "<\/a>";
        }
        else
        {
            mtTag = firstHalf
                  + username
                  + " A<!---->T "
                  + domain
                  + " DO<!---->T "
                  + extension
                  + "<\/a>";
        }
    document.write(mtTag);
    }
    return(true);
}

// -----------------------------------------------------------------------------

/*
 *  Javascript function externalLinks()
 *
 *  This script is a work around for the fact that the W3C has
 *  deprecated the target attribute from the <a> tag.
 *  This is a pain since target="_blank" is useful for opening
 *  up new windows and since javascript pop-up windows are
 *  often disabled by ad-blocking measures and since it disrupts
 *  referers.
 *
 *  If this script is linked from between the <head> and </head> tags
 *  then any <a> tag with a rel="external" attribute in it will
 *  open the link in a new window.  If javascript is not present
 *  or disabled or getElementByTagName is not supported by
 *  the browser then the link will open in the same old window.
 *
 *  This works via DOM technology which used javascript to edit
 *  put in the target="_blank" dynamically.  Oddly enough target
 *  while deprecated from (X)HTML is still part of the DOM standard.
 *  Go figure. The reason is the W3C's insistance that (X)HTML not
 *  have having anything besides content.
 *
 *  This script is modified from a web article by Kevin Yank located at
 *
 *  http://www.sitepoint.com/article/1041
 *
 */

function externalLinks()
{ 
   if (!document.getElementsByTagName)
       return; // If not supported abort function
	 re=/external/;  // regular expression
   var anchors = document.getElementsByTagName("a"); // Find all <a> tags
   for (var i=0; i < anchors.length; i++) // Loop through <a> tags
   {
       var anchor = anchors[i]; 
			 var attr = anchor.getAttribute("rel");
       if ( anchor.getAttribute("href") &&     // If href attribute is present
            (attr=="external" ||
						 re.test(attr) )  )                // and rel="external" is present
           anchor.target = "_blank";           // then create a target="_blank"
   } // end of for loop
} // end function

// -----------------------------------------------------------------------------

/*
 * Javascript function linkrss()
 *
 * Puts in an <link> tag for Foxfire live bookmarks feature/RSS
 *
 */

function linkrss() {
 if (!document.getElementsByTagName) return;  // Do we support DOM
 var anchors = document.getElementsByTagName("link"); // Get all the link tags
 for (var i=0; i<anchors.length; i++) { // Scroll through them
   var anchor = anchors[i];
   if (anchor.getAttribute("type") == "application/rdf+xml" &&
       anchor.getAttribute("rel") == "alternate")
     return;          // If the RSS link is present abort function
 }
 newlink=document.createElement("link");
 newlink.rel="alternative";
 newlink.type="application/rdf+xml";
 newlink.href="/rss/talkorigins.xml";
 newlink.title="Talk.Origins Archive RSS";
 docHead=document.getElementsByTagName("head").item(0); // The document head
 docHead.appendChild(newlink);  // add new <link> tag with attibutes above
} 


// -----------------------------------------------------------------------------

/*
 * Javascript function breakFrames()
 *
 * This function will break the page out of any frameset.
 *
 */
 
function breakFrames()
{
    if ( top.location != self.location )
    {
        top.location.replace ( self.location );
    } // end if
} // end function

// -----------------------------------------------------------------------------

/*
 * Javascript function onLoadFunctions()
 *
 * Calls the functions that need to be called when the page is loaded.
 *
 */
 
function onLoadFunctions()
{
    breakFrames();
    externalLinks();
	linkrss();
}

window.onload = onLoadFunctions;  // On the load of page calls the function.
