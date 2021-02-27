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
    if (menu.classList.value.includes("showFlex")) {
      menu.classList.toggle("showFlex");
    }
  }); //показ второго уровня меню по клику на каталог

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("showFlex");
    menuBtn.classList.toggle("yellowColor");
  }); //Показ 3 уровня меню
}

if (window.innerWidth <= 768) {
  const searchBtn = document.querySelector(".information__search-btn-mobile");
  const mobileSearch = document.querySelector(".header__mobile-search");
  const closeBtnSearch = mobileSearch.querySelector(".information__search-btn");

  searchBtn.addEventListener("click", () => {
    mobileSearch.classList.toggle("header__mobile-search-show");
  });
  closeBtnSearch.addEventListener("click", () => {
    mobileSearch.classList.toggle("header__mobile-search-show");
  });
}

/*Появление кнопки на быстрый подъем наверх*/
const up = document.querySelector(".arrow__up");
document.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    up.style.display = "flex";
  } else {
    up.style.display = "none";
  }
});

if (document.querySelectorAll(".card-item-btn__buy")) {
  const buyBtns = document.querySelectorAll(".card-item-btn__buy");
  const alert = document.querySelector(".alert");
  const closeAlert = document.querySelector(".alert__close");
  buyBtns.forEach((item) => {
    item.addEventListener("click", () => {
      alert.classList.toggle("alertShow");
    });
  });

  closeAlert.addEventListener("click", () => {
    alert.classList.toggle("alertShow");
  });
}

/*Аккордион главной страницы */
if (document.querySelector(".main-accordion")) {
  const mainAccordionText = document.querySelector(".main-accordion");
  const mainAccordionBtn = mainAccordionText.querySelector(
    ".main-accordion__btn"
  );
  const mainAccordionMinText = mainAccordionText.querySelector(
    ".main-accordion__text-min"
  );
  const mainAccordionMaxText = mainAccordionText.querySelector(
    ".main-accordion__text-max"
  );
  const mainAccordionBtnMinText = mainAccordionBtn.querySelector(
    ".main-accordion__btn-min"
  );
  const mainAccordionBtnMaxText = mainAccordionBtn.querySelector(
    ".main-accordion__btn-max"
  );
  mainAccordionBtn.addEventListener("click", () => {
    mainAccordionMinText.classList.toggle("showBlock");
    mainAccordionMaxText.classList.toggle("showBlock");
    mainAccordionBtnMinText.classList.toggle("showBlock");
    mainAccordionBtnMaxText.classList.toggle("showBlock");
  });
}
