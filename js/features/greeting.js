// js/features/greeting.js
function initGreeting() {

    // ── Get current hour ──
    const hour = new Date().getHours();

    let greeting = "";
    let emoji    = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
        emoji    = "☀️";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
        emoji    = "🌤️";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
        emoji    = "🌇";
    } else {
        greeting = "Good Night";
        emoji    = "🌙";
    }

    // ── Create greeting element ──
    const greetEl = document.createElement("p");
    greetEl.id = "dynamic-greeting";
    greetEl.textContent = emoji + " " + greeting + ", welcome to my portfolio!";
    greetEl.style.cssText = `
        font-size: 1.2rem;
        font-weight: 500;
        color: #22d3ee;
        letter-spacing: 0.04em;
        margin-bottom: 12px;
        opacity: 0;
        transform: translateY(-8px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    `;

    // ── Find hero text block and prepend ──
    const heroHeading = document.querySelector("h1");
    if (!heroHeading) {
        console.log("Hero heading not found");
        return;
    }

    heroHeading.parentElement.insertBefore(greetEl, heroHeading);

    // ── Fade in after short delay ──
    setTimeout(function () {
        greetEl.style.opacity = "1";
        greetEl.style.transform = "translateY(0)";
    }, 300);

    console.log("Greeting initialized:", greeting);
}