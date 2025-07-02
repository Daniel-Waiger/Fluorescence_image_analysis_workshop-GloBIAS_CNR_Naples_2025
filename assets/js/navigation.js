// Mobile Navigation Toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navMenu').classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  });

  // Highlight current section in navigation
  const sections = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightCurrentSection() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightCurrentSection);
});

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  }
});
