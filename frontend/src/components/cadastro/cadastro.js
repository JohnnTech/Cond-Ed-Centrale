let currentStep = 1;
const totalSteps = 3;

function nextStep() {
  if (validateCurrentStep()) {
    if (currentStep < totalSteps) {
      document.getElementById(`section${currentStep}`).classList.add("d-none");
      currentStep++;
      document
        .getElementById(`section${currentStep}`)
        .classList.remove("d-none");

      document.getElementById(`step${currentStep}`).classList.add("active");
      document
        .getElementById(`step${currentStep - 1}`)
        .classList.remove("active");
      document
        .getElementById(`step${currentStep - 1}`)
        .classList.add("completed");

      document.getElementById("prevBtn").style.display = "block";

      if (currentStep === totalSteps) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("submitBtn").style.display = "block";
      }
    }
  }
}

function prevStep() {
  if (currentStep > 1) {
    document.getElementById(`section${currentStep}`).classList.add("d-none");
    currentStep--;
    document.getElementById(`section${currentStep}`).classList.remove("d-none");

    document
      .getElementById(`step${currentStep + 1}`)
      .classList.remove("active");
    document.getElementById(`step${currentStep}`).classList.add("active");
    document.getElementById(`step${currentStep}`).classList.remove("completed");

    if (currentStep === 1) {
      document.getElementById("prevBtn").style.display = "none";
    }

    document.getElementById("nextBtn").style.display = "block";
    document.getElementById("submitBtn").style.display = "none";
  }
}

function validateCurrentStep() {
  let valid = true;
  const inputs = document
    .getElementById(`section${currentStep}`)
    .getElementsByTagName("input");

  for (let input of inputs) {
    if (input.required && !input.value) {
      input.classList.add("is-invalid");
      valid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  }

  if (currentStep === 1) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^\d{11}$/;
    const phoneRegex = /^\d{10,11}$/;

    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const phone = document.getElementById("telefone");

    if (!emailRegex.test(email.value)) {
      document.getElementById("emailError").style.display = "block";
      valid = false;
    }

    if (!cpfRegex.test(cpf.value.replace(/\D/g, ""))) {
      cpf.classList.add("is-invalid");
      valid = false;
    }

    if (!phoneRegex.test(phone.value.replace(/\D/g, ""))) {
      phone.classList.add("is-invalid");
      valid = false;
    }
  }

  if (currentStep === 3) {
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    if (senha.value !== confirmarSenha.value) {
      document.getElementById("passwordError").style.display = "block";
      valid = false;
    }
  }

  return valid;
}

function handleRegister(event) {
  event.preventDefault();

  if (validateCurrentStep()) {
    const loadingSpinner = document.querySelector(".loading-spinner");
    loadingSpinner.style.display = "inline-block";

    // Simulate API call
    setTimeout(() => {
      // Here you would normally make an API call to register the user
      window.location.href = "/cadastro-sucesso";
    }, 2000);
  }

  return false;
}

// Mask inputs
document.getElementById("cpf").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);
  if (value.length > 9) {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, "$1.$2.$3-$4");
  } else if (value.length > 6) {
    value = value.replace(/^(\d{3})(\d{3})(\d{3}).*/, "$1.$2.$3");
  } else if (value.length > 3) {
    value = value.replace(/^(\d{3})(\d{3}).*/, "$1.$2");
  }
  e.target.value = value;
});

document.getElementById("telefone").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5}).*/, "($1) $2");
  } else if (value.length > 0) {
    value = value.replace(/^(\d{0,2}).*/, "($1");
  }
  e.target.value = value;
});
