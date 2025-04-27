import {toggleTheme} from './theme.js';
import {showMobileMenu} from "./mobileMenu.js";
import {loadPage} from "./loadPages.js";
import {toggleCertificatesView} from "./certificates.js";
import {showSuccessModal} from './successModal.js';

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
        toggleCertificatesView();
    }
});


document.body.addEventListener('submit', (event) => {
    const form = event.target.closest('form');
    if (form) {
        event.preventDefault();  // Stop the form from submitting by default

        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    // Show the success modal if submission is successful
                    showSuccessModal();
                    form.reset();  // Reset the form after successful submission
                } else {
                    alert("There was a problem submitting your form");
                }
            })
            .catch(error => {
                alert("There was a problem submitting your form");

            });
    }
});


