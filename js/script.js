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

// let curSlide = 0;
// const maxSlide = slides.length;

// const goToSlide = function (slide) {
//   slides.forEach((s, i) => {
//     s.style.transform = `translateX(${100 * (i - slide)}%)`;
//   });
// };
// let x = window.matchMedia("(max-width: 767px)");
// const nextSlide = function () {
//   // if () {
//   //   curSlide = 0;
//   // }
//   console.log(curSlide, "abc");
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else if (x.matches && curSlide === 2) {
//     curSlide = 0;
//   } else curSlide++;

//   goToSlide(curSlide);
// };

// const preSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else curSlide--;

//   goToSlide(curSlide);
// };

// goToSlide(0);

// btnLeft.addEventListener("click", preSlide);
// btnRight.addEventListener("click", nextSlide);

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
