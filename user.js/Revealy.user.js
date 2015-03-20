// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&service=mail&sacu=1&scc=1&passive=1209600&acui=0#Email=leonhard.jason%40gmail.com
// @grant        none
// @include      https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&service=mail&sacu=1&scc=1&passive=1209600&acui=0#Email=leonhard.jason%40gmail.com
// ==/UserScript==


jQuery(function($) {          
  document.getElementById($('input[type=password]'
                            .att('id'))
                            .setAttribute('type', 'text');
});



