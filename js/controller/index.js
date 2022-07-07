"use strict";

import { nft1, nft2, nft3, nft4 } from "../model/nft-class.js";
import { createNftCard } from "../view/nft-card.js";
import { createNftModal } from "../view/nft-modal.js";
import {
  creator1,
  creator2,
  creator3,
  creator4,
} from "../model/creator-class.js";
import { createCreatorCard } from "../view/creator-card.js";
import { createCreatorModal, createCharts } from "../view/creator-modal.js";

//////////////////////////////////////////////////
// ELEMENTS
const body = document.querySelector("body");

const allLinks = document.querySelectorAll("a:link");
const heroSection = document.querySelector(".hero-section");
const year = document.querySelector(".year");

const btnLogin = document.querySelector(".btn-login");
const btnSignup = document.querySelector(".btn-signup");
const btnCreator = document.querySelector(".creator-button");

const modalAuthentication = document.querySelector("#modal-authentication");
const modalClose = document.querySelector(".modal-close");

const formLogin = document.querySelector("#form-login");
const formSignup = document.querySelector("#form-signup");

const linkToTop = document.querySelector(".link-to-top");

//////////////////////////////////////////////////
const nftsGrid = document.querySelector(".nfts-grid");
const creatorsGrid = document.querySelector(".creators-grid");
const nfts = [nft1, nft2, nft3, nft4];
const creators = [creator1, creator2, creator3, creator4];
let nftButtons = null;
let creatorButtons = null;
let dataModal = null;
let hours = 23;
let minutes = 59;
let seconds = 59;

//////////////////////////////////////////////////

// 1. AUTOMATE TIMER IMMEDIATELY WHEN MAIN WINDOW LOADS
window.onload = function () {
  setInterval(function () {
    let timer = document.querySelector(".timer");
    // Add leading 0 for numbers smaller than 10
    if (seconds < 10 && seconds.toString().length == 1) seconds = `0${seconds}`;
    if (minutes < 10 && minutes.toString().length == 1) minutes = `0${minutes}`;
    if (hours < 10 && hours.toString().length == 1) hours = `0${hours}`;
    // Update timer when modal HTML is loaded
    if (timer !== null)
      timer.textContent = hours + " : " + minutes + " : " + seconds;
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
    // if (seconds >= 58) {
    //   timer.style.color = "#ded6d6";
    // }
    // if (seconds < 58) {
    //   timer.style.color = "red";
    // }
  }, 1000);
};

//////////////////////////////////////////////////

// 2. CLOSE MODAL WHEN USER CLICKS OUTSIDE OF IT
window.onclick = function (event) {
  const currentModal = event.target;
  if (currentModal === modalAuthentication) {
    resetForm();
    currentModal.style.display = "none";
    body.style.overflowY = "scroll";
  }
  // nftModals.includes(currentModal) || // Does not work
  // if (isInArray(nftModals, currentModal)) {
  if (currentModal === dataModal) {
    currentModal.remove();
    body.style.overflowY = "scroll";
    // flipCard.classList.remove("is-flipped");
  }
};

// 3. WHEN USER CLICKS ON X, CLOSE THE MODAL
document.body.onclick = function (event) {
  const currentButton = event.target;
  if (currentButton.getAttribute("name") === "close-outline") {
    if (currentButton.parentNode.parentNode === modalAuthentication) {
      resetForm();
      modalAuthentication.style.display = "none";
      body.style.overflowY = "scroll";
    }
    if (currentButton.closest(".data-modal")) {
      dataModal.remove();
      body.style.overflowY = "scroll";
      // flipCard.classList.remove("is-flipped");
    }

    // OLD strategy of having all html code for modals at the same time
    // NEW strategy is to add html when needed and remove it otherwise
    // nftModals.forEach((nftModal) => (nftModal.style.display = "none"));
    // creatorModals.forEach(
    //   (creatorModal) => (creatorModal.style.display = "none")
    // );
    //body.style.overflowY = "scroll";
    // flipCard.classList.remove("is-flipped");
  }
};

// Used as an alternative to includes() for modal objects
// const isInArray = function (arr, target) {
//   let found = false;
//   arr.forEach((item) => {
//     if (item === target) found = true;
//   });
//   return found;
// };

