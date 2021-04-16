(
    function () {
        const navMenu = document.querySelectorAll(".nav-menu");
        const menuElementUl = document.querySelectorAll(".ulbig");
        const menuElementUlSmall = document.querySelectorAll(".ulsmall");

        if (document.documentElement.clientWidth > 1440) {

            navMenu.forEach((item, i) => {
                if (i === 0) {
                    item.addEventListener("mouseover", function (event) {
                        menuElementUl.forEach((item, i) => {
                            if (i === 0) {
                                item.classList.add("show-window");
                                item.classList.remove("win-none");
                            }
                        });
                        menuElementUlSmall.forEach(item => {
                            item.classList.add("show-window");
                            item.classList.remove("win-none");
                        })
                    });
                    item.addEventListener("mouseout", function (event) {
                        menuElementUl.forEach((item, i) => {
                            item.classList.remove("show-window");
                            item.classList.add("win-none");

                        });
                        menuElementUlSmall.forEach(item => {
                            item.classList.remove("show-window");
                            item.classList.add("win-none");
                        })
                    });
                }

                if (i === 1) {
                    item.addEventListener("mouseover", function (event) {
                        menuElementUl.forEach((item, i) => {
                            if (i === 1) {
                                item.classList.add("show-window");
                                item.classList.remove("win-none");
                            }
                        });
                        menuElementUlSmall.forEach(item => {
                            item.classList.add("show-window");
                            item.classList.remove("win-none");
                        })
                    });
                    item.addEventListener("mouseout", function (event) {
                        menuElementUl.forEach((item, i) => {
                            item.classList.remove("show-window");
                            item.classList.add("win-none");

                        });
                        menuElementUlSmall.forEach(item => {
                            item.classList.remove("show-window");
                            item.classList.add("win-none");
                        })
                    });
                }
            });
        }
    }
)();
