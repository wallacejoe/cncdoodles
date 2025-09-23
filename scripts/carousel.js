// Items to populate the carousel with
const items = [
    'Website Pictures/20220602_205650.jpg',
    'Website Pictures/20221102_122424.jpg',
    'Website Pictures/20220602_205650.jpg',
    'Website Pictures/Nali Litter 2/Opal (3 Weeks).jpg',
    'Website Pictures/20221102_122424.jpg',
];

// Create the carousel items and html
const carousel = document.querySelector('.carousel');

items.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    slide.style.backgroundImage = `url('${item}')`;
    carousel.appendChild(slide);
})

// Carousel navigation, created with help from copilot
let currentIndex = 0;
const totalItems = items.length;

const updateCarousel = () => {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex? 'block' : 'none';
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
