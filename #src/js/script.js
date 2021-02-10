@@include("./jquery-1.12.4.min.js");
@@include("./slick.min.js");

/* Раскрытие меню в зависимости от ширины экрана*/
if (window.innerWidth <= 768) {
  const burgerBtn = document.querySelector("#menu_checkbox");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuContent = mobileMenu.querySelector(".mobile-menu__content");

  const closeMenu = document.querySelector(".mobile-menu__close");

  const headerTop = document.querySelector(".header__top").cloneNode(true);
  const headerMiddle = document
    .querySelector(".header__social")
    .cloneNode(true);
  const headerBottom = document.querySelector(".header__menu");

  mobileMenuContent.append(headerTop);
  mobileMenuContent.append(headerMiddle);
  mobileMenuContent.append(headerBottom);

  try {
    burgerBtn.addEventListener(
      "click",
      () => {
        mobileMenu.style.transform = "translateX(0%)";
        document.querySelector("html").style.overflow = "hidden";
      },
      { passive: true }
    );
    closeMenu.addEventListener("click", () => {
      mobileMenu.style.transform = "translateX(100%)";
      document.querySelector("html").style.overflow = "auto";
    });

    const catalogLink = mobileMenuContent.querySelector("#catalog-link");
    const informationLink = mobileMenuContent.querySelector(
      "#information-link"
    );
    const informationBody = mobileMenuContent.querySelector(
      ".header__social-information"
    );
    const catalogBody = mobileMenuContent.querySelector("#menu-btn");
    const funkoBtn = mobileMenuContent.querySelector("#menu-btn");
    const informationBodyMenu = mobileMenuContent.querySelector(
      ".header__menu"
    );

    informationLink.addEventListener("click", () => {
      informationBody.classList.toggle("showFlex");

      if (catalogBody.classList.value.includes("showFlex")) {
        catalogBody.classList.toggle("showFlex");
      }
      if (funkoBtn.classList.value.includes("showFlex")) {
        funkoBtn.classList.toggle("showFlex");
      }
      if (informationBodyMenu.classList.value.includes("showFlex")) {
        informationBodyMenu.classList.toggle("showFlex");
      }
    }); //показ второго уровня меню по клику на информацию

    catalogLink.addEventListener("click", () => {
      catalogBody.classList.toggle("showFlex");
      if (informationBody.classList.value.includes("showFlex")) {
        informationBody.classList.toggle("showFlex");
      }
      if (informationBodyMenu.classList.value.includes("showFlex")) {
        informationBodyMenu.classList.toggle("showFlex");
      }
    }); //показ второго уровня меню по клику на каталог

    catalogBody.addEventListener("click", () => {
      informationBodyMenu.classList.toggle("showFlex");
    }); //Показ 3 уровня меню
  } catch {
    console.log(
      "Возникла ошибка со скриптом мобильного меню. Приносим свои извинения за неудобства!"
    );
  }
} else {
  const catalogLink = document.querySelector("#catalog-link");
  const informationLink = document.querySelector("#information-link");
  const informationBody = document.querySelector(".header__social-information");
  const catalogBody = document.querySelector("#menu-btn");

  const menuBtn = document.querySelector(".header__social__link");
  const menu = document.querySelector(".header__menu");

  informationLink.addEventListener("click", () => {
    informationBody.classList.toggle("showFlex");
    if (catalogBody.classList.value.includes("showFlex")) {
      catalogBody.classList.toggle("showFlex");
    }
    if (menu.classList.value.includes("showFlex")) {
      menu.classList.toggle("showFlex");
    }
    if (menu.classList.value.includes("showFlex")) {
      menu.classList.toggle("showFlex");
    }
  }); //показ второго уровня меню по клику на информацию

  catalogLink.addEventListener("click", () => {
    catalogBody.classList.toggle("showFlex");
    if (informationBody.classList.value.includes("showFlex")) {
      informationBody.classList.toggle("showFlex");
    }
    if(menu.classList.value.includes('showFlex')){
      menu.classList.toggle("showFlex");
    }
  }); //показ второго уровня меню по клику на каталог

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("showFlex");
    menuBtn.classList.toggle("yellowColor");
  }); //Показ 3 уровня меню
}

