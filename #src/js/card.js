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
      breakpoint: 931,
      settings: {
        arrows: false,
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
        dots: true,
      },
    },
    {
      breakpoint: 651,
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