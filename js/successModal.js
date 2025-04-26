export function showSuccessModal() {
    const modal = document.getElementById('successModal');
    const closeModalButton = document.getElementById('closeModal');

    // Показуємо модальне вікно
    modal.classList.remove('hidden');

    // Закриваємо модальне вікно
    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}
