let slideIndex = 1;
let slideTimer;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
  autoShowSlides();
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex = n);
  autoShowSlides();
}

function autoShowSlides() {
  slideIndex++;
  showSlides(slideIndex);
  slideTimer = setTimeout(autoShowSlides, 3000); // Change image every 3 seconds
}

// Start slideshow when page loads
window.onload = function() {
  showSlides(slideIndex);
  autoShowSlides();
}; 