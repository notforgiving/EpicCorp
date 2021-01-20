/* Раскрытие меню */
const headerMenu = document.querySelector(".header__menu");
const visableMenu = document.querySelector(".header__social");
const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#menu_checkbox");

try {
  menuBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("showFlex");
    visableMenu.classList.toggle("lowMargin");
    menuBtn.classList.toggle("yellowColor");
  });
} catch {}

try {
  mobileMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("showFlex");
    visableMenu.classList.toggle("lowMargin");
    menuBtn.classList.toggle("yellowColor");
  });
} catch {}

  /*Слайдер - популярное*/
  /*Слайдер - баннер*/

if (window.location.pathname === "/") {

  $(".epic-slider").slick({
    dots: false,
    arrows: false,
  });

  $(".popular-category__slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  });
}
