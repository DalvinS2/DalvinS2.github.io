// Toggle menú
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.animada').forEach((seccion) => {
  observer.observe(seccion);
});
