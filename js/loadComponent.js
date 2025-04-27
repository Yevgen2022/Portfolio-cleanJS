export function loadComponent(componentName, targetId) {
    fetch(`./components/${componentName}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Component ${componentName} failed to load`);
            }
            return response.text();
        })
        .then(html => {
            const target = document.getElementById(targetId);
            if (target) {
                target.innerHTML = html;
            } else {
                console.error(`Target element with id ${targetId} not found.`);
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}
