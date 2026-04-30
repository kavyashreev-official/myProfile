// js/features/theme-toggle.js

(function () {
    if (localStorage.getItem("portfolio-theme") === "light") {
        document.documentElement.classList.add("light-mode");
        document.body && document.body.classList.add("light-mode");
    }
})();

function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Sync class in case the IIFE ran before <body> existed
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
        body.classList.add("light-mode");
        toggleBtn.textContent = "Dark";
    } else {
        body.classList.remove("light-mode");
        toggleBtn.textContent = "Light";
    }

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        document.documentElement.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("portfolio-theme", "light");
            toggleBtn.textContent = "Dark";
            console.log("Light mode enabled");
        } else {
            localStorage.setItem("portfolio-theme", "dark");
            toggleBtn.textContent = "Light";
            console.log("Dark mode enabled");
        }
    });
}