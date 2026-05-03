// js/features/scroll-progress.js
function initScrollProgress() {

    // ── Create the bar element ──
    const bar = document.createElement("div");
    bar.id = "scroll-progress-bar";
    bar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #22d3ee, #67e8f9, #22d3ee);
        background-size: 200% 100%;
        z-index: 9999;
        transition: width 0.1s ease;
        animation: shimmer 2s linear infinite;
    `;

    // ── Shimmer effect ──
    const style = document.createElement("style");
    style.textContent = `
        @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.prepend(bar);

    // ── Update on scroll ──
    window.addEventListener("scroll", function () {
        const scrollTop    = window.scrollY;
        const totalHeight  = document.documentElement.scrollHeight - window.innerHeight;
        const percentage   = (scrollTop / totalHeight) * 100;

        bar.style.width = percentage + "%";
    });

    console.log("Scroll progress initialized");
}