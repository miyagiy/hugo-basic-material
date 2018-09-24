var lastScrollY = 0;

function init() {
    window.addEventListener("scroll", onScroll);

    getElement(document, "menu-icon").addEventListener("click", openMenu);
    getElement(document, "overlay").addEventListener("click", closeMenu);
    Array.from(
        document.querySelectorAll(".overlay-toc ul li a"),
        e => e.addEventListener("click", closeMenu)
    )
}

function getElement(element, className) {
    return element.getElementsByClassName(className)[0];
}

function onScroll() {
    const y = window.scrollY;

    transitionHeader(y, lastScrollY);

    lastScrollY = window.scrollY;
}

function transitionHeader(y, lastScrollY) {
    const shownClassName = "site-header-shown";
    const hiddenClassName = "site-header-hidden";
    const siteHeader = getElement(document, "site-header");
    const diffY = y - lastScrollY;

    if (-10 > diffY) { // up
        if (!siteHeader.classList.contains(shownClassName)) {
            siteHeader.classList.replace(hiddenClassName, shownClassName);
        }
    } else if (diffY > 10) { // down
        if (!siteHeader.classList.contains(hiddenClassName)) {
            siteHeader.classList.replace(shownClassName, hiddenClassName);
        }
    }
}

function openMenu() {
    const overlay = getElement(document, "overlay");
    const overlaySection = getElement(document, "overlay-section");
    overlay.classList.replace("overlay-hidden", "overlay-shown");
    overlaySection.classList.replace("overlay-section-hidden", "overlay-section-shown");
}

function closeMenu() {
    const overlay = getElement(document, "overlay");
    const overlaySection = getElement(document, "overlay-section");
    overlay.classList.replace("overlay-shown", "overlay-hidden");
    overlaySection.classList.replace("overlay-section-shown", "overlay-section-hidden");
}

init();