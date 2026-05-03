// js/features/typing-animation.js
function initTypingAnimation() {
    const element = document.getElementById("typing-text");

    if (!element) {
        console.log("Typing element not found");
        return;
    }

    const roles = [
        "Full-Stack Developer",
        "MERN Enthusiast",
        "Competitive Programmer",
        "React Developer",
        "Problem Solver"
    ];

    let roleIndex  = 0;
    let charIndex  = 0;
    let isDeleting = false;
    let isPaused   = false;

    // ── Text node only, no cursor ──
    const textNode = document.createTextNode("");
    element.appendChild(textNode);

    function type() {
        if (isPaused) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
            textNode.textContent = currentRole.slice(0, charIndex);

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex  = (roleIndex + 1) % roles.length;
                setTimeout(type, 400);
                return;
            }
            setTimeout(type, 50);

        } else {
            charIndex++;
            textNode.textContent = currentRole.slice(0, charIndex);

            if (charIndex === currentRole.length) {
                isPaused = true;
                setTimeout(function () {
                    isPaused  = false;
                    isDeleting = true;
                    type();
                }, 1800);
                return;
            }
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 600);
    console.log("Typing animation initialized");
}