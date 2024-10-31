document.addEventListener("DOMContentLoaded", function () {
  // Filtros
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Cancelamento de reserva
  const cancelButtons = document.querySelectorAll(
    ".btn-cancel:not([disabled])"
  );
  cancelButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Lógica de cancelamento seria implementada aqui
    });
  });
});