//////////////////////////////////////////////////

// 4. ENABLE FLIP FUNCTIONALITY
const enableFlip = function (currentNFT) {
  const flipCard = document.querySelector(".flip-card");
  const nftModalContent = document.querySelector(".nft-modal-content");
  const currentCreator = creators.find((creator) => {
    return creator.name === currentNFT.creator;
  });
  // Insert HTML code
  flipCard.insertAdjacentHTML("beforeend", createCreatorModal(currentCreator));
  createCharts(currentCreator);
  // Remove unnecessary parent element card content
  const parent = flipCard.lastElementChild;
  parent.replaceWith(...parent.childNodes);
  // Add CSS style to enable flip
  const modalCreatorContent = document.querySelector(".modal-creator-content");
  modalCreatorContent.style.transform = "rotateY(180deg)";
  // Enable flip effect
  const modalCreatorLink = document.querySelector(".modal-creator-link");
  modalCreatorLink.onclick = function () {
    flipCard.classList.toggle("is-flipped");
  };
  modalCreatorContent.onclick = function () {
    flipCard.classList.toggle("is-flipped");
  };
};

// 5. SHOW MODAL WINDOW
const showModal = function (currentType, currentModal, currentNFT) {
  currentModal.style.display = "flex";
  body.style.overflow = "hidden";
  if (currentType === "NFT") enableFlip(currentNFT);
};

// 6. SET ORIGIN OF MODAL POPUP ANIMATION
const setModalOrigin = function (currentModal, currentButton) {
  const xPosition = currentButton.offsetLeft;
  const yPosition = currentButton.offsetTop;
  currentModal.style.transformOrigin = `${xPosition}px ${yPosition}px`;
  // console.log(currentModal.style.transformOrigin);
};

// 7. RESET FORMS WHEN CLOSING THEM
const resetForm = function () {
  document.getElementById(formLogin.id).reset();
  document.getElementById(formSignup.id).reset();
};

// 8. ENABLE MODAL FORM INTERACTION
const enableViewButtons = function (
  type,
  buttons,
  objectsArray,
  place,
  createModal
) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (event) {
      const currentButton = event.target;
      // Add HTML code for modals - synchronous code
      place.insertAdjacentHTML("beforeend", createModal(objectsArray[i]));
      // Specify from where modal should appear
      dataModal = document.querySelector(".data-modal");
      setModalOrigin(dataModal, currentButton);
      // Add specific HTML code based on type of current modal
      if (type === "NFT") {
        document.querySelector(".timer").textContent =
          hours + " : " + minutes + " : " + seconds;
        showModal(type, dataModal, objectsArray[i]);
      }
      if (type === "CREATOR") {
        createCharts(objectsArray[i]);
        showModal(type, dataModal);
      }
    };
  }
};

// 9. ADD CARDS ON MAIN PAGE (2 TYPES: NFT AND CREATOR)
const createCards = function (objectsArray, place, createCard) {
  objectsArray.forEach((item) =>
    place.insertAdjacentHTML("beforeend", createCard(item))
  );
};

// 10. CONVERT ETH TO CAD
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

// 11. MAIN CODE
convertETHtoCAD()
  .then((oneETHprice) => {
    const numberFormatter = Intl.NumberFormat("en-US");
    nfts.forEach(function (nft) {
      const dollarValue = (oneETHprice * nft.ethereum).toFixed(2);
      nft.dollar = numberFormatter.format(dollarValue);
    });
  })
  .then(() => {
    createCards(nfts, nftsGrid, createNftCard);
    nftButtons = document.querySelectorAll(".nft-button");
    enableViewButtons("NFT", nftButtons, nfts, nftsGrid, createNftModal);
    createCards(creators, creatorsGrid, createCreatorCard);
    creatorButtons = document.querySelectorAll(".creator-button");
    enableViewButtons(
      "CREATOR",
      creatorButtons,
      creators,
      creatorsGrid,
      createCreatorModal
    );
  });

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////

// When user scrolls down 500px from the top of the document, show the button
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

//////////////////////////////////////////////////
// SET CURRENT YEAR
const currentYear = new Date().getFullYear();
year.textContent = currentYear.toString();
