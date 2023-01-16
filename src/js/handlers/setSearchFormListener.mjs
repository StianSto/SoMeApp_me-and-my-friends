/**
 *
 * @param {*} searchForm the search form that will be submitted
 */

export function setSearchFormListener(searchForm) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(searchForm);
    const search = formData.get("search");

    if (search) {
      window.location.replace(`/?search=${search}`);
    }
  });
}
