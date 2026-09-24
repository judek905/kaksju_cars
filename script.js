/* ============================================
   KAKSJU CARS — script.js
   Shared across every page. Each feature checks
   that its elements exist before running, since
   not every page has a testimonial, form, etc.
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled'); // solid background once scrolled down
      } else {
        navbar.classList.remove('scrolled'); // transparent again near the top
      }
    });
  }


  /* ---------- MOBILE MENU TOGGLE ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }


  /* ---------- CONTACT FORM SUBMISSION (index.html / contact.html) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // stops the default page reload on submit

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();

      if (!name || !email) {
        showStatus('Please fill in your name and email.', '#e57373');
        return;
      }

      // In production, replace this with a fetch() call to your PHP backend, e.g.:
      // fetch('contact-handler.php', { method: 'POST', body: new FormData(contactForm) })
      //   .then(res => res.text())
      //   .then(msg => showStatus(msg, 'var(--color-gold)'));

      showStatus('Thank you, ' + name + '! Our team will contact you shortly.', '#c9a24b');
      contactForm.reset();
    });
  }

  function showStatus(message, color) {
    formStatus.textContent = message;
    formStatus.style.color = color;
    formStatus.style.display = 'block';
  }


  /* ---------- ROTATING TESTIMONIALS (index.html only) ---------- */
  const testimonialText = document.getElementById('testimonialText');
  const testimonialAuthor = document.getElementById('testimonialAuthor');

  if (testimonialText && testimonialAuthor) {
    const testimonials = [
      { text: '"Kaksju proved that world-class luxury cars can be built right here in Africa. The Aurea rides like a dream."', author: '— Amara N., Lagos' },
      { text: '"The Simba SUV handles our roads beautifully while still feeling like a five-star experience inside."', author: '— Kwame O., Accra' },
      { text: '"Owning a Zuri means owning a piece of African innovation. I get compliments everywhere I go."', author: '— Naledi M., Johannesburg' }
    ];

    let currentTestimonial = 0;
    testimonialText.style.transition = 'opacity 0.4s ease';
    testimonialAuthor.style.transition = 'opacity 0.4s ease';

    setInterval(function () {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      testimonialText.style.opacity = 0;
      testimonialAuthor.style.opacity = 0;

      setTimeout(function () {
        testimonialText.textContent = testimonials[currentTestimonial].text;
        testimonialAuthor.textContent = testimonials[currentTestimonial].author;
        testimonialText.style.opacity = 1;
        testimonialAuthor.style.opacity = 1;
      }, 400);
    }, 6000);
  }


  /* ---------- 3D TILT EFFECT (Models page cards + tilt-card elements on other pages) ---------- */
  const tiltCards = document.querySelectorAll('.model-3d, .tilt-card');

  tiltCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8; // tilts up/down, capped at 8deg
      const rotateY = ((x - centerX) / centerX) * 8;   // tilts left/right, capped at 8deg
      card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'; // resets when the cursor leaves
    });
  });


  /* ---------- FOOTER YEAR (every page) ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
