// Footer: Copyright Year & Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

// Hamburger Menu
const nav = document.querySelector("nav");

// Create hamburger button
const hamburger = document.createElement("button");
hamburger.setAttribute("id", "hamburger-btn");
hamburger.setAttribute("aria-label", "Toggle navigation menu");
hamburger.textContent = "☰";

// Insert button before the nav
nav.parentElement.insertBefore(hamburger, nav);

// Toggle nav open/closed
hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");

    // Swap icon between ☰ and ✕
    if (nav.classList.contains("open")) {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }
});