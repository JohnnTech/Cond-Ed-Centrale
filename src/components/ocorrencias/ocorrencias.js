document.addEventListener("DOMContentLoaded", function () {
  // Filter buttons functionality
  const filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      // Here you would typically filter the occurrences based on the selected status
      const filter = this.getAttribute("data-filter");
      console.log("Filter selected:", filter);
    });
  });
});
