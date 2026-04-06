// --- Navigation & Scroll Logic ---

const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

/**
 * 1. Dynamic Navbar Styling
 * Adds a shadow and changes background color when the user scrolls down.
 */
const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

/**
 * 2. Active Link Highlighting (ScrollSpy)
 * Detects which section is currently in the viewport and 
 * highlights the corresponding menu item.
 */
const highlightNavItems = () => {
    let currentSectionId = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // We subtract 150px to trigger the change slightly before 
        // the section hits the very top of the screen
        if (pageYOffset >= sectionTop - 150) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(currentSectionId)) {
            item.classList.add("active");
        }
    });
};

/**
 * 3. Event Listeners
 */

// Listen for scroll events
window.addEventListener('scroll', () => {
    handleNavbarScroll();
    highlightNavItems();
});

// Simple Form Submission Logic (Demo purposes)
const contactForm = document.getElementById('coffeeForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Create a nice feedback effect
        const btn = contactForm.querySelector('.btn');
        const originalText = btn.textContent;
        
        btn.textContent = "Sending...";
        btn.style.opacity = "0.7";

        setTimeout(() => {
            alert('Order received! We will contact you soon.');
            btn.textContent = originalText;
            btn.style.opacity = "1";
            contactForm.reset();
        }, 1500);
    });
}

/**
 * 4. Mobile Menu Toggle (Optional Enhancement)
 * Logic for a hamburger menu if you add one to your HTML
 */
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        // You would add CSS to show/hide .nav-links based on this class
    });
}