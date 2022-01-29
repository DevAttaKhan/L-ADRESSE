const navBtn = document.querySelector(".nav-btn");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function (e) {
  //   console.log(e.target.closest(".nav-btn"));
  //   e.target.closest(".nav-btn").classList.toggle("shownav");
  header.classList.toggle("shownav");
});
