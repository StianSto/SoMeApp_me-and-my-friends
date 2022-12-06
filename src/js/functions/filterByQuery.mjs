export function filterByQuery(arr) {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  if (!search) return arr;

  const newArr = arr.filter(({ title, body, id }) => {
    if (title && title.includes(search)) return true;
    if (body && body.includes(search)) return true;
  });

  return newArr;
}
