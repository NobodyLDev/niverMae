// Seleciona os elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Adiciona um event listener para o menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
