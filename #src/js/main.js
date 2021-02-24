

/*Аккордион главной страницы */
const mainAccordionText = document.querySelector('.main-accordion')
const mainAccordionBtn = mainAccordionText.querySelector('.main-accordion__btn')
const mainAccordionMinText = mainAccordionText.querySelector('.main-accordion__text-min')
const mainAccordionMaxText = mainAccordionText.querySelector('.main-accordion__text-max')
const mainAccordionBtnMinText = mainAccordionBtn.querySelector('.main-accordion__btn-min')
const mainAccordionBtnMaxText = mainAccordionBtn.querySelector('.main-accordion__btn-max')
mainAccordionBtn.addEventListener('click',()=>{
  mainAccordionMinText.classList.toggle('showBlock')
  mainAccordionMaxText.classList.toggle('showBlock')
  mainAccordionBtnMinText.classList.toggle('showBlock')
  mainAccordionBtnMaxText.classList.toggle('showBlock')
})

/*Для каждой страницы свой кусок кода*/
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