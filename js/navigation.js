//put active's link style from start application. It is 'Home'
export function setActiveLink(pageName) {
    document.querySelectorAll('.navigation a').forEach(link => {
        link.classList.remove('activeLink-header-gray');

        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('activeLink-header-gray');
        }
    });
}
