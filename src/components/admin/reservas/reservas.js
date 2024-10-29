document.addEventListener("DOMContentLoaded", function () {
  // Initialize FullCalendar
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "pt-br",
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    events: [
      {
        title: "Salão de Festas - João Silva",
        start: "2023-05-15",
        color: "#2ecc71",
      },
      {
        title: "Churrasqueira - Maria Santos",
        start: "2023-05-16",
        color: "#f1c40f",
      },
      // Add more events as needed
    ],
    eventClick: function (info) {
      // Handle event click
      // Show event details modal
    },
  });
  calendar.render();

  // Time slot selection
  $(".time-slot:not(.unavailable)").click(function () {
    $(".time-slot").removeClass("selected");
    $(this).addClass("selected");
  });

  // Form submission
  $("#newReservationForm").submit(function (e) {
    e.preventDefault();
    // Handle form submission
    // Add validation and API calls
    $("#newReservationModal").modal("hide");
  });
});

function showFacilityDetails(facility) {
  // Show facility details modal or navigate to facility page
  console.log("Showing details for:", facility);
}

// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
