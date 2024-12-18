
// Loading Screen - Hide loading screen once content is loaded
window.onload = function () {
    document.getElementById('loading-screen').style.display = 'none';
};

// Smooth Scroll - Enable smooth scrolling for anchor links
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
};
smoothScroll();

// Lazy Loading for Images - Load images only when they come into view
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.getAttribute('data-src');
                image.removeAttribute('data-src');
                observer.unobserve(image);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => {
        imageObserver.observe(image);
    });
};
lazyLoadImages();

// Disable Right-Click and Copying (optional for content protection)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Disable right-click
});
document.addEventListener('copy', function (e) {
    e.preventDefault(); // Disable copying
});

// Optional: Prevent dragging images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// More performance improvements (optional)
// Example: Apply event listeners for optimized rendering, animations, etc.
