let myChart1 = document.getElementById("myChart").getContext("2d");
let data1 = [72, 28];
let labels1 = ["Outside", "Treadmill"];
let colors1 = ["#49A9EA", "36CAAB"];

let myChart2 = document.getElementById("myChart2").getContext("2d");
let data2 = [4, 2, 4, 4, 2, 7, 5];
let labels2 = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
let colors2;

let myChart3 = document.getElementById("myChart3").getContext("2d");
let labels3 = [
  "Jan 6",
  "Jan 9",
  "Jan 14",
  "Jan 19",
  "Feb 13",
  "Feb 20",
  "March 8",
  "March 10",
  "March 16",
  "March 21",
  "March 25",
  "March 28",
  "March 31",
  "April 5",
  "April 9",
  "April 15",
  "April 19",
  "April 23"
];

let data3 = [3.0, 3.15, 3.77, 4.29, 3.67, 3.41, 3.51, 3.5, 3.77, 3.27, 3.04, 3.52, 3.18, 3.77, 2.28, 3.51, 3.77, 2.25];
let color3 = [
  "#8e5ea2",
  "#8e5ea2",
  "#8e5ea2",
  "#8e5ea2",
  "#3cba9f",
  "#3cba9f",
  "#49A9EA",
  "#49A9EA",
  "#49A9EA",
  "#49A9EA",
  "#49A9EA",
  "#49A9EA",
  "#49A9EA",
  "#a7a7a7",
  "#a7a7a7",
  "#a7a7a7",
  "#a7a7a7",
  "#a7a7a7"
];

let chart1 = new Chart(myChart1, {
  type: "doughnut",
  data: {
    labels: labels1,
    datasets: [
      {
        data: data1,
        backgroundColor: colors1
      }
    ]
  },
  options: {
    title: {
      text: "Run Locations By % (since 2015)",
      display: true
    }
  }
});

let chart2 = new Chart(myChart2, {
  type: "line",
  data: {
    labels: labels2,
    datasets: [
      {
        data: data2,
        label: "# Of Runs",
        backgroundColor: colors2,
        fill: false
      }
    ]
  },
  options: {
    title: {
      text: "Runs Per Month (last 6 months)",
      display: true
    },
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1
          }
        }
      ]
    }
  }
});

let chart3 = new Chart(myChart3, {
  type: "horizontalBar",
  data: {
    labels: labels3,
    datasets: [
      {
        label: "Miles",
        backgroundColor: color3,
        data: data3
      }
    ]
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [
        {
          ticks: {
            max: 5,
            min: 1,
            stepSize: 1.0
          }
        }
      ]
    },
    title: {
      display: true,
      text: "2020 Run Distances"
    }
  }
});
