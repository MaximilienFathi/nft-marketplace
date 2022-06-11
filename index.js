"use strict";

//////////////////////////////////////////////////
// ELEMENTS
const allLinks = document.querySelectorAll("a:link");
const heroSection = document.querySelector(".hero-section");
const year = document.querySelector(".year");
const timer = document.querySelector(".timer");

const btnLogin = document.querySelector(".btn-login");
const btnSignup = document.querySelector(".btn-signup");
const btnArtwork = document.querySelector(".btn-artwork");
const btnCreator = document.querySelector(".btn-creator");

const modalAuthentication = document.querySelector("#modal-authentication");
const modalArtwork = document.querySelector("#modal-artwork");
// const modalClose = document.querySelector(".modal-close");

const formLogin = document.querySelector("#form-login");
const formSignup = document.querySelector("#form-signup");

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
    // console.log(entries);

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
obs.observe(heroSection);

//////////////////////////////////////////////////
// SET CURRENT YEAR
const currentYear = new Date().getFullYear();
year.textContent = currentYear.toString();

//////////////////////////////////////////////////
// COMMON METHODS FOR ALL MODALS

// Reset forms when closing them
const resetForm = function () {
  document.getElementById(formLogin.id).reset();
  document.getElementById(formSignup.id).reset();
};

// Set origin of modal popup animation
const setModalOrigin = function (currentModal, currentButton) {
  const xPosition = currentButton.offsetLeft;
  const yPosition = currentButton.offsetTop;
  currentModal.style.transformOrigin = `${xPosition}px ${yPosition}px`;
  console.log(currentModal.style.transformOrigin);
};

// Show modal window
const showModal = function (currentModal) {
  console.log(currentModal);
  currentModal.style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
};

// Close modal when the user clicks outside of it
window.onclick = function (event) {
  const currentModal = event.target;
  console.log("TEST", currentModal);
  if (currentModal === modalAuthentication || currentModal === modalArtwork) {
    resetForm();
    currentModal.style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
  }
};

//////////////////////////////////////////////////
// ENABLE MODAL FORM INTERACTION - LOGIN/SIGN UP

// When the user clicks on the LOGIN button, open the modal
btnLogin.onclick = function (event) {
  document.querySelector("#chk").checked = true;
  const currentButton = event.target;
  setModalOrigin(modalAuthentication, currentButton);
  showModal(modalAuthentication);
};

// When the user clicks on the SIGN UP button, open the modal
btnSignup.onclick = function (event) {
  document.querySelector("#chk").checked = false;
  const currentButton = event.target;
  setModalOrigin(modalAuthentication, currentButton);
  showModal(modalAuthentication);
};

// When the user clicks on <span> (x), close the modal
// modalClose.onclick = function () {
//   resetForm();
//   modalAuthentication.style.display = "none";
//   document.querySelector("body").style.overflowY = "scroll";
// };

//////////////////////////////////////////////////
// ENABLE MODAL FORM INTERACTION - VIEW ARTWORK

btnArtwork.onclick = function (event) {
  const currentButton = event.target;
  setModalOrigin(modalArtwork, currentButton);
  showModal(modalArtwork);
};

window.onload = function () {
  let hours = 24;
  let minutes = 60;
  let seconds = 60;
  setInterval(function () {
    timer.textContent = hours + " : " + minutes + " : " + seconds;
    seconds--;
    if (seconds === 0) {
      minutes--;
      seconds = 60;
      if (minutes === 0) {
        hours--;
        minutes = 60;
      }
      if (hours === 0) {
        hours = 24;
      }
    }
    if (seconds >= 58) {
      timer.style.color = "#ded6d6";
    }
    if (seconds < 58) {
      timer.style.color = "red";
    }
  }, 1000);
};
