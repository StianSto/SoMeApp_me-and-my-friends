export function filterByQuery(arr) {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");

  // if (!search) return arr;

  console.log(search);
  const newArr = arr.filter(({ title, body, id }) => {
    if (title && title.includes(search)) return true;
    if (body && body.includes(search)) return true;
  });
  console.log(newArr);
  return newArr;
  // console.log(error);
  // return arr;
}
