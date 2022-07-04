"use strict";

import { nft1, nft2, nft3, nft4 } from "./nft-class.js";
import { createNftCard } from "./nft-card.js";
import { createNftModal } from "./nft-modal.js";
import { creator1, creator2, creator3, creator4 } from "./creator-class.js";
import { createCreatorModal, createCharts } from "./creator-modal.js";

//////////////////////////////////////////////////
// ELEMENTS
const allLinks = document.querySelectorAll("a:link");
const heroSection = document.querySelector(".hero-section");
const year = document.querySelector(".year");

const btnLogin = document.querySelector(".btn-login");
const btnSignup = document.querySelector(".btn-signup");
const btnCreator = document.querySelector(".creator-button");

const modalAuthentication = document.querySelector("#modal-authentication");
const modalClose = document.querySelector(".modal-close");

const flipCard = document.querySelector(".flip-card");

const formLogin = document.querySelector("#form-login");
const formSignup = document.querySelector("#form-signup");

// const timer = document.querySelector(".timer");
//////////////////////////////////////////////////
const nftsGrid = document.querySelector(".nfts-grid");
const creatorsGrid = document.querySelector(".creators-grid");
const nfts = [nft1, nft2, nft3, nft4];
const creators = [creator1, creator2, creator3, creator4];
let nftButtons = null;
let creatorButtons = null;
let creatorModal = null;
let nftModal = null;

let hours = 23;
let minutes = 59;
let seconds = 59;
// Automate the timer when main window loads
// window.onload = function () {
function setTimer() {
  setInterval(function () {
    // Add leading 0 for numbers smaller than 10
    if (seconds < 10 && seconds.toString().length == 1) seconds = `0${seconds}`;
    if (minutes < 10 && minutes.toString().length == 1) minutes = `0${minutes}`;
    if (hours < 10 && hours.toString().length == 1) hours = `0${hours}`;
    document.querySelector(".timer").textContent =
      hours + " : " + minutes + " : " + seconds;
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
      if (minutes < 0) {
        hours--;
        minutes = 59;
      }
      if (hours < 0) {
        hours = 23;
      }
    }
    console.log("testing1");
    // if (seconds >= 58) {
    //   timer.style.color = "#ded6d6";
    // }
    // if (seconds < 58) {
    //   timer.style.color = "red";
    // }
  }, 1000);
}

//////////////////////////////////////////////////

// SHOW MODAL WINDOW
const showModal = function (currentModal) {
  // console.log(currentModal);
  currentModal.style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
};

// SET ORIGIN OF MODAL POPUP ANIMATION
const setModalOrigin = function (currentModal, currentButton) {
  const xPosition = currentButton.offsetLeft;
  const yPosition = currentButton.offsetTop;
  currentModal.style.transformOrigin = `${xPosition}px ${yPosition}px`;
  // console.log(currentModal.style.transformOrigin);
};

// RESET FORMS WHEN CLOSING THEM
const resetForm = function () {
  document.getElementById(formLogin.id).reset();
  document.getElementById(formSignup.id).reset();
};

// ENABLE MODAL FORM INTERACTION - ARTWORK
const enableNftViewButtons = function () {
  for (let i = 0; i < nftButtons.length; i++) {
    nftButtons[i].onclick = function (event) {
      const currentButton = event.target;
      // Add HTML code for modals
      new Promise(function (resolve, reject) {
        nftsGrid.insertAdjacentHTML("beforeend", createNftModal(nfts[i]));
        console.log(1, document.querySelector(".timer"));
        resolve();
      })
        .then(() => {
          console.log(2, document.querySelector(".timer"));
          setTimer();
        })
        .then(() =>
          // Select class of recently created modal
          {
            nftModal = document.querySelector(".nft-modal");
            // Display modal
            setModalOrigin(nftModal, currentButton);
            showModal(nftModal);
            console.log("testing2");
          }
        );
    };
  }
};

// ADD ALL NFT CARDS ON MAIN PAGE
const createNftCards = function () {
  nfts.forEach((nft) =>
    nftsGrid.insertAdjacentHTML("beforeend", createNftCard(nft))
  );
  nftButtons = document.querySelectorAll(".nft-button");
  creatorButtons = document.querySelectorAll(".creator-button");
};

