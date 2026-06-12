document.addEventListener("DOMContentLoaded", () => {
    // 1. LÓGICA PARA LOS MICRO-CARRUSELES DE LAS TARJETAS (Funciona en index y camillas)
    const cardCarousels = document.querySelectorAll(".card-carousel");

    cardCarousels.forEach((carousel) => {
        const slider = carousel.querySelector(".carousel-slider");
        const prevBtn = carousel.querySelector(".arrow-left");
        const nextBtn = carousel.querySelector(".arrow-right");
        
        // Si la tarjeta no tiene imágenes o flechas, pasa a la siguiente
        if (!slider || !prevBtn || !nextBtn) return;

        const images = slider.querySelectorAll("img");
        let currentIndex = 0;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Evita saltos raros de pantalla
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });

        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });
    });

    // 2. LÓGICA PARA EL CARRUSEL CENTRAL GRANDE (Solo si existe en la página actual)
    const mainTrack = document.querySelector(".main-track");
    const mainPrev = document.querySelector(".m-prev");
    const mainNext = document.querySelector(".m-next");

    if (mainTrack && mainPrev && mainNext) {
        const mainSlides = mainTrack.querySelectorAll(".main-slide");
        let mainIndex = 0;

        function updateMainSlider() {
            mainTrack.style.transform = `translateX(-${mainIndex * 100}%)`;
        }

        mainNext.addEventListener("click", () => {
            mainIndex = (mainIndex + 1) % mainSlides.length;
            updateMainSlider();
        });

        mainPrev.addEventListener("click", () => {
            mainIndex = (mainIndex - 1 + mainSlides.length) % mainSlides.length;
            updateMainSlider();
        });
    }
});
const slides = document.querySelectorAll(".embalaje-slide");

let actual = 0;

document.querySelector(".emb-next").onclick = () => {
    slides[actual].classList.remove("active");

    actual = (actual + 1) % slides.length;

    slides[actual].classList.add("active");
};

document.querySelector(".emb-prev").onclick = () => {
    slides[actual].classList.remove("active");

    actual = (actual - 1 + slides.length) % slides.length;

    slides[actual].classList.add("active");
};
document.querySelectorAll(".slider-card").forEach(card => {

    const slides = card.querySelectorAll(".envio-slide");

    let actual = 0;

    card.querySelector(".next").addEventListener("click", () => {

        slides[actual].classList.remove("active");

        actual = (actual + 1) % slides.length;

        slides[actual].classList.add("active");
    });

    card.querySelector(".prev").addEventListener("click", () => {

        slides[actual].classList.remove("active");

        actual = (actual - 1 + slides.length) % slides.length;

        slides[actual].classList.add("active");
    });

});