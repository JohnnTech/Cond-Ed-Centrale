$(document).ready(function () {
  // Initialize DataTable
  $("#transactionsTable").DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json",
    },
    pageLength: 5,
    order: [[0, "desc"]],
  });

  // Financial Chart
  const ctx = document.getElementById("financialChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
        "Jan",
        "Fev",
        "Mar",
        "Abr",
      ],
      datasets: [
        {
          label: "Receitas",
          data: [
            42000, 45000, 43000, 44000, 45000, 46000, 47000, 48000, 46000,
            45000, 44000, 45780,
          ],
          borderColor: "#2ecc71",
          tension: 0.1,
        },
        {
          label: "Despesas",
          data: [
            30000, 31000, 32000, 31000, 33000, 32000, 31000, 33000, 32000,
            31000, 32000, 32450,
          ],
          borderColor: "#e74c3c",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // Expense Distribution Chart
  const pieCtx = document.getElementById("expensePieChart").getContext("2d");
  new Chart(pieCtx, {
    type: "doughnut",
    data: {
      labels: [
        "Manutenção",
        "Energia",
        "Água",
        "Limpeza",
        "Segurança",
        "Outros",
      ],
      datasets: [
        {
          data: [30, 20, 15, 15, 10, 10],
          backgroundColor: [
            "#3498db",
            "#e74c3c",
            "#2ecc71",
            "#f1c40f",
            "#9b59b6",
            "#95a5a6",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
