const carouselSlide = document.querySelector('.carousel__slide');
const carouselImages = document.querySelectorAll('.carousel__slide img');

//Buttons
prevButton = document.querySelector('#prevBtn');
nextButton = document.querySelector('#nextBtn');

//determining slide positioning
let slidePosition = 1;
const size = carouselImages[0].clientWidth;

//Image slide functionality
carouselSlide.style.transform = 'translateX(' + (-size * slidePosition) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', () => {
    if (slidePosition >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    slidePosition++;
    carouselSlide.style.transform = 'translateX(' + (-size * slidePosition) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (slidePosition <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    slidePosition--;
    carouselSlide.style.transform = 'translateX(' + (-size * slidePosition) + 'px)';
});

//adding carousel functionality
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[slidePosition].id === 'lastClone') {
        console.log('transition ended')
        carouselSlide.style.transition = 'none';
        slidePosition = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * slidePosition) + 'px)';
    }
    if (carouselImages[slidePosition].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        slidePosition = carouselImages.length - slidePosition;
        carouselSlide.style.transform = 'translateX(' + (-size * slidePosition) + 'px)';
    }
});