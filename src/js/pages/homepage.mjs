import toggleSideBar from "../enablers/sidebar.mjs";
import toggleFilterPostsVisibility from "../enablers/filterPosts.mjs";
import * as handlers from "../handlers/index.mjs";
import * as posts from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";
import { filterByQuery } from "../functions/filterByQuery.mjs";
import { enableBsPopovers } from "../enablers/enableBsPopovers.mjs";

export async function homePage() {
  const formCreatePost = document.getElementById("form-create-post");
  const postContainer = document.getElementById("posts-wall");
  const loadPosts = await posts.getPosts();
  const filteredPost = filterByQuery(loadPosts);

  filteredPost.forEach((post) =>
    postContainer.append(templates.postTemplate(post))
  );

  enableBsPopovers();
  toggleSideBar();
  toggleFilterPostsVisibility();
  handlers.setCreatePostFormListener();
  handlers.setFilterPostsListener();
  templates.createPostTemplate();
}
