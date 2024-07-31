document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("loginModal");
    const btn = document.getElementById("loginBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.classList.add("show");
    }

    span.onclick = function() {
        modal.classList.remove("show");
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
        }
    }
});
