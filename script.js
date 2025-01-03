
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



// Dynamic font resizing based on viewport width
window.addEventListener('resize', adjustFontSize);

function adjustFontSize() {
  const html = document.documentElement;
  const width = window.innerWidth;

  if (width <= 480) {
    html.style.fontSize = '12px';
  } else if (width <= 768) {
    html.style.fontSize = '14px';
  } else {
    html.style.fontSize = '16px';
  }
}

// Initialize on page load
adjustFontSize();


// Add a copy functionality for code blocks
document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('.code-block');

  codeBlocks.forEach((block) => {
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.classList.add('copy-btn');
    block.appendChild(button);

    button.addEventListener('click', () => {
      const code = block.querySelector('.code-content').textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const modeToggleButton = document.getElementById("mode-toggle");
  const body = document.body;

  // Check for saved mode in localStorage and set the theme accordingly
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  modeToggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Save the theme mode in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});


