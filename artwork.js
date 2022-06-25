"use script";

// Create a Class for artworks and one for creators
// Create 4 objects for each class
// Pass these objects from function below to function above

/*
<img class="nft-img" src="img/space-ga758f1522_640.jpg" alt="" />
<p class="nft-name">Flying Astronaut</p>
<p class="nft-creator">By Bob Taylor</p>
<span class="ethereum-value">9.23</span>
 */
class ArtworkCl {
  constructor(name, creator, ethValue, source) {
    this.name = name;
    this.creator = creator;
    this.ethValue = ethValue;
    this.source = source;
  }
}

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

(function () {
  const gridMarket = document.querySelector(".grid-market");
  gridMarket.append(createCard(artwork1));
  gridMarket.append(createCard(artwork2));
  gridMarket.append(createCard(artwork3));
  gridMarket.append(createCard(artwork4));
})();

// return `<div class="card">
//                   <div class="card-header" id="heading-${id}">
//                       <h5 class="mb-0">
//                           <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-${id}" aria-expanded="false" aria-controls="collapse-${id}">Collapsible Group Item #${id}</button>
//                       </h5>
//                   </div>
//                   <div id="collapse-${id}" class="collapse" aria-labelledby="heading-${id}">
//                       <div class="card-body">
//                           ${content}
//                       </div>
//                   </div>
//               </div>`;

// $(function () {
//   // create one card
//   $("#cards").append($(createCard("1", "Lorem ipsum")));
//   // create nested cards
//   $("#cards").append($(createCard("2", createCard(3, "Dolor sit amnet"))));
// });
