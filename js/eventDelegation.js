import {toggleTheme} from './theme.js';
import {showMobileMenu} from "./mobileMenu.js";
import {loadPage} from "./downLoadPages.js";
import {initCertificatesToggle} from "./certificates.js";

document.body.addEventListener('click', (event) => {

    // event for change theme
    const toggleBtn = event.target.closest('#theme-toggle');
    if (toggleBtn) {
        toggleTheme();
    }

    // event for mobile-menu (burger)
    const mobileMenuButton = event.target.closest('#mobile-menu-button');
    if (mobileMenuButton) {
        showMobileMenu()
    }

    const page = event.target.closest('.navigation a');
    if (page) {
        event.preventDefault();
        loadPage(page.getAttribute('data-page'));
    }

    const toggleView = event.target.closest('#toggleView');
    if (toggleView) {
        initCertificatesToggle();
    }
    // initCertificatesToggle();



});
