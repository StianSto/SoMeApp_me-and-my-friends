import toggleSideBar from "../components/sidebar.mjs";
import toggleFilterPostsVisibility from "../components/filterPosts.mjs";
import * as handlers from "../handlers/index.mjs";
import * as posts from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";
import { filterByQuery } from "../functions/filterByQuery.mjs";

export async function homePage() {
  const formCreatePost = document.getElementById("form-create-post");
  const postContainer = document.getElementById("posts-wall");
  const loadPosts = await posts.getPosts();
  const filteredPost = filterByQuery(loadPosts);

  filteredPost.forEach((post) => {
    postContainer.append(templates.postTemplate(post));
    console.log(post);
  });

  // enables bootstrap popovers
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  popoverTriggerList.forEach(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );

  toggleSideBar();
  toggleFilterPostsVisibility();
  handlers.setCreatePostFormListener();
  handlers.setFilterPostsListener();
  templates.createPostTemplate();
}
