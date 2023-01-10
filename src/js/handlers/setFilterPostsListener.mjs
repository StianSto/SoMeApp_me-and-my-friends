import { getPosts } from "../api/posts/read.mjs";
import { getProfilePosts } from "../api/profiles/read.mjs";
import { postTemplate } from "../templates/index.mjs";

export async function setFilterPostsListener() {
  const filterPostsContainer = document.querySelector("#filterPosts");
  filterPostsContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    const postContainer = document.querySelector("#posts-wall");
    postContainer.innerHTML = "";

    const form = event.target;
    const formData = new FormData(form);

    const filterByAuthor = formData.get("name");
    formData.delete("name");
    formData.append("_author", true);
    formData.append("_reactions", true);
    formData.append("_comments", true);
    const filterOptions = Object.fromEntries(formData.entries());

    (async () => {
      const msg = document.createElement("p");
      let result;
      try {
        filterByAuthor
          ? (result = await getProfilePosts(filterByAuthor, filterOptions))
          : (result = await getPosts(filterOptions));
        if (result.errors || !result) {
					msg.innerHTML = `We found 0 results matching your filters: <br> ${result.errors[0].message}`;
					postContainer.replaceChildren();
        } else {
					msg.innerText = `We found ${result.length} results matching your filters`;
					postContainer.replaceChildren(...result.map(postTemplate))
        }
      } catch (error) {
        console.log(error);
			} finally {
				console.log(result)
				postContainer.prepend(msg);
      }
    })();
  });
}
