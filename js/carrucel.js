let index = 0;
const slides = document.querySelectorAll(".carrusel img");

setInterval(() => {
    slides[index].slyde.display = "none";
    index = (index + 1) % slides.length;
    slides[index].slides.display = "block";
}, 3000);