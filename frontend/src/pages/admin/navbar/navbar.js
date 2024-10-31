// navbar.js
function loadNavbar() {
  fetch("/frontend/src/components/admin/navbar/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
}

// Carrega a navbar quando a página for carregada
window.addEventListener("load", loadNavbar);
