/* Раскрытие меню */
const headerMenu = document.querySelector(".header__menu");
const visableMenu = document.querySelector(".header__social");
const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#menu_checkbox");

try {
  menuBtn.addEventListener(
    "click",
    (e) => {
      headerMenu.classList.toggle("showFlex");
      visableMenu.classList.toggle("lowMargin");
      menuBtn.classList.toggle("yellowColor");
    },
    { passive: true }
  );
} catch {}

try {
  mobileMenu.addEventListener(
    "click",
    () => {
      headerMenu.classList.toggle("showFlex");
      visableMenu.classList.toggle("lowMargin");
      menuBtn.classList.toggle("yellowColor");
    },
    { passive: true }
  );
} catch {
  console.log(
    "Возникла ошибка со скриптом мобильного меню. Приносим свои извинения за неудобства!"
  );
}

if (window.location.pathname == "/") {
  const speed = 3000; //Скорость работы слайдера 3с
  /*Слайдер - баннер*/
  $(".epic-slider").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: speed,
    prevArrow:
      '<button class="epic-slider__arrows epic-slider__arrows-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"></path></g></g></svg></button>',
    nextArrow:
      '<button class="epic-slider__arrows epic-slider__arrows-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"></path></g></g></svg></button>',
  });

  /*Добавляем счетчик слайдов*/
  const sliderBlock = document.querySelector(".epic-slider-block");
  const sliderNumbers = document.createElement("div");
  sliderNumbers.classList.add("epic-slider__numbers");
  sliderNumbers.innerHTML =
    '<span class="epic-slider__numbers-current"><span>0</span>0</span> - <span class="epic-slider__numbers-sum">00</span>';
  sliderBlock.prepend(sliderNumbers);
  const container = document.querySelector(".container");

  function sliderButtonPosition() {
    const buttonPrev = document.querySelector(".epic-slider__arrows-prev");
    buttonPrev.style.left =
      ((window.innerWidth - container.clientWidth) / 2 + 10) + "px";
    sliderNumbers.style.left =
      (window.innerWidth - container.clientWidth) / 2 + 90 + "px";
    const buttonNext = document.querySelector(".epic-slider__arrows-next");
    buttonNext.style.left =
      (window.innerWidth - container.clientWidth) / 2 + 260 + "px";
    console.log(window.innerWidth - container.clientWidth);
  }

  sliderButtonPosition();

  window.addEventListener("resize", () => {
    sliderButtonPosition();
  });

  /*Анимируем изменение счетчика*/
  setInterval(() => {
    const mainSlider = document.querySelector(".epic-slider");
    const active = mainSlider.querySelector(".slick-active");
    const totalSliders = mainSlider.querySelectorAll("[data-slick-index]");
    const clonesSlider = mainSlider.querySelectorAll(".slick-cloned");
    let firstSlide = active.getAttribute("data-slick-index");
    const totalRealSliders = totalSliders.length - clonesSlider.length;
    firstSlide++;
    sliderNumbers.innerHTML = `<span class="epic-slider__numbers-current"><span>0</span>${firstSlide}</span> - <span class="epic-slider__numbers-sum">0${totalRealSliders}</span>`;
  }, 500);
  /*Слайдер - популярное*/
  $(".popular-category__slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 6,
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
} else if (window.location.pathname == "/catalog.html") {
  /*Ползунок цен */
  jQuery(document).ready(function () {
    $(".upper").on("input", setFill);
    $(".lower").on("input", setFill);

    var max = $(".upper").attr("max");
    var min = $(".lower").attr("min");

    function setFill(evt) {
      var valUpper = $(".upper").val();
      var valLower = $(".lower").val();
      if (parseFloat(valLower) > parseFloat(valUpper)) {
        var trade = valLower;
        valLower = valUpper;
        valUpper = trade;
      }

      var width = (valUpper * 100) / max;
      var left = (valLower * 100) / max;
      $(".fill").css("left", "calc(" + left + "%)");
      $(".fill").css("width", width - left + "%");

      // Update info
      if (parseInt(valLower) == min) {
        $(".easy-basket-lower").val("0");
      } else {
        $(".easy-basket-lower").val(parseInt(valLower));
      }
      if (parseInt(valUpper) == max) {
        $(".easy-basket-upper").val("5000");
      } else {
        $(".easy-basket-upper").val(parseInt(valUpper));
      }
      $(".histogram-list li").removeClass("ui-histogram-active");
    }

    // изменяем диапазон цен вручную
    $(".easy-basket-filter-info p input").keyup(function () {
      var valUpper = $(".easy-basket-upper").val();
      var valLower = $(".easy-basket-lower").val();
      var width = (valUpper * 100) / max;
      var left = (valLower * 100) / max;
      if (valUpper > 5000) {
        var left = max;
      }
      if (valLower < 0) {
        var left = min;
      } else if (valLower > max) {
        var left = min;
      }
      $(".fill").css("left", "calc(" + left + "%)");
      $(".fill").css("width", width - left + "%");
      // меняем положение ползунков
      $(".lower").val(valLower);
      $(".upper").val(valUpper);
    });
    $(".easy-basket-filter-info .iLower input").blur(function () {
      var valLower = $(".lower").val();
      $(this).val(Math.floor(valLower));
    });
    $(".easy-basket-filter-info .iUpper input").blur(function () {
      var valUpper = $(".upper").val();
      $(this).val(Math.floor(valUpper));
    });
  });
}
