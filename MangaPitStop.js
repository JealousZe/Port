const cardWrapper = document.querySelector('.card-wrapper')
const widthToScroll = cardWrapper.children[0].offsetWidth
const arrowPrev = document.querySelector('.arrow.prev')
const arrowNext = document.querySelector('.arrow.next')
const cardBounding = cardWrapper.getBoundingClientRect()
const cardImageAndLink = cardWrapper.querySelectorAll('img, a')
let currScroll = 0
let initPos = 0
let clicked = false

cardImageAndLink.forEach(item=> {
  item.setAttribute('draggable', false)
})

arrowPrev.onclick = function() {
  cardWrapper.scrollLeft -= widthToScroll
}

arrowNext.onclick = function() {
  cardWrapper.scrollLeft += widthToScroll
}

cardWrapper.onmousedown = function(e) {
  cardWrapper.classList.add('grab')
  initPos = e.clientX - cardBounding.left
  currScroll = cardWrapper.scrollLeft
  clicked = true
}

cardWrapper.onmousemove = function(e) {
  if(clicked) {
    const xPos = e.clientX - cardBounding.left
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos)
  }
}

cardWrapper.onmouseup = mouseUpAndLeave
cardWrapper.onmouseleave = mouseUpAndLeave

function mouseUpAndLeave() {
  cardWrapper.classList.remove('grab')
  clicked = false
}
document.addEventListener('DOMContentLoaded', () => {
  const cardWrapper = document.querySelector('.card-wrapper');
  const nextArrow = document.querySelector('.arrow.next');
  const prevArrow = document.querySelector('.arrow.prev');

  // Ensure the left arrow is hidden on page load
  prevArrow.style.display = 'none';

  const container = document.querySelector('.card-container');
const card = document.querySelector('.card'); // Adjust selector as needed

document.querySelector('.arrow-right').addEventListener('click', () => {
  container.scrollLeft += card.offsetWidth;
});
  cardWrapper.addEventListener('scroll', () => {
      const maxScrollLeft = cardWrapper.scrollWidth - cardWrapper.clientWidth;

      // Hide or show the right arrow
      if (cardWrapper.scrollLeft >= maxScrollLeft) {
          nextArrow.style.display = 'none'; // Hide the right arrow
      } else {
          nextArrow.style.display = 'flex'; // Show the right arrow
      }

      // Hide or show the left arrow
      if (cardWrapper.scrollLeft <= 0) {
          prevArrow.style.display = 'none'; // Hide the left arrow
      } else {
          prevArrow.style.display = 'flex'; // Show the left arrow
      }
  });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}