if(window.innerWidth <= 768){
  const searchBtn = document.querySelector('.information__search-btn-mobile')
  const mobileSearch = document.querySelector('.header__mobile-search')
  const closeBtnSearch = mobileSearch.querySelector('.information__search-btn')

  searchBtn.addEventListener('click',()=>{
    mobileSearch.classList.toggle('header__mobile-search-show')
  })
  closeBtnSearch.addEventListener('click',()=>{
    mobileSearch.classList.toggle('header__mobile-search-show')
  })
}

/*Появление кнопки на быстрый подъем наверх*/
const up = document.querySelector('.arrow__up')
document.addEventListener('scroll',()=>{
  if(window.scrollY>=500){
    up.style.display = 'flex'
  }
  else{
    up.style.display = 'none'
  }
})

/*Для каждой страницы свой кусок кода*/
if (window.location.pathname == "/") {
  const speed = 2000; //Скорость работы слайдера 3сек
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
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  /*Добавляем счетчик слайдов*/
  const sliderBlock = document.querySelector(".epic-slider-block");
  const sliderNumbers = document.createElement("div");
  sliderNumbers.classList.add("epic-slider__numbers");
  sliderNumbers.innerHTML =
    '<span class="epic-slider__numbers-current"><span>0</span>0</span> - <span class="epic-slider__numbers-sum">00</span>';
  sliderBlock.prepend(sliderNumbers);
  const container = document.querySelector(".container");

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
  }, 1000);

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
  $(".cutaway-item__images-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow:
      '<div class="cutaway-item__images-slider__arrows"><svg class="vartical-arrow-top" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"/></g></g></svg></div>',
    nextArrow:
      '<div class="cutaway-item__images-slider__arrows"><svg class="vartical-arrow-bottom" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"/></g></g></svg></div>',
    responsive: [
      {
        breakpoint: 801,
        settings: {
          arrows: false,
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          dots: true,
        },
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          dots: true,
        },
      },
    ],
  });

  if (window.innerWidth <= 768) {
    const descriptionBtn = document.querySelector(
      ".cutaway-item__description-btn"
    );
    const desriptionInput = descriptionBtn.querySelector("input");
    desriptionInput.addEventListener("click", () => {
      if (desriptionInput.checked) {
        document
          .querySelector(".cutaway-item__description")
          .classList.add("displayNone");
        document
          .querySelector(".cutaway-item__accordion-body")
          .classList.add("displayNone");
      } else {
        document
          .querySelector(".cutaway-item__description")
          .classList.remove("displayNone");
        document
          .querySelector(".cutaway-item__accordion-body")
          .classList.remove("displayNone");
      }
    });
  }
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

    if(window.innerWidth<=800){
      const filterBtn = document.querySelector('.catalog__figurines-filters-mobile')
      const filterBody = document.querySelector('.catalog__filters')
      const filterClose = filterBody.querySelector('.catalog__filters-close')
      filterBtn.addEventListener('click',()=>{
        filterBody.classList.toggle('showBlock')
      })
      filterClose.addEventListener('click',()=>{
        filterBody.classList.toggle('showBlock')
      })
    }
  });
}

const buyBtns = document.querySelectorAll('.card-item-btn__buy')
const alert = document.querySelector('.alert')
const closeAlert = document.querySelector('.alert__close')
buyBtns.forEach((item)=>{
  item.addEventListener('click',()=>{
    alert.classList.toggle('alertShow')
  })
})

closeAlert.addEventListener('click',()=>{
  alert.classList.toggle('alertShow')
})

  /* Слайдер - рекомендации*/
  $(".cutaway__recomendation-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    prevArrow:
      '<div class="cutaway__recomendation-slider__arrows cutaway__recomendation-slider__arrows-left"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"/></g></g></svg></div>',
    nextArrow:
      '<div class="cutaway__recomendation-slider__arrows cutaway__recomendation-slider__arrows-right"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10"><g><g><path fill="#787677" d="M.307 8.582L7.088.294a.892.892 0 0 1 .763-.325c.281-.022.57.09.762.325l6.781 8.288a.893.893 0 0 1-1.381 1.13L7.85 2.182 1.688 9.713a.892.892 0 0 1-1.381-1.13z"/></g></g></svg></div>',
    responsive: [
      {
        breakpoint: 801,
        settings: {
          dots: false,
          slidesToShow: 3,
          autoplay: false,
          autoplaySpeed: 3000,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 481,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          autoplay: false,
          autoplaySpeed: 3000,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  });

