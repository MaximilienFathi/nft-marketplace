export function createNftCard({ image, name, creator, ethereum, dollar }) {
  return `
    <div class="nft-card">
        <img class="nft-img" src="${image}" alt="NFT image" />
        <div class="nft-info">
          <p class="nft-name">${name}</p>
          <p class="nft-creator">By ${creator}</p>
          <div class="nft-price-box">
            <div class="nft-price-info">
              <p class="nft-price-description">Current price</p>
              <p class="nft-price-ethereum">
                <strong
                  ><span class="ethereum-value">${ethereum}</span> ETH
                </strong>
              </p>
              <p class="nft-price-dollar">
                ($<span class="dollar-value">${dollar}</span>)
              </p>
            </div>
            <button class="btn nft-button">View NFT</button>
          </div>
        </div>
    </div>`;
}
