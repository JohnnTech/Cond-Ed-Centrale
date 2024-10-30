let currentStep = 1;

function showStep(step) {
  document
    .querySelectorAll(".recovery-form")
    .forEach((form) => form.classList.remove("active"));
  document
    .querySelectorAll(".step")
    .forEach((s) => s.classList.remove("active", "completed"));

  document.querySelector(`[data-step="${step}"]`).classList.add("active");
  for (let i = 1; i < step; i++) {
    document.querySelector(`[data-step="${i}"]`).classList.add("completed");
  }

  if (step <= 3) {
    document.querySelector(`#${getFormId(step)}`).classList.add("active");
  }
}

function getFormId(step) {
  switch (step) {
    case 1:
      return "emailForm";
    case 2:
      return "codeForm";
    case 3:
      return "passwordForm";
    default:
      return "";
  }
}

// Handle Email Form
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const loadingSpinner = this.querySelector(".loading-spinner");
  loadingSpinner.style.display = "inline-block";

  setTimeout(() => {
    loadingSpinner.style.display = "none";
    currentStep = 2;
    showStep(currentStep);
  }, 1500);
});

// Handle Code Form
document.getElementById("codeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const loadingSpinner = this.querySelector(".loading-spinner");
  loadingSpinner.style.display = "inline-block";

  setTimeout(() => {
    loadingSpinner.style.display = "none";
    currentStep = 3;
    showStep(currentStep);
  }, 1500);
});

// Handle Password Form
document
  .getElementById("passwordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("passwordError");
    const loadingSpinner = this.querySelector(".loading-spinner");

    if (password !== confirmPassword) {
      errorMessage.style.display = "block";
      return;
    }

    loadingSpinner.style.display = "inline-block";
    errorMessage.style.display = "none";

    setTimeout(() => {
      loadingSpinner.style.display = "none";
      document
        .querySelectorAll(".recovery-form")
        .forEach((form) => (form.style.display = "none"));
      document.querySelector(".success-message").style.display = "block";
    }, 1500);
  });

// Initialize first step
showStep(currentStep);
