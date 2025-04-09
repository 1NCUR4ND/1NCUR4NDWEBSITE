// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
  // Initial animations that don't need scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100);
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  scrollElements.forEach(element => {
    observer.observe(element);
  });
});

// Mobile menu toggle (if needed for smaller screens)
document.addEventListener('DOMContentLoaded', function() {
  // Add mobile menu functionality here if needed
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
    }
  });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
    alert('Message sent successfully!');
    this.reset();
  });
}