const navBtn = document.querySelector(".nav-btn");
const header = document.querySelector(".header");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

navBtn.addEventListener("click", function (e) {
  //   console.log(e.target.closest(".nav-btn"));
  //   e.target.closest(".nav-btn").classList.toggle("shownav");
  header.classList.toggle("shownav");
});

// slider

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else curSlide++;

  goToSlide(curSlide);
};

const preSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else curSlide--;

  goToSlide(curSlide);
};

goToSlide(0);

btnLeft.addEventListener("click", preSlide);
btnRight.addEventListener("click", nextSlide);
