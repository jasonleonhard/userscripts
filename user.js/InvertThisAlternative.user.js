// ==UserScript==
// @name           InvertThisAlternative
// @description    InvertThisAlternative Way
// @match          *://*/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant          GM_addStyle
// @noframes
// @version        0.1
// @author         un5t0ppab13 and Stoyan Stefanov
// ==/UserScript==
// @ n o f r a m e s makes the script running on the main pages, but not at iframes.

function load_script(src, callback) {
  var s = document.createElement('script');
  s.src = src;
  s.onload = callback;
  document.getElementsByTagName('head')[0].appendChild(s);
}

function invertColors() {
//set up color properties to iterate through
  var colorProperties = ['color', 'background-color'];
  // Above req for pur js approach, otherwise you would have span id "blue" and "green" and define #blue #green in CSS
  //iterate through every element in reverse order...
  $('*').each(function () {
    var color = null;
    for (var prop in colorProperties) {
      prop = colorProperties[prop];
      //if we can't find this property or it's null, continue
      if (!$(this).css(prop)) continue;
      //create RGBColor object
      color = new RGBColor($(this).css(prop));
      if (color.ok) {
        //good to go, let's build up this RGB baby!
        //subtract each color component from 255
        $(this).css(prop, 'rgb(' + (255 - color.r) + ', ' + (255 - color.g) + ', ' + (255 - color.b) + ')');
      }
      color = null; //some cleanup
    }
  });
}
// use server to load cached js file, including css rules
load_script('http://www.phpied.com/files/rgbcolor/rgbcolor.js', function() {
  if (!window.jQuery) load_script('https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js', invertColors);
  else invertColors();
});
