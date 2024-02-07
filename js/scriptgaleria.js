document.addEventListener("DOMContentLoaded", function () {
// JavaScript para expandir y cerrar la imagen
function expandImage(src) {
    var expandedImg = document.getElementById("expandedImage");
    expandedImg.src = src;
    document.querySelector('.expanded-img').style.display = 'flex';
}

function closeExpandedImage() {
    document.querySelector('.expanded-img').style.display = 'none';
}
}