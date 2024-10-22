document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const collapseBtn = document.getElementById("collapseBtn");
  const dateElement = document.getElementById("currentDate");

  // Set current date
  const currentDate = new Date();
  dateElement.textContent = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Toggle sidebar collapse
  collapseBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("hidden-sidebar")) {
      sidebar.classList.remove("hidden-sidebar");
      sidebar.classList.add("expanded-sidebar");
      collapseBtn.textContent = "« Collapse";
    } else {
      sidebar.classList.remove("expanded-sidebar");
      sidebar.classList.add("hidden-sidebar");
      collapseBtn.textContent = "» Expand";
    }
  });
});
