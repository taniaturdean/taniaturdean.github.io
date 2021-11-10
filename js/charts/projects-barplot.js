// Our labels along the x-axis
var years = ["1st Year", "2nd Year", "3rd Year"];
// For drawing the lines
var africa = [86, 114, 106];
var asia = [282, 350, 411];
var europe = [168, 170, 178];
var latinAmerica = [402, 201, 105];
var northAmerica = [240, 320, 240];
var southAfrica = [105, 320, 242];

var ctx = document.getElementById("projects-barplot");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: years,
    datasets: [
      {
        data: africa,
        label: "Africa",
        backgroundColor: "#3e95cd",
      },
      {
        data: asia,
        label: "Asia",
        backgroundColor: "#8e5ea2",
      },
      {
        data: europe,
        label: "Europe",
        backgroundColor: "#3cba9f",
      },
      {
        data: latinAmerica,
        label: "Latin America",
        backgroundColor: "#e8c3b9",
      },
      {
        data: northAmerica,
        label: "North America",
        backgroundColor: "#c45850",
      },
      {
        data: southAfrica,
        label: "South Africa",
        backgroundColor: "#c43450",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "My university projects by fields",
      },
    },
    responsive: true,
    scales: {
      xAxes: [{ barPercentage: 0.85 }],
      yAxes: [],
    },
  },
});
