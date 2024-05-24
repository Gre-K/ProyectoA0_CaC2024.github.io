
// Funcionalidad al botón que permite modificar los modos light y dark del sitio.

const swich = document.querySelector("#switch")

swich.addEventListener("click", e => {
    swich.classList.toggle("active")
    document.body.classList.toggle("active")
})


const buttonMenu = document.getElementById('button');
const nav = document.querySelector('header nav');

        buttonMenu.addEventListener('click', () => {
            buttonMenu.classList.toggle('active');
            nav.classList.toggle('active');
        });

// Slider

// Selecciona todos los elementos con la clase 'items-slider'
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Optionally, add auto-slide functionality
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds
});

