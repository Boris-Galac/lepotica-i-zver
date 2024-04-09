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
