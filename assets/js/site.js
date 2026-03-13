// site.js

// Initialize the site
function initSite() {
    handleMobileMenu();
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

// Handle mobile menu functionality
function handleMobileMenu() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

// Update contact info
function updateContactInfo(name, email, message) {
    // Logic to update contact info, possibly an API call
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
}

// Handle dealer form submission
function handleDealerFormSubmission(event) {
    event.preventDefault();
    const name = document.querySelector('#dealer-name').value;
    const email = document.querySelector('#dealer-email').value;
    updateContactInfo(name, email, 'Dealer form submission');
}

// Handle contact form submission
function handleContactFormSubmission(event) {
    event.preventDefault();
    const name = document.querySelector('#contact-name').value;
    const email = document.querySelector('#contact-email').value;
    const message = document.querySelector('#contact-message').value;
    updateContactInfo(name, email, message);
}

// Event Listeners for Forms
document.querySelector('#dealer-form').addEventListener('submit', handleDealerFormSubmission);
document.querySelector('#contact-form').addEventListener('submit', handleContactFormSubmission);

// Run initialization on page load
window.onload = initSite;