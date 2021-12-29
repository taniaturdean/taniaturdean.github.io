// Our labels along the x-axis
var years = ["1st Year", "2nd Year","3rd Year"];
// For drawing the lines
var Data_Science = [1, 3,2];
var Programming = [0, 1,0];
var Finance = [0, 2,1];
var Design_ = [0, 3,0];
var Cons = [2, 2,0];
var Reseach = [2, 1,0];

Chart.defaults.color = "#c45850"

var ctx = document.getElementById("projects-barplot");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: years,
    datasets: [
      {
        data: Data_Science,
        label: "Data Science",
        backgroundColor: "#3e95cd",
      },
      {
        data: Cons,
        label: "Consulting",
        backgroundColor: "#c45850",
      },
      {
        data: Reseach,
        label: "Research",
        backgroundColor: "#c43450",
      },
      {
        data: Programming,
        label: "Programming",
        backgroundColor: "#8e5ea2",
      },
      {
        data: Finance,
        label: "Finance",
        backgroundColor: "#3cba9f",
      },
      {
        data: Design_,
        label: "Design Thinking",
        backgroundColor: "#e8c3b9",
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
    legend: {
      labels: {
        fontColor: "white"
      }
    },
    scales: {
      xAxes: [{ barPercentage: 0.80, gridLines: { color: "white",zeroLineColor: "white" }, ticks: { fontColor: "white" } }],
      yAxes: [{ gridLines: { color: "white", zeroLineColor: "white" }, ticks: { fontColor: "white" } }],
    },
  },
});
