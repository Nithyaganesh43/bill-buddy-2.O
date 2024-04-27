document.getElementById("logout-btn").addEventListener("click", function() {
    window.location.href = "index.html";
});

window.addEventListener("unload", function() {
    window.location.reload();
});