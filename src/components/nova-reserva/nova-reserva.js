document.addEventListener("DOMContentLoaded", function () {
  // Inicializa o date picker
  flatpickr("#datePicker", {
    minDate: "today",
    dateFormat: "d/m/Y",
    locale: "pt",
    disable: [
      function (date) {
        // Desabilita datas específicas ou regras customizadas
        return false;
      },
    ],
  });

  // Seleção de área
  const areaCards = document.querySelectorAll(".area-card");
  areaCards.forEach((card) => {
    card.addEventListener("click", function () {
      areaCards.forEach((c) => c.classList.remove("selected"));
      this.classList.add("selected");
      document.getElementById("selectedArea").textContent =
        this.querySelector("h6").textContent;
      updateReserveButton();
    });
  });

  // Seleção de horário
  const timeSlots = document.querySelectorAll(".time-slot:not(.unavailable)");
  timeSlots.forEach((slot) => {
    slot.addEventListener("click", function () {
      timeSlots.forEach((s) => s.classList.remove("selected"));
      this.classList.add("selected");
      document.getElementById("selectedTime").textContent = this.textContent;
      updateReserveButton();
    });
  });

  // Date picker change
  const datePicker = document.getElementById("datePicker");
  datePicker.addEventListener("change", function () {
    document.getElementById("selectedDate").textContent = this.value;
    updateReserveButton();
  });

  // Terms checkbox
  const termsCheck = document.getElementById("termsCheck");
  termsCheck.addEventListener("change", updateReserveButton);

  // Update reserve button state
  function updateReserveButton() {
    const reserveBtn = document.querySelector(".btn-reserve");
    const areaSelected = document.querySelector(".area-card.selected");
    const timeSelected = document.querySelector(".time-slot.selected");
    const dateSelected = document.getElementById("datePicker").value;
    const termsAccepted = document.getElementById("termsCheck").checked;

    reserveBtn.disabled = !(
      areaSelected &&
      timeSelected &&
      dateSelected &&
      termsAccepted
    );
  }

  // Form submission
  document
    .getElementById("reservationForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Aqui seria implementada a lógica de envio da reserva
      alert("Reserva realizada com sucesso!");
      window.location.href = "/minhas-reservas";
    });
});
