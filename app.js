function toggleMenu() {
    const menuIcon = document.querySelector('.menu_icon');
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menuIcon = document.querySelector('.menu_icon');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
        menuIcon.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (document.querySelector('.nav-links').classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Update scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    
    scrollProgress.style.transform = `scaleX(${scrolled / scrollable})`;
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            const menu = document.getElementById('menu');
            if (menu && menu.style.display === 'flex') {
                toggleMenu();
            }

            // Calculate the offset for the navbar height
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current section in navbar
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar ul li a');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navbarHeight - 100; // Increased offset for better detection
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Remove active class on hover
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        navLinks.forEach(l => l.classList.remove('active'));
    });
    
    link.addEventListener('mouseleave', () => {
        highlightNavLink(); // Restore active state based on scroll position
    });
});

window.addEventListener('scroll', highlightNavLink);