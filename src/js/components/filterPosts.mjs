export default function toggleFilterPostsVisibility() {
  const filterContainer = document.getElementById("filterPosts");
  const filterPostsBtn = document.getElementById("filterPostsBtn");
  const filterPostsBtnHide = document.querySelectorAll(
    "[data-filter-btn-hide]"
  );

  filterPostsBtn.addEventListener("click", () =>
    filterContainer.classList.toggle("show")
  );
  filterPostsBtnHide.forEach((btn) => {
    btn.addEventListener("click", () =>
      filterContainer.classList.remove("show")
    );
  });
}
