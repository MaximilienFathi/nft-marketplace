// "use script";

import { nft1, nft2, nft3, nft4 } from "./nft-class.js";

function createCard({ image, name, creator, ethereum }) {
  return `<div class="nft-card">
             <img class="nft-img" src="${image}" alt="" />
             <div class="nft-info">
               <p class="nft-name">${name}</p>
               <p class="nft-creator">By ${creator}</p>
               <div class="nft-price-box">
                 <div class="nft-price-info">
                   <p class="nft-price-description">Current price</p>
                   <p class="nft-price-ethereum">
                     <!--                      <i class="lab la-ethereum"></i>-->
                     <strong
                       ><span class="ethereum-value">${ethereum}</span> ETH
                     </strong>
                   </p>
                   <p class="nft-price-dollar">
                     ($<span class="dollar-value">0</span>)
                   </p>
                 </div>
                 <button class="btn nft-button">View NFT</button>
               </div>
             </div>
          </div>`;
}

(function () {
  const nftsGrid = document.querySelector(".nfts-grid");
  nftsGrid.insertAdjacentHTML("beforeend", createCard(nft1));
  nftsGrid.insertAdjacentHTML("beforeend", createCard(nft2));
  nftsGrid.insertAdjacentHTML("beforeend", createCard(nft3));
  nftsGrid.insertAdjacentHTML("beforeend", createCard(nft4));
})();
