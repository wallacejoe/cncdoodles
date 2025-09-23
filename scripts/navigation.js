// Array of navigation links
const navLinks = [
    { name: "Home", url: "index.html" },
    { name: "FAQ", url: "faq.html" },
    { name: "Contact Us", url: "contact.html" },
    { name: "About Parents", url: "parents.html" },
    { name: "Available Litters", url: "litters.html" },
    { name: "About Us", url: "about.html" },
];

// Function to populate the navigation bar
function populateNav() {
  const nav = document.getElementById("site-nav");
  const ul = document.createElement("ul");

  navLinks.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.name;
    a.href = link.url;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
}

// Call the function to populate the navigation
populateNav();
