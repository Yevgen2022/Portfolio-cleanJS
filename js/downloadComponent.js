import {loadPage} from "./downLoadPages.js";

document.addEventListener("DOMContentLoaded", () => {

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
            loadPage("home");
        })
        .catch(error => console.error("Error loading component or module:", error));


});
