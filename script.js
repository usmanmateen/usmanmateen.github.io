// Smooth scrolling
const links = document.querySelectorAll('a');
 
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
 
        scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu on mobile devices
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Randomize header background color on page load
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
