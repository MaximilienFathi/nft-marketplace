/////////////////////////////////////////////////////////////
// SET UP CHARTS

export const createBarChart = function (revenueData, expanseData) {
  // 1) setup
  const bar_chart_data = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [
      {
        label: "Revenue",
        data: revenueData,
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgb(75, 192, 192)"],
        borderWidth: 1,
      },
      {
        label: "Expanses",
        data: expanseData,
        backgroundColor: ["rgba(255, 69, 0, 0.2)"],
        borderColor: ["rgb(255, 69, 0)"],
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
        },
      },
    },
  };

  // 3) render chart
  const bar_ctx = document.querySelector(".creator-bar-chart").getContext("2d");
  const myBarChart = new Chart(bar_ctx, bar_chart_config);
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const createAreaChart = function (viewsData) {
  const area_ctx = document
    .querySelector(".creator-area-chart")
    .getContext("2d");
  const gradient1 = area_ctx.createLinearGradient(0, 30, 0, 170);
  gradient1.addColorStop(1, "rgba(11, 20, 66, 1)");
  gradient1.addColorStop(0, "rgba(75, 192, 192, 0.2)");
  const gradient2 = area_ctx.createLinearGradient(0, 50, 0, 100);
  gradient2.addColorStop(1, "rgba(75, 192, 192,1)");
  gradient2.addColorStop(0, "rgba(75, 192, 192,1)");

  area_ctx.canvas.width = 50;
  area_ctx.canvas.height = 55;

  // 1) setup
  const area_chart_data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        data: viewsData,
        tension: 0.4,
        backgroundColor: gradient1,
        fill: true,
        borderWidth: 1,
        borderColor: gradient2,
        pointRadius: 0,
      },
    ],
  };

  // 2) config
  const area_chart_config = {
    type: "line",
    data: area_chart_data,
    responsive: true,
    maintainAspectRatio: false,
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
};

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////

export const createDoughnutChart = function (
  myCanvas,
  myTitle,
  myLabels,
  myData
) {
  // 0) centerText plugin
  const centerText = {
    id: "centerText",
    afterDatasetsDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;

      ctx.save();
      const chartData = chart.data.datasets[0].data[0];

      ctx.font = "bolder 1.6rem Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(`${chartData}%`, width / 2, height / 2 + top + 5);
      // 1.6rem = 16px and so must move text by half its font size, i.e. 8px
    },
  };

  // 1) setup
  const doughnut_chart_data = {
    labels: myLabels,
    datasets: [
      {
        data: myData,
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        hoverOffset: 10,
        cutout: "60%",
      },
    ],
  };

  // 2) config
  const doughnut_chart_config = {
    type: "doughnut",
    data: doughnut_chart_data,
    options: {
      rotation: Math.PI * 0.5,
      animation: {
        duration: 2000,
        animateRotate: true,
        easing: "easeInOutCirc",
      },
      responsive: true,
      maintainAspectRatio: false,
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
          text: myTitle,
        },
        legend: {
          display: false,
        },
      },
    },
    plugins: [centerText],
  };

  // 3) render chart
  const doughnut_ctx = document.querySelector(myCanvas).getContext("2d");
  const myDoughnutChart = new Chart(doughnut_ctx, doughnut_chart_config);
};
