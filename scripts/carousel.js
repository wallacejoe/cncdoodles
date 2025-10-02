// Items to populate the carousel with
// This list will be updated with new litter information
const items = [
    { name: 'Xena', link: 'Website Pictures/20220602_205650.jpg'},
    { name: 'Group', link: 'Website Pictures/20221102_122424.jpg'},
    { name: 'Xena', link: 'Website Pictures/20220602_205650.jpg'},
    { name: 'Opal', link: 'Website Pictures/Nali Litter 2/Opal (3 Weeks).jpg'},
    { name: 'Group', link: 'Website Pictures/20221102_122424.jpg'},
];

// Create the carousel items and html
const carousel = document.querySelector('.carousel');

items.forEach(item => {
    const slide = document.createElement('img');
    slide.classList.add('carousel-slide');
    slide.src = item.link;
    slide.alt = item.link;
    carousel.appendChild(slide);

    const name = document.createElement('p');
    name.classList.add('carousel-name');
    name.textContent = `Name: ${item.name}`;
    carousel.appendChild(name);
})

// Carousel navigation, created with help from copilot
let currentIndex = 0;
const totalItems = items.length;

const updateCarousel = () => {
    // Update the displayed image
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex? 'block' : 'none';
    });
    // Update the displayed name
    const names = document.querySelectorAll('.carousel-name');
    names.forEach((name, index) => {
        name.style.display = index === currentIndex? 'block' : 'none';
    });
};

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Loop back to the start
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop to the end
    updateCarousel();
});

// Initialize display
updateCarousel();
