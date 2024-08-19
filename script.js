// Переключение мобильного меню
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Анимация при прокрутке
const fadeInElements = document.querySelectorAll('.fade-in, .slide-in, .fade-in-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(element => {
    observer.observe(element);
});
