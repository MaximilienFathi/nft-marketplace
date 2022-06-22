"use strict";

//////////////////////////////////////////////////
// ELEMENTS
const allLinks = document.querySelectorAll("a:link");
const heroSection = document.querySelector(".hero-section");
const year = document.querySelector(".year");
const timer = document.querySelector(".timer");

const btnLogin = document.querySelector(".btn-login");
const btnSignup = document.querySelector(".btn-signup");
const btnArtwork = document.querySelector(".btn-artwork");
const btnCreator = document.querySelector(".btn-creator");

const modalAuthentication = document.querySelector("#modal-authentication");
const modalArtwork = document.querySelector("#modal-artwork");
const modalCreator = document.querySelector("#modal-creator");
const modalClose = document.querySelector(".modal-close");

const artworkModalContent = document.querySelector(".artwork-modal-content");
const modalCreatorLink = document.querySelector(".modal-creator-link");
const flipCard = document.querySelector(".flip-card");

const formLogin = document.querySelector("#form-login");
const formSignup = document.querySelector("#form-signup");

/////////////////////////////////////////////////////////////
// CONVERT ETH TO CAD

let oneETHprice = 0;

(async function () {
  const fromCurrency = "ethereum";
  const toCurrency = "cad";
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`;
  const response = await fetch(url);
  const json = await response.json();
  oneETHprice = await json[fromCurrency][toCurrency];
  console.log(oneETHprice);
})();

// (async () => {
//   oneETHprice = await convertETHtoCAD();
//   console.log(oneETHprice);
// })();

const dollarValueElements = document.getElementsByClassName("dollar-value");
for (let i = 0; i < dollarValueElements.length; i++) {
  dollarValueElements[i].textContent = `${
    oneETHprice * Number(dollarValueElements[i].textContent)
  }`;
}

//////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//////////////////////////////////////////////////
// STICKY NAVIGATION
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(entries);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100%",
  }
);
obs.observe(heroSection);

//////////////////////////////////////////////////
// SET CURRENT YEAR
const currentYear = new Date().getFullYear();
year.textContent = currentYear.toString();

//////////////////////////////////////////////////
// COMMON METHODS FOR ALL MODALS

// Reset forms when closing them
const resetForm = function () {
  document.getElementById(formLogin.id).reset();
  document.getElementById(formSignup.id).reset();
};

// Set origin of modal popup animation
const setModalOrigin = function (currentModal, currentButton) {
  const xPosition = currentButton.offsetLeft;
  const yPosition = currentButton.offsetTop;
  currentModal.style.transformOrigin = `${xPosition}px ${yPosition}px`;
  console.log(currentModal.style.transformOrigin);
};

// Show modal window
const showModal = function (currentModal) {
  console.log(currentModal);
  currentModal.style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
};

// Close modal when the user clicks outside of it
window.onclick = function (event) {
  const currentModal = event.target;
  if (
    currentModal === modalAuthentication ||
    currentModal === modalArtwork ||
    currentModal === modalCreator
  ) {
    resetForm();
    currentModal.style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
    flipCard.classList.remove("is-flipped");
  }
};

//////////////////////////////////////////////////
// ENABLE MODAL FORM INTERACTION - LOGIN/SIGN UP

// When the user clicks on the LOGIN button, open the modal
btnLogin.onclick = function (event) {
  document.querySelector("#chk").checked = true;
  const currentButton = event.target;
  setModalOrigin(modalAuthentication, currentButton);
  showModal(modalAuthentication);
};

// When the user clicks on the SIGN UP button, open the modal
btnSignup.onclick = function (event) {
  document.querySelector("#chk").checked = false;
  const currentButton = event.target;
  setModalOrigin(modalAuthentication, currentButton);
  showModal(modalAuthentication);
};

// When the user clicks on X, close the modal
document.body.onclick = function (event) {
  if (event.target.getAttribute("name") === "close-outline") {
    resetForm();
    modalAuthentication.style.display = "none";
    modalArtwork.style.display = "none";
    modalCreator.style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
    flipCard.classList.remove("is-flipped");
  }
};

//////////////////////////////////////////////////
// ENABLE MODAL FORM INTERACTION - ARTWORK & CREATOR

btnArtwork.onclick = function (event) {
  const currentButton = event.target;
  setModalOrigin(modalArtwork, currentButton);
  showModal(modalArtwork);
};

btnCreator.onclick = function (event) {
  const currentButton = event.target;
  setModalOrigin(modalCreator, currentButton);
  showModal(modalCreator);
};

// modalArtwork.onclick = function () {
//   flipCard.classList.toggle("is-flipped");
// };

window.onload = function () {
  let hours = 24;
  let minutes = 60;
  let seconds = 60;
  setInterval(function () {
    timer.textContent = hours + " : " + minutes + " : " + seconds;
    seconds--;
    if (seconds === 0) {
      minutes--;
      seconds = 60;
      if (minutes === 0) {
        hours--;
        minutes = 60;
      }
      if (hours === 0) {
        hours = 24;
      }
    }
    // if (seconds >= 58) {
    //   timer.style.color = "#ded6d6";
    // }
    // if (seconds < 58) {
    //   timer.style.color = "red";
    // }
  }, 1000);
};

/////////////////////////////////////////////////////////////
// SET UP CHARTS

// 1) setup
const bar_chart_data = {
  labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgb(75, 192, 192)"],
      // or use goldenrod
      borderWidth: 1,
    },
    {
      label: "Expanses",
      data: [24, 50, 12, 65, 45, 73, 95],
      backgroundColor: ["rgba(255, 69, 0, 0.2)"],
      borderColor: ["rgb(255, 69, 0)"],
      // or use #ff4500ff
      borderWidth: 1,
    },
  ],
};
let delayed;
// 2) config
const bar_chart_config = {
  type: "bar",
  data: bar_chart_data,
  options: {
    animations: {
      duration: 2000,
      // NOT WORKING
      // easing: "linear",
      // from: 0,
      // to: 0,
    },
    scales: {
      x: {
        grid: {
          color: "rgba(91,88,88,0.3)",
        },
      },
      y: {
        grid: {
          color: "rgba(91,88,88,0.3)",
        },
      },
    },
    plugins: {
      legend: {
        align: "center",
        labels: {
          boxWidth: 30,
          color: "#b2abab",
        },
        // labels: {
        //   usePointStyle: true,
        // },
      },
    },
  },
};

// 3) render chart
const bar_ctx = document.querySelector("#creator-bar-chart").getContext("2d");
const myBarChart = new Chart(bar_ctx, bar_chart_config);

/////////////////////////////////////////////////////////////
const area_ctx = document.querySelector("#creator-area-chart").getContext("2d");
const gradient1 = area_ctx.createLinearGradient(0, 30, 0, 170);
gradient1.addColorStop(1, "rgba(11, 20, 66, 1)");
gradient1.addColorStop(0, "rgba(75, 192, 192, 0.2)");
const gradient2 = area_ctx.createLinearGradient(0, 50, 0, 100);
gradient2.addColorStop(1, "rgba(75, 192, 192,1)");
gradient2.addColorStop(0, "rgba(75, 192, 192,1)");

area_ctx.canvas.width = 50;
area_ctx.canvas.height = 55;

// 1) setup
// const labels = Utils.months({ count: 7 });
const area_chart_data = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  datasets: [
    {
      // label: "My First Dataset",
      data: [65, 120, 80, 70, 30, 90, 200],
      // borderColor: "rgb(75, 192, 192)",
      tension: 0.4,
      backgroundColor: gradient1,
      fill: true,
      borderWidth: 1, // Specify bar border width
      borderColor: gradient2, // Add custom color border (Line)
      pointRadius: 0,
    },
  ],
};

// 2) config
const area_chart_config = {
  type: "line",
  data: area_chart_data,
  responsive: true, // Instruct chart js to respond nicely.
  maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
  // tension: 0.4,
  options: {
    scales: {
      x: {
        grid: {
          color: "rgba(91,88,88,0.3)",
        },
      },
      y: {
        grid: {
          color: "rgba(91,88,88,0.3)",
        },
        ticks: {
          display: false,
        },
      },
    },
    animations: {
      tension: {
        duration: 2000,
        // NOT WORKING
        // easing: "easeInOutCirc",
        // from: 0,
        // to: 1,
      },
    },
    plugins: {
      title: {
        padding: {
          top: 10,
          bottom: 10,
        },
        display: true,
        color: "#ded6d6",
        font: {
          size: 14,
        },
        text: "Daily Views (7 days)",
      },
      legend: {
        display: false,
      },
    },
  },
};

// 3) render chart
const myAreaChart = new Chart(area_ctx, area_chart_config);

/////////////////////////////////////////////////////////////

// 0) centerText plugin
const centerText = {
  id: "centerText",
  afterDatasetsDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { left, right, top, bottom, width, height },
    } = chart;

    ctx.save();
    // console.log("test", top);
    const chartData = chart.data.datasets[0].data[0];
    console.log(chart.data.datasets[0].data[0]);

    ctx.font = "bolder 1.6rem Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`${chartData}%`, width / 2, height / 2 + top + 5);
    // 1.6rem = 16px and so must move text by half its font size, i.e. 8px
  },
};

// 1) setup
const doughnut_chart_data_1 = {
  labels: ["Profit", "Revenue"],
  datasets: [
    {
      // label: "My First Dataset",
      data: [30, 70],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      hoverOffset: 10,
      cutout: "60%",
      // borderRadius: 30,
    },
  ],
};

// 2) config
const doughnut_chart_config_1 = {
  type: "doughnut",
  data: doughnut_chart_data_1,
  options: {
    // cutout: "50%",
    rotation: Math.PI * 0.5,
    animation: {
      duration: 2000,
      animateRotate: true,
      easing: "easeInOutCirc",
    },
    responsive: true,
    maintainAspectRatio: false,
    // showScale: false,
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: ["rgb(75, 192, 192)", "rgb(255, 69, 0)"],
      },
    },
    layout: {
      padding: {
        bottom: 10,
      },
    },
    plugins: {
      title: {
        padding: {
          top: 10,
          bottom: 10,
        },
        display: true,
        color: "#ded6d6",
        font: {
          size: 14,
        },
        text: "Profit Margin",
      },
      legend: {
        display: false,
      },
    },
  },
  plugins: [centerText],
};

// 3) render chart
const doughnut_ctx_1 = document
  .querySelector("#creator-doughnut-chart-1")
  .getContext("2d");
const myDoughnutChart1 = new Chart(doughnut_ctx_1, doughnut_chart_config_1);

/////////////////////////////////////////////////////////////

// 1) setup
const doughnut_chart_data_2 = {
  labels: ["Sold", "Unsold"],
  datasets: [
    {
      // label: "My First Dataset",
      data: [20, 80],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      hoverOffset: 10,
      cutout: "60%",
      // borderRadius: 30,
    },
  ],
};

// 2) config
const doughnut_chart_config_2 = {
  type: "doughnut",
  data: doughnut_chart_data_2,
  options: {
    // cutout: "50%",
    rotation: Math.PI * 0.5,
    animation: {
      duration: 2000,
      animateRotate: true,
      easing: "easeInOutCirc",
    },
    responsive: true,
    maintainAspectRatio: false,
    // showScale: false,
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: ["rgb(75, 192, 192)", "rgb(255, 69, 0)"],
      },
    },
    layout: {
      padding: {
        bottom: 10,
      },
    },
    plugins: {
      title: {
        padding: {
          top: 10,
          bottom: 10,
        },
        display: true,
        color: "#ded6d6",
        font: {
          size: 14,
        },
        text: "Sales Effectiveness",
      },
      legend: {
        display: false,
      },
    },
  },
  plugins: [centerText],
};

// 3) render chart
const doughnut_ctx_2 = document
  .querySelector("#creator-doughnut-chart-2")
  .getContext("2d");
const myDoughnutChart2 = new Chart(doughnut_ctx_2, doughnut_chart_config_2);

/////////////////////////////////////////////////////////////

// 1) setup
const doughnut_chart_data_3 = {
  labels: ["New", "Returning"],
  datasets: [
    {
      // label: "My First Dataset",
      data: [40, 60],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      hoverOffset: 10,
      cutout: "60%",
      // borderRadius: 30,
    },
  ],
};

// 2) config
const doughnut_chart_config_3 = {
  type: "doughnut",
  data: doughnut_chart_data_3,
  options: {
    // cutout: "50%",
    // rotation: Math.PI * 0.5,
    animation: {
      duration: 2000,
      animateRotate: true,
      easing: "easeInOutCirc",
    },
    responsive: true,
    maintainAspectRatio: false,
    // showScale: false,
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: ["rgb(75, 192, 192)", "rgb(255, 69, 0)"],
      },
    },
    layout: {
      padding: {
        bottom: 10,
      },
    },
    plugins: {
      title: {
        padding: {
          top: 10,
          bottom: 10,
        },
        display: true,
        color: "#ded6d6",
        font: {
          size: 14,
        },
        text: "New Viewership",
      },
      legend: {
        display: false,
      },
    },
  },
  plugins: [centerText],
};

// 3) render chart
const doughnut_ctx_3 = document
  .querySelector("#creator-doughnut-chart-3")
  .getContext("2d");
const myDoughnutChart3 = new Chart(doughnut_ctx_3, doughnut_chart_config_3);

/////////////////////////////////////////////////////////////

//Get the button:
const linkToTop = document.querySelector(".link-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    linkToTop.style.display = "block";
  } else {
    linkToTop.style.display = "none";
  }
};
