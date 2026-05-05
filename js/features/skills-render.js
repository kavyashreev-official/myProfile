// js/features/skills-render.js

const skillColors = {
    "ReactJS":      "#61dafb",  
    "Tailwind CSS": "#38bdf8",   
    "JavaScript":   "#facc15",   
    "MongoDB":      "#4ade80",   
    "Node.js":      "#86efac",   
    "HTML & CSS":   "#fb923c",   
    "Git & GitHub": "#f472b6",   
    "C++":          "#a78bfa",   
    "Python":       "#3b82f6",  
    "MediaPipe":    "#22d3ee",   
    "TensorFlow":   "#f97316",  
};

function getSkillColor(name) {
    if (skillColors[name]) return skillColors[name];
    for (const key of Object.keys(skillColors)) {
        if (name.toLowerCase().includes(key.toLowerCase())) return skillColors[key];
    }
    return "#22d3ee";
}

function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) {
        console.log("Skills container not found");
        return;
    }

    container.innerHTML = "";

    skillsData.forEach(function (skill) {
        const color = getSkillColor(skill.name);

        // ── Card ──
        const card = document.createElement("div");
        card.style.cssText = `
            background: #0a1628;
            border: 1px solid #162e58;
            border-radius: 14px;
            padding: 28px 20px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 16px;
            transition: border-color 0.25s ease, transform 0.25s ease;
            cursor: default;
        `;
        card.addEventListener("mouseenter", () => {
            card.style.borderColor = color;
            card.style.transform = "translateY(-4px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "#162e58";
            card.style.transform = "translateY(0)";
        });

        // ── Icon box — dark background + shortLabel letter ──
        const iconBox = document.createElement("div");
        iconBox.textContent = skill.shortLabel;
        iconBox.style.cssText = `
            width: 80px;
            height: 80px;
            border-radius: 16px;
            background: #071020;
            border: 1.5px solid ${color}40;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            font-weight: 700;
            color: ${color};
            flex-shrink: 0;
        `;

        // ── Skill name ──
        const skillName = document.createElement("p");
        skillName.textContent = skill.name;
        skillName.style.cssText = `
            font-size: 1.1rem;
            font-weight: 600;
            color: #f8fafc;
            margin: 0;
        `;

        // ── Description ──
        const desc = document.createElement("p");
        desc.textContent = skill.description;
        desc.style.cssText = `
            font-size: 0.82rem;
            color: #64748b;
            line-height: 1.6;
            margin: 0;
        `;

        // ── Assemble ──
        card.appendChild(iconBox);
        card.appendChild(skillName);
        card.appendChild(desc);

        container.appendChild(card);
    });

    console.log("Skills rendered successfully —", skillsData.length, "skills");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderSkills);
} else {
    renderSkills();
}

// function renderSkills(){
//     const skillsContainer=document.getElementById("skills-container");

//     if(!skillsContainer){
//         console.log("Skills container not found");
//         return;
//     }

//     skillsContainer.innerHTML="";
//     skillsData.forEach(function(skill){
//         // to create outer card
//         const card=document.createElement("div");
//         card.className="p-8 text-center bg-white rounded-3xl shadow-lg";

//         //create icon
//         const iconBox=document.createElement("div");
//         iconBox.className="w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex item-center justify-center";

//         //create icon text
//         const iconText=document.createElement("span");
//         iconText.className="text-2xl text-white font-bold";
//         iconText.textContent=skill.shortLabel;

//         //put iconText inside iconBox
//         iconBox.appendChild(iconText);

//         //create skill name
//         const skillName=document.createElement("h3");
//         skillName.className="text-xl font-bold mb-2";
//         skillName.textContent=skill.name;

//         //create skill description
//         const skillDescription=document.createElement("p");
//         skillDescription.className="text-sm";
//         skillDescription.textContent=skill.description;

//         //Append all child elements to card(to put box, name & desc in card)
//         card.appendChild(iconBox);
//         card.appendChild(skillName);
//         card.appendChild(skillDescription);

//         //Append card to skillsContainer(to put card layout in skillsContainer)
//         skillsContainer.appendChild(card);
//     });
//     console.log("Skills rendered successfully");
// }