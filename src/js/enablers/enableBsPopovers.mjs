/**
 * enables all bootstrap popovers on page
 */

export function enableBsPopovers() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  popoverTriggerList.forEach(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
}
