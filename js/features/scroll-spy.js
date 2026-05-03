// js/features/scroll-spy.js
function initScrollSpy() {

    // ── Get all nav links and match to sections ──
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    if (navLinks.length === 0) {
        console.log("No nav links found for scroll spy");
        return;
    }

    // ── Active style injector ──
    const style = document.createElement("style");
    style.textContent = `
        .nav-active {
            color: #22d3ee !important;
            border-bottom: 2px solid #22d3ee;
            padding-bottom: 2px;
            transition: all 0.25s ease;
        }
    `;
    document.head.appendChild(style);

    // ── Get matching sections ──
    const sections = [];
    navLinks.forEach(function (link) {
        const id = link.getAttribute("href").replace("#", "");
        const section = document.getElementById(id);
        if (section) {
            sections.push({ link, section });
        }
    });

    if (sections.length === 0) {
        console.log("No matching sections found");
        return;
    }

    // ── Remove active from all links ──
    function clearActive() {
        navLinks.forEach(function (link) {
            link.classList.remove("nav-active");
        });
    }

    // ── Find which section is in view ──
    function updateActive() {
        const scrollY = window.scrollY;
        const offset  = 120; // navbar height buffer

        let current = null;

        sections.forEach(function (item) {
            const sectionTop = item.section.offsetTop - offset;
            const sectionBottom = sectionTop + item.section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                current = item.link;
            }
        });

        // ── If at very bottom, highlight last link ──
        const atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 10;

        if (atBottom && sections.length > 0) {
            current = sections[sections.length - 1].link;
        }

        clearActive();
        if (current) {
            current.classList.add("nav-active");
        }
    }

    // ── Listen to scroll ──
    window.addEventListener("scroll", updateActive);

    // ── Run once on load ──
    updateActive();

    console.log("Scroll spy initialized");
}