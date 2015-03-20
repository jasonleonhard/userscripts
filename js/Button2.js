// ==UserScript==
// @name        Button2
// @namespace   http://hayageek.com
// @include     *
// @version     1
// ==/UserScript==
 
var input=document.createElement("input");
input.type="button";
input.value="GreaseMonkey Button";
input.onclick = showAlert;
input.setAttribute("style", "font-size:18px;position:absolute;top:120px;right:40px;");
document.body.appendChild(input); 
 
function showAlert()
{
    alert("Hello World");
}

//http://hayageek.com/greasemonkey-tutorial/