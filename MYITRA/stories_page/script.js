document.addEventListener("DOMContentLoaded", () => {
  const links = {
    "home-link": "../Home page/index.html",
    "aboutus-link": "../About us page/index.html",
    "whychooseus-link": "../Why choose us page/index.html",
    "footer-logo": "../Home page/index.html",
    "fhome-link": "../Home page/index.html",
  };

  Object.entries(links).forEach(([id, page]) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", () => {
        window.location.href = page;
      });
    }
  });
});