function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const loadingSpinner = document.querySelector(".loading-spinner");

  // Reset error messages
  emailError.style.display = "none";
  passwordError.style.display = "none";

  // Show loading spinner
  loadingSpinner.style.display = "inline-block";

  // Simulate API call
  setTimeout(() => {
    // Here you would normally make an API call to verify credentials
    if (!isValidEmail(email)) {
      emailError.style.display = "block";
      loadingSpinner.style.display = "none";
      return;
    }

    // Simulate successful login
    window.location.href = "/src/components/home-morador/home-morador.html";
  }, 1500);

  return false;
}

function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".type-toggle i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

// Add animation to social buttons
document.querySelectorAll(".social-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});
