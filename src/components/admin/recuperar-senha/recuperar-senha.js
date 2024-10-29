let currentStep = 1;
let resetToken = "";

function showAlert(type, message) {
  const alert = document.getElementById(`${type}Alert`);
  alert.textContent = message;
  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}

function showStep(step) {
  document.querySelector(".step-email-form").classList.remove("active");
  document.querySelector(".step-code-form").classList.remove("active");
  document.querySelector(".step-password-form").classList.remove("active");

  if (step === 1) {
    document.querySelector(".step-email-form").classList.add("active");
  } else if (step === 2) {
    document.querySelector(".step-code-form").classList.add("active");
  } else if (step === 3) {
    document.querySelector(".step-password-form").classList.add("active");
  }
}

async function sendResetCode() {
  const email = document.getElementById("adminEmail").value;

  try {
    const response = await fetch("/api/admin/reset-password/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      showAlert("success", "Código enviado com sucesso! Verifique seu email.");
      currentStep = 2;
      showStep(currentStep);
    } else {
      showAlert("error", "Email não encontrado ou inválido.");
    }
  } catch (error) {
    showAlert("error", "Erro ao enviar o código. Tente novamente.");
  }
}

async function verifyCode() {
  const code = document.getElementById("verificationCode").value;
  const email = document.getElementById("adminEmail").value;

  try {
    const response = await fetch("/api/admin/reset-password/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    });

    if (response.ok) {
      const data = await response.json();
      resetToken = data.resetToken;
      currentStep = 3;
      showStep(currentStep);
    } else {
      showAlert("error", "Código inválido ou expirado.");
    }
  } catch (error) {
    showAlert("error", "Erro ao verificar o código. Tente novamente.");
  }
}

async function resetPassword() {
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword !== confirmPassword) {
    showAlert("error", "As senhas não coincidem.");
    return;
  }

  try {
    const response = await fetch("/api/admin/reset-password/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resetToken,
        newPassword,
      }),
    });

    if (response.ok) {
      showAlert("success", "Senha redefinida com sucesso!");
      setTimeout(() => {
        window.location.href = "/admin/login";
      }, 2000);
    } else {
      showAlert("error", "Erro ao redefinir a senha.");
    }
  } catch (error) {
    showAlert("error", "Erro ao redefinir a senha. Tente novamente.");
  }
}

// Password strength validation
document.getElementById("newPassword").addEventListener("input", function (e) {
  const password = e.target.value;
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    e.target.setCustomValidity("A senha deve ter pelo menos 8 caracteres");
  } else if (!hasUpperCase || !hasLowerCase) {
    e.target.setCustomValidity(
      "A senha deve conter letras maiúsculas e minúsculas"
    );
  } else if (!hasNumbers) {
    e.target.setCustomValidity("A senha deve conter números");
  } else if (!hasSpecialChars) {
    e.target.setCustomValidity("A senha deve conter caracteres especiais");
  } else {
    e.target.setCustomValidity("");
  }
});
