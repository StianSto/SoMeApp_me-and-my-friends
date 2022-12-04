import * as posts from "../api/posts/index.mjs";

/**
 * deletes a post.
 * @param {string | number} postID id of post that will be deleted
 */
export function setDeletePostListener(postID) {
  const delBtn = document.querySelector("#deletePost");

  delBtn.addEventListener("click", () => posts.removePost(postID));
}
