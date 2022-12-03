import { getPost, getPosts } from "../api/posts/read.mjs";
import { getProfilePosts } from "../api/profiles/read.mjs";
import createFlagString from "../functions/createFlagString.mjs";
import * as templates from "../templates/index.mjs";

export default async function setFilterPostsListener() {
  const filterPostsContainer = document.querySelector("#filterPosts");
  filterPostsContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    let flagstring;
    const postContainer = document.querySelector("#posts-wall");
    postContainer.innerHTML = "";

    const form = event.target;
    const formData = new FormData(form);

    const filterByAuthor = formData.get("_author");
    formData.set("_author", true);
    const filterOptions = Object.fromEntries(formData.entries());

    flagstring = createFlagString(filterOptions);
    let result;
    (async function () {
      try {
        result = filterByAuthor
          ? await getProfilePosts(filterByAuthor, flagstring)
          : await getPosts(flagstring);

        if (result.errors) {
          postContainer.innerHTML = `We found 0 results matching your filters: <br> ${result.errors[0].message}`;
        } else {
          postContainer.innerHTML = `We found ${result.length} results matching your filters`;
          result.forEach((post) => {
            templates.postTemplate(post, postContainer);
          });
        }
      } catch (error) {
        console.log(error);
        postContainer.innerText = `we are sorry, something went wrong: ${error}`;
      }
    })();
  });
}
