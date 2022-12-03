import { getPost, getPosts } from "../api/posts/read.mjs";
import { getProfilePosts } from "../api/profiles/--read.mjs";
import createFlagString from "./createFlagString.mjs";
import * as templates from "../templates/index.mjs";

export default async function filterPosts() {
  const filterPostsContainer = document.querySelector("#filterPosts");

  let flagstring;
  filterPostsContainer.addEventListener("submit", (event) => {
    const postContainer = document.querySelector("#posts-wall");
    postContainer.innerHTML = "";

    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const filterByAuthor = formData.get("_author");
    formData.set("_author", true);

    const filterOptions = Object.fromEntries(formData.entries());

    console.log(filterOptions);
    flagstring = createFlagString(filterOptions);
    (async function () {
      const result = filterByAuthor
        ? await getProfilePosts(filterByAuthor, flagstring)
        : await getPosts(flagstring);

      console.log(result);
      result.forEach((post) => {
        console.log(post);
        templates.postTemplate(post, postContainer);
      });
    })();
  });
}
