// Store scroll position in session storage
window.addEventListener("scroll", function () {
  sessionStorage.setItem("scrollPosition", window.scrollY);
});

// Retrieve scroll position when the page loads and set it
window.addEventListener("load", function () {
  const scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition));
  }
});
