let menu = document.querySelector("#menu");
let navlist = document.querySelector(".navlist");
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
});

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
});

// const sr = ScrollReveal({
//   distance: "50px",
//   duration: 2000,
//   reset: false,
// });

// sr.reveal(".main-text", { delay: 200, origin: "bottom" });
// sr.reveal(".background", { delay: 200, origin: "top" });
// sr.reveal(".uparrow", { delay: 200, origin: "bottom" });
// sr.reveal(".image", { delay: 200, origin: "bottom" });
// sr.reveal(".about-text", { delay: 200, origin: "top" });
// sr.reveal(".service", { delay: 200, origin: "bottom" });
// sr.reveal(".portfolio", { delay: 200, origin: "top" });
// sr.reveal(".contact-text", { delay: 200, origin: "top" });
// sr.reveal(".contact-form", { delay: 200, origin: "bottom" });
