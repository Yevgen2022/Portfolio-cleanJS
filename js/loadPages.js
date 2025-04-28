

// This module downloads dynamic pages
// and put component into
// with  loadComponent function


import { loadComponent } from "./loadComponent.js";

const pageComponentsMap = {
    home: { component: 'contactComponent', placeholderId: 'contact-home-placeholder' },
    contact: { component: 'contactComponent', placeholderId: 'contact-contact-placeholder' },
    // For others pages
};

export function loadPage(page) {
    // Массив можливих шляхів для пошуку (порядок має значення)
    const possiblePaths = [
        `../pages/${page}.html`,
        `../pages/projectDetails/${page}.html`,
        // `../pages/another-folder/${page}.html`, // якщо ще інші папки будуть
    ];

    function tryNextPath(index) {
        if (index >= possiblePaths.length) {
            // Якщо ми обійшли всі варіанти і не знайшли
            document.getElementById('wrapper-id').innerHTML = '<h2>Error loading page</h2>';
            return;
        }

        fetch(possiblePaths[index])
            .then(response => {
                if (!response.ok) {
                    throw new Error('Page not found');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('wrapper-id').innerHTML = data;

                // Після завантаження сторінки — шукаємо чи є додатковий компонент
                if (pageComponentsMap[page]) {
                    const { component, placeholderId } = pageComponentsMap[page];
                    loadComponent(component, placeholderId);
                }
            })
            .catch(() => {
                // Пробуємо наступний шлях
                tryNextPath(index + 1);
            });
    }

    // Запускаємо перевірку з першого шляху
    tryNextPath(0);
}


































// import {loadComponent} from "./loadComponent.js";
//
// const pageComponentsMap = {
//     home: { component: 'contactComponent', placeholderId: 'contact-home-placeholder' },
//     contact: { component: 'contactComponent', placeholderId: 'contact-contact-placeholder' },
//     // For others pages
// };
//
// export function loadPage(page) {
//     fetch(`../pages/${page}.html`)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('wrapper-id').innerHTML = data;
//
//             // If there is a special component for this page
//             if (pageComponentsMap[page]) {
//                 const { component, placeholderId } = pageComponentsMap[page];
//                 loadComponent(component, placeholderId);
//             }
//
//
//         })
//         .catch(error => {
//             document.getElementById('wrapper-id').innerHTML = '<h2>Error loading page</h2>';
//         });
// }