// ==UserScript==
// @name           DarkenScreen
// @match          *://*/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant          GM_addStyle
// @noframes
// @version        0.1
// @author         un5t0ppab13
// ==/UserScript==

// ADD CSS with GM_addStyle
GM_addStyle("\
  *{ \
    background-color: black !important; \
//  font-size: 11px !important; \
    color: grey; \
   } \
  a:link{ color: #00FFFF !important ; } // a:link - a normal, unvisited link CYAN \ // #FF0000 // is red \
  a:visited{ color: #0099FF !important ; } // a:visited - a link the user has visited \
  a:hover{ color: #00FFFF !important ; } // a:hover - a link when the user mouses over it \
  a:active{ color: #00FFFF !important ; } // a:active - a link the moment it is clicked \
h1{ color: white !important ; } \
  h2{ color: white !important ; } \
  h3{ color: white !important ; } \
  h4{ color: white !important ; } \
  h5{ color: white !important ; } \
  h6{ color: white !important ; } \
  a{ color: white !important ; } \
  p{ color: white !important ; } \
div{ color: gray ; } \
span{ color: green ; } \ // This section is for making all tags more easy to recognize aka color syntax html tags \  \
::selection { background: #a8d1ff; /* WebKit/Blink Browsers */ } \
::-moz-selection { background: #a8d1ff; /* Gecko Browsers */ } \
//  #page-container{ background-color: gray ; } \
//  .yt-lockup{ background-color: black ; } \
//  body{ background-color: black; } \
//  img{ border: 0; } \
"); // on selection invert colors or make text more apparent...

//NOTES SECTION
  // http://wiki.greasespot.net/GM_addStyle
  // http://wiki.greasespot.net/Metadata_Block#.40namespace
  // http://tampermonkey.net/documentation.php?version=3.7.48#GM_addStyle%28css%29

// jQuery toggle off anything.... banners, footers...
// toggle off banner, footer, all but video
// var a = $("#yt-masthead-container").toggle(),
//   b = $("#masthead-positioner-height-offset").toggle(),
// //c = $("#watch7-main").toggle(), 
//   d = $("#footer").toggle();

