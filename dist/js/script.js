/*Раскрытие поиска*/
const search = document.querySelector(".information__search-btn");
const searchInput = document.querySelector(".information__search-input");
search.addEventListener("click", () => {
  searchInput.classList.toggle("information__search-input-open");
});

/* Раскрытие меню */
const headerMenu = document.querySelector(".header__menu");
const visableMenu = document.querySelector(".header__social");
const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#menu_checkbox");

try {
  menuBtn.addEventListener("click", (e) => {
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

if (window.location.pathname == "/") {
  /*Слайдер - баннер*/
  $(".epic-slider").slick({
    dots: false,
    arrows: false,
  });

  /*Слайдер - популярное*/
  $(".popular-category__slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  });
} else if (window.location.pathname == "/card.html") {
  /*Слайдер - карточка товара*/
  $(".card-item__images-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow:
      '<div class="images-slider__arrows"><svg class="vartical-arrow-top" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"/></g></g></svg></div>',
    nextArrow:
      '<div class="images-slider__arrows"><svg class="vartical-arrow-bottom" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"/></g></g></svg></div>',
  });
  /* Слайдер - рекомендации*/
  $(".card-item__recomendation-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    prevArrow:
      '<div class="recomendation-slider__arrows"><svg class="recomendation-slider__arrow-left" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"/></g></g></svg></div>',
    nextArrow:
      '<div class="recomendation-slider__arrows"><svg class="recomendation-slider__arrow-right" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"/></g></g></svg></div>',
  });
}
