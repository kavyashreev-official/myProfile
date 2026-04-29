// js/features/theme-toggle.js

function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Site is DARK by default — saved "light" means light-mode class is active
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
        body.classList.add("light-mode");
        toggleBtn.textContent = "🌙 Dark";
    } else {
        toggleBtn.textContent = "☀️ Light";
    }

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("portfolio-theme", "light");
            toggleBtn.textContent = "🌙 Dark";
            console.log("Light mode enabled");
        } else {
            localStorage.setItem("portfolio-theme", "dark");
            toggleBtn.textContent = "☀️ Light";
            console.log("Dark mode enabled");
        }
    });
}

// Auto-init
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
    initThemeToggle();
}

// function initThemeToggle(){
//     const toggleBtn=document.getElementById("theme-toggle");
//     const body=document.body;
//     const savedTheme=localStorage.getItem("portfolio-theme");

//     if(savedTheme==="dark"){
//         body.classList.add("dark-mode");
//     }
//     toggleBtn.addEventListener("click",function(){
//         body.classList.toggle("dark-mode");
//         if(body.classList.contains("dark-mode")){
//             localStorage.setItem("portfolio-theme","dark");
//             console.log("Dark mode enabled");
//         }else{
//             localStorage.setItem("portfolio-theme","light");
//             console.log("Light mode enabled");
//         }
//     });
// }