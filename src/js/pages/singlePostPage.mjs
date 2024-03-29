import * as postTemplates from "../templates/index.mjs";
import * as posts from "../api/posts/index.mjs";
import toggleSideBar from "../enablers/sidebar.mjs";

const flags = {
  _author: true,
  _comments: true,
  _reactions: true,
};

export async function singlePostPage() {
  const mainContent = document.querySelector(".main-content");

  const params = new URLSearchParams(window.location.search);
  const postID = params.get("id");

  const post = await posts.getPost(postID, flags);
  postTemplates.viewSinglePostTemplate(post, mainContent);

  toggleSideBar();
}
