// "use script";

import {
  createBarChart,
  createAreaChart,
  createDoughnutChart,
} from "./creator-charts.js";

// Create a modal window when clicking on "view Creator"
export function createCreatorModal({
  name,
  joinDate,
  items,
  views,
  followers,
  balance,
  totalSales,
  totalValue,
  description,
  bannerImg,
  profileImg,
}) {
  return `
<!--    <div id="modal-creator" class="modal-container">-->
    <div class="data-modal modal-container">
        <div class="modal-creator-content border-glow">
            <div class="modal-nav-icons">
                <ion-icon class="modal-go-back hidden" name="arrow-undo-outline"></ion-icon>
                <ion-icon class="modal-close" name="close-outline"></ion-icon>
            </div>
            <div class="modal-creator-left-content">
                <img
                    class="modal-creator-banner"
                    src=${bannerImg}
                    alt=""
                />
                <img
                    class="modal-creator-img"
                    src=${profileImg}
                    alt=""
                />
                <!--                  <div class="modal-creator-about">-->
                <p class="modal-creator-name">${name}</p>
                <p class="creator-join-date">Joined ${joinDate}</p>
                <p class="creator-description">${description}</p>
                <!--                  <div class="creator-follow-stats">-->
                <!--                    <p>24 followers</p>-->
                <!--                    <p>10 following</p>-->
                <!--                  </div>-->
                <div class="creator-modal-btn-box">
                    <button class="btn btn-full btn-message">Message</button>
                    <button class="btn btn-outline btn-follow">Follow</button>
                </div>
                <hr class="modal-creator-divider"/>
                <ul class="networks-list">
                    <li>
                        <a class="footer-link" href=""
                        >
                            <ion-icon
                                class="network-icon"
                                name="logo-facebook"
                            ></ion-icon
                            >
                        </a>
                    </li>
                    <li>
                        <a class="footer-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-instagram"
                            ></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a class="footer-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-pinterest"
                            ></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a class="footer-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-twitter"
                            ></ion-icon>
                        </a>
                    </li>
                </ul>
                <!--                  </div>-->
            </div>
            <div class="modal-creator-right-content">
                <p class="creator-analytics-label">Analytics Overview</p>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="analytics-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${balance} ETH</p>
                        <p>Total Balance</p>
                    </div>
                </div>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="pricetags-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${totalSales} ETH</p>
                        <p>Total Sales</p>
                    </div>
                </div>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="diamond-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${totalValue} ETH</p>
                        <p>Total NFT Value</p>
                    </div>
                </div>
                <div class="bar-chart-container analytics-border">
                    <canvas class="creator-bar-chart"></canvas>
                </div>
                <div class="area-chart-container analytics-border">
                    <canvas class="creator-area-chart"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-1"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-2"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-3"></canvas>
                </div>
            </div>
        </div>
    </div>`;
}

export function createCharts(creator) {
  createBarChart(creator.revenueData, creator.expanseData);
  createAreaChart(creator.viewsData);
  createDoughnutChart(
    ".creator-doughnut-chart-1",
    "Profit Margin",
    ["Profit", "Revenue"],
    creator.profitMargin
  );
  createDoughnutChart(
    ".creator-doughnut-chart-2",
    "Sales Effectiveness",
    ["Sold", "Unsold"],
    creator.salesEffectiveness
  );
  createDoughnutChart(
    ".creator-doughnut-chart-3",
    "New Viewership",
    ["New", "Returning"],
    creator.newViewsData
  );
}
