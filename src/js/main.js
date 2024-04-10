// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,
  speed: 1500,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// ACCORDION
document.querySelectorAll("#accordion-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const contentAttr = btn
      .closest(".faq-accordion")
      .querySelector(".accordion-content")
      .getAttribute("data-active");
    const content = btn
      .closest(".faq-accordion")
      .querySelector(".accordion-content");
    const btnIcon = btn.querySelector("#accordion-icon");
    if (contentAttr === "false") {
      content.setAttribute("data-active", "true");
      btnIcon.style = `
          rotate: 45deg;
        `;
    } else {
      content.setAttribute("data-active", "false");
      btnIcon.style = `
        rotate: 0;
      `;
    }
  });
});

// HEADER MENU

const ham = document.querySelector(".ham");
const headerNav = document.querySelector(".nav");
ham.addEventListener("click", (e) => {
  if (ham.getAttribute("data-active") === "false") {
    ham.setAttribute("data-active", "true");
    nav.setAttribute("aria-expanded", "true");
  } else {
    ham.setAttribute("data-active", "false");
    nav.setAttribute("aria-expanded", "false");
  }
});

// HEADER HIDE ON SCROLL

////////// HEADER ON SCROLL

const isScrolling = () => {
  const headerElement = document.querySelector(".header");
  let windowPosition = window.scrollY > 150;
  headerElement.classList.toggle("active", windowPosition);
};

window.addEventListener("scroll", isScrolling);

/////////// HIDE HEADER ON SCROLL

let lastScrollTop = 0;
let navbar = document.querySelector(".header");
let navbarHeight = document.querySelector(".header").scrollHeight;
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    navbar.style = `
      background-color: var(--black);
    `;
  } else {
    navbar.style = `
    background-color: none;
  `;
  }
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
