
// Footer: Copyright Year & Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// Review Counter — localStorage
const COUNTER_KEY = "reviewCount";

// Get current count, default to 0 if not set
let reviewCount = Number(localStorage.getItem(COUNTER_KEY)) || 0;

// Increment counter
reviewCount++;

// Save updated count back to localStorage
localStorage.setItem(COUNTER_KEY, reviewCount);

// Display on page
document.getElementById("review-count").textContent = reviewCount;