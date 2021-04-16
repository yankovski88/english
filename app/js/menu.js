(
    function () {


        var navElement2 = document.querySelector(".nav__item--element-2");
        var menuElement2 = document.querySelector(".nav__element-2-inner");
        var idNavElement2 = document.getElementById("idNavElement2")
        idNavElement2.addEventListener("mouseover", function (event) {
            if (document.documentElement.clientWidth > 1440) {
                menuElement2.classList.add("show-window");
            }
        });
        idNavElement2.addEventListener("mouseout", function (event) {
            if (document.documentElement.clientWidth > 1440) {
                menuElement2.classList.remove("show-window");
            }
        });

        var navButtonInner2 = document.querySelector(".nav__button--inner-2");
        navButtonInner2.addEventListener("click", function (evt) {
            if (menuElement2.classList.contains("show-window")) {
                menuElement2.classList.remove("show-window");
            } else {
                menuElement2.classList.add("show-window");
            }

            if (menuElement4.classList.contains("show-window")) {
                menuElement4.classList.remove("show-window");
                navButtonInner4ArrowUp.classList.toggle("nav__button--inner-arrow-up");
            }
            navButtonInner2.classList.toggle("nav__button--inner-arrow-up");
        });


        var navElement4 = document.querySelector(".nav__item--element-4");
        var menuElement4 = document.querySelector(".nav__element-4-inner");
        var idPicContainer4 = document.getElementById("idPicContainer4");
        var navButtonInner4ArrowUp = document.querySelector(".nav__button--inner-4");

        idPicContainer4.addEventListener('mouseover', function (event) {
            if (document.documentElement.clientWidth > 1440) {
                menuElement4.classList.add("show-window");
            }
        });

        idPicContainer4.addEventListener('mouseout', function () {
            if (document.documentElement.clientWidth > 1440) {
                menuElement4.classList.remove("show-window");
            }
        });


        navButtonInner4ArrowUp.addEventListener("click", function (evt) {
            if (menuElement4.classList.contains("show-window")) {
                menuElement4.classList.remove("show-window");
            } else {
                menuElement4.classList.add("show-window");
            }
            if (menuElement2.classList.contains("show-window")) {
                menuElement2.classList.remove("show-window");
                navButtonInner2.classList.toggle("nav__button--inner-arrow-up")
            }
            navButtonInner4ArrowUp.classList.toggle("nav__button--inner-arrow-up");
        });


        var menuButtonClose = document.querySelector(".nav__menu-button");
        var navListNavigation = document.querySelector(".nav__list-navigation");
        menuButtonClose.addEventListener("click", function (evt) {
            if (navListNavigation.classList.contains("show-window")) {
                navListNavigation.classList.remove("show-window");
                menuButtonClose.classList.remove("nav__menu-button--close");
            } else {
                navListNavigation.classList.add("show-window");
                menuButtonClose.classList.add("nav__menu-button--close");
            }
        });

        var navButtonInner22 = document.querySelector(".nav__button--inner-2-2");
        navButtonInner22.addEventListener("click", function (evt) {
            navButtonInner22.classList.toggle("nav__button--inner-arrow-up")
        });

        var navButtonInner24 = document.querySelector(".nav__button--inner-2-4")
        navButtonInner24.addEventListener("click", function (evt) {
            navButtonInner24.classList.toggle("nav__button--inner-arrow-up")
        });
    }
)();
