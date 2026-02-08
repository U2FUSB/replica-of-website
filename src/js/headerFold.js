const header = document.querySelector("header");
const threshold = 10; // px at which the fold starts

const handleScroll = () => {
    const isScrolled = window.scrollY > threshold;
    header.dataset.scrolled = isScrolled;
    console.log(isScrolled ? "isScrolled" : "notScrolled");
};

// Use passive listener for better scroll performance
window.addEventListener("scroll", handleScroll, { passive: true });

// Initial check in case the page is refreshed while scrolled
handleScroll();
