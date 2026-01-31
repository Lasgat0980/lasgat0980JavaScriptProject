// Prompt the user for their name
let userName = prompt("Hi! Please enter your name?");

// Check if the user entered a name or cancelled
if (userName === null || userName === "") {
    userName = "Guest";
}

// Select the heading element by its ID
const welcomeHeading = document.getElementById("welcome-message");

// Update the text content dynamically
welcomeHeading.textContent = `Welcome to my site, ${userName}!`;
