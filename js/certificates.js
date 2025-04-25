// js/certificates.js
export function initCertificatesToggle() {
    const toggleButton = document.getElementById('toggleView');
    const container = document.getElementById('certContainer');
    const icon = document.getElementById('toggleIcon');

    // Якщо кнопка, контейнер або іконка відсутні, не ініціалізуємо
    if (!toggleButton || !container || !icon) return;

    let isGrid = container.classList.contains('grid');  // Перевіряємо, чи вже в сітці (grid)

    // Обробник події
    toggleButton.addEventListener('click', () => {
        // Перемикаємо стан між grid і flex
        isGrid = !isGrid;

        // Оновлюємо класи для контейнера
        container.className = isGrid
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'flex flex-col gap-6';

        // Оновлюємо іконку
        icon.innerHTML = isGrid
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />';

        // Оновлюємо картки в контейнері
        Array.from(container.children).forEach(card => {
            const img = card.querySelector('img');
            if (isGrid) {
                card.className = 'bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center text-center';
                img.className = 'w-full h-48 object-cover rounded mb-4';
            } else {
                card.className = 'bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow flex flex-row items-center gap-4';
                img.className = 'w-48 h-32 object-cover rounded';
            }
        });
    });
}
