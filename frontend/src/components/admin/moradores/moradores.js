$(document).ready(function () {
  $("#residentsTable").DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json",
    },
    pageLength: 10,
    ordering: true,
    responsive: true,
  });
});
