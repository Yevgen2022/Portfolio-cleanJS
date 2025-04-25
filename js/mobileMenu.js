// Мобільне меню
// document.addEventListener('DOMContentLoaded', function() {
//     const mobileMenuButton = document.getElementById('mobile-menu-button');
//     const mobileMenu = document.getElementById('mobile-menu');
//
//     mobileMenuButton.addEventListener('click', function() {
//         mobileMenu.classList.toggle('hidden');
//     });
// });

export function showMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}