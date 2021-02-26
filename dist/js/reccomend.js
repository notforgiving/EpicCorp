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
      breakpoint: 840,
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
      breakpoint: 630,
      settings: {
        dots: false,
        arrows: true,
        slidesToShow: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 550,
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