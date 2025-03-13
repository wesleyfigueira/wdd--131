
function toggleMenu() {
    let menuMobile = document.querySelector(".nav-list");
    let menuIcon = document.querySelector(".menu-icon");

    menuMobile.classList.toggle("open");

    if (menuMobile.classList.contains("open")) {
        menuIcon.src = "images/close_white_36dp.svg";
    } else {
        menuIcon.src = "images/menu_white_36dp.svg";
    }
}




// Get the current year for copyright
const currentYear = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {

    // Output the last modified date
    const lastModifiedParagraph = document.querySelector('footer p:nth-child(2)');
    lastModifiedParagraph.textContent = `Last modified: ${document.lastModified} © ${currentYear}`;
});