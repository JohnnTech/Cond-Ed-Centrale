document.querySelectorAll(".btn-update").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // Simulate update with animation
    button.innerHTML =
      '<i class="fas fa-spinner fa-spin me-2"></i>Atualizando...';
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-check me-2"></i>Atualizado!';
      setTimeout(() => {
        button.innerHTML = "Atualizar Informações";
      }, 2000);
    }, 1500);
  });
});
