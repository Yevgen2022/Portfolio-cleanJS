

document.addEventListener("DOMContentLoaded", () => {

    // download header
    fetch("./components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;

            // Імпортуємо модуль після вставки хедера
            return import('./eventDelegation.js');
        })
        .then(() => {
            console.log("eventDelegation.js завантажено");
        })
        .catch(error => console.error("Помилка при завантаженні компонента або модуля:", error));


});
