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


    //event for load page
    const pageLink = event.target.closest('.navigation a');
    if (pageLink) {
        event.preventDefault();

    // Remove old active styles from all menu items
        document.querySelectorAll('.navigation a').forEach(link => {
            // link.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'rounded-md');
            link.classList.remove('activeLink-header-gray');
        });

    // Add a new active style
    //     pageLink.classList.add('bg-gray-200', 'dark:bg-gray-700', 'rounded-md');
        pageLink.classList.add('activeLink-header-gray');

        loadPage(pageLink.getAttribute('data-page'));
    }


    //event for change view's certificates
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


