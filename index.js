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
// const modalClose = document.querySelector(".modal-close");

const artworkModalContent = document.querySelector(".artwork-modal-content");
const modalCreatorLink = document.querySelector(".modal-creator-link");
const flipCard = document.querySelector(".flip-card");

const formLogin = document.querySelector("#form-login");
const formSignup = document.querySelector("#form-signup");

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
  console.log("TEST", currentModal);
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

// When the user clicks on <span> (x), close the modal
// modalClose.onclick = function () {
//   resetForm();
//   modalAuthentication.style.display = "none";
//   document.querySelector("body").style.overflowY = "scroll";
//   flipCard.classList.remove("is-flipped");
// };

//////////////////////////////////////////////////
// ENABLE MODAL FORM INTERACTION - VIEW ARTWORK

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

modalArtwork.onclick = function () {
  flipCard.classList.toggle("is-flipped");
};

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
const area_ctx = document.querySelector("#creator-area-chart").getContext("2d");
const gradient1 = area_ctx.createLinearGradient(0, 50, 0, 400);
gradient1.addColorStop(1, "rgba(234,110,172,0.8)");
gradient1.addColorStop(0, "rgba(28,186,222,0.5)");
const gradient2 = area_ctx.createLinearGradient(0, 50, 0, 400);
gradient2.addColorStop(1, "rgba(234,110,172,1)");
gradient2.addColorStop(0, "rgba(28,186,222,1)");
const gradient3 = area_ctx.createLinearGradient(0, 50, 0, 400);
gradient3.addColorStop(1, "rgba(135,236,26,0.8)");
gradient3.addColorStop(0, "rgba(222,167,28,0.5)");
const gradient4 = area_ctx.createLinearGradient(0, 50, 0, 400);
gradient4.addColorStop(1, "rgb(135,236,26,1)");
gradient4.addColorStop(0, "rgba(222,167,28,1)");

const area_chart_data = {
  labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  datasets: [
    {
      label: "Revenue",
      data: [12, 19, 3, 17, 6, 3, 7],
      // backgroundColor: "rgba(88,62,234,0.6)",
      backgroundColor: gradient1,
      fill: true,
      borderWidth: 3, // Specify bar border width
      borderColor: gradient2, // Add custom color border (Line)
    },
    {
      label: "Expenses",
      data: [2, 29, 5, 5, 2, 3, 10],
      // backgroundColor: "rgba(231,10,10,0.6)",
      backgroundColor: gradient3,
      fill: true,
      borderWidth: 1, // Specify bar border width
      borderColor: gradient4, // Add custom color border (Line)
    },
  ],
};

const myAreaChart = new Chart(area_ctx, {
  type: "line",
  data: area_chart_data,
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
    tension: 0.4,
    // animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: "linear",
    //     from: 0.5,
    //     to: 0,
    //     loop: true,
    //   },
    // },
  },
});

/////////////////////////////////////////////////////////////

const bar_ctx = document.querySelector("#creator-bar-chart").getContext("2d");

const bar_chart_data = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 23],
      backgroundColor: [
        "rgb(255, 99, 132, 0.6)",
        "rgb(54, 162, 235, 0.6)",
        "rgb(255, 205, 86, 0.6)",
        "rgb(103,255,86, 0.6)",
      ],
      // hoverOffset: 20,
    },
  ],
};

const myBarChart = new Chart(bar_ctx, {
  type: "doughnut",
  data: bar_chart_data,
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false,
    // showScale: false,
    elements: {
      arc: {
        borderWidth: 1,
      },
    },
    plugins: {
      title: {
        padding: {
          bottom: 20,
        },
        display: true,
        text: "Custom Chart Title",
      },
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        maxWidth: 1,
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    // animateScale = false
    // elements: {
    //   line: {
    //     borderWidth: 3,
    //   },
    // },
  },
});

/////////////////////////////////////////////////////////////

const doughnut_ctx_1 = document
  .querySelector("#creator-doughnut-chart-1")
  .getContext("2d");

const doughnut_chart_data_1 = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50],
      backgroundColor: ["rgb(255, 99, 132, 0.6)", "rgb(54, 162, 235, 0.6)"],
      // hoverOffset: 20,
    },
  ],
};

const myDoughnutChart1 = new Chart(doughnut_ctx_1, {
  type: "doughnut",
  data: doughnut_chart_data_1,
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false,
    // showScale: false,
    elements: {
      arc: {
        borderWidth: 1,
      },
    },
    layout: {
      padding: 5,
    },
    plugins: {
      title: {
        padding: {
          bottom: 5,
        },
        display: true,
        text: "Custom Chart Title",
      },
      legend: {
        display: false,
      },
    },
  },
  plugins: [
    {
      id: "text",
      beforeDraw: function (chart, a, b) {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        ctx.restore();
        const fontSize = (height / 240).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        const text = "75%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ],
  // animateScale = false
  // elements: {
  //   line: {
  //     borderWidth: 3,
  //   },
  // },
});

/////////////////////////////////////////////////////////////

const doughnut_ctx_2 = document
  .querySelector("#creator-doughnut-chart-2")
  .getContext("2d");

const doughnut_chart_data_2 = {
  labels: ["Yellow", "Green"],
  datasets: [
    {
      label: "My First Dataset",
      data: [100, 23],
      backgroundColor: ["rgb(255, 205, 86, 0.6)", "rgb(103,255,86, 0.6)"],
      // hoverOffset: 20,
    },
  ],
};

const myDoughnutChart_2 = new Chart(doughnut_ctx_2, {
  type: "doughnut",
  data: doughnut_chart_data_2,
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false,
    // showScale: false,
    elements: {
      arc: {
        borderWidth: 1,
      },
    },
    layout: {
      padding: 5,
    },
    plugins: {
      title: {
        padding: {
          bottom: 5,
        },
        display: true,
        text: "Custom Chart Title",
      },
      legend: {
        display: false,
      },
    },
  },
  // animateScale = false
  // elements: {
  //   line: {
  //     borderWidth: 3,
  //   },
  // },
});

/////////////////////////////////////////////////////////////

const doughnut_ctx_3 = document
  .querySelector("#creator-doughnut-chart-3")
  .getContext("2d");

const doughnut_chart_data_3 = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50],
      backgroundColor: ["rgb(255, 99, 132, 0.6)", "rgb(54, 162, 235, 0.6)"],
      // hoverOffset: 20,
    },
  ],
};

const myDoughnutChart_3 = new Chart(doughnut_ctx_3, {
  type: "doughnut",
  data: doughnut_chart_data_3,
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false,
    // showScale: false,
    elements: {
      arc: {
        borderWidth: 1,
      },
    },
    layout: {
      padding: 5,
    },
    plugins: {
      title: {
        padding: {
          bottom: 5,
        },
        display: true,
        text: "Custom Chart Title",
      },
      legend: {
        display: false,
      },
    },
  },
  // animateScale = false
  // elements: {
  //   line: {
  //     borderWidth: 3,
  //   },
  // },
});
