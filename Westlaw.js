// ==UserScript==
// @name        Westlaw
// @description Make Westlaw Classic easier to read
// @match       *://*.westlaw.com/*
// ==/UserScript==
(() => {
    "use strict";
    ["body", "button", "input"].forEach((i) => {
        [...document.getElementsByTagName(i)].forEach((e) => {
            e.style.cssText = 
                "font-family: ui-sans-serif;"
            ;
        });
    });
    ["sup"].forEach((i) => {
        [...document.getElementsByTagName(i)].forEach((e) => {
            e.style.cssText = 
                "vertical-align: baseline;" +
                "position: relative;" +
                "top: -0.4em;"
            ;
        });
    });
    ["co_document"].forEach((i) => {
        [...document.getElementsByClassName(i)].forEach((e) => {
            e.style.cssText = 
                "font-family: ui-serif;" +
                "font-size: 19px;" +
                "line-height: 1.5em;"
            ;
        });
    });
})();