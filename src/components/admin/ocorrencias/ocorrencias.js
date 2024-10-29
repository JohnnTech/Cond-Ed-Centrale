$(document).ready(function () {
  // Initialize DataTable
  $("#occurrencesTable").DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json",
    },
    order: [[1, "desc"]],
    pageLength: 10,
  });

  // Filter buttons
  $(".btn-filter").click(function () {
    $(".btn-filter").removeClass("active");
    $(this).addClass("active");
  });
});
