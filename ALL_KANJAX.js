// ==UserScript==
// @name         KANJAX on all Websites v2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var scriptElementBpop = document.createElement( "script" );
    scriptElementBpop.type = "text/javascript";
    scriptElementBpop.src = "http://127.0.0.1:8887/_jquery.bpopup.min.js";
    document.body.appendChild( scriptElementBpop );


    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.src = "http://127.0.0.1:8887/_kanjax_with_koohii.js";
    document.body.appendChild( scriptElement );
})();