// Clear any stored authentication tokens or session data
localStorage.removeItem("auth_token");
sessionStorage.clear();

// Remove any authentication cookies
document.cookie.split(";").forEach(function (c) {
  document.cookie = c
    .replace(/^ +/, "")
    .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
});

// Redirect to login page after a short delay
setTimeout(() => {
  window.location.href = "/index.html";
}, 2000);
