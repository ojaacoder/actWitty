// ActWitty Learnings LLP - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navList = document.getElementById('nav-list');
    const header = document.getElementById('header');

    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = navList.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // Sticky header
    if (header) {
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;

            // Trigger sticky header when scrolled down at least 50px
            if (currentScrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }

            lastScrollY = currentScrollY;
        });
    }

    // Set active navigation link based on current page
    setActiveNavLink();

    // Add animation classes to elements when they come into view
    addScrollAnimations();

    // Smooth scrolling for anchor links
    addSmoothScrolling();
});

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || linkPath === './' + currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
}

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .section > *');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

function addSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to create cards dynamically
function createCard(imageSrc, title, description, link = '#') {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${imageSrc}" alt="${title}" class="card-image" loading="lazy">
        <div class="card-content">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
        </div>
    `;

    if (link !== '#') {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = link;
        });
    }

    return card;
}

// Utility function to create service cards
function createServiceCard(iconClass, title, description) {
    const card = document.createElement('div');
    card.className = 'card service-card';

    card.innerHTML = `
        <div class="card-content">
            <div class="service-icon">
                <i class="${iconClass}"></i>
            </div>
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
        </div>
    `;

    return card;
}

// Add loading animation for images
function addImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });

        // Fallback for browsers that don't support loading="lazy"
        if (!('loading' in HTMLImageElement.prototype)) {
            this.classList.add('loaded');
        }
    });
}

// Initialize image loading
addImageLoading();