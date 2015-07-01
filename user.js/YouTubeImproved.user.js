// ==UserScript==
// @name           YouTubeImproved
// @description    Improve YouTube Experience
// @match          *://*.youtube.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant          GM_addStyle
// @noframes
// @version        0.3
// @author         un5t0ppab13
// ==/UserScript==
// @ n o f r a m e s makes the script running on the main pages, but not at iframes.



// ADD CSS with GM_addStyle
GM_addStyle("\
  *{ \
    background-color: black !important; \
    font-size: 11px !important; \
    color: grey ; } \
  #page-container{ background-color: gray ; } \
  .yt-lockup{ background-color: black ; } \
  body{ background-color: black; } \
  img{ border: 0; } \
//div{ background-color: gray ; } \
"); // on selection invert colors or make text more apparent...
  // http://wiki.greasespot.net/GM_addStyle
  // http://wiki.greasespot.net/Metadata_Block#.40namespace
  // http://tampermonkey.net/documentation.php?version=3.7.48#GM_addStyle%28css%29

//Type playPause() to toggle play or pause
function playPause(){
   var myVideo = document.getElementsByTagName('video')[0];
   if (myVideo.paused)
     myVideo.play();
   else
     myVideo.pause();
};

// MOST IMPORTANT: add jQuery and toggle off banner, footer, all but video
// toggle off banner, footer, all but video
// var a = $("#yt-masthead-container").toggle(),
//   b = $("#masthead-positioner-height-offset").toggle(),
// //c = $("#watch7-main").toggle(), 
//   d = $("#footer").toggle();

