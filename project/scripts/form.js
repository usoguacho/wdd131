const SIGNUP_KEY = "wcpal-signup-count";

// definition list summarizing the submitted values
function buildSummary(params) {
  const email = params.get("email") || "not provided";
  const team = params.get("favteam") || "undecided";
  const contact = params.get("contact") || "email";
  const reminders = params.getAll("reminders");
  const reminderText = reminders.length > 0 ? reminders.join(", ") : "none selected";

  return `
    <dl>
      <dt>Email</dt><dd>${email}</dd>
      <dt>Favorite team</dt><dd>${team}</dd>
      <dt>Preferred contact</dt><dd>${contact}</dd>
      <dt>Reminders for</dt><dd>${reminderText}</dd>
    </dl>`;
}

// Increase and store the sign-up counter for this browser
function recordSignup() {
  const stored = localStorage.getItem(SIGNUP_KEY);
  let total = stored ? Number(stored) : 0;
  total = total + 1;
  localStorage.setItem(SIGNUP_KEY, `${total}`);
  return total;
}

// full confirmation message
function showConfirmation() {
  const panel = document.querySelector("#confirm");
  if (!panel) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const name = params.get("fname") || "Fan";
  const total = recordSignup();

  panel.innerHTML = `
    <h2>Thanks, ${name}!</h2>
    <p>Your match reminders are set. Here is what you told us:</p>
    ${buildSummary(params)}
    <p>You are sign-up number ${total} recorded in this browser.</p>
    <p><a class="btn" href="teams.html">Browse teams to watch</a></p>`;
}

showConfirmation();
