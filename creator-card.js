// "use script";

import { creator1, creator2, creator3, creator4 } from "./creator-class.js";

function createCreatorCard({
  name,
  items,
  views,
  followers,
  bannerImg,
  profileImg,
}) {
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
              <button class="btn creator-button">View Creator</button>
            </div>`;
}

(function () {
  const gridCreators = document.querySelector(".creators-grid");
  gridCreators.insertAdjacentHTML("beforeend", createCreatorCard(creator1));
  gridCreators.insertAdjacentHTML("beforeend", createCreatorCard(creator2));
  gridCreators.insertAdjacentHTML("beforeend", createCreatorCard(creator3));
  gridCreators.insertAdjacentHTML("beforeend", createCreatorCard(creator4));
})();
