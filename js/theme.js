export function toggleTheme() {
    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');

    // Start theme
    if (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    // Switching theme and saving in localStorage
    const isDark = document.documentElement.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        localStorage.setItem('theme', 'light');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
}

export function initTheme() {
    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');

    if (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
        moonIcon?.classList.remove('hidden');
        sunIcon?.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
    }
}


