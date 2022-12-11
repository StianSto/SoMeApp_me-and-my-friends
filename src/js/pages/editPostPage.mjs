import toggleSideBar from "../enablers/sidebar.mjs";

// edit page
import * as posts from "../api/posts/index.mjs";
import { setEditPostListener } from "../handlers/setEditPostListener.mjs";
import { setDeletePostListener } from "../handlers/setDeletePostListener.mjs";

export async function editPostPage() {
  const formEditPost = document.querySelector("#formEditPost");
  const editTitle = formEditPost.querySelector("#editTitle");
  const editBody = formEditPost.querySelector("#editBody");
  const editMedia = formEditPost.querySelector("#editMedia");
  const editTags = formEditPost.querySelector("#editTags");

  const params = new URLSearchParams(window.location.search);
  const postID = params.get("id");

  const flags = {
    _author: true,
    _comments: true,
    _reactions: false,
  };

  const post = await posts.getPost(postID, flags);

  (() => {
    editTitle.value = post.title;
    editBody.value = post.body;
    editMedia.value = post.media;
    post.tags.forEach((tag, index) => {
      if (index > 0) editTags.value += ", ";
      editTags.value += tag;
    });
  })();

  toggleSideBar();
  setEditPostListener();
  setDeletePostListener(postID);
}
