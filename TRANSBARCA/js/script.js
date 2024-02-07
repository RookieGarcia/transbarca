document.addEventListener("DOMContentLoaded", function () {
    // Carrusel de la parte superior
    const mainCarousel = document.querySelector('.carrousel .carousel');
    const mainPrevBtn = document.querySelector('.carrousel .prev');
    const mainNextBtn = document.querySelector('.carrousel .next');

    let mainCurrentIndex = 0;
    const mainTotalItems = mainCarousel.querySelectorAll('img').length;
    const mainItemWidth = mainCarousel.querySelector('img').clientWidth;

    function updateMainCarousel() {
        mainCarousel.style.transform = `translateX(${-mainCurrentIndex * mainItemWidth}px)`;
    }

    function nextMainSlide() {
        if (mainCurrentIndex < mainTotalItems - 1) {
            mainCurrentIndex++;
        } else {
            mainCurrentIndex = 0;
        }
        updateMainCarousel();
    }

    function prevMainSlide() {
        if (mainCurrentIndex > 0) {
            mainCurrentIndex--;
        } else {
            mainCurrentIndex = mainTotalItems - 1;
        }
        updateMainCarousel();
    }

    mainNextBtn.addEventListener('click', nextMainSlide);
    mainPrevBtn.addEventListener('click', prevMainSlide);

    setInterval(nextMainSlide, 5000);

   
    // Carrusel de la columna 1
    const carousel1 = document.querySelector('.carousel-column:first-child .carousel');
    const prevBtn1 = document.querySelector('.carousel-column:first-child .prev');
    const nextBtn1 = document.querySelector('.carousel-column:first-child .next');

    let currentIndex1 = 0;
    const totalItems1 = carousel1.querySelectorAll('img').length;
    const itemWidth1 = carousel1.querySelector('img').clientWidth;

    function updateCarousel1() {
        carousel1.style.transform = `translateX(${-currentIndex1 * itemWidth1}px)`;
    }

    function nextSlide1() {
        if (currentIndex1 < totalItems1 - 1) {
            currentIndex1++;
        } else {
            currentIndex1 = 0;
        }
        updateCarousel1();
    }

    function prevSlide1() {
        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = totalItems1 - 1;
        }
        updateCarousel1();
    }

    nextBtn1.addEventListener('click', nextSlide1);
    prevBtn1.addEventListener('click', prevSlide1);

    setInterval(nextSlide1, 5000);

    // Carrusel de la columna 2
    const carousel2 = document.querySelector('.carousel-column:nth-child(2) .carousel');
    const prevBtn2 = document.querySelector('.carousel-column:nth-child(2) .prev');
    const nextBtn2 = document.querySelector('.carousel-column:nth-child(2) .next');

    let currentIndex2 = 0;
    const totalItems2 = carousel2.querySelectorAll('img').length;
    const itemWidth2 = carousel2.querySelector('img').clientWidth;

    function updateCarousel2() {
        carousel2.style.transform = `translateX(${-currentIndex2 * itemWidth2}px)`;
    }

    function nextSlide2() {
        if (currentIndex2 < totalItems2 - 1) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }
        updateCarousel2();
    }

    function prevSlide2() {
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = totalItems2 - 1;
        }
        updateCarousel2();
    }

    nextBtn2.addEventListener('click', nextSlide2);
    prevBtn2.addEventListener('click', prevSlide2);

    setInterval(nextSlide2, 5000);
});
