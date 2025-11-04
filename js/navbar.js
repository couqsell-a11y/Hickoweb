document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('mainNavbar');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarResponsive');

  // Navbar background on scroll
  function toggleNavbarBackground() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', toggleNavbarBackground);
  toggleNavbarBackground();

  // Collapse navbar when clicking outside
  document.addEventListener('click', (e) => {
    const clickedInsideNavbar = navbarCollapse.contains(e.target) || navbarToggler.contains(e.target);

    if (!clickedInsideNavbar && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});
  // Bootstrap 5 collapse events
  (function () {
    const navbar = document.getElementById('mainNavbar');
    const navCollapse = document.getElementById('navbarResponsive');

    if (navbar && navCollapse) {
      navCollapse.addEventListener('shown.bs.collapse', function () {
        navbar.classList.add('menu-open');
      });
      navCollapse.addEventListener('hidden.bs.collapse', function () {
        navbar.classList.remove('menu-open');
      });
    }
  })();
  window.onscroll = function() {
    let navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 50) {  // Change 50 to whatever scroll distance you want
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 80; // height of your fixed header
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

// Scroll to Top Button behaviour
(function () {
  const btn = document.getElementById('scrollTopBtn');

  // Show button when scrolled down
  function checkScroll() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 120) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  // Smooth scroll to top
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', checkScroll);
  // run once in case page is already scrolled
  checkScroll();

  // Optional: simple client-side validation + prevent default submit (demo)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
      // Let browser show built-in validation UI
      return;
    }
    e.preventDefault();
    // TODO: submit via AJAX / Formspree / backend
    alert('Formulier succesvol ingediend (demo).');
    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* test */








