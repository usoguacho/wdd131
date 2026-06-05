// Footer: Copyright Year & Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// Hamburger Menu
const nav = document.querySelector("nav");

const hamburger = document.createElement("button");
hamburger.setAttribute("id", "hamburger-btn");
hamburger.setAttribute("aria-label", "Toggle navigation menu");
hamburger.textContent = "☰";

nav.parentElement.insertBefore(hamburger, nav);

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

// Temple Data Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Las Vegas Nevada",
        location: "Las Vegas, Nevada, United States",
        dedicated: "1989, December, 16",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-69890.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 59608,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-64061.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 11675,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4088.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40960,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2616.jpg"
    }
];

// Create Temple Card Function
function createTempleCard(temple) {
    const figure = document.createElement("figure");

    const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);

    figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        <figcaption>
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
    `;

    return figure;
}

// Display Temples Function

function displayTemples(filteredTemples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    filteredTemples.forEach(temple => {
        gallery.appendChild(createTempleCard(temple));
    });
}

// Filter Functions

function filterTemples(filter) {
    switch (filter) {
        case "old":
            return temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        case "new":
            return temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        case "large":
            return temples.filter(t => t.area > 90000);
        case "small":
            return temples.filter(t => t.area < 10000);
        default:
            return temples;
    }
}

// Nav Link Event Listeners

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.textContent.toLowerCase();

        // Update active link styling
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Update h1 to reflect current filter
        document.querySelector("main h1").textContent = `${link.textContent} Temples`;

        // Display filtered temples
        displayTemples(filterTemples(filter));

        // Close hamburger menu if open
        nav.classList.remove("open");
        hamburger.textContent = "☰";
    });
});

// Initial Load — show all temples
displayTemples(temples);