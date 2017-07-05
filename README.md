Works only in <strong>CHROME BROWSER</strong>, i tested it only in <strong>WINDOWS</strong>

## Description:

This scripts will change look of your memrise more or less it depends if you will use userstyle (Stylish addon). It will adjust font size of text depends of number of characters and words in a single question box. Also you will be able to interact with any Kanji character to see kanji strokes information, kunyomi/onyomi readings and some stories about this Kanji.
<hr>


<img alt="preview image one" src="examples/mem1.JPG" width="70%" />
<img alt="preview image two" src="examples/mem2.JPG" width="70%" />

<br>
More screenshoots: http://imgur.com/a/kcftf
<br>
<br>
# INSTRUCTIONS:
<strong>DOWNLOAD ALL of this:</strong>

## Fonts (Microsoft Office Japanese Fonts, Stroke order font):

<ul>
<li>https://www.microsoft.com/en-us/download/details.aspx?id=49114</li>
<li>http://www.nihilist.org.uk/</li>
</ul>


## Extensions:

### Memrise+
https://chrome.google.com/webstore/detail/memrise+/hmpiegnknhdokbhnifbpgbbfkeddbdfh

### Tampermonkey
​https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo


### Stylish - Custom themes for any website
​https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe


### Web Server for Chrome
https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb

Set your server as: http://127.0.0.1:8887 and set Webserver in folder <strong>C:\KANJAX\    REALLY IMPORTANT!!!</strong>

<img alt="webserver settings" src="examples/webserver.JPG" width="50%" />


From here (my github) download and put it in your WEBSERVER FOLDER:

https://github.com/superpawko/Memrise_Dynamic_Font__with_Koohi/blob/master/KANJAX.zip

<strong>Unpack to folder on C:\   [REALLY IMPORTANT]</strong>

This is how look your directory structure. In Frames folder there should be 6000+ files of .svg
<img alt="folder structure" src="examples/folder_structure.JPG" width="50%">


## Install userscripts:

### UserScripts:

<ul>
<li>https://greasyfork.org/pl/scripts/31168-memrise-dynamic-font-for-kanji-v3</li>
<li>https://greasyfork.org/pl/scripts/31169-memrise-kanjax-with-koohi-v3</li>
</ul>
<hr>
<strong>OPTIONAL:</strong> [It will make kanji popup on everywebsite.
https://greasyfork.org/pl/scripts/31167-kanjax-on-all-websites-v2



### Install userstyle:
https://userstyles.org/styles/144287/memrise-japanese-learning-kanji-with-sjgl



## What i used: 
<ul>
<li>https://github.com/KanjiVG/kanjivg</li>
<li>https://github.com/Kimtaro/kanjivg2svg</li>
<li>Kanji_koohi javascript but i do not know autor or place where i get it.</li>
</ul>

<br>
<hr>
<br>


## ADDITIONAL SETTINGS:

### WATCHOUT ON KANJAX on all Websites v2

<strong>This is script will try to find kanji on every webpage load. Disable it if not needed or add your favourite website inside script @match tag.</strong>


### MEMRISE+

Right click on extension and choose options/settings.
<img alt="memrise+ optons" src="examples/memrise_plus.JPG" width="80%">

### Webserver

If you want to edit settings of webserver you have to go to: <strong>chrome://apps</strong>

### How to turn off scripts

Go to website run course and than click on Tampermonkey extension.

<img alt="tapermonkey script turn off" src="examples/Tapermonkey_scripts.JPG" width="80%">

### How to turn off STYLE off a webpage (CSS)

<img alt="stylish deactivate" src="examples/Stylish_Deactivate.JPG" width="80%">


### How to make script work only on few courses:

Click on tapermonkey - > Click on Dashboard - > On right side of every script there are 3 buttons. Press Edit button of choosen script. 

Change line 7 :
<br>
// @match        \*://www.memrise.com/course/\*
<br>
to:
<br>
// @match        \*://www.memrise.com/course/1091255/\*

Where  <strong>1091255</strong> is a course number:



<hr> 


# Buy me a beer :) 
<em>I'm unemployed so every $ matters. Thanks!<br></em>
<a href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=592551565e840&mfid=1499250036760_592551565e840#/checkout/openButton"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"> <strong>Make Donation</strong></a>
