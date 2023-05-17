// Smooth scrolling to a section when clicking on a navigation link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle menu on mobile devices
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Display current year in the footer
const footer = document.querySelector('footer');
const currentYear = new Date().getFullYear();

footer.textContent = `© ${currentYear} Muhammad Usman Mateen`;

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  if (nameInput.value === '' || emailInput.value === '') {
    alert('Please fill in all fields.');
  } else {
    // Process the form submission
    form.submit();
  }
});
