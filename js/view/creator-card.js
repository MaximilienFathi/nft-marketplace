// "use script";

export function createCreatorCard({
  name,
  items,
  views,
  followers,
  bannerImg,
  profileImg,
}) {
  return `<div class="creator-card">
              <img class="creator-banner" src="${bannerImg}" alt="Creator banner image"/>
              <img
                class="creator-img"
                src="${profileImg}"
                alt="Creator profile image"
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
