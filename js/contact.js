import { showSuccessModal } from 'successModal.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

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
                    showSuccessModal();  // Викликаємо модальне вікно
                    form.reset();  // Очищаємо форму
                } else {
                    alert("There was a problem submitting your form");
                }
            })
            .catch(error => {
                alert("There was a problem submitting your form");
            });
    });
});
