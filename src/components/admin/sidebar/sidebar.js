// sidebar.js
function loadNavbar() {
  fetch("/src/components/admin/sidebar/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;
    });
}

// Carrega a sidebar quando a página for carregada
window.addEventListener("load", loadNavbar);
