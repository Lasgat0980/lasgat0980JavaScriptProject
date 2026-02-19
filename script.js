/* Modal Logic that replaced the name prompt message*/
const modal = document.getElementById("welcome-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const welcomeHeading = document.getElementById("welcome-message");

// When the user clicks the close button the modal should be hidden
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
       //generic welcome message since we removed the name prompt
        welcomeHeading.textContent = "Welcome to my site!";
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

/* NOTIFICATION AREA */
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
