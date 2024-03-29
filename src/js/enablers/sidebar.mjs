/**
 * enables sidebar on page. requires ".main-content", "#sidebar", "#sidebar-btn"
 */

export default function toggleSideBar() {
  const mainContent = document.querySelector(".main-content");
  const sideBar = document.querySelector("#sidebar");
  const sideBarBtn = document.querySelector("#sidebar-btn");

  sideBarBtn.addEventListener("click", () => {
    sideBar.classList.toggle("show-sidebar");
    mainContent.classList.toggle("show-sidebar");
  });
}
