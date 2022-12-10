export function filterByQuery(arr) {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  if (!search) return arr;

  const newArr = arr.filter((post) => {
    const {
      title,
      body,
      author: { name },
    } = post;

    const searchFor = [title, body, name];
    const matches = searchFor.some((value) => {
      if (!value || value.length < 1) return false;
      if (value.toLowerCase().includes(search.toLowerCase())) return true;
    });

    return matches ? post : false;
  });

  return newArr;
}
