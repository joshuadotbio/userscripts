// ==UserScript==
// @name        Westlaw
// @description This is your new file, start writing code
// @match       *://*.westlaw.com/*
// ==/UserScript==
(() => {
    'use strict';
    ["body", "button", "input"].forEach((i) => {
        [...document.getElementsByTagName(i)].forEach((e) => {
            e.style.fontFamily = "ui-sans-serif";
        });
    });
    ["sup"].forEach((i) => {
        [...document.getElementsByTagName(i)].forEach((e) => {
            e.style.verticalAlign = "baseline";
            e.style.position = "relative";
            e.style.top = "-0.4em";
        });
    });
    ["co_document"].forEach((i) => {
        [...document.getElementsByClassName(i)].forEach((e) => {
            e.style.fontFamily = "ui-serif";
            e.style.fontSize = "19px";
            e.style.lineHeight ="1.5em";
        });
    });
})();