// js/features/project-render.js

function renderProjects(dataToRender) {
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) {
        console.log("Projects container not found");
        return;
    }

    // Use filtered data if passed, otherwise use full projectsData
    const data = dataToRender || projectsData;
    projectsContainer.innerHTML = "";

    data.forEach(function (project) {

        // ── Outer card ──
        const card = document.createElement("div");
        card.className = "p-8 text-center rounded-2xl shadow-lg";
        card.style.cssText = `
            background: var(--navy-900, #0a1628);
            border: 1px solid var(--navy-700, #162e58);
            transition: border-color 0.25s ease, transform 0.25s ease;
            cursor: pointer;
        `;
        card.addEventListener("mouseenter", () => {
            card.style.borderColor = "var(--cyan-400, #22d3ee)";
            card.style.transform = "translateY(-4px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "var(--navy-700, #162e58)";
            card.style.transform = "translateY(0)";
        });

        // ── Status badge (Live / In Progress etc.) ──
        const statusBadge = document.createElement("span");
        statusBadge.textContent = project.status || "Live";
        statusBadge.style.cssText = `
            display: inline-block;
            background: rgba(34, 211, 238, 0.12);
            color: #67e8f9;
            border: 1px solid rgba(34, 211, 238, 0.35);
            border-radius: 99px;
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            padding: 3px 14px;
            margin-bottom: 16px;
        `;

        // ── Project name ──
        const projectName = document.createElement("h4");
        projectName.textContent = project.name;
        projectName.style.cssText = `
            font-size: 1.4rem;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 6px;
        `;

        // ── Category ──
        const projectCategory = document.createElement("p");
        projectCategory.textContent = project.category;
        projectCategory.style.cssText = `
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #94a3b8;
            margin-bottom: 12px;
        `;

        // ── Description ──
        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        projectDescription.style.cssText = `
            font-size: 0.95rem;
            color: #94a3b8;
            line-height: 1.6;
            margin-bottom: 14px;
        `;

        // ── Tech stack — spaced tags ──
        const techRow = document.createElement("div");
        techRow.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 6px;
            margin-bottom: 20px;
        `;

        // Split on comma and trim spaces
        const techList = String(project.technologies).split(",").map(t => t.trim());
        techList.forEach(function (tech) {
            const tag = document.createElement("span");
            tag.textContent = tech;
            tag.style.cssText = `
                background: rgba(34, 211, 238, 0.08);
                color: #67e8f9;
                border: 1px solid rgba(34, 211, 238, 0.2);
                border-radius: 6px;
                font-size: 0.72rem;
                font-weight: 500;
                padding: 3px 10px;
            `;
            techRow.appendChild(tag);
        });

        // ── Link buttons row ──
        const btnRow = document.createElement("div");
        btnRow.style.cssText = `
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        `;

        function makeLink(label, href) {
            const a = document.createElement("a");
            a.textContent = label;
            a.href = href || "#";
            if (href && href !== "#") a.target = "_blank";
            a.style.cssText = `
                display: inline-block;
                background: transparent;
                border: 1.5px solid #22d3ee;
                color: #22d3ee;
                border-radius: 8px;
                padding: 7px 22px;
                font-size: 0.8rem;
                font-weight: 600;
                text-decoration: none;
                letter-spacing: 0.03em;
                transition: background 0.2s ease, transform 0.2s ease;
            `;
            a.addEventListener("mouseenter", () => {
                a.style.background = "rgba(34,211,238,0.12)";
                a.style.transform = "translateY(-1px)";
            });
            a.addEventListener("mouseleave", () => {
                a.style.background = "transparent";
                a.style.transform = "translateY(0)";
            });
            return a;
        }

        if (project.liveDemo) {
            btnRow.appendChild(makeLink("Live Demo", project.liveDemo));
        }
        if (project.github) {
            btnRow.appendChild(makeLink("GitHub", project.github));
        }

        // ── Views counter ──
        const viewText = document.createElement("p");
        viewText.style.cssText = `
            font-size: 0.75rem;
            color: #475569;
            margin-top: 14px;
        `;
        viewText.textContent = "Views: " + (typeof getViews === "function" ? getViews(project.id) : 0);

        // Click to increment views — correctly inside forEach
        card.addEventListener("click", function () {
            if (typeof updateViews === "function") {
                viewText.textContent = "Views: " + updateViews(project.id);
            }
        });

        // ── Assemble card ──
        card.appendChild(statusBadge);
        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(techRow);
        card.appendChild(btnRow);
        card.appendChild(viewText);

        projectsContainer.appendChild(card);
    });

    console.log("Projects rendered successfully");
}

// function renderProjects() {
//     const projectsContainer = document.getElementById("projects-container");

//     if (!projectsContainer) {
//         console.log("Projects container not found");
//         return;
//     }
//     projectsContainer.innerHTML = "";
//     projectsData.forEach(function (project) {

//         // to create outer card
//         const card = document.createElement("div");
//         card.className = "p-8 text-center rounded-3xl shadow-lg";

//         //create icon
//         const iconBox = document.createElement("div");
//         iconBox.className = "w-20 h-10 mx-auto mb-4 bg-green-400 rounded-2xl flex item-center justify-center";

//         //create icon text
//         const iconText = document.createElement("span");
//         iconText.className = "text-xl text-white font-bold";
//         iconText.textContent = project.status;

//         //put iconText inside iconBox
//         iconBox.appendChild(iconText);


//         //create project name
//         const projectName = document.createElement("h4");
//         projectName.className = "text-2xl font-bold mb-2";
//         projectName.textContent = project.name;
//         projectName.style.color = "red";

//         //create project category
//         const projectCategory = document.createElement("h3");
//         projectCategory.className = "text-l font-bold mb-2";
//         projectCategory.textContent = project.category;

//         //create project description
//         const projectDescription = document.createElement("h5");
//         projectDescription.className = "text-xl mb-2";
//         projectDescription.textContent = project.description;

//         //create project technologies
//         const projectTechnologies = document.createElement("h3");
//         projectTechnologies.className = "text-xl font-bold mb-2";
//         projectTechnologies.textContent = project.technologies;


//         //create icon1
//         const iconBox1 = document.createElement("div");
//         iconBox1.className = "w-20 h-10 mx-auto mb-4 bg-blue-400 rounded-2xl flex item-center justify-center";

//         //create icon text1
//         const iconText1 = document.createElement("span");
//         iconText1.className = "text-xl text-white font-bold";
//         iconText1.textContent = project.liveDemo;

//         //put iconText inside iconBox
//         iconBox1.appendChild(iconText1);

//         //create icon2
//         const iconBox2 = document.createElement("div");
//         iconBox2.className = "w-20 h-10 mx-auto mb-4 bg-blue-400 rounded-2xl flex item-center justify-center";

//         //create icon text2
//         const iconText2 = document.createElement("span");
//         iconText2.className = "text-xl text-white font-bold";
//         iconText2.textContent = project.github;

//         //put iconText inside iconBox
//         iconBox2.appendChild(iconText2);


//         //Append
//         card.appendChild(iconBox);
//         card.appendChild(projectName);
//         card.appendChild(projectCategory);
//         card.appendChild(projectDescription);
//         card.appendChild(projectTechnologies);
//         card.appendChild(iconBox1);
//         card.appendChild(iconBox2);

//         //append 
//         projectsContainer.appendChild(card);
//     });
//     console.log("Projects rendered successfully");

//     //view count
//     const viewText=document.createElement("p");
//     viewText.textContent="Views: "+getViews(project.id);
//     card.appendChild(viewText);

//     card.addEventListener("click",() =>{
//         viewText.textContent="Views: "+updateViews(project.id);
//     });
// }