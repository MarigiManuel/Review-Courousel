const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const slideCount = slides.length;
let currentIndex = 0;

function moveToSlide(index) {
    if (index < 0 || index >= slideCount) return;
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    moveToSlide(currentIndex);
}

// Automatically advance the carousel every 3 seconds
setInterval(nextSlide, 3000);

// Initial slide setup
moveToSlide(currentIndex);
