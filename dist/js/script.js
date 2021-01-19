/* Раскрытие меню */
const menuBtn = document.querySelector('#menu-btn')
const headerMenu = document.querySelector('.header__menu')
const visableMenu = document.querySelector('.header__social')
menuBtn.addEventListener('click',()=>{
  headerMenu.classList.toggle('showFlex')
  visableMenu.classList.toggle('lowMargin')
  menuBtn.classList.toggle('yellowColor')
})

/*Слайдер */

$('.epic-slider').slick({
  dots: false,
  arrows:false
});