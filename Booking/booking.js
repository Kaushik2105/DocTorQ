const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function carouselNext() {
    currentIndex++;
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }
    track.style.transform = `translateX(-${currentIndex * 420}px)`;
}

function carouselPrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }
    track.style.transform = `translateX(-${currentIndex * 420}px)`;
}