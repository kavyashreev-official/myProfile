// Renders Education & Experience into #timeline

const educationData = [
    {
        id: "edu-1",
        shortName: "VTU",
        degree: "B.E in Computer Science",
        institution: "CIT",
        fullName: "Cauvery Institute of Technology, Mandya",
        cgpa: "7.5",
        year: "2026",
        type: "education",
        color: "#818cf8"   // indigo
    },
    {
        id: "edu-2",
        shortName: "KPUB",
        degree: "Class 12 — PCMB",
        institution: "Marimallappa's Pre-University College, Mysore",
        cgpa: "7.5",
        year: "2021",
        type: "education",
        color: "#818cf8"
    },
    {
        id: "edu-3",
        shortName: "ICSE",
        degree: "Class 10",
        institution: "Jyothi Nivas School, Srirangapatna",
        cgpa: "7.5",
        year: "2019",
        type: "education",
        color: "#818cf8"
    }
];

// Add your work experience here if any — leave empty array if none yet
const experienceData = [
    // {
    //     id: "exp-1",
    //     shortName: "INTERN",
    //     degree: "Frontend Developer Intern",
    //     institution: "Company Name",
    //     cgpa: null,
    //     year: "2024",
    //     type: "experience",
    //     color: "#22d3ee"
    // }
];

function renderTimeline() {
    const timeline = document.getElementById("timeline");
    if (!timeline) {
        console.log("Timeline container not found");
        return;
    }

    const allItems = [...educationData, ...experienceData];
    timeline.innerHTML = "";

    // ── Wrapper ──
    timeline.style.cssText = `
        max-width: 860px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        gap: 16px;
    `;

    allItems.forEach(function (item) {

        // ── Row ──
        const row = document.createElement("div");
        row.style.cssText = `
            display: flex;
            align-items: center;
            gap: 0;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid #162e58;
            transition: border-color 0.25s ease, transform 0.25s ease;
        `;
        row.addEventListener("mouseenter", () => {
            row.style.borderColor = "#22d3ee";
            row.style.transform = "translateX(4px)";
        });
        row.addEventListener("mouseleave", () => {
            row.style.borderColor = "#162e58";
            row.style.transform = "translateX(0)";
        });

        // ── Left badge ──
        const badge = document.createElement("div");
        badge.textContent = item.shortName;
        badge.style.cssText = `
            background: rgba(129, 140, 248, 0.18);
            color: ${item.color};
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            min-width: 72px;
            padding: 0 16px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border-right: 1px solid #162e58;
        `;

        // ── Main content ──
        const content = document.createElement("div");
        content.style.cssText = `
            flex: 1;
            background: #0a1628;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        `;

        // Left text block
        const textBlock = document.createElement("div");

        const degreeLine = document.createElement("p");
        degreeLine.textContent = item.degree;
        degreeLine.style.cssText = `
            font-size: 1rem;
            font-weight: 600;
            color: #f8fafc;
            margin: 0 0 4px 0;
        `;

        const institutionLine = document.createElement("p");
        institutionLine.textContent = item.fullName || item.institution;
        institutionLine.style.cssText = `
            font-size: 0.8rem;
            color: #94a3b8;
            margin: 0;
        `;

        textBlock.appendChild(degreeLine);
        textBlock.appendChild(institutionLine);

        // Right meta block
        const metaBlock = document.createElement("div");
        metaBlock.style.cssText = `
            text-align: right;
            flex-shrink: 0;
        `;

        if (item.cgpa) {
            const cgpaLine = document.createElement("p");
            cgpaLine.textContent = "CGPA: " + item.cgpa;
            cgpaLine.style.cssText = `
                font-size: 0.82rem;
                font-weight: 600;
                color: #22d3ee;
                margin: 0 0 4px 0;
            `;
            metaBlock.appendChild(cgpaLine);
        }

        const yearLine = document.createElement("p");
        yearLine.textContent = item.year;
        yearLine.style.cssText = `
            font-size: 0.82rem;
            color: #94a3b8;
            font-weight: 500;
            margin: 0;
        `;
        metaBlock.appendChild(yearLine);

        content.appendChild(textBlock);
        content.appendChild(metaBlock);

        row.appendChild(badge);
        row.appendChild(content);
        timeline.appendChild(row);
    });

    console.log("Timeline rendered successfully");
}

// Auto-run when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderTimeline);
} else {
    renderTimeline();
}
