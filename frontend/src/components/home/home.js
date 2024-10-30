AOS.init({
  duration: 1000,
  once: true,
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.querySelector(".navbar").classList.remove("scrolled");
  }
});

// Form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Add form submission logic here
    alert("Mensagem enviada com sucesso!");
  });
