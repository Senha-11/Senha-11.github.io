// Smooth scroll
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Simple animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;

    if (top > offset) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
