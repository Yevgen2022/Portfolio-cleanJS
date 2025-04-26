// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector('form');
//     const modal = document.getElementById('successModal');
//     const closeModalButton = document.getElementById('closeModal');
//
//     // Sending form
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//
//         const formData = new FormData(form);
//         fetch(form.action, {
//             method: form.method,
//             body: formData,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         })
//             .then(response => {
//                 if (response.ok) {
//                     // Show modal window with success
//                     modal.classList.remove('hidden');
//                     form.reset(); // Очищаємо форму
//                 } else {
//                     alert("There was a problem submitting your form");
//                 }
//             })
//             .catch(error => {
//                 alert("There was a problem submitting your form");
//             });
//     });
//
//     // Closing modal window
//     closeModalButton.addEventListener('click', () => {
//         modal.classList.add('hidden');
//     });
// });
