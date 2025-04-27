import {loadComponent} from "./loadComponent.js";


const pageComponentsMap = {
    home: { component: 'contactComponent', placeholderId: 'contact-home-placeholder' },
    contact: { component: 'contactComponent', placeholderId: 'contact-contact-placeholder' },
    // Можеш сюди додавати інші сторінки і компоненти
};

export function loadPage(page) {
    fetch(`../pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('wrapper-id').innerHTML = data;


            // Якщо є спеціальний компонент для цієї сторінки
            if (pageComponentsMap[page]) {
                const { component, placeholderId } = pageComponentsMap[page];
                loadComponent(component, placeholderId);
            }


        })
        .catch(error => {
            document.getElementById('wrapper-id').innerHTML = '<h2>Error loading page</h2>';
        });
}