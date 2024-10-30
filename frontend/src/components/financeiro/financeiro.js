// Payments Chart
const paymentsCtx = document.getElementById("paymentsChart").getContext("2d");
new Chart(paymentsCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Valor da Taxa (R$)",
        data: [440, 440, 440, 440, 445, 445, 445, 450, 450, 450, 450, 450],
        borderColor: "#3498db",
        tension: 0.1,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 400,
      },
    },
  },
});

// Expenses Chart
const expensesCtx = document.getElementById("expensesChart").getContext("2d");
new Chart(expensesCtx, {
  type: "doughnut",
  data: {
    labels: ["Limpeza", "Manutenção", "Água", "Energia", "Segurança", "Outros"],
    datasets: [
      {
        data: [25, 20, 15, 15, 15, 10],
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#95a5a6",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
