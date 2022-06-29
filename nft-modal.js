// "use script";

import { nft1, nft2, nft3, nft4 } from "./nft-class.js";

// Automate the timer when main window loads
window.onload = function () {
  let hours = 10; // 23
  let minutes = 10; // 59
  let seconds = 15; //59
  const timers = document.querySelectorAll(".timer");
  setInterval(function () {
    timers.forEach((timer) => {
      // Add leading 0 for numbers smaller than 10
      if (seconds < 10 && seconds.toString().length == 1)
        seconds = `0${seconds}`;
      if (minutes < 10 && minutes.toString().length == 1)
        minutes = `0${minutes}`;
      if (hours < 10 && hours.toString().length == 1) hours = `0${hours}`;
      timer.textContent = hours + " : " + minutes + " : " + seconds;
    });
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

// Create a modal window when clicking on "view NFT"
function createModal({
  image,
  name,
  creator,
  ethereum,
  views,
  favorites,
  description,
}) {
  return `
<!--    <div id="nft-modal" class="modal-container">-->
    <div class="nft-modal modal-container">
      <div class="flip-container">
        <div class="flip-card">
          <div class="artwork-modal-content border-glow">
            <ion-icon
              class="modal-close"
              name="close-outline"
            ></ion-icon>
            <img
              class="modal-nft-img"
              src="${image}"
              alt=""
            />
            <div class="modal-nft-info">
              <p class="modal-nft-name">${name}</p>
              <p class="modal-nft-creator">
                By <a class="modal-creator-link" href="">${creator}</a>
              </p>
              <div class="nft-description">
                <p class="nft-description-label">Description</p>
                <p class="nft-description-text">${description}</p>
              </div>
              <hr />
              <div class="grid grid-2-cols-2-rows modal-nft-sale">
                <p class="nft-prices-label">Current price</p>
                <div class="nft-prices">
                  <p class="nft-modal-price-ethereum">
                    <!--                      <i class="lab la-ethereum"></i>-->
                    <strong
                      ><span class="ethereum-value">${ethereum}</span>
                      ETH
                    </strong>
                  </p>
                  <p class="nft-modal-price-dollar">
                    ($<span class="dollar-value">0</span>)
                  </p>
                </div>
                <div class="modal-nft-time">
                  <ion-icon
                    class="modal-nft-icon"
                    name="time"
                  ></ion-icon>
                  <p>Sale ends in <span class="timer"></span></p>
                </div>
              </div>
              <div class="modal-btn-box">
                <button class="btn btn-full btn-buy">Buy Now</button>
                <button class="btn btn-outline btn-favorites">
                  Add to favorites
                </button>
              </div>
              <hr />
              <div class="modal-nft-stats">
                <div class="modal-nft-stat">
                  <ion-icon
                    class="modal-nft-icon"
                    name="eye"
                  ></ion-icon>
                  <p>${views} views</p>
                </div>
                <div class="modal-nft-stat">
                  <ion-icon
                    class="modal-nft-icon"
                    name="heart"
                  ></ion-icon>
                  <p>${favorites} favorites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

(function () {
  const flipCard = document.querySelector(".nfts-grid");
  flipCard.insertAdjacentHTML("beforeend", createModal(nft1));
  flipCard.insertAdjacentHTML("beforeend", createModal(nft2));
  flipCard.insertAdjacentHTML("beforeend", createModal(nft3));
  flipCard.insertAdjacentHTML("beforeend", createModal(nft4));
})();
