document.addEventListener("DOMContentLoaded", function () {
  // Generate calendar
  function generateCalendar() {
    const calendar = document.querySelector(".calendar-grid");
    const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    // Add day headers
    days.forEach((day) => {
      const dayHeader = document.createElement("div");
      dayHeader.className = "calendar-day text-center font-weight-bold";
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });

    // Add calendar days
    const today = new Date();
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    ).getDay();

    // Add empty days
    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.className = "calendar-day";
      calendar.appendChild(emptyDay);
    }

    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement("div");
      day.className = "calendar-day text-center";
      if (i === today.getDate()) {
        day.className += " bg-primary text-white";
      }
      if ([5, 12, 15, 20].includes(i)) {
        // Example maintenance days
        day.className += " has-maintenance";
      }
      day.textContent = i;
      calendar.appendChild(day);
    }
  }

  generateCalendar();

  // Handle form submission
  document
    .querySelector("#newMaintenanceModal .btn-primary")
    .addEventListener("click", () => {
      const form = document.getElementById("newMaintenanceForm");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const maintenanceData = {
        ...Object.fromEntries(formData),
        recurrenceConfig: {
          type: formData.get("recurrence"),
          interval: formData.get("recurrence_interval"),
          period: formData.get("recurrence_period"),
        },
        duration: {
          value: formData.get("duration"),
          unit: formData.get("duration_unit"),
        },
      };

      console.log("Form submitted:", maintenanceData);
      $("#newMaintenanceModal").modal("hide");
    });

  document
    .getElementById("recurrenceSelect")
    .addEventListener("change", function () {
      const recurrenceDetails = document.getElementById("recurrenceDetails");
      if (this.value === "custom") {
        recurrenceDetails.style.display = "block";
      } else {
        recurrenceDetails.style.display = "none";
      }
    });

  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Handle file uploads
  const fileInput = document.querySelector('input[type="file"]');
  fileInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    // Handle file preview and validation
  });

  // Filter button functionality
  document
    .querySelector('[data-bs-toggle="dropdown"]')
    .addEventListener("click", function () {
      // Filter logic
    });

  // Sort button functionality
  document
    .querySelector(".btn-group .btn:last-child")
    .addEventListener("click", function () {
      // Sort logic
    });

  // Quick action buttons
  document.querySelectorAll(".list-group-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      // Handle quick action clicks
    });
  });

  // Progress bar animation
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    bar.style.width = bar.getAttribute("aria-valuenow") + "%";
  });

  // Calendar day click events
  document.querySelectorAll(".calendar-day").forEach((day) => {
    day.addEventListener("click", function () {
      if (this.textContent) {
        // Show maintenance details for this day
      }
    });
  });
});
