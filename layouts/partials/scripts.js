window.addEventListener("scroll", onScroll);


var lastScrollY = 0;

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

    if (0 > diffY) { // up
        if (!siteHeader.classList.contains(shownClassName)) {
            siteHeader.classList.replace(hiddenClassName, shownClassName);
        }
    } else if (diffY > 0) { // down
        if (!siteHeader.classList.contains(hiddenClassName)) {
            siteHeader.classList.replace(shownClassName, hiddenClassName);
        }
    }
}
