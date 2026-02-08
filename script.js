// --- 0. WELCOME PROMPT ---
// Prompt the user for their name as soon as the page loads
let userName = prompt("Hi! Please enter your name?");

// Check if the user entered a name or cancelled the prompt
if (userName === null || userName === "") {
    userName = "Guest";
}

// Select the heading element by its ID "welcome-message"
const welcomeHeading = document.getElementById("welcome-message");

// Update the text content dynamically using a Template Literal
welcomeHeading.textContent = `Welcome to my site, ${userName}!`;


// --- 1. SKILLS LOOP ---
// Array of skills/technologies
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"];
const skillsList = document.getElementById("skills-list");

// Loop through the array to build the list in the About section
skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.style.listStyle = "none"; 
    skillsList.appendChild(li);
});


// --- 2. CONDITIONAL LOGIC FOR FEATURED CONTENT ---
// Check the number of project links to decide what to display
const projectLinks = document.querySelectorAll("#projects .project-links a");
const uniDiv = document.getElementById("university-resources");

// If 3 or more projects exist, hide the university resources box
if (projectLinks.length >= 3) {
    uniDiv.classList.add("hidden");
} else {
    uniDiv.classList.remove("hidden");
}


// --- 3. DARK MODE TOGGLE ---
const themeToggle = document.getElementById("dark-mode-toggle");

// Event listener for the slider to switch the "dark-mode" CSS class
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
