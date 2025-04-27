import { loadPage } from "./loadPages.js";
import { initTheme } from "./theme.js";
import { loadComponent } from "./loadComponent.js"; // імпортуємо свою функцію

document.addEventListener("DOMContentLoaded", () => {
    initTheme();

    Promise.all([
        loadComponent('header', 'header-placeholder'),    // Завантажуємо хедер
        loadComponent('footerComponent', 'footer-placeholder') // Завантажуємо футер
    ])
        .then(() => import('./eventDelegation.js'))   // Коли вставили хедер і футер — підключаємо делегування
        .then(() => {
            console.log("eventDelegation.js downloaded");
            loadPage("home"); // І тільки потім стартова сторінка
        })
        .catch(error => {
            console.error("Error loading component or module:", error);
        });
});

