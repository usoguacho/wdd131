const groups = [
  { letter: "A", teams: [
    { name: "Mexico", flag: "images/mexico.jpg" },
    { name: "South Africa", flag: "images/safrica.jpg" },
    { name: "South Korea", flag: "images/skorea.jpg" },
    { name: "Czechia", flag: "images/czechia.jpg" }
  ] },
  { letter: "B", teams: [
    { name: "Canada", flag: "images/canada.jpg" },
    { name: "Switzerland", flag: "images/switzerlandx.jpg" },
    { name: "Qatar", flag: "images/qatar.jpg" },
    { name: "Bosnia and Herzegovina", flag: "images/bosnia.jpg" }
  ] },
  { letter: "C", teams: [
    { name: "Brazil", flag: "images/brazil.jpg" },
    { name: "Morocco", flag: "images/morocco.jpg" },
    { name: "Scotland", flag: "images/scotland.jpg" },
    { name: "Haiti", flag: "images/haiti.jpg" }
  ] },
  { letter: "D", teams: [
    { name: "United States", flag: "images/usax.jpg" },
    { name: "Paraguay", flag: "images/paraguay.jpg" },
    { name: "Australia", flag: "images/australia.jpg" },
    { name: "T\u00fcrkiye", flag: "images/turkey.jpg" }
  ] },
  { letter: "E", teams: [
    { name: "Germany", flag: "images/germanyx.jpg" },
    { name: "Ecuador", flag: "images/ecuador.jpg" },
    { name: "Ivory Coast", flag: "images/ivory_coast.jpg" },
    { name: "Cura\u00e7ao", flag: "images/curacao.jpg" }
  ] },
  { letter: "F", teams: [
    { name: "Netherlands", flag: "images/netherlandsx.jpg" },
    { name: "Japan", flag: "images/japanx.jpg" },
    { name: "Sweden", flag: "images/sweden.jpg" },
    { name: "Tunisia", flag: "images/tunisia.jpg" }
  ] },
  { letter: "G", teams: [
    { name: "Belgium", flag: "images/belgium.jpg" },
    { name: "Egypt", flag: "images/egypt.jpg" },
    { name: "Iran", flag: "images/iran.jpg" },
    { name: "New Zealand", flag: "images/nz.jpg" }
  ] },
  { letter: "H", teams: [
    { name: "Spain", flag: "images/spain.jpg" },
    { name: "Uruguay", flag: "images/uruguay.jpg" },
    { name: "Saudi Arabia", flag: "images/saudi.jpg" },
    { name: "Cape Verde", flag: "images/capeverde.jpg" }
  ] },
  { letter: "I", teams: [
    { name: "France", flag: "images/france.jpg" },
    { name: "Senegal", flag: "images/senegal.jpg" },
    { name: "Norway", flag: "images/norway.jpg" },
    { name: "Iraq", flag: "images/iraq.jpg" }
  ] },
  { letter: "J", teams: [
    { name: "Argentina", flag: "images/argentina.jpg" },
    { name: "Algeria", flag: "images/algeria.jpg" },
    { name: "Austria", flag: "images/austria.jpg" },
    { name: "Jordan", flag: "images/jordan.jpg" }
  ] },
  { letter: "K", teams: [
    { name: "Portugal", flag: "images/portugal.jpg" },
    { name: "Colombia", flag: "images/colombia.jpg" },
    { name: "Uzbekistan", flag: "images/uzbekistan.jpg" },
    { name: "DR Congo", flag: "images/drcongo.jpg" }
  ] },
  { letter: "L", teams: [
    { name: "England", flag: "images/england.jpg" },
    { name: "Croatia", flag: "images/croatia.jpg" },
    { name: "Ghana", flag: "images/ghana.jpg" },
    { name: "Panama", flag: "images/panama.jpg" }
  ] }
];

// Build the six round-robin matchups for a group of four teams.
function buildMatchups(teams) {
  const pairs = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      pairs.push(`${teams[i].name} vs. ${teams[j].name}`);
    }
  }
  return pairs;
}

function buildGroupCard(group) {
  const teamItems = group.teams
    .map(function (team) {
      const src = team.flag ? team.flag : PLACEHOLDER;
      return `
          <li>
            <img src="${src}" alt="Flag of ${team.name}" width="30" height="20" loading="lazy">
            <span>${team.name}</span>
          </li>`;
    })
    .join("");

  const matchItems = buildMatchups(group.teams)
    .map(function (match) {
      return `<li>${match}</li>`;
    })
    .join("");

  return `
    <article class="group-card" aria-label="Group ${group.letter}">
      <div class="group-head">
        <span class="group-letter">Group ${group.letter}</span>
        <ul class="group-teams">${teamItems}</ul>
      </div>
      <button class="matchups-toggle" type="button" aria-expanded="false">
        Show matchups <span class="hint">or hover over this card</span>
      </button>
      <div class="group-matchups">
        <h3>Matchups</h3>
        <ul>${matchItems}</ul>
      </div>
    </article>`;
}

// group cards into the grid
function renderGroups() {
  const grid = document.querySelector("#group-grid");
  if (!grid) {
    return;
  }
  grid.innerHTML = groups
    .map(function (group) {
      return buildGroupCard(group);
    })
    .join("");
  attachToggles();
}

// toggle button matchups
function attachToggles() {
  const buttons = document.querySelectorAll(".matchups-toggle");
  buttons.forEach(function (button) {
    button.addEventListener("click", handleToggle);
  });
}

// Open or close the matchups 
function handleToggle(event) {
  const button = event.currentTarget;
  const card = button.closest(".group-card");
  const isOpen = card.classList.toggle("open");

  if (isOpen) {
    button.setAttribute("aria-expanded", "true");
    button.firstChild.textContent = "Hide matchups ";
  } else {
    button.setAttribute("aria-expanded", "false");
    button.firstChild.textContent = "Show matchups ";
  }
}

renderGroups();
