"use script";

class ArtworkCl {
  constructor(name, creator, ethValue, source) {
    this.name = name;
    this.creator = creator;
    this.ethValue = ethValue;
    this.source = source;
  }
}

const artwork1 = new ArtworkCl(
  "Flying Astronaut",
  "Bob Taylor",
  "9.23",
  "img/space-ga758f1522_640.jpg"
);

const artwork2 = new ArtworkCl(
  "Death Mask",
  "John Smith",
  "3.78",
  "img/art-g388e5fb4f_640.jpg"
);

const artwork3 = new ArtworkCl(
  "Pink Shirt Guy",
  "Lucy Pudding",
  "6.56",
  "img/art-ga0bb51423_640.jpg"
);

const artwork4 = new ArtworkCl(
  "Green Monster",
  "Jacky Foster",
  "15.04",
  "img/art-ga1ef76e48_640.jpg"
);

function createCard({ name, creator, ethValue, source }) {
  return `<div class="nft-card">
              <img class="nft-img" src="${source}" alt="" />
              <div class="nft-info">
                <p class="nft-name">${name}</p>
                <p class="nft-creator">By ${creator}</p>
                <div class="nft-price-box">
                  <div class="nft-price-info">
                    <p class="nft-price-description">Current price</p>
                    <p class="nft-price-ethereum">
                      <!--                      <i class="lab la-ethereum"></i>-->
                      <strong
                        ><span class="ethereum-value">${ethValue}</span> ETH
                      </strong>
                    </p>
                    <p class="nft-price-dollar">
                      ($<span class="dollar-value">0</span>)
                    </p>
                  </div>
                  <button class="btn btn-artwork">View Artwork</button>
                </div>
              </div>
           </div>`;
}

(function () {
  const gridMarket = document.querySelector(".grid-market");
  gridMarket.insertAdjacentHTML("beforeend", createCard(artwork1));
  gridMarket.insertAdjacentHTML("beforeend", createCard(artwork2));
  gridMarket.insertAdjacentHTML("beforeend", createCard(artwork3));
  gridMarket.insertAdjacentHTML("beforeend", createCard(artwork4));
})();