// CONVERT ETH TO CAD
const convertETHtoCAD = async function () {
  try {
    const fromCurrency = "ethereum";
    const toCurrency = "cad";
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`;
    const response = await fetch(url);
    const json = await response.json();
    return await json[fromCurrency][toCurrency];
  } catch (err) {
    console.error(`${err}`);
  }
};

// MAIN CODE
convertETHtoCAD()
  .then((oneETHprice) => {
    const numberFormatter = Intl.NumberFormat("en-US");
    nfts.forEach(function (nft) {
      const dollarValue = (oneETHprice * nft.ethereum).toFixed(2);
      nft.dollar = numberFormatter.format(dollarValue);
    });
  })
  .then(() => {
    createNftCards();
    enableNftViewButtons();
  });

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

// Used as an alternative to includes() for modal objects
// const isInArray = function (arr, target) {
//   let found = false;
//   arr.forEach((item) => {
//     if (item === target) found = true;
//   });
//   return found;
// };

// Close modal when the user clicks outside of it
window.onclick = function (event) {
  const currentModal = event.target;
  if (currentModal === modalAuthentication) {
    resetForm();
    currentModal.style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
  }
  // nftModals.includes(currentModal) || // Does not work
  // if (isInArray(nftModals, currentModal)) {
  if (currentModal === nftModal) {
    nftModal.remove();
    document.querySelector("body").style.overflowY = "scroll";
    // flipCard.classList.remove("is-flipped");
  }
  if (currentModal === creatorModal) {
    creatorModal.remove();
    document.querySelector("body").style.overflowY = "scroll";
    // flipCard.classList.remove("is-flipped");
  }
};

// When the user clicks on X, close the modal
document.body.onclick = function (event) {
  if (event.target.getAttribute("name") === "close-outline") {
    if (event.target.parentNode.parentNode === modalAuthentication) {
      resetForm();
      modalAuthentication.style.display = "none";
      document.querySelector("body").style.overflowY = "scroll";
    }
    if (
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode ===
      nftModal
    ) {
      nftModal.remove();
      document.querySelector("body").style.overflowY = "scroll";
      // flipCard.classList.remove("is-flipped");
    }
    if (event.target.parentNode.parentNode === creatorModal) {
      creatorModal.remove();
      document.querySelector("body").style.overflowY = "scroll";
      // flipCard.classList.remove("is-flipped");
    }

    // OLD strategy of having all html code for modals at the same tim
    // NEW strategy is to add html when needed and remove it otherwise
    // nftModals.forEach((nftModal) => (nftModal.style.display = "none"));
    // creatorModals.forEach(
    //   (creatorModal) => (creatorModal.style.display = "none")
    // );
    // document.querySelector("body").style.overflowY = "scroll";
    // flipCard.classList.remove("is-flipped");
  }
};

//////////////////////////////////////////////////

// ENABLE MODAL FORM INTERACTION - LOGIN
btnLogin.onclick = function (event) {
  document.querySelector("#chk").checked = true;
  const currentButton = event.target;
  setModalOrigin(modalAuthentication, currentButton);
  showModal(modalAuthentication);
};

// ENABLE MODAL FORM INTERACTION - SIGN UP
btnSignup.onclick = function (event) {
  document.querySelector("#chk").checked = false;
  const currentButton = event.target;
  setModalOrigin(modalAuthentication, currentButton);
  showModal(modalAuthentication);
};

//////////////////////////////////////////////////

// ENABLE MODAL FORM INTERACTION - CREATOR
console.log(creatorButtons[0]);
for (let i = 0; i < creatorButtons.length; i++) {
  creatorButtons[i].onclick = function (event) {
    const currentButton = event.target;
    // Add HTML code for modals
    creatorsGrid.insertAdjacentHTML(
      "beforeend",
      createCreatorModal(creators[i])
    );
    createCharts(creators[i]);
    // Select class of recently created modal
    creatorModal = document.querySelector(".creator-modal");
    // Display modal
    setModalOrigin(creatorModal, currentButton);
    showModal(creatorModal);
  };
}

// modalArtwork.onclick = function () {
//   flipCard.classList.toggle("is-flipped");
// };

/////////////////////////////////////////////////////////////

//Get the button:
const linkToTop = document.querySelector(".link-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    linkToTop.style.display = "block";
  } else {
    linkToTop.style.display = "none";
  }
};
