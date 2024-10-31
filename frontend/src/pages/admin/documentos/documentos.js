document.addEventListener("DOMContentLoaded", function () {
  // Drag and drop functionality
  const uploadZone = document.querySelector(".upload-zone");
  const fileInput = document.getElementById("fileInput");

  uploadZone.addEventListener("click", () => fileInput.click());

  uploadZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = "#3498db";
    uploadZone.style.background = "#f8f9fa";
  });

  uploadZone.addEventListener("dragleave", () => {
    uploadZone.style.borderColor = "#ccc";
    uploadZone.style.background = "white";
  });

  uploadZone.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = "#ccc";
    uploadZone.style.background = "white";

    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
  });

  function handleFiles(files) {
    Array.from(files).forEach((file) => {
      if (file.type === "application/pdf") {
        $("#uploadModal").modal("show");
        window.currentFile = file;
      } else {
        alert("Por favor envie apenas arquivos PDF");
      }
    });
  }

  function handleFinancialDocument(file) {
    const docType = document.getElementById("docType").value;
    const docYear = document.getElementById("docYear").value;
    const docMonth = document.getElementById("docMonth").value;

    if (!docType || !docYear || !docMonth) {
      alert("Por favor preencha todos os campos de classificação do documento");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", docType);
    formData.append("year", docYear);
    formData.append("month", docMonth);

    console.log("Uploading financial document:", {
      file: file.name,
      type: docType,
      year: docYear,
      month: docMonth,
    });
  }

  document
    .querySelector("#uploadModal .btn-primary")
    .addEventListener("click", function () {
      if (window.currentFile) {
        handleFinancialDocument(window.currentFile);
        $("#uploadModal").modal("hide");
      }
    });

  // Search functionality
  const searchInput = document.querySelector(".search-box input");
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Implement search logic here
  });

  // Document card actions
  const actionButtons = document.querySelectorAll(".doc-actions .btn");
  actionButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      // Handle button actions
    });
  });
});
