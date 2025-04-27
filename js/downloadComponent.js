import {loadPage} from "./downLoadPages.js";
import {initTheme} from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {

    initTheme();

    // download header
    fetch("./components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;

            // Import the module after inserting the header
            return import('./eventDelegation.js');

        })
        .then(() => {
            console.log("eventDelegation.js downloaded");


            // download footer
            return fetch("./components/footerComponent.html");
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;

            //download startPage (home)
            loadPage("home");
        })
        .catch(error => console.error("Error loading component or module:", error));
});
