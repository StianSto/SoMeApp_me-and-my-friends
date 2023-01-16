/**
 * checks url for any search queries. returns filtered posts if the pst title, body or author mathes or contains the wuery. if no wuery exist this function returns all posts before filtering.
 * @param {array} posts array of posts
 * @returns new filtered array of posts
 */

export function filterByQuery(posts) {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  if (!search) return posts;

  const newArr = posts.filter((post) => {
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
