// Finance Chart
var financeOptions = {
  series: [
    {
      name: "Receitas",
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: "Despesas",
      data: [35, 41, 36, 26, 45, 48],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
  },
  colors: ["#2ecc71", "#e74c3c"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "R$ " + val;
      },
    },
  },
};

// Occurrences Chart
var occurrencesOptions = {
  series: [44, 55, 13, 43, 22],
  chart: {
    type: "donut",
    height: 250,
  },
  labels: ["Barulho", "Manutenção", "Segurança", "Limpeza", "Outros"],
  colors: ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71", "#95a5a6"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var financeChart = new ApexCharts(
  document.querySelector("#financeChart"),
  financeOptions
);
var occurrencesChart = new ApexCharts(
  document.querySelector("#occurrencesChart"),
  occurrencesOptions
);

financeChart.render();
occurrencesChart.render();
