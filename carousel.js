const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('carousel__button--right');
const prevButton = document.querySelector('carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth)

//arrange slides next to one another
const setSlidePosition = (slides, index) => {
    slides.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

//onclick left, move slides left


//onclick right, move slides right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');

    //move the slide
});
console.log(currentSlide);

//on indicator click, move to slide