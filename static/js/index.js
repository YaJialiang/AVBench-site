document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".navbar-burger");
  var menu = document.querySelector("#t2av-menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }

  var navLinks = document.querySelectorAll('.navbar-item[href^="#"]');
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (menu) {
        menu.classList.remove("is-active");
      }
      if (burger) {
        burger.classList.remove("is-active");
      }
    });
  });
});
