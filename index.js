"use strict";

//////////////////////////////////////////////////
// ELEMENTS
const allLinks = document.querySelectorAll("a:link");
const heroSectionEl = document.querySelector(".hero-section");
const yearEl = document.querySelector(".year");

const loginEl = document.querySelector(".login-btn");
const signUpEl = document.querySelector(".sign-up-btn");
const modalEl = document.querySelector(".modal-container");
const modalCloseEl = document.querySelector(".modal-close");

//////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//////////////////////////////////////////////////
// STICKY NAVIGATION
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(entries);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100%",
  }
);
obs.observe(heroSectionEl);

//////////////////////////////////////////////////
// SET CURRENT YEAR
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear.toString();

//////////////////////////////////////////////////
// ENABLE MODAL FORM INTERACTION

// When the user clicks on the LOGIN button, open the modal
loginEl.onclick = function () {
  modalEl.style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("#chk").checked = true;
  // transition: 0.5s ease-in-out
};

// When the user clicks on the SIGN UP button, open the modal
signUpEl.onclick = function () {
  modalEl.style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("#chk").checked = false;
};

// When the user clicks on <span> (x), close the modal
modalCloseEl.onclick = function () {
  modalEl.style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalEl) {
    modalEl.style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
  }
};
