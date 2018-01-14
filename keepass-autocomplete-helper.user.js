// ==UserScript==
// @name         keepass-autocomplete-helper
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.title = document.title + " [" + window.location.host + "]";
})();
