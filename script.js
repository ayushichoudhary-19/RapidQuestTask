var ctx = document.getElementById("myChart").getContext("2d");

var data = {
  labels: [20, 25, 30, 35, 40, 60, 65],
  datasets: [
    {
      label: "Employer K 73,500",
      backgroundColor: "#0800A3",
      data: [10, 20, 30, 40, 50, 60, 70]
    },
    {
      label: "Employee K 52,500",
      backgroundColor: "#4935FF",
      data: [40, 70, 90, 110, 140, 160, 180]
    },
    {
      label: "Total Interest K 244,313",
      backgroundColor: "#85AFFF",
      data: [70, 120, 150, 190, 230, 260, 300]
    }
  ]
};

var options = {
  scales: {
    xAxes: [{
      stacked: true,
      scaleLabel: {
        display: false,
        labelString: "Age"
      },
      barPercentage: 0.4
    }],
    yAxes: [{
      stacked: false,
      scaleLabel: {
        display: false,
        labelString: "Amount ($)"
      },
      ticks: {
        beginAtZero: true,
        max: 300,
        stepSize: 100,
        callback: function (value) {
          return '$' + value;
        }
      }
    }]
  }
};

var myChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options
});

