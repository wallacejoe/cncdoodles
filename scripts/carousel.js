// Items to populate the carousel with
// This list will be updated with new litter information
const items = [
    { name: 'Xena', price: '$2700', gender: 'Female', link: 'Website Pictures/20220602_205650.jpg'},
    { name: 'Group', price: '$2700', gender: 'Female', link: 'Website Pictures/20221102_122424.jpg'},
    { name: 'Xena', price: '$2700', gender: 'Female', link: 'Website Pictures/20220602_205650.jpg'},
    { name: 'Opal', price: '$2700', gender: 'Female', link: 'Website Pictures/Nali Litter 2/Opal (3 Weeks).jpg'},
    { name: 'Group', price: '$2700', gender: 'Female', link: 'Website Pictures/20221102_122424.jpg'},
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

    const price = document.createElement('p');
    price.classList.add('carousel-price');
    price.textContent = `Price: ${item.price}`;
    carousel.appendChild(price);

    const gender = document.createElement('p');
    gender.classList.add('carousel-gender');
    gender.textContent = `Gender: ${item.gender}`;
    carousel.appendChild(gender);

    const order = document.createElement('a');
    order.classList.add('carousel-order');
    order.textContent = `Reserve`;
    order.href = `mailto:cookiesandcreamdoodles@gmail.com?subject=Request: ${item.name}`
    carousel.appendChild(order);
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
    // Update the displayed price
    const prices = document.querySelectorAll('.carousel-price');
    prices.forEach((price, index) => {
        price.style.display = index === currentIndex? 'block' : 'none';
    });
    // Update the displayed gender
    const genders = document.querySelectorAll('.carousel-gender');
    genders.forEach((gender, index) => {
        gender.style.display = index === currentIndex? 'block' : 'none';
    });
    // Update the displayed order
    const orders = document.querySelectorAll('.carousel-order');
    orders.forEach((order, index) => {
        order.style.display = index === currentIndex? 'block' : 'none';
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
