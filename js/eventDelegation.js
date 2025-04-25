import {toggleTheme} from './theme.js';
import {showMobileMenu} from "./mobileMenu.js";
import {LoadResumePage} from "./resume.js";

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

    const resumeItems = event.target.closest('#resume-id');
    if (resumeItems) {
        LoadResumePage();
    }


});
