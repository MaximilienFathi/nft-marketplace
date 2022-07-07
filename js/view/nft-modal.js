// "use script";

// Create a modal window when clicking on "view NFT"
export function createNftModal({
  image,
  name,
  creator,
  ethereum,
  dollar,
  views,
  favorites,
  description,
}) {
  return `
<!--    <div id="nft-modal" class="modal-container">-->
    <div class="data-modal modal-container">
      <div class="flip-container">
        <div class="flip-card">
          <div class="nft-modal-content border-glow">
            <div>
                <img
                  class="modal-nft-img"
                  src="${image}"
                  alt=""
                />
            </div>
            <div>
                <ion-icon class="modal-close" name="close-outline"></ion-icon>
                <div class="modal-nft-info">
                  <p class="modal-nft-name">${name}</p>
                  <p class="modal-nft-creator">
                    By <a class="modal-creator-link">${creator}</a>
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
                        ($<span class="dollar-value">${dollar}</span>)
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
    </div>
  </div>`;
}
