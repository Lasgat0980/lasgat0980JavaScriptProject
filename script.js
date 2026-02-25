/* Modal Logic that replaced the name prompt message*/
const modal = document.getElementById("welcome-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const welcomeHeading = document.getElementById("welcome-message");

// When the user clicks the close button the modal should be hidden
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        //hides the modal
        modal.style.display = "none";
       //generic welcome message since we removed the name prompt
        welcomeHeading.textContent = "Welcome to my site!";
  
/* NOTIFICATION AREA */
/*Waits until modal is closed to display*/
setTimeout(() => {
    const notifyArea = document.getElementById("notification-area");
    const newAlert = document.createElement("p");
    
    newAlert.className = "dynamic-alert";
    newAlert.textContent = "New Projects Coming SOON!!";
    
    if (notifyArea) {
        notifyArea.appendChild(newAlert);
    }

    setTimeout(() => newAlert.remove(), 7000);
      }, 2000);
   });
}       

/* PERSIST DARK MODE (LOCALSTORAGE)*/
const themeToggle = document.getElementById("dark-mode-toggle");

// Check for saved user preference on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.checked = true;
}

// Listen for toggle changes
if (themeToggle) {
    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark"); // Save preference
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light"); // Save preference
        }
    });
}

/* CONTENT MODIFICATIONS */
const uniDiv = document.getElementById("university-resources");
welcomeHeading.style.color = "#2196F3"; 
welcomeHeading.style.fontSize = "2.5rem";

if (uniDiv) {
    uniDiv.classList.add("highlight-border");
}

/* SKILLS LIST */
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"];
const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.style.listStyle = "none"; 
    if (skillsList) skillsList.appendChild(li);
});

/* PROJECT CONDITIONAL LOGIC*/
const projectLinks = document.querySelectorAll("#projects .project-links a");

if (uniDiv) {
    if (projectLinks.length >= 3) {
        uniDiv.classList.add("hidden");
    } else {
        uniDiv.classList.remove("hidden");
    }
}    

/* FORM SUBMISSION WITH TOOLTIP SUPPORT*/
const contactForm = document.getElementById("contact-form");
const statusDiv = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        statusDiv.textContent = "Sending message... ";
        statusDiv.className = "status-loading";

        const submitBtn = document.getElementById("submit-btn");
        if (submitBtn) submitBtn.disabled = true;

        setTimeout(() => {
            statusDiv.textContent = `Message Sent Successfully!`;
            statusDiv.className = "status-success";
            contactForm.reset();
            if (submitBtn) submitBtn.disabled = false;
        }, 3000);
    });
} 

//Define Project Objects
const myProjects = [
    {
        title: "Final Performance Assessment",
        summary: "A comprehensive web project demonstrating advanced HTML and CSS layouts.",
        image: "placeholder1.jpg",
        link: "https://github.com/Lasgat0980/FinalPerfomanceAssessment.github.io"
    },
    {
        title: "Midterm Performance",
        summary: "An intermediate project focusing on responsive design and interactive elements.",
        image: "placeholder2.jpg",
        link: "https://github.com/Lasgat0980/midtermperformance.github.io"
    },
    {
        title: "Python Data Analytics",
        summary: "A laboratory project utilizing Python to process and visualize data sets.",
        image: "placeholder3.jpg",
        link: "https://github.com/Lasgat0980/Python-for-Data-Analytics-Lab-Project"
    }
];

// Store and Parse Information
const storageKey = "portfolio_projects";

// Check if data exists in sessionStorage
let storedData = sessionStorage.getItem(storageKey);

if (!storedData) {
    // If no data, stringify and store the array
    sessionStorage.setItem(storageKey, JSON.stringify(myProjects));
    storedData = sessionStorage.getItem(storageKey); 
}

// Parse the data back into a JavaScript Array
const projectsToDisplay = JSON.parse(storedData);

//Render Projects Dynamically
const projectContainer = document.getElementById("dynamic-project-container");

function renderProjects(data) {
    if (!projectContainer) return;
    
    // Clear any existing content
    projectContainer.innerHTML = "";

    data.forEach(project => {
        // Create elements
        const projectCard = document.createElement("div");
        projectCard.className = "content-box"; 

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:8px;">
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <a href="${project.link}" target="_blank">View Repository</a>
        `;

        projectContainer.appendChild(projectCard);
    });
}

// Run the render function
renderProjects(projectsToDisplay);
