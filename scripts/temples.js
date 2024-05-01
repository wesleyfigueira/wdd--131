function showMenu() {
    let menuMobile = document.querySelector(".nav-list");

    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector('.icon').src = "images/close_white_36dp.svg";
    }
}
