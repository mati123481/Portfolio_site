// ===== Mobile Menu Toggle =====
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== Optional: Contact Form Submission Alert (Mock) =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    alert("Thanks for reaching out! This form doesn't actually send emails yet.");
    contactForm.reset(); // Clears the form
  });
}
const darkToggle = document.getElementById('darkToggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});