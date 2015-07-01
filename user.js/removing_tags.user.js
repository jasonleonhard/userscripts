// PURPOSE: Quickly toggle html elements on and off of a webpage, this simplifies the page, 
// for instance clicking <link> will often toggle off css and scripts

// ==UserScript==
// @name        jQueryToggleTags
// @include     *
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// ==/UserScript==

// if you use remove instead of toggle it will change the source code also!
// if you use toogle instead of remove you can turn it back on and off!
 
//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);

// toggles <head> so frequently styling/css and scripts/js
var input=document.createElement("input");
input.type="button";
input.value="<head>";
input.onclick = _head;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:0px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _head() {
    $( "head" ).toggle();
}

// toggles <div>
var input=document.createElement("input");
input.type="button";
input.value="<div>";
input.onclick = _div;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:15px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _div() {
   $( "div" ).toggle();
}

// toggles <p> 
var input=document.createElement("input");
input.type="button";
input.value="<p>";
input.onclick = _p;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:30px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _p() {
    $( "p" ).toggle();
}

// toggles <img> 
var input=document.createElement("input");
input.type="button";
input.value="<img>";
input.onclick = _img;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:45px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _img() {
    $( "img" ).toggle();
}

// toggles <span> 
var input=document.createElement("input");
input.type="button";
input.value="<span>";
input.onclick = _span;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:60px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _span() {
    $( "span" ).toggle();
}



// toggles <area> so frequently styling/css and scripts/js
var input=document.createElement("input");
input.type="button";
input.value="<area>";
input.onclick = _area;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:75px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _area() {
    $( "area" ).toggle();
}

// toggles <article>
var input=document.createElement("input");
input.type="button";
input.value="<article>";
input.onclick = _article;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:90px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _article() {
   $( "article" ).toggle();
}

// toggles <caption> 
var input=document.createElement("input");
input.type="button";
input.value="<caption>";
input.onclick = _caption;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:105px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _caption() {
    $( "caption" ).toggle();
}

// toggles <audio> 
var input=document.createElement("input");
input.type="button";
input.value="<audio>";
input.onclick = _audio;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:120px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _audio() {
    $( "audio" ).toggle();
}

// toggles <video> 
var input=document.createElement("input");
input.type="button";
input.value="<video>";
input.onclick = _video;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:135px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _video() {
    $( "video" ).toggle();
}
// toggles <header> 
var input=document.createElement("input");
input.type="button";
input.value="<header>";
input.onclick = _header;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:150px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _header() {
    $( "header" ).toggle();
}
// toggles <footer> 
var input=document.createElement("input");
input.type="button";
input.value="<footer>";
input.onclick = _footer;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:165px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _footer() {
    $( "footer" ).toggle();
}

// toggles <title> 
var input=document.createElement("input");
input.type="button";
input.value="<title>";
input.onclick = _title;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:180px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _title() {
    $( "title" ).toggle();
}

// toggles <body> 
var input=document.createElement("input");
input.type="button";
input.value="<body>";
input.onclick = _body;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:195px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _body() {
    $( "body" ).toggle();
}

// toggles <input> 
var input=document.createElement("input");
input.type="button";
input.value="<input>";
input.onclick = _input;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:210px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _input() {
    $( "input" ).toggle();
}
// toggles <meta> 
var input=document.createElement("input");
input.type="button";
input.value="<meta>";
input.onclick = _meta;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:225px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _meta() {
    $( "meta" ).toggle();
}


// toggles <ul> 
var input=document.createElement("input");
input.type="button";
input.value="<ul>";
input.onclick = _ul;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:240px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _ul() {
    $( "ul" ).toggle();
}
//



// toggles <form> 
var input=document.createElement("input");
input.type="button";
input.value="<form>";
input.onclick = _form;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:255px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _form() {
    $( "form" ).toggle();
}

// toggles <frame> 
var input=document.createElement("input");
input.type="button";
input.value="<frame>";
input.onclick = _frame;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:270px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _frame() {
    $( "frame" ).toggle();
}

// toggles <canvas> 
var input=document.createElement("input");
input.type="button";
input.value="<canvas>";
input.onclick = _canvas;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:285px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _canvas() {
    $( "canvas" ).toggle();
}

// toggles <b> for bold
var input=document.createElement("input");
input.type="button";
input.value="<b>";
input.onclick = _b;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:300px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _b() {
    $( "b" ).toggle();
}

