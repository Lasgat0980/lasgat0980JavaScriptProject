// Prompt the user for their name as soon as the page loads
let userName = prompt("Hi! Please enter your name?");

// Check to see if the user entered a name or cancelled the prompt
if (userName === null || userName === "") {
    userName = "Guest";
}

// Select the heading element by its ID "welcome-message"
const welcomeHeading = document.getElementById("welcome-message");

// Welcomes user to the site by the name that was entered
welcomeHeading.textContent = `Welcome to my site, ${userName}!`;

// notification message to the top after a 2-second delay
setTimeout(() => {
    const notifyArea = document.getElementById("notification-area");
    const newAlert = document.createElement("p");
    
    newAlert.className = "dynamic-alert";
    newAlert.textContent = "New Projects Coming SOON!!";
    
    notifyArea.appendChild(newAlert);

    // Optional: Remove it after 7 seconds
    setTimeout(() => newAlert.remove(), 7000);
}, 2000);

// Select two existing elements: the welcome heading and the university box
const uniDiv = document.getElementById("university-resources");

// Modify styles and content 
welcomeHeading.style.color = "#2196F3"; 
welcomeHeading.style.fontSize = "2.5rem";

uniDiv.classList.add("highlight-border"); // Adds the dashed border from my CSS

// Array containing skills/technologies
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"];
const skillsList = document.getElementById("skills-list");

// Loop through the array to display the list in the About section
skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.style.listStyle = "none"; 
    skillsList.appendChild(li);
});

// Check the number of project links to decide what to display
const projectLinks = document.querySelectorAll("#projects .project-links a");
const uniDiv = document.getElementById("university-resources");

// If 3 or more projects exist, hide the university resources box
if (projectLinks.length >= 3) {
    uniDiv.classList.add("hidden");
} else {
    uniDiv.classList.remove("hidden");
}

// TIMED CONFIRMATION FOR FORM
const contactForm = document.getElementById("contact-form");
const statusDiv = document.getElementById("form-status");

contactForm.addEventListener("submit", function(event) {
    // Prevent page refresh
    event.preventDefault();

    // Display "sending" message 
    statusDiv.textContent = "Sending message... ";
    statusDiv.className = "status-loading";

    // Disable the button to prevent multiple clicks
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;

    // Use setTimeout to delay confirmation by 3 seconds
    setTimeout(() => {
        //  Replace loading message with confirmation
        statusDiv.textContent = `Success! Thank you for reaching out, ${userName}.`;
        statusDiv.className = "status-success";

        // Reset the form fields
        contactForm.reset();
        submitBtn.disabled = false;
    }, 3000);
});

// DARK MODE TOGGLE
const themeToggle = document.getElementById("dark-mode-toggle");

// Event listener for the slider to switch to "dark-mode" 
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});
