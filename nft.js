"use script";

class NftClass {
  constructor(name, creator, ethValue, nftImg) {
    this.name = name;
    this.creator = creator;
    this.ethValue = ethValue;
    this.nftImg = nftImg;
  }
}

const nft1 = new NftClass(
  "Flying Astronaut",
  "Bob Taylor",
  "9.23",
  "img/space-ga758f1522_640.jpg"
);

const nft2 = new NftClass(
  "Death Mask",
  "John Smith",
  "3.78",
  "img/art-g388e5fb4f_640.jpg"
);

const nft3 = new NftClass(
  "Pink Shirt Guy",
  "Lucy Pudding",
  "6.56",
  "img/art-ga0bb51423_640.jpg"
);

const nft4 = new NftClass(
  "Green Monster",
  "Jacky Foster",
  "15.04",
  "img/art-ga1ef76e48_640.jpg"
);

function createCard({ name, creator, ethValue, nftImg }) {
  return `<div class="nft-card">
              <img class="nft-img" src="${nftImg}" alt="" />
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
                  <button class="btn btn-nft">View NFT</button>
                </div>
              </div>
           </div>`;
}

(function () {
  const gridMarket = document.querySelector(".nfts-grid");
  gridMarket.insertAdjacentHTML("beforeend", createCard(nft1));
  gridMarket.insertAdjacentHTML("beforeend", createCard(nft2));
  gridMarket.insertAdjacentHTML("beforeend", createCard(nft3));
  gridMarket.insertAdjacentHTML("beforeend", createCard(nft4));
})();
