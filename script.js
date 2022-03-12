'use strict';

const slidest = document.getElementsByClassName('left-item-mob');
let slidePositiontwo = 0;
const totalSlidest = slidest.length;

function hideAllSlidess() {
  for (let slide of slidest) {
    slide.classList.remove('left-item-mob-visible');
    slide.classList.add('left-item-mob-hidden');
  }
}

function moveToNextSlidee() {
  hideAllSlidess();
  if (slidePositiontwo === totalSlidest - 1) {
    slidePositiontwo = 0;
  } else {
    slidePositiontwo++;
  }
  slidest[slidePositiontwo].classList.add('left-item-mob-visible');
}
function moveToPrevSlidee() {
  hideAllSlidess();
  if (slidePositiontwo === 0) {
    slidePositiontwo = totalSlidest - 1;
  } else {
    slidePositiontwo--;
  }
  slidest[slidePositiontwo].classList.add('left-item-mob-visible');
}

const navmobby = document.getElementById('nav-mobby');
const crossy = document.getElementById('crossy');
function openNav() {
  if (navmobby.classList.contains('hidden')) {
    navmobby.classList.remove('hidden');
    navmobby.classList.add('visible');
  }
}

function closeNav() {
  if (!navmobby.classList.contains('hidden')) {
    navmobby.classList.add('hidden');
    navmobby.classList.remove('visible');
  }
}

document.getElementById('hammy').addEventListener('click', openNav);
crossy.addEventListener('click', closeNav);

const slides = document.getElementsByClassName('left-item');
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('left-item-visible');
    slide.classList.add('left-item-hidden');
  }
}

function moveToNextSlide() {
  hideAllSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add('left-item-visible');
}
function moveToPrevSlide() {
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add('left-item-visible');
}

document.getElementById('left-but').addEventListener('click', moveToPrevSlide);
document.getElementById('right-but').addEventListener('click', moveToNextSlide);
document
  .getElementById('right-but-mob')
  .addEventListener('click', moveToNextSlidee);
document
  .getElementById('left-but-mob')
  .addEventListener('click', moveToPrevSlidee);
