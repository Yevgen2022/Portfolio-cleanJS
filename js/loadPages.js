// This module downloads dynamic pages and put component into
//
// with  loadComponent function

import {loadComponent} from "./loadComponent.js";

const pageComponentsMap = {
    home: { component: 'contactComponent', placeholderId: 'contact-home-placeholder' },
    contact: { component: 'contactComponent', placeholderId: 'contact-contact-placeholder' },
    // For others pages
};

export function loadPage(page) {
    fetch(`../pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('wrapper-id').innerHTML = data;

            // If there is a special component for this page
            if (pageComponentsMap[page]) {
                const { component, placeholderId } = pageComponentsMap[page];
                loadComponent(component, placeholderId);
            }


        })
        .catch(error => {
            document.getElementById('wrapper-id').innerHTML = '<h2>Error loading page</h2>';
        });
}