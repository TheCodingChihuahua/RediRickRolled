// ==UserScript==
// @name         RedirRectRoll
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description    Redirects everything to a rick roll because of course
// @author       TheCodingChihuahua
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @icon         https://c.tenor.com/acLHyusK_RkAAAAC/tenor.gif
// ==/UserScript==

(() => {
    'use strict';

    const RICKROLL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

    const current = location.href.toLowerCase();

    // Don't rickroll the rickroll itself
    const isAlreadyRickroll = location.hostname === 'www.youtube.com' &&
                              location.search.includes('v=dQw4w9WgXcQ');

    // Don't rickroll browser new-tab / internal pages
    const isNewTabPage =
        current.startsWith('chrome://') ||
        current.startsWith('about:') ||
        current.startsWith('edge://') ||
        current.startsWith('brave://') ||
        current.startsWith('moz-extension://');

    if (!isAlreadyRickroll && !isNewTabPage) {
        location.replace(RICKROLL);
    }
})();