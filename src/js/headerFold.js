const header = document.querySelector("header");
const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 80) {
        header.dataset.scrolled = "true";
    } else if (currentScrollY < 10) {
        header.dataset.scrolled = "false";
    }
};
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();
