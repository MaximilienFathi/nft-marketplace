"use script";

class CreatorCl {
  constructor(name, items, views, followers, bannerImg, profileImg) {
    this.name = name;
    this.items = items;
    this.views = views;
    this.followers = followers;
    this.bannerImg = bannerImg;
    this.profileImg = profileImg;
  }
}

const creator1 = new CreatorCl(
  "Bob Taylor",
  56,
  10,
  8,
  "img/cosmos-g20ff2fd5e_640.png",
  "img/man-g238e36a78_640.png"
);

const creator2 = new CreatorCl(
  "John Smith",
  23,
  30,
  4,
  "img/bear-gfc11ffe9c_640.png",
  "img/man-g1679334f6_640.png"
);

const creator3 = new CreatorCl(
  "Lucy Pudding",
  145,
  78,
  34,
  "img/memphis-g1020b08ad_640.jpg",
  "img/woman-g33cc37279_640.jpg"
);

const creator4 = new CreatorCl(
  "Jacky Foster",
  34,
  4,
  16,
  "img/ice-cream-g26773c881_640.png",
  "img/woman-g11e4ec8b8_640.jpg"
);

function createCard({ name, items, views, followers, bannerImg, profileImg }) {
  return `<div class="creator-card">
              <img class="creator-banner" src="${bannerImg}" alt=""/>
              <img
                class="creator-img"
                src="${profileImg}"
                alt=""
              />
              <div class="creator-info">
                <p class="creator-name">${name}</p>
                <div class="creator-stat">
                  <p>Items</p>
                  <p>${items}</p>
                </div>
                <div class="creator-stat">
                  <p>Views</p>
                  <p>${views}</p>
                </div>
                <div class="creator-stat">
                  <p>Followers</p>
                  <p>${followers}</p>
                </div>
              </div>
              <button class="btn btn-creator">View Creator</button>
            </div>`;
}

(function () {
  const gridCreators = document.querySelector(".grid-creators");
  gridCreators.insertAdjacentHTML("beforeend", createCard(creator1));
  gridCreators.insertAdjacentHTML("beforeend", createCard(creator2));
  gridCreators.insertAdjacentHTML("beforeend", createCard(creator3));
  gridCreators.insertAdjacentHTML("beforeend", createCard(creator4));
})();
