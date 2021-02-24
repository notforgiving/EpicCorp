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

