const menuElementReceipes = document.querySelector(".nav__element-2-inner");
const navButtonInners = document.querySelectorAll(".nav__button-inner");
const menuElementThePromise = document.querySelector(".nav__element-4-inner");
const menuElementUl = document.querySelectorAll(".ulbig");
const menuElementThePromiseSmall2_2 = document.querySelector(".nav__inner_2_2_s");
const menuElementThePromiseSmall2_4 = document.querySelector(".nav__inner_2_4_s");
const menuElementUlSmall = document.querySelectorAll(".ulsmall");
const navButtonInnersSmall = document.querySelectorAll(".nav__button-inner_small");


if (document.documentElement.clientWidth < 1440) {

    function closeUlSmallArrow() {
        menuElementUlSmall.forEach(item => {
            item.classList.add('win-none');
            item.classList.remove('show-window');
        });
        navButtonInnersSmall.forEach(item => {
            item.classList.remove('nav__button--inner-arrow-up')
        })
    }


    function closeMenuBig() {
        menuElementUl.forEach(item => {
            item.classList.add("win-none");
            item.classList.remove('show-window');
            navButtonInners.forEach((item, i) => {
                item.classList.remove("nav__button--inner-arrow-up");
            })
        });
    }

    function closeMenuSmall() {
        menuElementUlSmall.forEach(item => {
            item.classList.add("win-none");
            item.classList.remove('show-window');
            navButtonInnersSmall.forEach((item, i) => {
                item.classList.remove("nav__button--inner-arrow-up");
            })
        });
    }

    let menuButtonClose = document.querySelector(".nav__menu-button");
    let navListNavigation = document.querySelector(".nav__list-navigation");
    menuButtonClose.addEventListener("click", function (evt) {
        if (navListNavigation.classList.contains("show-window")) {
            navListNavigation.classList.remove("show-window");
            menuButtonClose.classList.remove("nav__menu-button--close");
        } else {
            navListNavigation.classList.add("show-window");
            menuButtonClose.classList.add("nav__menu-button--close");
            closeMenuBig();
        }
    });


    navButtonInners.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (i === 0) {
                if (menuElementReceipes.classList.contains("show-window")) {
                    menuElementReceipes.classList.remove("show-window");
                    menuElementReceipes.classList.add("win-none");
                    item.classList.remove("nav__button--inner-arrow-up");

                } else {
                    closeMenuBig();
                    menuElementReceipes.classList.add("show-window");
                    menuElementReceipes.classList.remove("win-none");
                    item.classList.add("nav__button--inner-arrow-up");
                    closeUlSmallArrow();
                }
            }
            if (i === 1) {
                if (menuElementThePromiseSmall2_2.classList.contains("show-window")) {
                    menuElementThePromiseSmall2_2.classList.remove("show-window");
                    menuElementThePromiseSmall2_2.classList.add("win-none");
                    item.classList.remove("nav__button--inner-arrow-up");
                } else {
                    closeMenuSmall();
                    menuElementThePromiseSmall2_2.classList.add("show-window");
                    menuElementThePromiseSmall2_2.classList.remove("win-none");
                    item.classList.add("nav__button--inner-arrow-up");
                }
            }
            if (i === 2) {
                if (menuElementThePromiseSmall2_4.classList.contains("show-window")) {
                    menuElementThePromiseSmall2_4.classList.remove("show-window");
                    menuElementThePromiseSmall2_4.classList.add("win-none");
                    item.classList.remove("nav__button--inner-arrow-up");

                } else {
                    closeMenuSmall();
                    menuElementThePromiseSmall2_4.classList.add("show-window");
                    menuElementThePromiseSmall2_4.classList.remove("win-none");
                    item.classList.add("nav__button--inner-arrow-up");
                }
            }

            if (i === 3) {
                if (menuElementThePromise.classList.contains("show-window")
                ) {
                    menuElementThePromise.classList.remove("show-window");
                    menuElementThePromise.classList.add("win-none");
                    item.classList.remove("nav__button--inner-arrow-up");
                } else {
                    closeMenuBig();
                    menuElementThePromise.classList.add("show-window");
                    menuElementThePromise.classList.remove("win-none");
                    item.classList.add("nav__button--inner-arrow-up");
                    closeUlSmallArrow();
                }
            }
        })
    })
}

// прокрутка
// const mb = document.querySelector('.main__block-title');
// mb.addEventListener('click', function () {
//     window.scrollTo(pageXOffset, menuElementThePromiseSmall2_2);
// });