// toggles <span>
var input=document.createElement("input");
input.type="button";
input.value="<span>";
input.onclick = _span;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:315px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _span() {
    $( "span" ).toggle();
}

// toggles <style> 
var input=document.createElement("input");
input.type="button";
input.value="<style>";
input.onclick = _style;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:330px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _style() {
    $( "style" ).toggle();
}

// removes <figure> 
var input=document.createElement("input");
input.type="button";
input.value="<figure>";
input.onclick = _figure;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:345px;right:0px;color:red");
document.body.appendChild(input); 
 
function _figure() {
    $( "figure" ).remove();
}

// removes <link> // often removes css
var input=document.createElement("input");
input.type="button";
input.value="<link>";
input.onclick = _link;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:360px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _link() {
    $( "link" ).toggle();
}

// toggles <h1> 
var input=document.createElement("input");
input.type="button";
input.value="<h1>";
input.onclick = _h1;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:375px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _h1() {
    $( "h1" ).toggle();
}

// toggles <h2> 
var input=document.createElement("input");
input.type="button";
input.value="<h2>";
input.onclick = _h2;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:390px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _h2() {
    $( "h2" ).toggle();
}

// toggles <h3> 
var input=document.createElement("input");
input.type="button";
input.value="<h3>";
input.onclick = _h3;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:405px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _h3() {
    $( "h3" ).toggle();
}

// toggles <h4> 
var input=document.createElement("input");
input.type="button";
input.value="<h4>";
input.onclick = _h4;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:420px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _h4() {
    $( "h4" ).toggle();
}

// toggles <h5> 
var input=document.createElement("input");
input.type="button";
input.value="<h5>";
input.onclick = _h5;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:435px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _h5() {
    $( "h5" ).toggle();
}

// toggles <h6> 
var input=document.createElement("input");
input.type="button";
input.value="<h6>";
input.onclick = _h6;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:450px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _h6() {
    $( "h6" ).toggle();
}

// toggles <code> 
var input=document.createElement("input");
input.type="button";
input.value="<code>";
input.onclick = _code;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:465px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _code() {
    $( "code" ).toggle();
}

// toggles <iframe> 
var input=document.createElement("input");
input.type="button";
input.value="<iframe>";
input.onclick = _iframe;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:480px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _iframe() {
    $( "iframe" ).toggle();
}

// toggles <menu> 
var input=document.createElement("input");
input.type="button";
input.value="<menu>";
input.onclick = _menu;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:495px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _menu() {
    $( "menu" ).toggle();
}

// toggles <nav> 
var input=document.createElement("input");
input.type="button";
input.value="<nav>";
input.onclick = _nav;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:510px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _nav() {
    $( "nav" ).toggle();
}

// toggles <object> 
var input=document.createElement("input");
input.type="button";
input.value="<object>";
input.onclick = _object;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:510px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _object() {
    $( "object" ).toggle();
}

// toggles <source> 
var input=document.createElement("input");
input.type="button";
input.value="<source>";
input.onclick = _source;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:525px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _source() {
    $( "source" ).toggle();
}

// toggles <table> 
var input=document.createElement("input");
input.type="button";
input.value="<table>";
input.onclick = _table;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:540px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _table() {
    $( "table" ).toggle();
}

// toggles <a> 
var input=document.createElement("input");
input.type="button";
input.value="<a>";
input.onclick = _a;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:555px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _a() {
    $( "a" ).toggle();
}

// toggles <html> 
var input=document.createElement("input");
input.type="button";
input.value="<html>";
input.onclick = _html;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:570px;right:0px;color:blue");
document.body.appendChild(input); 
 
function _html() {
    $( "html" ).toggle();
}

////////////////////////////////

// sets <p> background to yellow //$("p").css("background-color", "yellow");
var input=document.createElement("input");
input.type="button";
input.value="<p> yellow";
input.onclick = _p_y;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:585px;right:0px;color:blue;background-color:yellow");
document.body.appendChild(input); 
 
function _p_y() {
    $("p").css("background-color", "yellow");
}

// checks <p> background to yellow //$("p").css("background-color", "yellow");
var input=document.createElement("input");
input.type="button";
input.value="<p> check";
input.onclick = _p_c;
input.setAttribute("style", "font-size:11px;z-index:3000;position:absolute;top:600px;right:0px;color:orange");
document.body.appendChild(input); 
 
function _p_c() {
    $("p").css("background-color");
}






