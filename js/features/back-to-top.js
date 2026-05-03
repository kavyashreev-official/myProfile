// js/features/back-to-top.js
function initBackToTop() {

    // ── Create button ──
    const btn = document.createElement("button");
    btn.id = "back-to-top";
    btn.innerHTML = "&#8679;"; // ↑ arrow
    btn.title = "Back to top";
    btn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 24px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(34, 211, 238, 0.15);
        color: #22d3ee;
        border: 1.5px solid rgba(34, 211, 238, 0.4);
        font-size: 1.4rem;
        cursor: pointer;
        z-index: 998;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
        pointer-events: none;
    `;

    document.body.appendChild(btn);

    // ── Show / hide on scroll ──
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
            btn.style.pointerEvents = "auto";
        } else {
            btn.style.opacity = "0";
            btn.style.transform = "translateY(20px)";
            btn.style.pointerEvents = "none";
        }
    });

    // ── Hover effect ──
    btn.addEventListener("mouseenter", function () {
        btn.style.background = "rgba(34, 211, 238, 0.25)";
        btn.style.transform = "translateY(-2px)";
    });
    btn.addEventListener("mouseleave", function () {
        btn.style.background = "rgba(34, 211, 238, 0.15)";
        btn.style.transform = "translateY(0)";
    });

    // ── Click to scroll top ──
    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    console.log("Back to top initialized");
}