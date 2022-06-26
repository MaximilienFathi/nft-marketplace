"use script";

/*
1) src="img/space-ga758f1522_640.jpg"
2) <p class="modal-nft-name">Flying Astronaut</p>
3) By <a class="modal-creator-link" href="">Bob Taylor</a>
4) <p class="nft-description-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Amet ducimus illo magnam odio recusandae,
                  voluptatum? Aperiam ea excepturi harum id inventore
                  minima officia provident sit sunt! Adipisci eius
                  maiores nostrum!
                </p>
5) ><span class="ethereum-value">9.23</span>
6) <p>15 views</p>
7) <p>59 favorites</p>
 */

function createModal() {
  return `<div class="artwork-modal-content border-glow">
            <ion-icon
              class="modal-close"
              name="close-outline"
            ></ion-icon>
            <img
              class="modal-nft-img"
              src="img/space-ga758f1522_640.jpg"
              alt=""
            />
            <div class="modal-nft-info">
              <p class="modal-nft-name">Flying Astronaut</p>
              <p class="modal-nft-creator">
                By <a class="modal-creator-link" href="">Bob Taylor</a>
              </p>
              <div class="nft-description">
                <p class="nft-description-label">Description</p>
                <p class="nft-description-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Amet ducimus illo magnam odio recusandae,
                  voluptatum? Aperiam ea excepturi harum id inventore
                  minima officia provident sit sunt! Adipisci eius
                  maiores nostrum!
                </p>
              </div>
              <hr />
              <div class="grid grid-2-cols-2-rows modal-nft-sale">
                <p class="nft-prices-label">Current price</p>
                <div class="nft-prices">
                  <p class="nft-modal-price-ethereum">
                    <!--                      <i class="lab la-ethereum"></i>-->
                    <strong
                      ><span class="ethereum-value">9.23</span>
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
                  <p>15 views</p>
                </div>
                <div class="modal-nft-stat">
                  <ion-icon
                    class="modal-nft-icon"
                    name="heart"
                  ></ion-icon>
                  <p>59 favorites</p>
                </div>
              </div>
            </div>
          </div>`;
}

(function () {
  const flipCard = document.querySelector(".flip-card");
  flipCard.insertAdjacentHTML("beforeend", createModal(nft1));
  flipCard.insertAdjacentHTML("beforeend", createModal(nft2));
  flipCard.insertAdjacentHTML("beforeend", createModal(nft3));
  flipCard.insertAdjacentHTML("beforeend", createModal(nft4));
})();
