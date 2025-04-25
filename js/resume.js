export function LoadResumePage() {

    fetch(`../pages/resume.html`)
        .then(res => res.text())
        .then(data => {
            document.getElementById('wrapper-id').innerHTML = data;
        })
        .catch(error =>{
            document.getElementById('wrapper-id').innerHTML = "<h2>Error loading page</h2>"
        })
}