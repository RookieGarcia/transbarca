// Contenido del script.js
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const totalItems = document.querySelectorAll('.carousel img').length;
    const itemWidth = document.querySelector('.carousel img').clientWidth;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    function nextSlide() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);
});

// Create a lightbox
(function() {
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");
  
    // Add image and caption to lightbox
  
    $lightbox
      .append($img)
      .append($caption);
  
    // Add lighbox to document
  
    $('body').append($lightbox);
  
    $('.lightbox-gallery img').click(function(e) {
      e.preventDefault();
  
      // Get image link and description
      var src = $(this).attr("data-image-hd");
      var cap = $(this).attr("alt");
  
      // Add data to lighbox
  
      $img.attr('src', src);
      $caption.text(cap);
  
      // Show lightbox
  
      $lightbox.fadeIn('fast');
  
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
  
  }());