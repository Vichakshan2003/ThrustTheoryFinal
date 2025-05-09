// animations.js
// This file is set up to consolidate all the JavaScript used across different pages.
// You can paste your JavaScript code here and organize it as needed.

// Example structure for organizing your code:

// Section 1: Global Variables
// Define any global variables here.

// Section 2: Utility Functions
// Add reusable helper functions here.

// Section 3: Page-Specific Code
// Organize code for specific pages or components here.

// Example:
// Page 1 Animations
function page1Animations() {
    // Add animations for Page 1 here
}

// Page 2 Animations
function page2Animations() {
    // Add animations for Page 2 here
}

// Initialize animations
function initializeAnimations() {
    page1Animations();
    page2Animations();
}

// Call the initialize function when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeAnimations);

function toggleReview(id, button) {
  var content = document.getElementById(id);
  content.classList.toggle('open');

  if (content.classList.contains('open')) {
    button.innerHTML = "Collapse ▲";
  } else {
    button.innerHTML = "Read More ▼";
  }
}

      document.addEventListener("DOMContentLoaded", () => {
        const stars = document.querySelectorAll(".map-star");
        stars.forEach(star => {
          star.addEventListener("click", () => {
            const targetId = star.getAttribute("data-target");
            const target = document.getElementById(targetId);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          });
        });
      });
 

      