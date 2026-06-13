

// Build the countdown string based on the time remaining.
function getCountdownText() {
  const kickoff = new Date("2026-06-11T15:00:00-06:00");
  const now = new Date();
  const diff = kickoff - now;

  // Conditional branching: tournament started vs. still counting down.
  if (diff <= 0) {
    return `The tournament is underway. Enjoy the matches!`;
  }

  const dayMs = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${days} days, ${hours} hours, and ${minutes} minutes until kickoff!`;
}

// Update the countdown element on the page.
function updateCountdown() {
  const el = document.querySelector("#countdown");
  if (el) {
    el.textContent = getCountdownText();
  }
}

updateCountdown();
setInterval(updateCountdown, 60000);
