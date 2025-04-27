

//put active's link style from start application. It is 'Home'
export function setActiveLink(pageName) {
    document.querySelectorAll('.navigation a').forEach(link => {
        link.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'rounded-md');

        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('bg-gray-200', 'dark:bg-gray-700', 'rounded-md');
        }
    });
}
