document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenuButton = document.getElementById("close-menu");
    const menu = document.getElementById("menu");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("hidden");
        sidebar.classList.toggle("-translate-x-full");
        menuToggle.querySelector("svg").classList.toggle("hidden");
        menuToggle.querySelector("svg path:first-child").classList.toggle("hidden");
        menuToggle.querySelector("svg path:last-child").classList.toggle("hidden");
    });

    closeMenuButton.addEventListener("click", function() {
        menu.classList.add("hidden");
        sidebar.classList.add("-translate-x-full");
        menuToggle.querySelector("svg").classList.toggle("hidden");
        menuToggle.querySelector("svg path:first-child").classList.toggle("hidden");
        menuToggle.querySelector("svg path:last-child").classList.toggle("hidden");
    });
});
