

// this module download all content, theme (light-dark)
// and component


import { loadPage } from "./loadPages.js";
import { initTheme } from "./theme.js";
import { loadComponent } from "./loadComponent.js";
import { setActiveLink } from "./navigation.js";

document.addEventListener("DOMContentLoaded", () => {
    initTheme();

    Promise.all([
        loadComponent('header', 'header-placeholder'),    // download header
        loadComponent('footerComponent', 'footer-placeholder') // download footer
    ])
        .then(() => import('./eventDelegation.js'))   // enable delegation
        .then(() => {
            console.log("eventDelegation.js downloaded");

            loadPage("home"); // download home-page
            setActiveLink('home'); //set active class for start-link-home

        })
        .catch(error => {
            console.error("Error loading component or module:", error);
        });
});

