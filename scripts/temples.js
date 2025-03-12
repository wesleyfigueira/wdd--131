
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




// Get the current year for copyright
const currentYear = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {

    // Output the last modified date
    const lastModifiedParagraph = document.querySelector('footer p:nth-child(2)');
    lastModifiedParagraph.textContent = `Last modified: ${document.lastModified} © ${currentYear}`;
});