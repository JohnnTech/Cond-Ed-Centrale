document.addEventListener("DOMContentLoaded", function () {
  // Initialize Quill editor
  var quill = new Quill("#editor-container", {
    theme: "snow",
    modules: {
      toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        [{ color: [] }, { background: [] }],
        ["clean"],
      ],
    },
  });

  // Handle notice actions
  document.querySelectorAll(".notice-actions button").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const action = e.currentTarget.querySelector("i").className;
      if (action.includes("edit")) {
        // Handle edit
        $("#newNoticeModal").modal("show");
      } else if (action.includes("trash")) {
        // Handle delete
        if (confirm("Tem certeza que deseja excluir este aviso?")) {
          // Delete logic
        }
      } else if (action.includes("share")) {
        // Handle share
        // Share logic
      }
    });
  });

  // Handle search
  const searchInput = document.querySelector(
    'input[placeholder="Pesquisar avisos..."]'
  );
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Implement search logic
  });

  // Handle file uploads
  const fileInput = document.querySelector('input[type="file"]');
  fileInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    // Handle file preview and validation
  });

  // Form submission
  document
    .querySelector("#newNoticeModal .btn-primary")
    .addEventListener("click", () => {
      const form = document.getElementById("newNoticeForm");
      const content = quill.root.innerHTML;

      // Validate form
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Collect form data
      const formData = new FormData(form);
      formData.append("content", content);

      // Submit logic here
      console.log("Form submitted:", Object.fromEntries(formData));
      $("#newNoticeModal").modal("hide");
    });

  // Priority badge color update
  document
    .querySelector('select[name="priority"]')
    .addEventListener("change", (e) => {
      const priority = e.target.value;
      // Update priority badge color
    });

  // Specific units toggle
  document.getElementById("specific").addEventListener("change", (e) => {
    // Toggle specific units input field
  });

  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
