// ==UserScript==
// @name        Gazette
// @description This is your new file, start writing code
// @include       *://www.officialgazette.gov.ph/*
// ==/UserScript==
(() => {
    "use strict";
    ["html", "body"].forEach((i) => {
        [...document.getElementsByTagName(i)].forEach((e) => {
            e.style.cssText =
                "font-family: ui-serif;"
            ;
        });
    });
    ["p"].forEach((i) => {
        [...document.getElementsByTagName(i)].forEach((e) => {
            e.style.cssText =
                "font-size: 19px;" +
                "line-height: 1.5em;" +
                "-webkit-hyphens: auto;" +
                "hyphens: auto;"
            ;
        });
    });
})();
